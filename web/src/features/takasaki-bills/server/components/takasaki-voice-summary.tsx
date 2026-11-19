import "server-only";

import { Bot, MessageSquare, Users } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { STANCE_LABELS } from "@/features/bill-public-opinions/shared/utils/opinion-input";
import {
  countTotal,
  formatStanceCounts,
  rankItemsByVoices,
  type StanceCounts,
  sumVoiceTallies,
  type VoiceTallies,
  type VoiceTally,
} from "@/features/council-voice-tally/shared/utils/voice-tally";
import { routes } from "@/lib/routes";
import { findTakasakiItem } from "../../shared/utils/sessions";
import { formatItemName } from "../../shared/utils/votes";

/** トップに並べる「声が多い議案」の件数 */
const TOP_ITEM_LIMIT = 5;

/** 高崎市トップの「集まった声」。AIインタビューと意見投稿を分けて数える */
export function TakasakiVoiceSummary({ tallies }: { tallies: VoiceTallies }) {
  const total = sumVoiceTallies(tallies);
  const topItems = rankItemsByVoices(tallies, TOP_ITEM_LIMIT).flatMap(
    (itemId) => {
      const found = findTakasakiItem(itemId);
      return found ? [{ ...found, tally: tallies[itemId] }] : [];
    }
  );

  return (
    <section
      aria-labelledby="takasaki-voices-heading"
      className="mt-8 rounded-2xl border bg-white p-5"
    >
      <h2
        id="takasaki-voices-heading"
        className="flex items-center gap-2 text-lg font-bold"
      >
        <Users className="size-5" aria-hidden />
        みんなから集まった声
      </h2>
      <p className="mt-1 text-sm text-mirai-text-secondary">
        このサイトに寄せられた、議案への賛否の件数です（数分ごとに更新）。
      </p>

      <dl className="mt-4 grid gap-3 sm:grid-cols-2">
        <TotalCard
          icon={<Bot className="size-4" aria-hidden />}
          label="AIインタビュー"
          counts={total.interviews}
        />
        <TotalCard
          icon={<MessageSquare className="size-4" aria-hidden />}
          label="意見投稿"
          counts={total.opinions}
        />
      </dl>

      {topItems.length > 0 && (
        <div className="mt-5">
          <h3 className="text-sm font-bold">声が多く集まっている議案</h3>
          <ul className="mt-2 divide-y">
            {topItems.map(({ item, tally }) => (
              <li key={item.id} className="py-3">
                <Link
                  href={routes.takasakiBillDetail(item.id) as Route}
                  className="font-bold underline underline-offset-2"
                >
                  {formatItemName(item)} {item.title}
                </Link>
                <VoiceCounts tally={tally} className="mt-1" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function TotalCard({
  icon,
  label,
  counts,
}: {
  icon: React.ReactNode;
  label: string;
  counts: StanceCounts;
}) {
  const breakdown = formatStanceCounts(counts, STANCE_LABELS);
  return (
    <div className="rounded-xl bg-muted/50 p-4">
      <dt className="flex items-center gap-1 text-xs font-bold text-mirai-text-secondary">
        {icon}
        {label}
      </dt>
      <dd className="mt-1">
        <span className="text-2xl font-bold">{countTotal(counts)}</span>
        <span className="ml-1 text-sm">件</span>
        {breakdown && (
          <span className="ml-2 text-sm text-mirai-text-secondary">
            （{breakdown}）
          </span>
        )}
      </dd>
    </div>
  );
}

/** 議案ごとの声の件数。AIインタビューと意見投稿を分けて1行ずつ出す */
export function VoiceCounts({
  tally,
  className = "",
}: {
  tally: VoiceTally;
  className?: string;
}) {
  const rows = [
    { label: "AIインタビュー", counts: tally.interviews },
    { label: "意見投稿", counts: tally.opinions },
  ].filter(({ counts }) => countTotal(counts) > 0);
  if (rows.length === 0) return null;

  return (
    <ul className={`text-sm text-mirai-text-secondary ${className}`}>
      {rows.map(({ label, counts }) => (
        <li key={label}>
          {label} {countTotal(counts)}件（
          {formatStanceCounts(counts, STANCE_LABELS)}）
        </li>
      ))}
    </ul>
  );
}
