import { isNationalEditionPage } from "./page-layout-utils";
import { routes } from "./routes";

export type SiteBrand = {
  /** ヘッダー・フッターに表示するサイト名 */
  name: string;
  /** ロゴのリンク先 */
  href: string;
};

const YOSHIOKA_BRAND: SiteBrand = {
  name: "みらい議会＠吉岡町",
  href: routes.home(),
};

const TAKASAKI_BRAND: SiteBrand = {
  name: "みらい議会＠高崎市",
  href: routes.takasakiHome(),
};

const NATIONAL_BRAND: SiteBrand = {
  name: "みらい議会 全国版",
  href: routes.japanMap(),
};

/**
 * 表示中のページに合わせたサイト名とロゴのリンク先。
 * 全国地図と都道府県ページは全国版、高崎市のページは高崎市版として見せる。
 */
export function getSiteBrand(pathname: string): SiteBrand {
  if (isNationalEditionPage(pathname)) return NATIONAL_BRAND;
  if (isTakasakiPage(pathname)) return TAKASAKI_BRAND;
  return YOSHIOKA_BRAND;
}

function isTakasakiPage(pathname: string): boolean {
  const home = routes.takasakiHome();
  return pathname === home || pathname.startsWith(`${home}/`);
}
