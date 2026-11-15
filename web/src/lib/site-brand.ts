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

const NATIONAL_BRAND: SiteBrand = {
  name: "みらい議会 全国版",
  href: routes.japanMap(),
};

/**
 * 表示中のページに合わせたサイト名とロゴのリンク先。
 * 全国地図と都道府県ページは吉岡町版ではなく全国版として見せる。
 */
export function getSiteBrand(pathname: string): SiteBrand {
  return isNationalEditionPage(pathname) ? NATIONAL_BRAND : YOSHIOKA_BRAND;
}
