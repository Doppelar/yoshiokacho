import "server-only";

import { unstable_cache } from "next/cache";
import { CACHE_TAGS } from "@/lib/cache-tags";
import type { CouncilBills } from "@/lib/site-brand";
import { withFallback } from "@/lib/utils/with-fallback";
import { findCouncilBills } from "../repositories/council-item-interview-repository";

const _getCachedCouncilBills = unstable_cache(
  async (): Promise<CouncilBills> =>
    Object.fromEntries(
      (await findCouncilBills()).map(({ id, council }) => [id, council])
    ),
  ["council-bills"],
  { revalidate: 3600, tags: [CACHE_TAGS.BILLS] }
);

/**
 * ヘッダー・フッターのサイト名を議案の議会に合わせるための、議案ID → 議会の対応表。
 * council 列がない環境などで取得できないときは空（すべて吉岡町版）にする。
 */
export function getCouncilBills(): Promise<CouncilBills> {
  return withFallback(_getCachedCouncilBills(), {}, "council bills");
}
