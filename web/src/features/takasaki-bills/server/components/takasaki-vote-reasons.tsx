import "server-only";

import type { TakasakiSplitVoteRecord } from "../../shared/types";

/** 賛否が分かれた議案の、賛成・反対の理由（本会議の討論などの要旨） */
export function TakasakiVoteReasons({
  record,
}: {
  record: TakasakiSplitVoteRecord;
}) {
  const sides = (["反対", "賛成"] as const)
    .map((side) => ({
      side,
      reasons: record.reasons.filter((reason) => reason.side === side),
    }))
    .filter(({ reasons }) => reasons.length > 0);

  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-xl font-bold">賛成・反対の理由</h2>
      <p className="text-sm text-mirai-text-secondary">
        採決で諮った内容は「{record.question}
        」です。賛成・反対はこの内容に対するものです。
      </p>
      {sides.map(({ side, reasons }) => (
        <div key={side} className="space-y-3">
          <h3 className="font-bold">{side}の理由</h3>
          {reasons.map((reason) => (
            <div
              key={reason.minutesUrl}
              className="space-y-2 rounded-2xl border bg-white p-4"
            >
              <p className="text-sm font-bold">
                {reason.member}議員（{reason.faction}）
              </p>
              <p className="text-[15px] leading-7">{reason.summary}</p>
              <a
                href={reason.minutesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-accent underline underline-offset-2"
              >
                会議録で発言を読む
              </a>
            </div>
          ))}
        </div>
      ))}
      {record.reasonsNote && (
        <p className="text-sm leading-7">{record.reasonsNote}</p>
      )}
      <p className="text-xs leading-6 text-mirai-text-note">
        会議録をもとに本サイトがまとめた要旨で、発言そのものではありません。
      </p>
    </section>
  );
}
