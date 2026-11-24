import { toCoveragePercentage } from "./calculate-municipality-coverage";

export type CoverageHistoryEntry = {
  /** YYYY-MM-DD（JST） */
  date: string;
  published: number;
  /** グラフの下に出す注記 */
  note?: string;
};

export type CoverageTrendPoint = CoverageHistoryEntry & { percentage: number };

/**
 * 記録と今の掲載数から、推移の点を作る。
 * 今の掲載数が記録の最後と違うときだけ、今日の点を足す（記録の足し忘れでも線は今の値で終わる）。
 */
export function buildCoverageTrend(
  history: readonly CoverageHistoryEntry[],
  published: number,
  today: string
): CoverageTrendPoint[] {
  const past = history.filter((entry) => entry.date <= today);
  const last = past.at(-1);
  const entries =
    last?.published === published
      ? past
      : [
          ...past.filter((entry) => entry.date < today),
          { date: today, published },
        ];
  return entries.map((entry) => ({
    ...entry,
    percentage: toCoveragePercentage(entry.published),
  }));
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const dayNumber = (date: string) =>
  Date.parse(`${date}T00:00:00Z`) / MS_PER_DAY;
const round = (n: number) => Number(n.toFixed(2));

/**
 * 点（1つ以上）を 0〜100 の座標にする。
 * path は viewBox 0 0 100 100 の階段状の線（掲載数は次に変わる日まで続く）。
 * 縦軸の上限は最大値を 5％刻みで切り上げる（最低 5％）。
 */
export function layoutCoverageTrend(points: readonly CoverageTrendPoint[]) {
  const yMax = Math.max(
    5,
    Math.ceil(Math.max(...points.map((point) => point.percentage)) / 5) * 5
  );
  const days = points.map((point) => dayNumber(point.date));
  const span = days[days.length - 1] - days[0];
  const positioned = points.map((point, i) => ({
    ...point,
    x: span === 0 ? 100 : round(((days[i] - days[0]) / span) * 100),
    y: round(100 - (point.percentage / yMax) * 100),
  }));
  const path = positioned
    .map((point, i) =>
      i === 0 ? `M${point.x} ${point.y}` : `H${point.x} V${point.y}`
    )
    .join(" ");
  const yTicks = [0, yMax / 2, yMax].map((value) => ({
    value,
    y: round(100 - (value / yMax) * 100),
  }));
  return { path, markers: positioned, yTicks };
}
