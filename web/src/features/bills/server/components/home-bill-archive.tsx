import "server-only";
import { ChevronDown } from "lucide-react";
import { BillCardList } from "../../client/components/bill-list/bill-card-list";
import type { BillWithContent } from "../../shared/types";
import type { ArchiveYear } from "../../shared/utils/group-bill-archive";
import { pickHomeSections } from "../../shared/utils/pick-home-sections";

export function HomeBillArchive({
  archive,
  featuredBills,
  interviewOpenBills,
  inSession,
}: {
  archive: ArchiveYear<BillWithContent>[];
  featuredBills: BillWithContent[];
  interviewOpenBills: BillWithContent[];
  inSession: boolean;
}) {
  const years = archive
    .map((year) => ({
      ...year,
      groups: pickHomeSections({
        billsByTag: year.groups,
        featuredBills,
        interviewOpenBills,
        inSession,
      }).tagGroups,
    }))
    .filter((year) => year.groups.length > 0);
  if (years.length === 0) return null;
  return (
    <section aria-label="会期・月別の議案" className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">会期・月別の議案</h2>
        <p className="text-sm leading-6 text-muted-foreground">
          今年度は会期別、過年度は開催月別にまとめています。直近会期を開いています。見出しを押すと、過去の議案もすべて読めます。
        </p>
      </div>
      {years.map((year) => (
        <section key={year.fiscalYear ?? "unknown"} className="space-y-3">
          <h3 className="text-xl font-bold text-primary-accent">
            {year.fiscalYear === null
              ? "開催時期が未登録"
              : `${year.fiscalYear}年度`}
          </h3>
          {year.groups.map((group) => (
            <details
              key={group.key}
              open={group.open}
              className="group rounded-2xl border border-border bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 rounded-2xl p-4 font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-accent [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 flex-1">{group.label}</span>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {group.bills.length}件
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="border-t border-border p-4">
                <BillCardList bills={group.bills} />
              </div>
            </details>
          ))}
        </section>
      ))}
    </section>
  );
}
