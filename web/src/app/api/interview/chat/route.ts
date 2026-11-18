import { assertWithinSystemCostLimits } from "@/features/chat/server/services/system-cost-guard";
import { chatErrorToResponse } from "@/features/chat/server/utils/chat-error-response";
import { getChatSupabaseUser } from "@/features/chat/server/utils/supabase-server";
import { handleInterviewChatRequest } from "@/features/interview-session/server/services/handle-interview-chat-request";
import { jsonResponse } from "@/lib/api/response";
import { registerNodeTelemetry } from "@/lib/telemetry/register";

type InterviewChatRequestBody = {
  messages: Array<{ role: string; content: string }>;
  billId: string;
  currentStage: "chat" | "summary" | "summary_complete";
  isRetry?: boolean;
  previewToken?: unknown;
};

export async function POST(req: Request) {
  // Vercel node環境でinstrumentationが自動で起動しない問題対応
  // 明示的にtelemetryを初期化
  await registerNodeTelemetry();

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }
  const { messages, billId, currentStage, isRetry, previewToken } =
    body as InterviewChatRequestBody;

  const {
    data: { user },
    error: getUserError,
  } = await getChatSupabaseUser();

  if (getUserError || !user) {
    return jsonResponse({ error: "Anonymous session required" }, 401);
  }

  if (!billId) {
    return jsonResponse({ error: "billId is required" }, 400);
  }

  try {
    // システム全体の予算上限チェック（日次・月次）
    await assertWithinSystemCostLimits();

    return await handleInterviewChatRequest({
      messages,
      billId,
      currentStage,
      isRetry,
      // 文字列以外は検証対象にしない（不正な型のトークンは未指定として扱う）
      previewToken: typeof previewToken === "string" ? previewToken : undefined,
      userId: user.id,
    });
  } catch (error) {
    console.error("Interview chat request error:", error);
    return chatErrorToResponse(error);
  }
}
