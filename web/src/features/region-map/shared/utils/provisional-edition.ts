/** 暫定公開ページ（運営チームが muse.ai 上に作成したもの）を配信しているホスト。 */
const PROVISIONAL_HOSTS = new Set(["muse.ai", "www.muse.ai"]);

/**
 * 地域の運営者が決まるまで運営チームが暫定的に公開しているページかどうか。
 * 専用サイトやこのサイト内のページ（高崎市・太田市・吉岡町など）は対象外。
 */
export function isProvisionalEdition(href?: string): boolean {
  if (!href) return false;
  try {
    return PROVISIONAL_HOSTS.has(new URL(href).hostname);
  } catch {
    return false;
  }
}

/** 公開済みのうち暫定公開の件数を数える。 */
export function countProvisionalEditions(
  items: readonly { href?: string }[]
): number {
  return items.filter((item) => isProvisionalEdition(item.href)).length;
}
