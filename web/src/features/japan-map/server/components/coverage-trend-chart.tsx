import "server-only";
import { formatJapanIsoDate, formatMonthDay } from "@/lib/utils/date";
import { MUNICIPALITY_COVERAGE_HISTORY } from "../../shared/municipality-coverage-history";
import {
  buildCoverageTrend,
  layoutCoverageTrend,
} from "../../shared/utils/build-coverage-trend";
import { formatCoveragePercentage } from "../../shared/utils/calculate-municipality-coverage";

type TrendLayout = ReturnType<typeof layoutCoverageTrend>;
type TrendMarker = TrendLayout["markers"][number];

/** 全国掲載率の推移。 */
export function CoverageTrendChart({ published }: { published: number }) {
  const { path, markers, yTicks } = layoutCoverageTrend(
    buildCoverageTrend(
      MUNICIPALITY_COVERAGE_HISTORY,
      published,
      formatJapanIsoDate()
    )
  );
  const first = markers[0];
  const last = markers[markers.length - 1];

  return (
    <figure className="mt-5 border-t border-border pt-5">
      <figcaption className="text-sm font-bold text-mirai-text">
        掲載率の推移
        <span className="ml-2 text-xs font-normal text-muted-foreground">
          {formatMonthDay(first.date)}の
          {formatCoveragePercentage(first.percentage)}から
          {formatMonthDay(last.date)}の
          {formatCoveragePercentage(last.percentage)}へ
        </span>
      </figcaption>
      <TrendPlot path={path} markers={markers} yTicks={yTicks} />
      <TrendTable markers={markers} />
      <ul className="mt-3 space-y-1 text-xs leading-5 text-muted-foreground">
        <li>掲載数が変わった日に点を打っています。</li>
        {markers
          .filter((marker) => marker.note)
          .map((marker) => (
            <li key={marker.date}>
              {formatMonthDay(marker.date)}：{marker.note}
            </li>
          ))}
      </ul>
    </figure>
  );
}

/**
 * 線は SVG（アイコンではなくグラフの描画）、点と文字は HTML。
 * 線だけを縦横に伸ばすので、幅が変わっても文字や点は歪まない。
 */
function TrendPlot({ path, markers, yTicks }: TrendLayout) {
  const first = markers[0];
  const last = markers[markers.length - 1];
  return (
    <div className="mt-4 pl-10 pr-12">
      <div className="relative h-40 md:h-48" aria-hidden="true">
        {yTicks.map((tick) => (
          <div
            key={tick.value}
            className="absolute inset-x-0 border-t border-border"
            style={{ top: `${tick.y}%` }}
          >
            <span className="absolute -left-10 -translate-y-1/2 text-xs tabular-nums text-muted-foreground">
              {tick.value}％
            </span>
          </div>
        ))}
        <svg
          className="absolute inset-0 size-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d={path}
            className="fill-none stroke-primary-accent"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {markers.map((marker) => (
          <span
            key={marker.date}
            title={`${formatMonthDay(marker.date)} ${marker.published}自治体（${formatCoveragePercentage(marker.percentage)}）`}
            className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-primary-accent"
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
          />
        ))}
        <span
          className="absolute ml-2 -translate-y-1/2 text-xs font-bold tabular-nums text-primary-accent"
          style={{ left: "100%", top: `${last.y}%` }}
        >
          {formatCoveragePercentage(last.percentage)}
        </span>
      </div>
      <div className="mt-2 flex justify-between text-xs tabular-nums text-muted-foreground">
        <span>{formatMonthDay(first.date)}</span>
        <span>{formatMonthDay(last.date)}</span>
      </div>
    </div>
  );
}

/** グラフの中身を読み上げで伝える表。 */
function TrendTable({ markers }: { markers: readonly TrendMarker[] }) {
  return (
    <table className="sr-only">
      <caption>全国掲載率の推移</caption>
      <thead>
        <tr>
          <th scope="col">日付</th>
          <th scope="col">掲載自治体数</th>
          <th scope="col">掲載率</th>
        </tr>
      </thead>
      <tbody>
        {markers.map((marker) => (
          <tr key={marker.date}>
            <td>{marker.date}</td>
            <td>{marker.published}</td>
            <td>{formatCoveragePercentage(marker.percentage)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
