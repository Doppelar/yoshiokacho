import "server-only";

import { MessagesSquare } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { Card } from "@/components/ui/card";
import type { DifficultyLevelEnum } from "@/features/bill-difficulty/shared/types";
import { getCouncilVoiceTallies } from "@/features/council-voice-tally/server/loaders/get-council-voice-tallies";
import type {
  VoiceTallies,
  VoiceTally,
} from "@/features/council-voice-tally/shared/utils/voice-tally";
import { CouncilSwitchBanner } from "@/features/gunma-map/client/council-switch-banner";
import { routes } from "@/lib/routes";
import { TAKASAKI_SESSIONS } from "../../shared/sessions";
import type { TakasakiItem, TakasakiSession } from "../../shared/types";
import { getSessionDebateSummary } from "../../shared/utils/debate-summaries";
import {
  getGeneralQuestions,
  hasCommitteeQuestions,
} from "../../shared/utils/deliberations";
import { getItemExplanation } from "../../shared/utils/item-explanations";
import { findTakasakiSession } from "../../shared/utils/sessions";
import {
  formatItemName,
  formatResult,
  sortItemsForDisplay,
  tallyRollCall,
} from "../../shared/utils/votes";
import { TakasakiDebateSummarySection } from "./takasaki-debate-summary";
import { TakasakiDisclaimer } from "./takasaki-disclaimer";
import {
  GENERAL_QUESTIONS_SECTION_ID,
  TakasakiGeneralQuestions,
} from "./takasaki-general-questions";
import { TakasakiItemIllustration } from "./takasaki-item-illustration";
import { TakasakiVoiceSummary, VoiceCounts } from "./takasaki-voice-summary";

export async function TakasakiHome({
  sessionId,
  level,
}: {
  sessionId?: string;
  level: DifficultyLevelEnum;
}) {
  const session = findTakasakiSession(sessionId);
  const items = sortItemsForDisplay(session.items);
  const splitItems = items.filter((item) => item.rollCall);
  const otherItems = items.filter((item) => !item.rollCall);
  const generalQuestions = getGeneralQuestions(session.id);
  const debateSummary = getSessionDebateSummary(session.id);
  const voiceTallies: VoiceTallies = await getCouncilVoiceTallies("takasaki");

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
          みらい議会＠高崎市は、高崎市議会でどんな議論が交わされ、どう決まったかを伝えるページです。議決結果と会派・議員ごとの賛否に加え、会議録をもとに、一般質問での質問と市の答弁、委員会での議案の質疑の要旨を掲載しています。議案ごとに、どなたでも賛成・反対の意見を投稿できます。
        </p>
      </section>

      <TakasakiVoiceSummary tallies={voiceTallies} />

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
        {generalQuestions && (
          <a
            href={`#${GENERAL_QUESTIONS_SECTION_ID}`}
            className="text-sm font-bold underline underline-offset-2"
          >
            一般質問（{generalQuestions.questions.length}
            人）の質問と答弁を見る
          </a>
        )}
      </section>

      {debateSummary && (
        <TakasakiDebateSummarySection
          title="この会期でどんな議論があったか"
          summary={debateSummary}
          level={level}
        />
      )}

      {session.voteDetails === "unconfirmed" && (
        <p className="mt-4 text-sm text-mirai-text-secondary">
          議決結果は公式資料の記載です。この会期の議員別賛否は未掲載のため、賛否人数や全会一致かどうかは表示していません。
        </p>
      )}
      {splitItems.length > 0 && (
        <section className="flex flex-col gap-4 pt-6">
          <h3 className="text-lg font-bold">賛否が分かれた議案</h3>
          {splitItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              session={session}
              voices={voiceTallies[item.id]}
              highlight
            />
          ))}
        </section>
      )}

      <section className="flex flex-col gap-3 py-10">
        <h3 className="text-lg font-bold">議案・報告など</h3>
        {otherItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            session={session}
            voices={voiceTallies[item.id]}
          />
        ))}
      </section>

      {generalQuestions && <TakasakiGeneralQuestions set={generalQuestions} />}

      <TakasakiDisclaimer sourceUrl={session.sourceUrl} />
    </Container>
  );
}

function ItemCard({
  item,
  session,
  voices,
  highlight = false,
}: {
  item: TakasakiItem;
  session: TakasakiSession;
  /** この議案に集まった声。まだなければ undefined */
  voices?: VoiceTally;
  highlight?: boolean;
}) {
  const tally = tallyRollCall(session, item);
  const explanation = getItemExplanation(item.id);

  return (
    <Link href={routes.takasakiBillDetail(item.id) as Route}>
      <Card
        className={
          highlight
            ? "border-2 border-black p-4 shadow-none transition-colors hover:bg-muted/50"
            : "border p-4 shadow-none transition-colors hover:bg-muted/50"
        }
      >
        <TakasakiItemIllustration itemId={item.id} compact />
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
        {explanation && (
          <p className="mt-3 text-sm leading-6 text-mirai-text-secondary">
            {explanation.plain[0]}
          </p>
        )}
        <p className="mt-2 text-sm font-bold">
          {formatResult(session, item)}
          {tally && (
            <span className="ml-2 font-normal text-mirai-text-secondary">
              賛成{tally.forCount}・反対{tally.againstCount}
            </span>
          )}
        </p>
        {hasCommitteeQuestions(item.id) && (
          <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs font-bold">
            <MessagesSquare aria-hidden="true" className="h-3.5 w-3.5" />
            委員会での質疑あり
          </p>
        )}
        {voices && <VoiceCounts tally={voices} className="mt-2" />}
      </Card>
    </Link>
  );
}
