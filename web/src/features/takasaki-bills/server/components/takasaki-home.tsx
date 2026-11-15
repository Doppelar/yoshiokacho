import "server-only";

import type { Route } from "next";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { Card } from "@/components/ui/card";
import { CouncilSwitchBanner } from "@/features/gunma-map/client/council-switch-banner";
import { routes } from "@/lib/routes";
import { TAKASAKI_SESSIONS } from "../../shared/sessions";
import type { TakasakiItem, TakasakiSession } from "../../shared/types";
import { findTakasakiSession } from "../../shared/utils/sessions";
import {
  formatItemName,
  formatResult,
  sortItemsForDisplay,
  tallyRollCall,
} from "../../shared/utils/votes";
import { TakasakiDisclaimer } from "./takasaki-disclaimer";

export function TakasakiHome({ sessionId }: { sessionId?: string }) {
  const session = findTakasakiSession(sessionId);
  const items = sortItemsForDisplay(session.items);
  const splitItems = items.filter((item) => item.rollCall);
  const otherItems = items.filter((item) => !item.rollCall);

  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <CouncilSwitchBanner currentLabel="みらい議会＠高崎市" />

      <section className="rounded-2xl bg-mirai-light-gradient px-5 py-6">
        <p className="text-sm font-bold text-primary-accent">高崎市</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight">
          市議会での議論を
          <br />
          できる限りわかりやすく
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-black">
          みらい議会＠高崎市は、高崎市議会でどんな議案が審議され、どう決まったかを伝えるページです。議決結果と、賛否が分かれた議案の会派・議員ごとの賛否を、市議会の公式資料のとおり掲載しています。
        </p>
      </section>

      <nav aria-label="高崎市議会の会期" className="mt-8 flex flex-wrap gap-3">
        {TAKASAKI_SESSIONS.map((entry) => (
          <Link
            key={entry.id}
            href={routes.takasakiHome(entry.id) as Route}
            aria-current={entry.id === session.id ? "page" : undefined}
            className="rounded-lg border border-mirai-border px-3 py-2 text-sm underline underline-offset-2"
          >
            {entry.name}
          </Link>
        ))}
      </nav>
      <section className="flex flex-col gap-2 pt-10">
        <h2 className="text-[22px] font-bold leading-[1.48] text-black">
          {session.name}
        </h2>
        <p className="text-sm text-mirai-text-secondary">
          会期：{session.period}／全{session.items.length}件
        </p>
      </section>

      {session.voteDetails === "unconfirmed" && (
        <p className="mt-4 text-sm text-mirai-text-secondary">
          議決結果は公式資料の記載です。この会期の議員別賛否は未掲載のため、賛否人数や全会一致かどうかは表示していません。
        </p>
      )}
      {splitItems.length > 0 && (
        <section className="flex flex-col gap-4 pt-6">
          <h3 className="text-lg font-bold">賛否が分かれた議案</h3>
          {splitItems.map((item) => (
            <ItemCard key={item.id} item={item} session={session} highlight />
          ))}
        </section>
      )}

      <section className="flex flex-col gap-3 py-10">
        <h3 className="text-lg font-bold">議案・報告など</h3>
        {otherItems.map((item) => (
          <ItemCard key={item.id} item={item} session={session} />
        ))}
      </section>

      <TakasakiDisclaimer sourceUrl={session.sourceUrl} />
    </Container>
  );
}

function ItemCard({
  item,
  session,
  highlight = false,
}: {
  item: TakasakiItem;
  session: TakasakiSession;
  highlight?: boolean;
}) {
  const tally = tallyRollCall(session, item);

  return (
    <Link href={routes.takasakiBillDetail(item.id) as Route}>
      <Card
        className={
          highlight
            ? "border-2 border-black p-4 shadow-none transition-colors hover:bg-muted/50"
            : "border p-4 shadow-none transition-colors hover:bg-muted/50"
        }
      >
        <p className="text-xs font-bold text-primary-accent">
          高崎市議会 {formatItemName(item)}
          {item.committee ? `・${item.committee}` : ""}
        </p>
        <h4
          className={
            highlight
              ? "mt-1 text-xl font-bold leading-snug"
              : "mt-1 text-base font-bold leading-snug"
          }
        >
          {item.title}
        </h4>
        <p className="mt-2 text-sm font-bold">
          {formatResult(session, item)}
          {tally && (
            <span className="ml-2 font-normal text-mirai-text-secondary">
              賛成{tally.forCount}・反対{tally.againstCount}
            </span>
          )}
        </p>
      </Card>
    </Link>
  );
}
