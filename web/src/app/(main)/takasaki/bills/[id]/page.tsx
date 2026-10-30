import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TakasakiItemDetail } from "@/features/takasaki-bills/server/components/takasaki-item-detail";
import { TAKASAKI_SESSION_R8_5 } from "@/features/takasaki-bills/shared/session-r8-5";
import { formatItemName } from "@/features/takasaki-bills/shared/utils/votes";

type Props = {
  params: Promise<{ id: string }>;
};

function findItem(id: string) {
  return TAKASAKI_SESSION_R8_5.items.find((item) => item.id === id);
}

export function generateStaticParams() {
  return TAKASAKI_SESSION_R8_5.items.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = findItem(id);
  if (!item) return { title: "議案が見つかりません" };

  return {
    title: `${formatItemName(item)} ${item.title} | みらい議会＠高崎市`,
    description: `高崎市議会 ${TAKASAKI_SESSION_R8_5.name} ${formatItemName(item)} ${item.title}`,
  };
}

export default async function TakasakiItemPage({ params }: Props) {
  const { id } = await params;
  const item = findItem(id);
  if (!item) notFound();

  return <TakasakiItemDetail session={TAKASAKI_SESSION_R8_5} item={item} />;
}
