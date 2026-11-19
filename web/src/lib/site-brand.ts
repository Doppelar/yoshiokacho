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

/** 「医療のこれからを考える会」は全国版とは別のページとして見せる */
const IRYO_BRAND: SiteBrand = {
  name: "医療のこれからを考える会",
  href: routes.iryoForum(),
};

/** 議会ID（bills.council）ごとのサイト名 */
const COUNCIL_BRANDS: Readonly<Record<string, SiteBrand>> = {
  takasaki: TAKASAKI_BRAND,
  // 全国版のテーマ（医療のこれから）のAIインタビュー・回答一覧
  national: IRYO_BRAND,
};

/** 吉岡町以外の議会の議案（bills.id → bills.council） */
export type CouncilBills = Readonly<Record<string, string>>;

/**
 * 表示中のページに合わせたサイト名とロゴのリンク先。
 * 全国地図と都道府県ページは全国版、高崎市のページは高崎市版として見せる。
 * 議案のAIインタビュー・意見ページ（/bills/[id]/...）やレポートでは、
 * その議案（pageBillId があればそれを優先）の議会に合わせる。
 */
export function getSiteBrand(
  pathname: string,
  councilBills: CouncilBills = {},
  pageBillId: string | null = null
): SiteBrand {
  if (isIryoForumPage(pathname)) return IRYO_BRAND;
  if (isNationalEditionPage(pathname)) return NATIONAL_BRAND;
  if (isTakasakiPage(pathname)) return TAKASAKI_BRAND;
  const billId = pageBillId ?? extractBillIdFromBillPath(pathname);
  const council = billId === null ? undefined : councilBills[billId];
  return (council && COUNCIL_BRANDS[council]) || YOSHIOKA_BRAND;
}

/** /bills/[id]/... と /preview/bills/[id]/... から議案IDを取り出す */
function extractBillIdFromBillPath(pathname: string): string | null {
  return pathname.match(/^(?:\/preview)?\/bills\/([^/]+)/)?.[1] ?? null;
}

function isIryoForumPage(pathname: string): boolean {
  const home = routes.iryoForum();
  return pathname === home || pathname.startsWith(`${home}/`);
}

function isTakasakiPage(pathname: string): boolean {
  const home = routes.takasakiHome();
  return pathname === home || pathname.startsWith(`${home}/`);
}
