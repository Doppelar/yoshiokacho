import "server-only";

import { MessageSquare } from "lucide-react";
import { formatDate } from "@/lib/utils/date";
import { withFallback } from "@/lib/utils/with-fallback";
import { OpinionForm } from "../../client/components/opinion-form";
import {
  COMMENTER_TYPE_LABELS,
  countByStance,
  RESIDENCE_LABELS,
  STANCE_LABELS,
  STANCES,
} from "../../shared/utils/opinion-input";
import {
  type BillPublicOpinion,
  findVisibleOpinionsByBillId,
} from "../repositories/bill-public-opinion-repository";

export async function BillPublicOpinionSection({ billId }: { billId: string }) {
  // 意見テーブル未作成の環境でも議案ページ自体は表示する
  const opinions = await withFallback<BillPublicOpinion[] | null, null>(
    findVisibleOpinionsByBillId(billId),
    null,
    "bill public opinions"
  );
  if (opinions === null) return null;

  const counts = countByStance(opinions);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <MessageSquare className="size-5" aria-hidden="true" />
          この議案への意見
        </h2>
        <p className="text-sm text-muted-foreground">
          一般市民・専門家のどなたでも、ログインなしで意見を投稿できます。
        </p>
      </div>

      <dl className="grid grid-cols-3 gap-2 text-center">
        {STANCES.map((stance) => (
          <div key={stance} className="rounded-xl border bg-white p-3">
            <dt className="text-xs font-bold text-muted-foreground">
              {STANCE_LABELS[stance]}
            </dt>
            <dd className="text-2xl font-bold">{counts[stance]}</dd>
          </div>
        ))}
      </dl>

      <div className="rounded-2xl border bg-white p-5">
        <h3 className="mb-4 text-lg font-bold">意見を書く</h3>
        <OpinionForm billId={billId} />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold">
          みんなの意見（{opinions.length}件）
        </h3>
        {opinions.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            まだ意見はありません。最初の意見を書いてみませんか？
          </p>
        ) : (
          <ul className="space-y-3">
            {opinions.map((opinion) => (
              <OpinionItem key={opinion.id} opinion={opinion} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function OpinionItem({ opinion }: { opinion: BillPublicOpinion }) {
  return (
    <li className="rounded-xl border bg-white p-4">
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-black px-2 py-0.5 font-bold text-white">
          {STANCE_LABELS[opinion.stance]}
        </span>
        <span className="rounded-full border px-2 py-0.5 font-bold">
          {COMMENTER_TYPE_LABELS[opinion.commenterType]}
        </span>
        <span className="rounded-full border px-2 py-0.5">
          {RESIDENCE_LABELS[opinion.residence]}
        </span>
        <time
          dateTime={opinion.createdAt}
          className="ml-auto text-muted-foreground"
        >
          {formatDate(opinion.createdAt)}
        </time>
      </div>
      <p className="whitespace-pre-wrap text-[15px] leading-7">
        {opinion.body}
      </p>
    </li>
  );
}
