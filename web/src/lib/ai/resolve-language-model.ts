import { createGoogleGenerativeAI } from "@ai-sdk/google";
import {
  defaultSettingsMiddleware,
  type LanguageModel,
  wrapLanguageModel,
} from "ai";

export type GoogleAiConfig = {
  /** Google AI Studio の API キー（なければ AI Gateway を使う） */
  apiKey: string | undefined;
  /**
   * Gemini API のモデル名。カンマ区切りで複数指定すると、
   * 先頭から順に試し、上限・混雑などで失敗したら次のモデルを使う。
   */
  model: string;
  /** テストで差し替えるための fetch（通常は省略） */
  fetch?: typeof fetch;
  /** テストで短くするための待ち時間（通常は省略） */
  timing?: Partial<FallbackTiming>;
};

/** モデル切り替えの待ち時間 */
export type FallbackTiming = {
  /** 1つのモデルが応答を返し始めるまで待つ時間。過ぎたら次のモデルへ */
  responseTimeoutMs: number;
  /** すべてのモデルが混雑していたとき、もう一周する前に待つ時間（周ごとに増やす） */
  roundWaitMs: number;
  /** 何周まで試すか */
  maxRounds: number;
  /** この時間を過ぎたら新しく試さない（画面を長く待たせない） */
  deadlineMs: number;
  /** 混雑・無応答だったモデルを、この時間だけ後回しにする */
  cooldownMs: number;
  /** 応答がこの時間内に返らなければ、次のモデルにも並行して問い合わせる */
  hedgeDelayMs: number;
};

const DEFAULT_TIMING: FallbackTiming = {
  responseTimeoutMs: 10_000,
  roundWaitMs: 1_500,
  maxRounds: 3,
  deadlineMs: 60_000,
  cooldownMs: 180_000,
  hedgeDelayMs: 4_000,
};

/**
 * 混雑・無応答だったモデルと、後回しにする期限（サーバーのインスタンス内で共有）。
 * 次の人が同じ混雑したモデルを待たされないようにする。
 */
const cooldownUntil = new Map<string, number>();

/** テスト用：後回しの記録を消す */
export function resetGeminiCooldowns(): void {
  cooldownUntil.clear();
}

/** 後回し中のモデルを末尾に回した順番（元の順番は保つ） */
export function orderByCooldown(
  models: readonly string[],
  until: ReadonlyMap<string, number>,
  now: number
): string[] {
  const cooling = (model: string) => (until.get(model) ?? 0) > now;
  return [
    ...models.filter((model) => !cooling(model)),
    ...models.filter(cooling),
  ];
}

/**
 * Gemini に送る既定の設定。
 * 思考（推論）を既定のままにすると応答に数分かかり、
 * ページ表示がタイムアウトするため low にする（gemini-3.8-flash は minimal 非対応）。
 */
const GEMINI_DEFAULT_PROVIDER_OPTIONS = {
  google: { thinkingConfig: { thinkingLevel: "low" } },
} as const;

/**
 * 次のモデルに切り替える HTTP ステータス。
 * 400: そのモデルが未対応の設定 / 404: モデルが使えない /
 * 429: 無料枠の上限 / 500・503: 混雑・障害
 */
const FALLBACK_STATUSES = new Set([400, 404, 429, 500, 503]);

/**
 * モデルに合わせて思考（推論）の設定を軽くした送信本文を返す。変えないときは null。
 * - Flash-Lite：最小（minimal）にして応答を速くする
 * - Gemini 2.5：thinkingLevel 非対応のため、思考の量（thinkingBudget）を0にする
 * - Gemma：思考の設定に非対応のため外す
 * それ以外（3.x Flash など）は既定の low のまま。
 */
