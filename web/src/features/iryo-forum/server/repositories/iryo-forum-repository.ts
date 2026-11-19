import "server-only";

import { createAdminClient } from "@mirai-gikai/supabase";
import { toCouncilBillSlug } from "@/features/council-item-opinions/shared/utils/councils";
import { IRYO_TOPIC_ID, NATIONAL_COUNCIL } from "../../shared/forum";

/**
 * 「医療のこれから」のAIインタビューに寄せられた回答（レポート）の件数。
 * 公開・非公開を問わず数え、モデレーションで NG のものは除く。
 */
export async function countIryoInterviewReports(): Promise<number> {
  const supabase = createAdminClient();
  const { count, error } = await supabase
    .from("interview_report")
    .select(
      "id, interview_sessions!inner(interview_configs!inner(bills!inner(slug)))",
      { count: "exact", head: true }
    )
    .eq(
      "interview_sessions.interview_configs.bills.slug",
      toCouncilBillSlug(NATIONAL_COUNCIL, IRYO_TOPIC_ID)
    )
    .or("moderation_status.is.null,moderation_status.neq.ng");

  if (error) {
    throw new Error(
      `AIインタビューの回答数の取得に失敗しました: ${error.message}`
    );
  }
  return count ?? 0;
}
