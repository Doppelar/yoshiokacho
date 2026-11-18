import "server-only";

import { createAdminClient } from "@mirai-gikai/supabase";
import {
  type BillPublicOpinionInput,
  type PublicOpinion,
  toPublicOpinion,
} from "../../shared/utils/opinion-input";

export type BillPublicOpinion = PublicOpinion;

const PUBLIC_OPINION_LIMIT = 200;

export async function findVisibleOpinionsByBillId(
  billId: string
): Promise<BillPublicOpinion[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("bill_public_opinions")
    .select("id, commenter_type, stance, residence, body, created_at")
    .eq("bill_id", billId)
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

export async function insertBillPublicOpinion(
  input: BillPublicOpinionInput
): Promise<void> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("bill_public_opinions").insert({
    bill_id: input.billId,
    commenter_type: input.commenterType,
    stance: input.stance,
    residence: input.residence,
    body: input.body,
  });

  if (error) {
    throw new Error(`議案への意見の保存に失敗しました: ${error.message}`);
  }
}