export function tuneThinkingForModel(
  body: string,
  model: string
): string | null {
  let parsed: { generationConfig?: { thinkingConfig?: unknown } };
  try {
    parsed = JSON.parse(body);
  } catch {
    return null;
  }
  const config = parsed.generationConfig;
  if (!config?.thinkingConfig) return null;
  if (model.startsWith("gemma")) {
    delete config.thinkingConfig;
  } else if (model.startsWith("gemini-2.5")) {
    config.thinkingConfig = { thinkingBudget: 0 };
  } else if (model.includes("flash-lite")) {
    config.thinkingConfig = { thinkingLevel: "minimal" };
  } else {
    return null;
  }
  return JSON.stringify(parsed);
}

/** "a, b,,c" → ["a", "b", "c"] */
export function parseModelList(value: string): string[] {
  return value
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name.length > 0);
}

/** Gemini API の URL のモデル名部分（/models/<name>:method）を差し替える */
export function replaceGeminiModelInUrl(url: string, model: string): string {
  return url.replace(/\/models\/[^/:?]+:/, `/models/${model}:`);
}

/** 混雑・障害など、少し待てば通る可能性がある失敗 */
const TRANSIENT_STATUSES = new Set([500, 503]);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 応答（ヘッダー）が返るまでだけ時間制限をかけて送る。
 * 応答が返り始めたら制限を外すので、ストリーミングの本文は最後まで読める。
 * 時間切れなら "timeout" を返す。
 */
