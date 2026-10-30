import "server-only";

import type { Route } from "next";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { Card } from "@/components/ui/card";
import { CouncilSwitchBanner } from "@/features/gunma-map/client/council-switch-banner";
import { routes } from "@/lib/routes";
import { TAKASAKI_SESSION_R8_5 } from "../../shared/session-r8-5";
import type { TakasakiItem } from "../../shared/types";
import {
  formatItemName,
  formatResult,
  sortItemsForDisplay,
  tallyRollCall,
} from "../../shared/utils/votes";
import { TakasakiDisclaimer } from "./takasaki-disclaimer";

export function TakasakiHome() {
  const session = TAKASAKI_SESSION_R8_5;
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

      <section className="flex flex-col gap-2 pt-10">
        <h2 className="text-[22px] font-bold leading-[1.48] text-black">
          {session.name}
        </h2>
        <p className="text-sm text-mirai-text-secondary">
          会期：{session.period}／全{session.items.length}件
        </p>
      </section>

      <section className="flex flex-col gap-4 pt-6">
        <h3 className="text-lg font-bold">賛否が分かれた議案</h3>
        {splitItems.map((item) => (
          <ItemCard key={item.id} item={item} highlight />
        ))}
      </section>

      <section className="flex flex-col gap-3 py-10">
        <h3 className="text-lg font-bold">そのほかの議案など（全会一致）</h3>
        {otherItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>

      <TakasakiDisclaimer sourceUrl={session.sourceUrl} />
    </Container>
  );
}

function ItemCard({
  item,
  highlight = false,
}: {
  item: TakasakiItem;
  highlight?: boolean;
}) {
  const session = TAKASAKI_SESSION_R8_5;
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
