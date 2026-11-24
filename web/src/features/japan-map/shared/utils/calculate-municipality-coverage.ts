export type CoverageRegion = {
  prefectureId: string;
  municipalities: readonly {
    name: string;
    status: "live" | "upcoming";
    href?: string;
  }[];
};

// 2025年国勢調査・表III-2の1,719市町村は東京都特別区部を1市とする。
// 特別区を23自治体に数え直す。政令指定都市の行政区は加算しない。
export const NATIONAL_MUNICIPALITY_TOTAL = 1719 - 1 + 23;
export const MUNICIPALITY_TOTAL_SOURCE =
  "https://www.stat.go.jp/data/kokusei/2025/kekka/pdf/outline.pdf#page=14";

/** 掲載率（％、小数1桁）。 */
export const toCoveragePercentage = (
  published: number,
  total: number = NATIONAL_MUNICIPALITY_TOTAL
) => Number(((published / total) * 100).toFixed(1));

/** 掲載率の表示 (例: 16.2％)。 */
export const formatCoveragePercentage = (percentage: number) =>
  `${percentage.toFixed(1)}％`;

export function calculateMunicipalityCoverage(
  regions: readonly CoverageRegion[]
) {
  const publishedMunicipalities = new Set<string>();
  for (const region of regions) {
    for (const municipality of region.municipalities) {
      if (municipality.status === "live" && municipality.href?.trim()) {
        publishedMunicipalities.add(
          `${region.prefectureId}:${municipality.name}`
        );
      }
    }
  }
  const published = publishedMunicipalities.size;
  return {
    published,
    total: NATIONAL_MUNICIPALITY_TOTAL,
    percentage: toCoveragePercentage(published),
  };
}
