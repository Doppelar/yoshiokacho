import { describe, expect, it } from "vitest";
import { calculateMunicipalityCoverage } from "./calculate-municipality-coverage";

describe("自治体の掲載率", () => {
  it("公開リンクがある自治体だけを数える", () => {
    const coverage = calculateMunicipalityCoverage([
      {
        prefectureId: "gunma",
        municipalities: [
          { name: "吉岡町", status: "live", href: "/" },
          { name: "未公開町", status: "upcoming", href: "/upcoming" },
          { name: "リンクなし町", status: "live" },
          { name: "空欄町", status: "live", href: "  " },
        ],
      },
    ]);
    expect(coverage).toEqual({ published: 1, total: 1741, percentage: 0.1 });
  });

  it("同じ自治体が複数回登録されても一度だけ数える", () => {
    const municipality = { name: "吉岡町", status: "live" as const, href: "/" };
    expect(
      calculateMunicipalityCoverage([
        { prefectureId: "gunma", municipalities: [municipality, municipality] },
        { prefectureId: "gunma", municipalities: [municipality] },
      ]).published
    ).toBe(1);
  });

  it("県が異なる同名自治体と東京の特別区をそれぞれ数える", () => {
    expect(
      calculateMunicipalityCoverage([
        {
          prefectureId: "gunma",
          municipalities: [
            { name: "南牧村", status: "live", href: "/gunma-nanmoku" },
          ],
        },
        {
          prefectureId: "nagano",
          municipalities: [
            { name: "南牧村", status: "live", href: "/nagano-nanmoku" },
          ],
        },
        {
          prefectureId: "tokyo",
          municipalities: [{ name: "中央区", status: "live", href: "/chuo" }],
        },
      ]).published
    ).toBe(3);
  });

  it("登録がない場合は0自治体・0%になる", () => {
    expect(calculateMunicipalityCoverage([])).toEqual({
      published: 0,
      total: 1741,
      percentage: 0,
    });
  });
});
