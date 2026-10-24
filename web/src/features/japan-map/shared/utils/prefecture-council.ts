export const ZENKOKU_PREF_COUNCIL_BASE_URL =
  "https://mirai-gikai-zenkoku.vercel.app";

/** 全国版みらい議会の都道府県議会ページのURL（例: gunma → /gunma-pref） */
export function getPrefectureCouncilHref(prefectureId: string): string {
  return `${ZENKOKU_PREF_COUNCIL_BASE_URL}/${prefectureId}-pref`;
}

/** 都道府県名から議会名を作る（例: 群馬県 → 群馬県議会、東京都 → 東京都議会） */
export function getPrefectureCouncilName(prefectureName: string): string {
  return `${prefectureName}議会`;
}
