import { describe, expect, it } from "vitest";
import { MUNICIPALITY_COVERAGE_REGIONS } from "../municipality-coverage-regions";
import type { CoverageRegion } from "./calculate-municipality-coverage";
import { getCompletedPrefectures } from "./get-completed-prefectures";

function createRegion(count = 19): CoverageRegion {
  return {
    prefectureId: "tottori",
    municipalities: Array.from({ length: count }, (_, index) => ({
      name: `市町村${index}町`,
      status: "live",
      href: `/municipality-${index}`,
    })),
  };
}

describe("全市町村掲載達成", () => {
  it("全市町村に公開リンクがある県だけを返す", () => {
    expect(getCompletedPrefectures([createRegion()])).toEqual([
      { prefectureId: "tottori", total: 19 },
    ]);
    expect(getCompletedPrefectures([createRegion(18)])).toEqual([]);
    expect(getCompletedPrefectures([])).toEqual([]);
  });

  it("準備中・リンクなし・空白リンクは達成に数えない", () => {
    for (const change of [
      { status: "upcoming" as const },
      { href: undefined },
      { href: "  " },
    ]) {
      const region = createRegion();
      expect(
        getCompletedPrefectures([
          {
            ...region,
            municipalities: region.municipalities.map((item, index) =>
              index === 0 ? { ...item, ...change } : item
            ),
          },
        ])
      ).toEqual([]);
    }
  });

  it("重複と県議会を足しても欠けた自治体の代わりにしない", () => {
    const region = createRegion(18);
    expect(
      getCompletedPrefectures([
        {
          ...region,
          municipalities: [
            ...region.municipalities,
            region.municipalities[0],
            { name: "鳥取県", status: "live", href: "/prefecture" },
          ],
        },
        region,
      ])
    ).toEqual([]);
  });

  it("市町村総数が不明な県や一部のみ掲載した兵庫県は対象外", () => {
    expect(
      getCompletedPrefectures([
        { ...createRegion(), prefectureId: "unknown" },
        {
          prefectureId: "hyogo",
          municipalities: [
            { name: "宝塚市", status: "live", href: "/takarazuka" },
          ],
        },
      ])
    ).toEqual([]);
  });

  it("実データでは群馬と中国地方の5県が達成している", () => {
    expect(
      getCompletedPrefectures(MUNICIPALITY_COVERAGE_REGIONS)
        .map((item) => item.prefectureId)
        .sort()
    ).toEqual(["gunma", "okayama", "shimane", "tottori", "yamaguchi"]);
  });
});
