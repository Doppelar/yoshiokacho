import "server-only";
import { MUNICIPALITY_COVERAGE_REGIONS } from "../../shared/municipality-coverage-regions";
import {
  calculateMunicipalityCoverage,
  MUNICIPALITY_TOTAL_SOURCE,
} from "../../shared/utils/calculate-municipality-coverage";

export function MunicipalityCoverage() {
  const { published, total, percentage } = calculateMunicipalityCoverage(
    MUNICIPALITY_COVERAGE_REGIONS
  );

  return (
    <section
      aria-label="全国の自治体掲載状況"
      className="mb-8 rounded-2xl border border-primary-accent bg-white p-5 md:p-6"
    >
      <p className="text-sm font-bold text-primary-accent">
        みらい議会の全国掲載状況
      </p>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <p className="font-bold">
          <span className="text-4xl tabular-nums">
            {published.toLocaleString("ja-JP")}
          </span>
          <span className="ml-2 text-base text-muted-foreground">
            / {total.toLocaleString("ja-JP")} 自治体を掲載
          </span>
        </p>
        <p className="text-2xl font-bold tabular-nums text-primary-accent">
          {percentage.toFixed(1)}％
        </p>
      </div>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        公開リンクのある市区町村を集計。東京23区を含みます。
        <a
          href={MUNICIPALITY_TOTAL_SOURCE}
          className="ml-1 underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          全国数の出典：総務省統計局（2025年国勢調査）
        </a>
      </p>
    </section>
  );
}
