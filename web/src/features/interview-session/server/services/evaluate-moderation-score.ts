import "server-only";

import { buildModerationPrompt } from "@mirai-gikai/shared/moderation/build-prompt";
import { moderationResultSchema } from "@mirai-gikai/shared/moderation/schemas";
import {
  determineModerationStatus,
  type ModerationStatus,
} from "@mirai-gikai/shared/moderation/status";
import {
  generateObject,
  type LanguageModel,
  type LanguageModelUsage,
} from "ai";
import {
  extractGatewayCost,
  getModelName,
} from "@/features/chat/shared/utils/cost-utils";
import { DEFAULT_MODERATION_MODEL } from "@/lib/ai/models";
import { resolveLanguageModel } from "@/lib/ai/resolve-language-model";
import { env } from "@/lib/env";

/** テスト時にモック注入するための外部依存 */
export type ModerationDeps = {
  model?: LanguageModel;
};

type ModerationInput = {
  summary: string | null;
  opinions: Array<{ title: string; content: string }> | null;
  roleDescription: string | null;
  messages: Array<{ role: string; content: string }>;
};

type ModerationOutput = {
  score: number;
  status: ModerationStatus;
  reasoning: string;
  /** 利用コストの記録用 */
  model: string;
  usage: LanguageModelUsage;
  costUsd: number | undefined;
};

/**
 * レポート内容のモデレーションスコアを評価する
 */
export async function evaluateModerationScore(
  input: ModerationInput,
  deps?: ModerationDeps
): Promise<ModerationOutput> {
  const { system, user } = buildModerationPrompt(input);
  const model =
    deps?.model ?? resolveLanguageModel(DEFAULT_MODERATION_MODEL, env.googleAi);

  const { object, usage, providerMetadata } = await generateObject({
    model,
    schema: moderationResultSchema,
    system,
    messages: [{ role: "user", content: user }],
  });

  const status = determineModerationStatus(object.score);

  console.log(`Moderation result: score=${object.score}, status=${status}`);

  return {
    score: object.score,
    status,
    reasoning: object.reasoning,
    model: getModelName(model),
    usage,
    costUsd: extractGatewayCost(providerMetadata),
  };
}
