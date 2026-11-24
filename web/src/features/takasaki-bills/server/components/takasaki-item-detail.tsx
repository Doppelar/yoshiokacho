import "server-only";

import type { Route } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { FactionVoteTable } from "@/components/council/faction-vote-table";
import { Container } from "@/components/layouts/container";
import type { DifficultyLevelEnum } from "@/features/bill-difficulty/shared/types";
import { CouncilItemInterviewSection } from "@/features/council-item-interviews/server/components/council-item-interview-section";
import { CouncilItemOpinionSection } from "@/features/council-item-opinions/server/components/council-item-opinion-section";
import { routes } from "@/lib/routes";
import type { TakasakiItem, TakasakiSession } from "../../shared/types";
import { getItemDebateSummary } from "../../shared/utils/debate-summaries";
import { getCommitteeDeliberations } from "../../shared/utils/deliberations";
import { getSplitVote, tallyItemVotes } from "../../shared/utils/split-votes";
import { formatItemName, formatResult } from "../../shared/utils/votes";
import { TakasakiCommitteeDeliberations } from "./takasaki-committee-deliberations";
import { TakasakiDebateSummarySection } from "./takasaki-debate-summary";
import { TakasakiDisclaimer } from "./takasaki-disclaimer";
import { TakasakiItemExplanationSection } from "./takasaki-item-explanation";
import { TakasakiItemIllustration } from "./takasaki-item-illustration";
import { TakasakiVoteReasons } from "./takasaki-vote-reasons";

export function TakasakiItemDetail({
  session,
  item,
  level,
}: {
  session: TakasakiSession;
  item: TakasakiItem;
  level: DifficultyLevelEnum;
}) {
  const tally = tallyItemVotes(session, item);
  const splitVote = getSplitVote(item.id);
  const debateSummary = getItemDebateSummary(item.id);

  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <Link
        href={routes.takasakiHome(session.id) as Route}
        className="text-sm font-bold underline underline-offset-2 hover:opacity-80"
      >
        みらい議会＠高崎市に戻る
      </Link>

      <p className="mt-6 text-sm font-bold text-primary-accent">
        高崎市議会 {session.name} {formatItemName(item)}
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight">{item.title}</h1>

      <TakasakiItemExplanationSection itemId={item.id} level={level} />

      <TakasakiItemIllustration itemId={item.id} />

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

      {debateSummary && (
        <TakasakiDebateSummarySection
          title="委員会でどんな議論があったか"
          summary={debateSummary}
          level={level}
        />
      )}

      <TakasakiCommitteeDeliberations
        deliberations={getCommitteeDeliberations(item.id)}
        expanded={level === "hard"}
      />

      {tally ? (
        <FactionVoteTable
          forCount={tally.forCount}
          againstCount={tally.againstCount}
          byFaction={tally.byFaction}
        >
          <p className="text-xs leading-6 text-mirai-text-note">
            起立採決で、起立した議員を賛成、起立しなかった議員を反対としています。議長（
            {tally.chair}）は採決に加わりません。
            {tally.absentMembers.length > 0 &&
              `欠席などで採決に加わらなかった議員：${tally.absentMembers.join("、")}。`}
            {splitVote && (
              <>
                出典：
                <a
                  href={splitVote.voteSource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  {splitVote.voteSource.label}
                </a>
              </>
            )}
          </p>
          {splitVote && <TakasakiVoteReasons record={splitVote} />}
        </FactionVoteTable>
      ) : session.voteDetails === "unconfirmed" ? (
        <p className="mt-8 text-sm text-mirai-text-secondary">
          この会期の議員別賛否は未転記です。賛否人数や全会一致かどうかは、このページから断定できません。公式資料で確認してください。
        </p>
      ) : (
        item.result !== null && (
          <p className="mt-8 text-sm text-mirai-text-secondary">
            この議案は簡易採決（議長が出席議員全員に異議がないことを確認）で決まりました。議員ごとの賛否表はありません。
          </p>
        )
      )}

      <div className="mt-10">
        {/* DB確認を待たずにページ本体を表示する */}
        <Suspense fallback={null}>
          <CouncilItemInterviewSection council="takasaki" itemId={item.id} />
        </Suspense>
      </div>

      <div className="mt-10">
        <CouncilItemOpinionSection council="takasaki" itemId={item.id} />
      </div>

      <div className="mt-10">
        <TakasakiDisclaimer sourceUrl={session.sourceUrl} />
      </div>
    </Container>
  );
}
