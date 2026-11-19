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

/**
 * 先頭のモデルで失敗したら、URL のモデル名だけ差し替えて次のモデルで送り直す fetch。
 * 通常の応答・ストリーミングの両方で、応答本文を読む前に判定する。
 */
function createModelFallbackFetch(
  models: readonly string[],
  baseFetch: typeof fetch
): typeof fetch {
  return async (input, init) => {
    const url = input instanceof Request ? input.url : String(input);
    let response: Response | undefined;
    for (const [index, model] of models.entries()) {
      response = await baseFetch(replaceGeminiModelInUrl(url, model), init);
      const isLast = index === models.length - 1;
      if (isLast || !FALLBACK_STATUSES.has(response.status)) return response;
      console.warn(
        `Gemini model ${model} failed with ${response.status}; trying ${models[index + 1]}`
      );
      await response.body?.cancel();
    }
    // models は空にならない（resolveLanguageModel で保証）
    return response as Response;
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
      fetch: createModelFallbackFetch(models, config.fetch ?? fetch),
    })(models[0]),
    middleware: defaultSettingsMiddleware({
      settings: { providerOptions: GEMINI_DEFAULT_PROVIDER_OPTIONS },
    }),
  });
}
