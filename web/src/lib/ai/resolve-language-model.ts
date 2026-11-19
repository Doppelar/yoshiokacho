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
};

const DEFAULT_TIMING: FallbackTiming = {
  responseTimeoutMs: 20_000,
  roundWaitMs: 1_500,
  maxRounds: 3,
  deadlineMs: 60_000,
};

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

/**
 * 上から順にモデルを試し、上限・混雑・未対応・応答なしなら URL のモデル名だけ差し替えて
 * 次のモデルで送り直す fetch。全部だめなら少し待ってもう一周する。
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
    // 上限・未対応のモデルは、次の周では試さない
    const unusable = new Set<string>();
    let lastFailure: Response | undefined;

    for (let round = 0; round < timing.maxRounds; round++) {
      if (round > 0) await sleep(timing.roundWaitMs * round);
      for (const model of models) {
        if (unusable.has(model)) continue;
        if (Date.now() - startedAt > timing.deadlineMs) break;
        const response = await fetchWithResponseTimeout(
          baseFetch,
          replaceGeminiModelInUrl(url, model),
          init,
          timing.responseTimeoutMs
        );
        if (response === "timeout") {
          console.warn(`Gemini model ${model} timed out; trying next`);
          continue;
        }
        if (!FALLBACK_STATUSES.has(response.status)) {
          await lastFailure?.body?.cancel();
          return response;
        }
        if (!TRANSIENT_STATUSES.has(response.status)) unusable.add(model);
        console.warn(
          `Gemini model ${model} failed with ${response.status}; trying next`
        );
        await lastFailure?.body?.cancel();
        lastFailure = response;
      }
      if (unusable.size === models.length) break;
      if (Date.now() - startedAt > timing.deadlineMs) break;
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
