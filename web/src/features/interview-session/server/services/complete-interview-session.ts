import "server-only";

import { buildInterviewOpinionRows } from "@mirai-gikai/shared/interview-report/build-opinion-rows";
import type { InterviewOpinionSource } from "@mirai-gikai/shared/interview-report/schema";
import { syncInterviewOpinions } from "@mirai-gikai/shared/interview-report/sync-opinions";
import { recordChatUsage } from "@/features/chat/server/services/cost-tracker";
import { isWithinSystemCostLimits } from "@/features/chat/server/services/system-cost-guard";
import type { InterviewReportData } from "../../shared/schemas";
import type { InterviewReport } from "../../shared/types";
import { buildCompletedInterviewReportInsert } from "../../shared/utils/complete-interview-report";
import { extractReportFromMessage } from "../../shared/utils/report-extraction";
import {
  findInterviewMessagesBySessionIdDesc,
  updateInterviewSessionCompleted,
  upsertInterviewReport,
} from "../repositories/interview-session-repository";
import { evaluateModerationScore } from "./evaluate-moderation-score";

type CompleteInterviewSessionParams = {
  sessionId: string;
  /** モデレーションのAI利用コストを記録する利用者。未指定なら記録しない */
  userId?: string;
  isPublicByUser?: boolean;
  isDataReuseConsented?: boolean;
};

/**
 * インタビューを完了し、会話中に生成されたレポートを保存する
 */
export async function completeInterviewSession({
  sessionId,
  userId,
  isPublicByUser,
  isDataReuseConsented,
}: CompleteInterviewSessionParams): Promise<InterviewReport> {
  // メッセージ履歴（新しい順）と予算上限の確認は互いに独立なので並列に行う
  // 無料枠を超えないよう、システム全体の予算上限に達していたらモデレーションのAIを呼ばない
  const [messages, canUseAi] = await Promise.all([
    findInterviewMessagesBySessionIdDesc(sessionId),
    isWithinSystemCostLimits(),
  ]);

  // 最新のアシスタントメッセージからレポートを抽出
  let reportData: InterviewReportData | null = null;
  for (const message of messages) {
    if (message.role === "assistant") {
      reportData = extractReportFromMessage(message.content);
      if (reportData) {
        break;
      }
    }
  }

  if (!reportData) {
    throw new Error("No report found in conversation messages");
  }

  // モデレーションスコアを評価（タイムアウト30秒）
  const MODERATION_TIMEOUT_MS = 30_000;
  let moderationScore: number | null = null;
  let moderationReasoning: string | null = null;
  if (!canUseAi) {
    console.warn(`Moderation skipped for session ${sessionId}: cost limit`);
  } else {
    try {
      const moderation = await Promise.race([
        evaluateModerationScore({
          summary: reportData.summary,
          opinions: reportData.opinions,
          roleDescription: reportData.role_description,
          messages: [...messages].reverse().map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
        new Promise<never>((_, reject) =>
          setTimeout(
            () => reject(new Error("Moderation evaluation timed out")),
            MODERATION_TIMEOUT_MS
          )
        ),
      ]);
      moderationScore = moderation.score;
      moderationReasoning = moderation.reasoning;
      if (userId) {
        await recordChatUsage({
          userId,
          sessionId,
          promptName: "interview-moderation",
          model: moderation.model,
          usage: moderation.usage,
          costUsd: moderation.costUsd,
          metadata: { pageType: "interview", finishReason: null, stepCount: 0 },
        }).catch((usageError) => {
          console.error("Failed to record moderation usage:", usageError);
        });
      }
    } catch (error) {
      // モデレーション失敗はレポート保存をブロックしない
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error(
        `Moderation evaluation failed for session ${sessionId}: ${message}`
      );
    }
  }

  // レポートを保存（UPSERT）
  // content_richnessはZodスキーマでバリデーション済み（totalは0-100の整数）
  // moderation_statusはgenerated columnのためscoreのみ保存
  const report = await upsertInterviewReport(
    buildCompletedInterviewReportInsert({
      sessionId,
      messages,
      reportData,
      moderationScore,
      moderationReasoning,
      isPublicByUser,
      isDataReuseConsented,
    })
  );

  // 新規インタビュー完了時は JSONB（report.opinions）と interview_opinion テーブルの
  // 両方へ書き込む（既存互換のため。JSONB はユーザーが確認するレポート記録、
  // interview_opinion はトピック分析用の意見ストア）。
  // 失敗してもインタビュー完了はブロックしない。未同期分は意見再抽出バックフィルが取り込む
  // （再抽出は JSONB を書き換えず interview_opinion のみ更新する）。
  try {
    const storedOpinions = Array.isArray(report.opinions)
      ? (report.opinions as InterviewOpinionSource[])
      : [];
    // レポート生成と同時にタグ（concern/proposal/reasoning_types）も得ているため、
    // タグ付け済みとしてウォーターマークを立てる（バックフィルの対象から外す）。
    await syncInterviewOpinions(
      report.id,
      buildInterviewOpinionRows(report.id, storedOpinions, {
        tagsExtractedAtIso: new Date().toISOString(),
      })
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(
      `Failed to sync interview_opinion for session ${sessionId}: ${message}`
    );
  }

  // セッションを完了
  await updateInterviewSessionCompleted(sessionId);

  return report;
}
