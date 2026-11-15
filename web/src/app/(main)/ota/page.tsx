import type { Metadata } from "next";
import { OtaHome } from "@/features/ota-bills/server/components/ota-home";

export const metadata: Metadata = {
  title: "みらい議会＠太田市",
  description:
    "2025年・2026年の太田市議会の会期別議案と公式議決結果を紹介します。",
};

export default async function OtaHomePage({
  searchParams,
}: {
  searchParams: Promise<{ session?: string }>;
}) {
  const { session } = await searchParams;
  return <OtaHome sessionId={session} />;
}
