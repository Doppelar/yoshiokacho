import "server-only";

import { createAdminClient } from "@mirai-gikai/supabase";
import {
  type BillPublicOpinionInput,
  type CommenterType,
  isCommenterType,
  isResidence,
  isStance,
  type Residence,
  type Stance,
} from "../../shared/utils/opinion-input";

export type BillPublicOpinion = {
  id: string;
  commenterType: CommenterType;
  stance: Stance;
  residence: Residence;
  body: string;
  createdAt: string;
};

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
    const { commenter_type, stance, residence } = row;
    if (
      !isCommenterType(commenter_type) ||
      !isStance(stance) ||
      !isResidence(residence)
    ) {
      return [];
    }
    return [
      {
        id: row.id,
        commenterType: commenter_type,
        stance,
        residence,
        body: row.body,
        createdAt: row.created_at,
      },
    ];
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
