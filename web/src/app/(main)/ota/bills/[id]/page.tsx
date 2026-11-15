import type { Metadata } from "next";
import { OtaBillDetail } from "@/features/ota-bills/server/components/ota-bill-detail";
import { getOtaBillById, OTA_BILLS } from "@/features/ota-bills/shared/bills";

type OtaBillDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return OTA_BILLS.map((bill) => ({ id: bill.id }));
}

export async function generateMetadata({
  params,
}: OtaBillDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const bill = getOtaBillById(id);

  if (!bill) {
    return { title: "議案が見つかりません" };
  }

  return {
    title: `${bill.name} ${bill.officialName} | みらい議会＠太田市`,
    description: `太田市議会 ${bill.name} ${bill.officialName}`,
  };
}

export default async function Page({ params }: OtaBillDetailPageProps) {
  const { id } = await params;
  return <OtaBillDetail id={id} />;
}
