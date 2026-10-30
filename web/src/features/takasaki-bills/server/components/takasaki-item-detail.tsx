import "server-only";

import type { Route } from "next";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { routes } from "@/lib/routes";
import type { TakasakiItem, TakasakiSession } from "../../shared/types";
import {
  formatItemName,
  formatResult,
  tallyRollCall,
} from "../../shared/utils/votes";
import { TakasakiDisclaimer } from "./takasaki-disclaimer";

export function TakasakiItemDetail({
  session,
  item,
}: {
  session: TakasakiSession;
  item: TakasakiItem;
}) {
  const tally = tallyRollCall(session, item);

  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <Link
        href={routes.takasakiHome() as Route}
        className="text-sm font-bold underline underline-offset-2 hover:opacity-80"
      >
        みらい議会＠高崎市に戻る
      </Link>

      <p className="mt-6 text-sm font-bold text-primary-accent">
        高崎市議会 {session.name} {formatItemName(item)}
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight">{item.title}</h1>

      <dl className="mt-6 grid gap-3 rounded-2xl border bg-white p-5 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-xs text-muted-foreground">議決結果</dt>
          <dd className="mt-1 text-lg font-bold">
            {formatResult(session, item)}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">付託委員会</dt>
          <dd className="mt-1 font-bold">{item.committee ?? "付託なし"}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">会期</dt>
          <dd className="mt-1 font-bold">{session.period}</dd>
        </div>
      </dl>

      {tally ? (
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-bold">
            議員ごとの賛否（賛成{tally.forCount}・反対{tally.againstCount}）
          </h2>
          <div className="overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-[480px] text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="p-3">会派</th>
                  <th className="p-3">賛成</th>
                  <th className="p-3">反対</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {tally.byFaction.map((faction) => (
                  <tr key={faction.faction} className="align-top">
                    <th className="whitespace-nowrap p-3 text-left">
                      {faction.faction}
                    </th>
                    <td className="p-3">
                      {faction.forMembers.length > 0 && (
                        <span className="font-bold">
                          {faction.forMembers.length}人：
                        </span>
                      )}
                      {faction.forMembers.join("、")}
                    </td>
                    <td className="p-3">
                      {faction.againstMembers.length > 0 && (
                        <span className="font-bold">
                          {faction.againstMembers.length}人：
                        </span>
                      )}
                      {faction.againstMembers.join("、")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-mirai-text-note">
            起立採決で、起立した議員を賛成、起立しなかった議員を反対としています。議長（
            {session.chair}）は採決に加わりません。
          </p>
        </section>
      ) : (
        item.result !== null && (
          <p className="mt-8 text-sm text-mirai-text-secondary">
            この議案は簡易採決（議長が出席議員全員に異議がないことを確認）で決まりました。議員ごとの賛否表はありません。
          </p>
        )
      )}

      <div className="mt-10">
        <TakasakiDisclaimer sourceUrl={session.sourceUrl} />
      </div>
    </Container>
  );
}
