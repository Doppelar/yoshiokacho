import { openai } from "@ai-sdk/openai";
import type { Database } from "@mirai-gikai/supabase";
import {
  convertToModelMessages,
  streamText,
  type LanguageModel,
  type UIMessage,
} from "ai";
import type { DifficultyLevelEnum } from "@/features/bill-difficulty/shared/types";
import type { BillWithContent } from "@/features/bills/shared/types";
import {
  findBillContentByDifficulty,
  findPublishedBillById,
} from "@/features/bills/server/repositories/bill-repository";
import { ChatError, ChatErrorCode } from "@/features/chat/shared/types/errors";
import { pickChatKnowledgeSource } from "@/features/chat/shared/utils/pick-chat-knowledge-source";
import { env } from "@/lib/env";
import {
  type CompiledPrompt,
  createPromptProvider,
  type PromptProvider,
} from "@/lib/prompt";
import { AI_MODELS } from "@/lib/ai/models";
import { isWithinDailyCostLimit, recordChatUsage } from "./cost-tracker";
import {
  checkSystemDailyCostLimit,
  checkSystemMonthlyCostLimit,
} from "./system-cost-guard";

export type ChatMessageMetadata = {
  billContext?: BillWithContent;
  pageContext?: {
    type: "home" | "bill";
    bills?: Array<{ id: string; name: string; summary?: string }>;
  };
  difficultyLevel: DifficultyLevelEnum;
  sessionId: string;
};

type ChatRequestParams = {
  messages: UIMessage<ChatMessageMetadata>[];
  userId: string;
  deps?: HandleChatDeps;
};

/** テスト時にモック注入するための外部依存 */
export type HandleChatDeps = {
  promptProvider?: PromptProvider;
  model?: LanguageModel;
};

type ChatUsageMetadata =
  Database["public"]["Tables"]["chat_usage_events"]["Insert"]["metadata"];

/**
 * チャットリクエストを処理してストリーミングレスポンスを返す
 */
