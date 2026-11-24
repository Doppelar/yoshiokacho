import type { CoverageHistoryEntry } from "./utils/build-coverage-trend";

/**
 * 全国掲載数が変わった日の記録（日本時間、その日の最後の状態）。古い順。
 *
 * production ブランチのコミット履歴を1日ずつさかのぼり、
 * calculateMunicipalityCoverage と同じ数え方で数え直したもの。
 * 自治体を追加して掲載数が変わったら、その日の日付と掲載数を末尾に足す。
 * 足し忘れても、グラフは今の掲載数をデプロイした日の点として描く（日付はおおよそ）。
 * note はグラフの下に注記として出る。
 */
export const MUNICIPALITY_COVERAGE_HISTORY: readonly CoverageHistoryEntry[] = [
  { date: "2026-10-13", published: 18 },
  { date: "2026-10-24", published: 19 },
  { date: "2026-10-25", published: 20 },
  { date: "2026-10-30", published: 21 },
  { date: "2026-11-14", published: 34 },
  {
    date: "2026-11-15",
    published: 213,
    note: "長野・岡山・島根・鳥取・山口県などの市町村地図をまとめて掲載",
  },
  { date: "2026-11-16", published: 252 },
  { date: "2026-11-17", published: 262 },
  { date: "2026-11-18", published: 275 },
  { date: "2026-11-19", published: 277 },
  { date: "2026-11-21", published: 278 },
  { date: "2026-11-23", published: 282 },
];