async function fetchWithResponseTimeout(
  baseFetch: typeof fetch,
  url: string,
  init: RequestInit | undefined,
  timeoutMs: number
): Promise<Response | "timeout"> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const signal = init?.signal
    ? AbortSignal.any([init.signal, controller.signal])
    : controller.signal;
  try {
    return await baseFetch(url, { ...init, signal });
  } catch (error) {
    if (controller.signal.aborted && !init?.signal?.aborted) return "timeout";
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

/** 同時に問い合わせるモデルの数の上限（無料枠を使いすぎない） */
const MAX_PARALLEL = 2;

/**
 * 上から順にモデルを試す fetch。
 * - 上限・混雑・未対応・応答なしなら、URL のモデル名だけ差し替えてすぐ次のモデルへ
 * - 応答が遅いモデルがあれば、hedgeDelayMs 後に次のモデルにも並行して問い合わせ、
 *   先に返ってきた方を使う（残りは中断する）
 * - 全部だめなら少し待ってもう一周する
 * 通常の応答・ストリーミングの両方で、応答本文を読む前に判定する。
 */
function createModelFallbackFetch(
  models: readonly string[],
  baseFetch: typeof fetch,
  timing: FallbackTiming
): typeof fetch {
  return async (input, init) => {
    const url = input instanceof Request ? input.url : String(input);
    const startedAt = Date.now();
    const pastDeadline = () => Date.now() - startedAt > timing.deadlineMs;
    // 上限・未対応のモデルは、次の周では試さない
    const unusable = new Set<string>();
    let lastFailure: Response | undefined;
    const keepFailure = async (response: Response) => {
      await lastFailure?.body?.cancel();
      lastFailure = response;
    };

    /** 1つのモデルに送る（思考を軽くした設定が未対応なら元の設定で送り直す） */
    const attempt = async (model: string, signal: AbortSignal) => {
      const send = (body: RequestInit["body"]) =>
        fetchWithResponseTimeout(
          baseFetch,
          replaceGeminiModelInUrl(url, model),
          {
            ...init,
            body,
            signal: init?.signal
              ? AbortSignal.any([init.signal, signal])
              : signal,
          },
          timing.responseTimeoutMs
        );
      const originalBody = init?.body;
      const tunedBody =
        typeof originalBody === "string"
          ? tuneThinkingForModel(originalBody, model)
          : null;
      const response = await send(tunedBody ?? originalBody);
      if (tunedBody && response !== "timeout" && response.status === 400) {
        await response.body?.cancel();
        console.warn(`Gemini model ${model} rejected tuned thinking; retrying`);
        return send(originalBody);
      }
      return response;
    };

    /** queue の順に、遅ければ並行して問い合わせ、最初に成功した応答を返す */
    const race = (queue: readonly string[]) =>
      new Promise<Response | null>((resolve, reject) => {
        const inFlight = new Map<string, AbortController>();
        let next = 0;
        let done = false;
        let hedgeTimer: ReturnType<typeof setTimeout> | undefined;
        const finish = (response: Response | null) => {
          if (done) return;
          done = true;
          clearTimeout(hedgeTimer);
          for (const controller of inFlight.values()) controller.abort();
          resolve(response);
        };
        const launch = () => {
          if (done) return;
          if (next >= queue.length || pastDeadline()) {
            if (inFlight.size === 0) finish(null);
            return;
          }
          const model = queue[next++];
          const controller = new AbortController();
          inFlight.set(model, controller);
          clearTimeout(hedgeTimer);
          hedgeTimer = setTimeout(() => {
            if (inFlight.size < MAX_PARALLEL) launch();
          }, timing.hedgeDelayMs);
          attempt(model, controller.signal).then(
            async (response) => {
              inFlight.delete(model);
              if (done) {
                if (response !== "timeout") await response.body?.cancel();
                return;
              }
              if (response === "timeout") {
                cooldownUntil.set(model, Date.now() + timing.cooldownMs);
                console.warn(`Gemini model ${model} timed out; trying next`);
              } else if (!FALLBACK_STATUSES.has(response.status)) {
                cooldownUntil.delete(model);
                finish(response);
                return;
              } else {
                if (TRANSIENT_STATUSES.has(response.status)) {
                  cooldownUntil.set(model, Date.now() + timing.cooldownMs);
                } else {
                  unusable.add(model);
                }
                console.warn(
                  `Gemini model ${model} failed with ${response.status}; trying next`
                );
                await keepFailure(response);
              }
              launch();
            },
            (error: unknown) => {
              inFlight.delete(model);
              if (done) return;
              if (init?.signal?.aborted) {
                done = true;
                clearTimeout(hedgeTimer);
                for (const other of inFlight.values()) other.abort();
                reject(error);
                return;
              }
              cooldownUntil.set(model, Date.now() + timing.cooldownMs);
              console.warn(`Gemini model ${model} request failed; trying next`);
              launch();
            }
          );
        };
        launch();
      });

    for (let round = 0; round < timing.maxRounds; round++) {
      if (round > 0) await sleep(timing.roundWaitMs * round);
      const queue = orderByCooldown(models, cooldownUntil, Date.now()).filter(
        (model) => !unusable.has(model)
      );
      const winner = await race(queue);
      if (winner) {
        await lastFailure?.body?.cancel();
        return winner;
      }
      if (unusable.size === models.length || pastDeadline()) break;
    }

    return (
      lastFailure ??
      new Response(
        JSON.stringify({
          error: {
            code: 503,
            message: "All Gemini models timed out",
            status: "UNAVAILABLE",
          },
        }),
        { status: 503, headers: { "content-type": "application/json" } }
      )
    );
  };
}

/**
 * 使うAIモデルを決める。
 * Google AI Studio のキーがあれば Gemini API（無料枠）を直接使い、
 * なければ渡されたモデル（AI Gateway 経由）をそのまま使う。
 */
export function resolveLanguageModel(
  gatewayModel: LanguageModel,
  config: GoogleAiConfig
): LanguageModel {
  const models = parseModelList(config.model);
  if (!config.apiKey || models.length === 0) return gatewayModel;
  return wrapLanguageModel({
    model: createGoogleGenerativeAI({
      apiKey: config.apiKey,
      fetch: createModelFallbackFetch(models, config.fetch ?? fetch, {
        ...DEFAULT_TIMING,
        ...config.timing,
      }),
    })(models[0]),
    middleware: defaultSettingsMiddleware({
      settings: { providerOptions: GEMINI_DEFAULT_PROVIDER_OPTIONS },
    }),
  });
}
