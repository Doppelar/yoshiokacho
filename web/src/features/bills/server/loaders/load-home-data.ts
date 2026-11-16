import { getBillsByFeaturedTags } from "@/features/bills/server/loaders/get-bills-by-featured-tags";
import { getComingSoonBills } from "./get-coming-soon-bills";
import { getFeaturedBills } from "./get-featured-bills";
import { getInterviewOpenBills } from "./get-interview-open-bills";

/**
 * トップページ用のデータを並列取得する
 * BFF (Backend For Frontend) パターン
 */
export async function loadHomeData() {
  const [featuredBills, billsByTag, interviewOpenBills, comingSoonBills] =
    await Promise.all([
      getFeaturedBills(),
      getBillsByFeaturedTags(),
      getInterviewOpenBills(),
      getComingSoonBills(),
    ]);

  return {
    billsByTag,
    featuredBills,
    interviewOpenBills,
    comingSoonBills,
  };
}
