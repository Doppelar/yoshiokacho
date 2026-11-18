import "server-only";

import { createAdminClient } from "@mirai-gikai/supabase";
import {
  type PublicOpinion,
  toPublicOpinion,
} from "@/features/bill-public-opinions/shared/utils/opinion-input";
import type {
  CouncilId,
  CouncilItemOpinionInput,
} from "../../shared/utils/councils";

const PUBLIC_OPINION_LIMIT = 200;

export async function findVisibleCouncilItemOpinions(
  council: CouncilId,
  itemId: string
): Promise<PublicOpinion[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("council_item_opinions")
    .select("id, commenter_type, stance, residence, body, created_at")
    .eq("council", council)
    .eq("item_id", itemId)
    .eq("is_hidden", false)
    .order("created_at", { ascending: false })
    .limit(PUBLIC_OPINION_LIMIT);

  if (error) {
    throw new Error(`議案への意見の取得に失敗しました: ${error.message}`);
  }

  return (data ?? []).flatMap((row) => {
    const opinion = toPublicOpinion(row);
    return opinion ? [opinion] : [];
  });
}

export async function insertCouncilItemOpinion(
  input: CouncilItemOpinionInput
): Promise<void> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("council_item_opinions").insert({
    council: input.council,
    item_id: input.itemId,
    commenter_type: input.commenterType,
    stance: input.stance,
    residence: input.residence,
    body: input.body,
  });

  if (error) {
    throw new Error(`議案への意見の保存に失敗しました: ${error.message}`);
  }
}
