import "server-only";
import { ArrowUpRight, Trophy } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { MUNICIPALITY_COVERAGE_REGIONS } from "../../shared/municipality-coverage-regions";
import { PREFECTURES } from "../../shared/prefectures";
import { getCompletedPrefectures } from "../../shared/utils/get-completed-prefectures";

export function CompletedPrefectures() {
  const completed = getCompletedPrefectures(MUNICIPALITY_COVERAGE_REGIONS);
  const prefectures = PREFECTURES.flatMap((prefecture) => {
    const coverage = completed.find(
      (item) => item.prefectureId === prefecture.id
    );
    return coverage && prefecture.href && !prefecture.external
      ? [{ ...prefecture, href: prefecture.href, total: coverage.total }]
      : [];
  });
  if (prefectures.length === 0) return null;

  return (
    <section
      aria-label="全市町村掲載達成の都道府県"
      className="mt-5 border-t border-border pt-5"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="inline-flex items-center gap-1.5 rounded-full bg-mirai-badge-yellow px-3 py-1 text-sm font-bold text-mirai-text">
          <Trophy className="size-4" aria-hidden="true" />
          全市町村掲載達成！
        </h2>
        <p className="text-sm font-bold text-primary-accent">
          {prefectures.length}県で達成
        </p>
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {prefectures.map((prefecture) => (
          <li key={prefecture.id}>
            <Link
              href={prefecture.href as Route}
              className="flex h-full flex-col gap-2 rounded-xl border border-primary-accent bg-mirai-brand-mint p-3 text-mirai-brand-teal-deep transition-colors hover:bg-mirai-gradient-end focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-accent"
              aria-label={
                prefecture.name +
                "、全" +
                prefecture.total +
                "市町村掲載達成。市町村地図を見る"
              }
            >
              <span className="flex items-center justify-between gap-1 font-bold">
                {prefecture.name}
                <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
              </span>
              <span className="text-xs">全{prefecture.total}市町村を掲載</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold">
                <Trophy className="size-3" aria-hidden="true" />
                掲載率100%
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
