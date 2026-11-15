import type { Metadata } from "next";
import { FeedbackBoard } from "@/features/local-edition-feedback/server/components/feedback-board";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "全国みらい議会への意見掲示板 | みらい議会",
  description: "全国一覧へのご意見や掲載内容の修正提案を投稿・閲覧できます。",
};
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page } = await searchParams;
  return <FeedbackBoard page={page} />;
}
