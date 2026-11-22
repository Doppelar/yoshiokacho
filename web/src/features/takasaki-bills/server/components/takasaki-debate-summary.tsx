import "server-only";

import { ScrollText } from "lucide-react";
import { DifficultySelector } from "@/features/bill-difficulty/client/components/difficulty-selector";
import type { DifficultyLevelEnum } from "@/features/bill-difficulty/shared/types";
import type { TakasakiDebateSummary } from "../../shared/types";
import {
  describeDifficulty,
  selectDebateParagraphs,
} from "../../shared/utils/debate-summaries";

/** 会議録でどんな議論が交わされたかのまとめ。ふつう／詳しくを切り替えられる */
export function TakasakiDebateSummarySection({
  title,
  summary,
  level,
}: {
  title: string;
  summary: TakasakiDebateSummary;
  level: DifficultyLevelEnum;
}) {
  return (
    <section className="mt-8 space-y-4 rounded-2xl border bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <ScrollText aria-hidden="true" className="size-5" />
          {title}
        </h2>
        <DifficultySelector currentLevel={level} maintainScrollFromBottom />
      </div>
      <p className="text-xs text-mirai-text-note">
        {describeDifficulty(level)}
      </p>
      <div className="space-y-3 text-[15px] leading-7">
        {selectDebateParagraphs(summary, level).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="text-xs text-mirai-text-note">
        会議録をもとに本サイトがまとめたものです。正確な発言は会議録で確認してください。
      </p>
    </section>
  );
}
