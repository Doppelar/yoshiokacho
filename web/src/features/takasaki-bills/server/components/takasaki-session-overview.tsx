import "server-only";

import type { SessionResultTally } from "../../shared/utils/votes";

export const SPLIT_ITEMS_SECTION_ID = "split-items";

function Stat({ label, count }: { label: string; count: number }) {
  return (
    <div className="rounded-xl bg-white px-3 py-2">
      <dt className="text-xs text-mirai-text-secondary">{label}</dt>
      <dd className="text-xl font-bold">
        {count}
        <span className="ml-0.5 text-sm font-normal">件</span>
      </dd>
    </div>
  );
}

/** 会期の総まとめ。何件が審議され、どう決まり、賛否が分かれたのは何件か */
export function TakasakiSessionOverview({
  tally,
  unanimityConfirmed,
}: {
  tally: SessionResultTally;
  /** 賛否が分かれたもの以外を全会一致と確認できているか */
  unanimityConfirmed: boolean;
}) {
  const voted = tally.unanimous + tally.split;

  return (
    <section
      aria-label="この会期の総まとめ"
      className="mt-4 space-y-3 rounded-2xl bg-muted p-4"
    >
      <h3 className="font-bold">
        この会期の総まとめ：全{tally.total}件の議案等
      </h3>
      <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="可決・同意など" count={tally.passed} />
        {tally.rejected > 0 && (
          <Stat label="不採択・否決" count={tally.rejected} />
        )}
        {tally.reports > 0 && (
          <Stat label="報告（採決なし）" count={tally.reports} />
        )}
        {tally.undecided > 0 && (
          <Stat label="継続審査など" count={tally.undecided} />
        )}
      </dl>
      {voted > 0 && (
        <p className="text-[15px] leading-7">
          採決した{voted}件のうち、
          {unanimityConfirmed
            ? `全会一致は${tally.unanimous}件、`
            : `賛否の記載がないものが${tally.unanimous}件、`}
          {tally.split > 0 ? (
            <a
              href={`#${SPLIT_ITEMS_SECTION_ID}`}
              className="font-bold underline underline-offset-2"
            >
              賛否が分かれたのは{tally.split}件
            </a>
          ) : (
            <span className="font-bold">賛否が分かれたものはありません</span>
          )}
          でした。
        </p>
      )}
    </section>
  );
}
