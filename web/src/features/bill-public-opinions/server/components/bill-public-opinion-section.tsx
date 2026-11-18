import "server-only";

import { withFallback } from "@/lib/utils/with-fallback";
import { RESIDENCE_LABELS } from "../../shared/utils/opinion-input";
import { submitBillPublicOpinion } from "../actions/submit-bill-public-opinion";
import {
  type BillPublicOpinion,
  findVisibleOpinionsByBillId,
} from "../repositories/bill-public-opinion-repository";
import { PublicOpinionBoard } from "./public-opinion-board";

export async function BillPublicOpinionSection({ billId }: { billId: string }) {
  // 意見テーブル未作成の環境でも議案ページ自体は表示する
  const opinions = await withFallback<BillPublicOpinion[] | null, null>(
    findVisibleOpinionsByBillId(billId),
    null,
    "bill public opinions"
  );
  if (opinions === null) return null;

  return (
    <PublicOpinionBoard
      opinions={opinions}
      submit={submitBillPublicOpinion.bind(null, billId)}
      residenceLabels={RESIDENCE_LABELS}
    />
  );
}
