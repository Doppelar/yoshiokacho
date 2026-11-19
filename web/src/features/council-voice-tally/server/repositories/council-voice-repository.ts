import "server-only";

import { createAdminClient } from "@mirai-gikai/supabase";
import type { CouncilId } from "@/features/council-item-opinions/shared/utils/councils";
import type { StanceRow } from "../../shared/utils/voice-tally";

/** 集計で読む最大件数（PostgREST の既定の上限に合わせる） */
const MAX_ROWS = 1000;

/**
 * その議会の議案に寄せられたAIインタビューの回答（レポート）の立場。
 * 公開・非公開を問わず件数に数えるが、モデレーションで NG のものは除く。
 */
export async function findCouncilInterviewStances(
  council: CouncilId
): Promise<StanceRow[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("interview_report")
    .select(
      "stance, moderation_status, interview_sessions!inner(interview_configs!inner(bills!inner(slug, council)))"
    )
    .eq("interview_sessions.interview_configs.bills.council", council)
    .limit(MAX_ROWS);

  if (error) {
    throw new Error(
      `AIインタビューの回答の集計に失敗しました: ${error.message}`
    );
  }

  const prefix = `${council}-`;
  return data.flatMap((row) => {
    if (row.moderation_status === "ng") return [];
    const slug = row.interview_sessions.interview_configs.bills.slug;
    if (!slug?.startsWith(prefix)) return [];
    return [{ itemId: slug.slice(prefix.length), stance: row.stance }];
  });
}

/** その議会の議案に投稿された意見（非表示にしたものを除く）の立場 */
export async function findCouncilOpinionStances(
  council: CouncilId
): Promise<StanceRow[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("council_item_opinions")
    .select("item_id, stance")
    .eq("council", council)
    .eq("is_hidden", false)
    .limit(MAX_ROWS);

  if (error) {
    throw new Error(`議案への意見の集計に失敗しました: ${error.message}`);
  }

  return data.map((row) => ({ itemId: row.item_id, stance: row.stance }));
}
