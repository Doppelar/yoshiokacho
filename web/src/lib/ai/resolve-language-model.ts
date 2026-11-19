import { createGoogleGenerativeAI } from "@ai-sdk/google";
import {
  defaultSettingsMiddleware,
  type LanguageModel,
  wrapLanguageModel,
} from "ai";

export type GoogleAiConfig = {
  /** Google AI Studio の API キー（なければ AI Gateway を使う） */
  apiKey: string | undefined;
  /** Gemini API のモデル名（例: gemini-3.8-flash） */
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
 * 使うAIモデルを決める。
 * Google AI Studio のキーがあれば Gemini API（無料枠）を直接使い、
 * なければ渡されたモデル（AI Gateway 経由）をそのまま使う。
 */
export function resolveLanguageModel(
  gatewayModel: LanguageModel,
  config: GoogleAiConfig
): LanguageModel {
  if (!config.apiKey) return gatewayModel;
  return wrapLanguageModel({
    model: createGoogleGenerativeAI({
      apiKey: config.apiKey,
      fetch: config.fetch,
    })(config.model),
    middleware: defaultSettingsMiddleware({
      settings: { providerOptions: GEMINI_DEFAULT_PROVIDER_OPTIONS },
    }),
  });
}
