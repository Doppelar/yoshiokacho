import "server-only";

import { createAdminClient } from "@mirai-gikai/supabase";
import {
  type CouncilId,
  toCouncilBillSlug,
} from "@/features/council-item-opinions/shared/utils/councils";

/**
 * 議会の議案に、受付中のAIインタビューがあれば、その議案（bills）のIDを返す。
 * なければ null。
 */
export async function findCouncilItemInterviewBillId(
  council: CouncilId,
  itemId: string
): Promise<string | null> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("bills")
    .select("id, interview_configs!inner(id)")
    .eq("council", council)
    .eq("slug", toCouncilBillSlug(council, itemId))
    .eq("publish_status", "published")
    .eq("interview_configs.status", "public")
    .is("interview_configs.deleted_at", null)
    .limit(1)
    .maybeSingle();

  if (error) {
    throw new Error(`AIインタビューの確認に失敗しました: ${error.message}`);
  }

  return data?.id ?? null;
}