export async function handleChatRequest({
  messages,
  userId,
  deps,
}: ChatRequestParams) {
  const promptProvider = deps?.promptProvider ?? createPromptProvider();

  // Extract context from messages
  const context = extractChatContext(messages);

  try {
    // Check per-user cost limit before processing
    const isWithinLimit = await isWithinDailyCostLimit(
      userId,
      env.chat.dailyUserCostLimitUsd
    );
    if (!isWithinLimit) {
      throw new ChatError(ChatErrorCode.DAILY_COST_LIMIT_REACHED);
    }

    // Check system-wide cost limits before processing
    await checkSystemDailyCostLimit();
    await checkSystemMonthlyCostLimit();
  } catch (error) {
    if (error instanceof ChatError) {
      throw error;
    }
    // コストチェックに失敗した場合はログに記録して続行
    console.error("Cost limit check error:", error);
  }

  // Build prompt configuration
  const { promptName, promptResult } = await buildPrompt(
    context,
    promptProvider
  );
  // Model configuration
  const model = deps?.model ?? AI_MODELS.gpt5_4_mini_fast;
  const modelName =
    typeof model === "string" ? model : (model.modelId ?? "unknown");

  // Build tools configuration
  const tools = buildTools();

  // Generate streaming response
  try {
    const result = streamText({
      model,
      system: promptResult.content,
      messages: await convertToModelMessages(messages),
      tools,
      onFinish: async (event) => {
        try {
          const providerCost = extractGatewayCost(event);
          await recordChatUsage({
            userId,
            sessionId: context.sessionId || undefined,
            promptName,
            model: modelName,
            usage: event.totalUsage,
            costUsd: providerCost,
            metadata: buildUsageMetadata(context, event),
          });
        } catch (usageError) {
          console.error("Failed to record chat usage:", usageError);
        }
      },
      experimental_telemetry: {
        isEnabled: true,
        functionId: promptName,
        metadata: buildTelemetryMetadata(context, promptResult, userId),
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("LLM generation error:", error);
    throw new ChatError(
      ChatErrorCode.LLM_GENERATION_FAILED,
      error instanceof Error ? error.message : String(error)
    );
  }
}

/**
 * メッセージから最初のメタデータを抽出してコンテキストを作成
 */
function extractChatContext(
  messages: UIMessage<ChatMessageMetadata>[]
): ChatMessageMetadata {
  const metadata = messages[0]?.metadata;

  return {
    billContext: metadata?.billContext,
    pageContext: metadata?.pageContext,
    difficultyLevel: (metadata?.difficultyLevel ||
      "normal") as DifficultyLevelEnum,
    sessionId: metadata?.sessionId || "",
  };
}

/**
 * コンテキストに基づいてプロンプトを組み立てる
 */
async function buildPrompt(
  context: ChatMessageMetadata,
  promptProvider: PromptProvider
) {
  // Determine prompt name
  const promptName =
    context.pageContext?.type === "home"
      ? "top-chat-system"
      : `bill-chat-system-${context.difficultyLevel}`;

  // Prepare prompt variables
  // bill 関連の変数はクライアント側のメタデータを信頼せず、必ずサーバー側で再取得した
  // 公開済みデータのみから組み立てる（管理画面トグルの強制と非公開ナレッジ流出防止）。
  // 公開済み bill が引けない場合は bill コンテキスト自体を空にする。
  let variables: Record<string, string>;
  if (context.pageContext?.type === "home") {
    variables = {
      billSummary: JSON.stringify(context.pageContext.bills ?? ""),
    };
  } else {
    const billId = context.billContext?.id;
    const [serverBill, serverContent] = billId
      ? await Promise.all([
          findPublishedBillById(billId),
          findBillContentByDifficulty(billId, context.difficultyLevel),
        ])
      : [null, null];
    variables = {
      billName: serverBill?.name ?? "",
      billTitle: serverContent?.title ?? "",
      billSummary: serverContent?.summary ?? "",
      billContent: serverContent?.content ?? "",
      knowledgeSource: pickChatKnowledgeSource(serverBill),
    };
  }

  // Fetch prompt from Langfuse
  try {
    const promptResult = await promptProvider.getPrompt(promptName, variables);
    return { promptName, promptResult };
  } catch (error) {
    console.error("Prompt fetch error:", error);
    throw new ChatError(
      ChatErrorCode.PROMPT_FETCH_FAILED,
      error instanceof Error ? error.message : String(error)
    );
  }
}

/**
 * テレメトリメタデータを構築
 */
function buildTelemetryMetadata(
  context: ChatMessageMetadata,
  promptResult: CompiledPrompt,
  userId: string
) {
  return {
    langfusePrompt: promptResult.metadata,
    billId: context.billContext?.id || "",
    pageType: context.pageContext?.type || "bill",
    difficultyLevel: context.difficultyLevel,
    userId,
    sessionId: context.sessionId,
  };
}

function buildUsageMetadata(
  context: ChatMessageMetadata,
  finishEvent: { finishReason?: unknown; steps?: unknown[] }
): ChatUsageMetadata {
  const finishReason =
    typeof finishEvent.finishReason === "string"
      ? finishEvent.finishReason
      : null;
  const stepCount = Array.isArray(finishEvent.steps)
    ? finishEvent.steps.length
    : 0;

  return {
    pageType: context.pageContext?.type ?? null,
    difficultyLevel: context.difficultyLevel,
    billId: context.billContext?.id ?? null,
    finishReason,
    stepCount,
  };
}

function extractGatewayCost(event: {
  providerMetadata?: unknown;
}): number | undefined {
  const providerMetadata = event.providerMetadata;
  if (!providerMetadata || typeof providerMetadata !== "object") {
    return undefined;
  }

  const gatewayCost = (
    providerMetadata as {
      gateway?: { cost?: unknown };
    }
  ).gateway?.cost;

  const numericCost = Number(gatewayCost);

  return Number.isFinite(numericCost) ? numericCost : undefined;
}

/**
 * チャットで使用するツール一覧を構築
 */
function buildTools() {
  // biome-ignore lint/suspicious/noExplicitAny: OpenAI web_search tool type incompatibility
  const tools: Record<string, any> = {
    web_search: openai.tools.webSearch(),
  };

  return tools;
}
