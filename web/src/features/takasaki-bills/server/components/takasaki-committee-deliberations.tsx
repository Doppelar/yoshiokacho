import "server-only";

import type { TakasakiCommitteeDeliberation } from "../../shared/types";
import { ExchangeBlock, MinutesLink } from "./takasaki-general-questions";

/** 議案詳細に表示する、付託された委員会での質疑の要旨 */
export function TakasakiCommitteeDeliberations({
  deliberations,
}: {
  deliberations: readonly TakasakiCommitteeDeliberation[];
}) {
  if (deliberations.length === 0) return null;
  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-xl font-bold">委員会での質疑</h2>
      <p className="text-sm leading-7 text-mirai-text-secondary">
        この議案を審査した常任委員会で、委員（議員）と市の担当者の間で交わされた質疑の要旨です。会議録をもとに本サイトがまとめました。
      </p>
      {deliberations.map((deliberation) => (
        <div
          key={deliberation.committee}
          className="space-y-3 rounded-2xl border bg-white p-5"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-bold">
              {deliberation.committee}
              <span className="ml-2 text-sm font-normal text-mirai-text-secondary">
                {deliberation.date}
              </span>
            </h3>
            <p className="text-sm font-bold">{deliberation.vote}</p>
          </div>
          {deliberation.exchanges.length > 0 ? (
            <ol className="space-y-3">
              {deliberation.exchanges.map((exchange) => (
                <li key={exchange.question}>
                  <ExchangeBlock exchange={exchange} />
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-mirai-text-secondary">
              委員会では質疑はありませんでした。
            </p>
          )}
          <MinutesLink href={deliberation.minutesUrl} />
        </div>
      ))}
    </section>
  );
}
