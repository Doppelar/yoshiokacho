import { PREFECTURE_MUNICIPALITY_TOTALS } from "../prefecture-municipality-totals";
import type { CoverageRegion } from "./calculate-municipality-coverage";

export function getCompletedPrefectures(regions: readonly CoverageRegion[]) {
  const publishedByPrefecture = new Map<string, Set<string>>();
  for (const region of regions) {
    const published =
      publishedByPrefecture.get(region.prefectureId) ?? new Set<string>();
    for (const municipality of region.municipalities) {
      if (
        /[市区町村]$/.test(municipality.name) &&
        municipality.status === "live" &&
        municipality.href?.trim()
      ) {
        published.add(municipality.name);
      }
    }
    publishedByPrefecture.set(region.prefectureId, published);
  }

  return [...publishedByPrefecture].flatMap(([prefectureId, published]) => {
    const total = PREFECTURE_MUNICIPALITY_TOTALS[prefectureId];
    return total && published.size === total ? [{ prefectureId, total }] : [];
  });
}
