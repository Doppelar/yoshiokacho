import type { BillWithContent } from "../types";
import type { BillsListParams } from "./parse-bills-list-params";
import { searchBills } from "./search-bills";

type FilterableBill = Pick<BillWithContent, "name" | "bill_content" | "tags">;

/**
 * ステータス以外の絞り込み（キーワード・カテゴリ）をまとめて適用する。
 *
 * ステータスのタブに出す件数は、この結果を母集合にして数える。先に適用しないと
 * タブの数字が実際に表示される件数とずれる。
 *
 * 引数は params ごと受け取る。個別に並べると string と string | null が隣接して、
 * 入れ替えても型が通ってしまう。
 */
export function filterBills<T extends FilterableBill>(
  bills: readonly T[],
  params: Pick<BillsListParams, "query" | "tagId">
): T[] {
  let filtered = searchBills(bills, params.query);

  if (params.tagId) {
    filtered = filtered.filter((bill) =>
      bill.tags.some((tag) => tag.id === params.tagId)
    );
  }
  return filtered;
}
