/**
 * 運営チームが muse.ai 上に暫定公開ページを作成している都道府県（JIS コード）。
 * 青森・群馬・長野・京都・鳥取・島根・岡山・山口。
 * 栃木などほかの県の muse.ai ページは各地の運営者によるもので、暫定公開ではない。
 */
const PROVISIONAL_PREFECTURE_CODES = new Set([
  "02",
  "10",
  "20",
  "26",
  "31",
  "32",
  "33",
  "35",
]);

/** 暫定公開ページを配信しているホスト。 */
const PROVISIONAL_HOSTS = new Set(["muse.ai", "www.muse.ai"]);

/**
 * 地域の運営者が決まるまで運営チームが暫定的に公開しているページかどうか。
 * 対象県の muse.ai 上のページだけが該当し、専用サイトやこのサイト内のページ
 * （高崎市・太田市・吉岡町など）は対象外。
 */
export function isProvisionalEdition(
  prefectureCode: string,
  href?: string
): boolean {
  if (!href || !PROVISIONAL_PREFECTURE_CODES.has(prefectureCode)) return false;
  try {
    return PROVISIONAL_HOSTS.has(new URL(href).hostname);
  } catch {
    return false;
  }
}

/** 公開済みのうち暫定公開の件数を数える。 */
export function countProvisionalEditions(
  prefectureCode: string,
  items: readonly { href?: string }[]
): number {
  return items.filter((item) => isProvisionalEdition(prefectureCode, item.href))
    .length;
}
