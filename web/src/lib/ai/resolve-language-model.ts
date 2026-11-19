import { createGoogleGenerativeAI } from "@ai-sdk/google";
import type { LanguageModel } from "ai";

export type GoogleAiConfig = {
  /** Google AI Studio の API キー（なければ AI Gateway を使う） */
  apiKey: string | undefined;
  /** Gemini API のモデル名（例: gemini-3.8-flash） */
  model: string;
};

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
  return createGoogleGenerativeAI({ apiKey: config.apiKey })(config.model);
}
