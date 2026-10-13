import type { Metadata, Route } from "next";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { OkinawaMunicipalityMap } from "@/features/okinawa-map/client/okinawa-municipality-map";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "沖縄県の市町村 | みらい議会",
  description:
    "沖縄県の地図から市町村を選び、各自治体のみらい議会を開きます。現在は石垣市を開けます。",
};

export default function OkinawaMapPage() {
  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <div className="mb-8 space-y-3">
        <Link
          href={routes.japanMap() as Route}
          className="text-sm font-bold underline underline-offset-2 hover:opacity-80"
        >
          全国の都道府県を見る
        </Link>
        <p className="text-sm font-bold text-primary-accent">沖縄県</p>
        <h1 className="text-3xl font-bold leading-tight">市町村のみらい議会</h1>
        <p className="text-[15px] leading-7 text-black">
          地図上の名前、または一覧のリンクから市町村を開けます。石垣市は今すぐ開けます。ほかの市町村は準備中です。
        </p>
      </div>
      <OkinawaMunicipalityMap />
    </Container>
  );
}
