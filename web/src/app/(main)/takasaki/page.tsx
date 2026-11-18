import type { Metadata } from "next";
import { getDifficultyLevel } from "@/features/bill-difficulty/server/loaders/get-difficulty-level";
import { TakasakiHome } from "@/features/takasaki-bills/server/components/takasaki-home";

export const metadata: Metadata = {
  title: "みらい議会＠高崎市",
  description:
    "高崎市議会でどんな議案が審議され、どう決まったかを、会派・議員ごとの賛否とあわせて伝えるページです。",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ session?: string }>;
}) {
  const [{ session }, level] = await Promise.all([
    searchParams,
    getDifficultyLevel(),
  ]);
  return <TakasakiHome sessionId={session} level={level} />;
}
