import { describe, expect, it } from "vitest";
import {
  buildCoverageTrend,
  layoutCoverageTrend,
} from "./build-coverage-trend";

const history = [
  { date: "2026-10-13", published: 18 },
  { date: "2026-11-15", published: 213, note: "まとめて掲載" },
  { date: "2026-11-23", published: 282 },
];

describe("全国掲載率の推移", () => {
  it("今の掲載数が記録と同じなら、記録の点だけを使う", () => {
    expect(buildCoverageTrend(history, 282, "2026-11-30")).toEqual([
      { date: "2026-10-13", published: 18, percentage: 1 },
      {
        date: "2026-11-15",
        published: 213,
        note: "まとめて掲載",
        percentage: 12.2,
      },
      { date: "2026-11-23", published: 282, percentage: 16.2 },
    ]);
  });

  it("今の掲載数が記録と違えば、今日の点を足す", () => {
    expect(buildCoverageTrend(history, 290, "2026-11-30").at(-1)).toEqual({
      date: "2026-11-30",
      published: 290,
      percentage: 16.7,
    });
  });

  it("今日の記録と今の掲載数が違えば、今日の点を今の掲載数で置き換える", () => {
    const points = buildCoverageTrend(history, 285, "2026-11-23");
    expect(points).toHaveLength(3);
    expect(points.at(-1)).toEqual({
      date: "2026-11-23",
      published: 285,
      percentage: 16.4,
    });
  });

  it("今日より後の記録は使わない", () => {
    expect(
      buildCoverageTrend(history, 213, "2026-11-20").map((p) => p.date)
    ).toEqual(["2026-10-13", "2026-11-15"]);
  });

  it("記録がなくても今日の点だけで描ける", () => {
    expect(buildCoverageTrend([], 5, "2026-11-30")).toEqual([
      { date: "2026-11-30", published: 5, percentage: 0.3 },
    ]);
  });

  it("日付の幅いっぱいに階段状の線を引き、縦軸は 5％刻みで切り上げる", () => {
    const layout = layoutCoverageTrend([
      { date: "2026-11-01", published: 10, percentage: 2 },
      { date: "2026-11-05", published: 15, percentage: 3 },
      { date: "2026-11-11", published: 20, percentage: 4 },
    ]);
    expect(layout.path).toBe("M0 60 H40 V40 H100 V20");
    expect(layout.markers.map((m) => [m.x, m.y])).toEqual([
      [0, 60],
      [40, 40],
      [100, 20],
    ]);
    expect(layout.yTicks).toEqual([
      { value: 0, y: 100 },
      { value: 2.5, y: 50 },
      { value: 5, y: 0 },
    ]);
  });

  it("最大値がちょうど 5％刻みならそれを上限にする", () => {
    const layout = layoutCoverageTrend([
      { date: "2026-11-01", published: 0, percentage: 10 },
      { date: "2026-11-02", published: 0, percentage: 20 },
    ]);
    expect(layout.yTicks.at(-1)).toEqual({ value: 20, y: 0 });
  });

  it("点が1つなら右端に置く", () => {
    const layout = layoutCoverageTrend([
      { date: "2026-11-30", published: 5, percentage: 0.3 },
    ]);
    expect(layout.markers[0]).toMatchObject({ x: 100 });
  });
});
