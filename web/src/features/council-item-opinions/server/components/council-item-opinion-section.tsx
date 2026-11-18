import "server-only";

import { PublicOpinionBoard } from "@/features/bill-public-opinions/server/components/public-opinion-board";
import type { PublicOpinion } from "@/features/bill-public-opinions/shared/utils/opinion-input";
import { withFallback } from "@/lib/utils/with-fallback";
import { COUNCILS, type CouncilId } from "../../shared/utils/councils";
import { submitCouncilItemOpinion } from "../actions/submit-council-item-opinion";
import { findVisibleCouncilItemOpinions } from "../repositories/council-item-opinion-repository";

/** 吉岡町以外の議会の議案ページに置く意見掲示板 */
export async function CouncilItemOpinionSection({
  council,
  itemId,
}: {
  council: CouncilId;
  itemId: string;
}) {
  // 意見テーブル未作成の環境でも議案ページ自体は表示する
  const opinions = await withFallback<PublicOpinion[] | null, null>(
    findVisibleCouncilItemOpinions(council, itemId),
    null,
    "council item opinions"
  );
  if (opinions === null) return null;

  return (
    <PublicOpinionBoard
      opinions={opinions}
      submit={submitCouncilItemOpinion.bind(null, council, itemId)}
      residenceLabels={COUNCILS[council].residenceLabels}
    />
  );
}
