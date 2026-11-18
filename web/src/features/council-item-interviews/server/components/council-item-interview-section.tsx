import "server-only";

import { MessageCircle } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CouncilId } from "@/features/council-item-opinions/shared/utils/councils";
import { routes } from "@/lib/routes";
import { withFallback } from "@/lib/utils/with-fallback";
import { findCouncilItemInterviewBillId } from "../repositories/council-item-interview-repository";

/** 吉岡町以外の議会の議案ページに置く、AIインタビューへの入口 */
export async function CouncilItemInterviewSection({
  council,
  itemId,
}: {
  council: CouncilId;
  itemId: string;
}) {
  // インタビュー未設定・テーブル未作成の環境では何も出さない
  const billId = await withFallback(
    findCouncilItemInterviewBillId(council, itemId),
    null,
    "council item interview"
  );
  if (billId === null) return null;

  return (
    <section className="rounded-2xl border bg-white p-5">
      <h2 className="flex items-center gap-2 text-lg font-bold">
        <MessageCircle className="size-5" aria-hidden />
        AIインタビューで意見を伝える
      </h2>
      <p className="mt-2 text-sm text-mirai-text-secondary">
        この議案についてのご意見をお聞かせください。AIの質問に答えながら、考えを整理できます（10分ほど）。公開を選んだご意見は、だれでも読めるようにこのサイトで公開します。
        無料で使える範囲で運用しているため、利用が多いときは受付を一時停止することがあります。
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button asChild>
          <Link href={routes.interviewLP(billId) as Route}>
            AIインタビューを始める
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={routes.billOpinions(billId) as Route}>
            寄せられた意見を見る
          </Link>
        </Button>
      </div>
    </section>
  );
}
