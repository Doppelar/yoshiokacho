/**
 * ページレイアウトに関するユーティリティ
 *
 * TOP・法案一覧・法案詳細を「メインページ」として扱い、
 * - DifficultySelectorを表示
 * - チャットサイドバー用のオフセットレイアウトを使用
 */

import { routes } from "./routes";

/** 都道府県の地図ページ（routes の *Map）のパス一覧 */
const PREFECTURE_MAP_PATHS = new Set<string>(
  Object.entries(routes)
    .filter(([name]) => name.endsWith("Map"))
    // *Map のルートはすべて引数なし
    .map(([, route]) => (route as () => string)())
);

/**
 * 全国版（全国地図・都道府県ページ・地方版の更新履歴など）かどうかを判定。
 * 全国版ではサイト名を吉岡町版ではなく全国版として表示する。
 */
export function isNationalEditionPage(pathname: string): boolean {
  if (pathname === routes.japanMap()) return true;
  if (pathname.startsWith(`${routes.japanMap()}/`)) return true;
  if (pathname === routes.localEditionUpdates()) return true;
  return PREFECTURE_MAP_PATHS.has(pathname);
}

/** メインページ（TOP、法案一覧、法案詳細）かどうかを判定 */
export function isMainPage(pathname: string): boolean {
  // トップページ
  if (pathname === "/") return true;
  // 法案一覧ページ
  if (pathname === "/bills") return true;
  // 法案詳細ページ（/bills/[id]）- サブパスは除外
  if (/\/bills\/[^/]+$/.test(pathname)) return true;
  return false;
}

/** インタビューチャットページかどうかを判定 */
export function isInterviewPage(pathname: string): boolean {
  // /bills/[id]/interview/chat
  return /\/bills\/[^/]+\/interview\/chat$/.test(pathname);
}

/** インタビューセクション（LP・チャット含む）かどうかを判定 */
export function isInterviewSection(pathname: string): boolean {
  // /bills/[id]/interview 以下すべて
  return /\/bills\/[^/]+\/interview(\/|$)/.test(pathname);
}

/** インタビューページからbillIdを抽出 */
export function extractBillIdFromPath(pathname: string): string | null {
  const match = pathname.match(/\/bills\/([^/]+)/);
  return match ? match[1] : null;
}
