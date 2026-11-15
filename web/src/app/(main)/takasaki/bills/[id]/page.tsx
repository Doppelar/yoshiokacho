import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TakasakiItemDetail } from "@/features/takasaki-bills/server/components/takasaki-item-detail";
import { TAKASAKI_SESSIONS } from "@/features/takasaki-bills/shared/sessions";
import { findTakasakiItem } from "@/features/takasaki-bills/shared/utils/sessions";
import { formatItemName } from "@/features/takasaki-bills/shared/utils/votes";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return TAKASAKI_SESSIONS.flatMap((session) =>
    session.items.map((item) => ({ id: item.id }))
  );
}

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

  return <TakasakiItemDetail session={found.session} item={found.item} />;
}
