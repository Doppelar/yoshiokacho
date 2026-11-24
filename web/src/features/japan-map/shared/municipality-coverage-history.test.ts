import { describe, expect, it } from "vitest";
import { MUNICIPALITY_COVERAGE_HISTORY } from "./municipality-coverage-history";

describe("全国掲載数の記録", () => {
  it("日付は古い順で、同じ日付が2回出てこない", () => {
    const dates = MUNICIPALITY_COVERAGE_HISTORY.map((entry) => entry.date);
    expect(dates).toEqual([...new Set(dates)].sort());
  });

  it("日付は YYYY-MM-DD で、掲載数は0以上の整数", () => {
    for (const entry of MUNICIPALITY_COVERAGE_HISTORY) {
      expect(entry.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isInteger(entry.published)).toBe(true);
      expect(entry.published).toBeGreaterThanOrEqual(0);
    }
  });
});
