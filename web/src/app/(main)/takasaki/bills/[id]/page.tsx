import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDifficultyLevel } from "@/features/bill-difficulty/server/loaders/get-difficulty-level";
import { TakasakiItemDetail } from "@/features/takasaki-bills/server/components/takasaki-item-detail";
import { findTakasakiItem } from "@/features/takasaki-bills/shared/utils/sessions";
import { formatItemName } from "@/features/takasaki-bills/shared/utils/votes";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const found = findTakasakiItem(id);
  const item = found?.item;
  if (!item) return { title: "議案が見つかりません" };

  return {
    title: `${formatItemName(item)} ${item.title} | みらい議会＠高崎市`,
    description: `高崎市議会 ${found?.session.name} ${formatItemName(item)} ${item.title}`,
  };
}

export default async function TakasakiItemPage({ params }: Props) {
  const { id } = await params;
  const found = findTakasakiItem(id);
  if (!found) notFound();

  // 意見掲示板と「詳しく」設定（Cookie）を反映するため、リクエストごとに表示する
  const level = await getDifficultyLevel();
  return (
    <TakasakiItemDetail
      session={found.session}
      item={found.item}
      level={level}
    />
  );
}
