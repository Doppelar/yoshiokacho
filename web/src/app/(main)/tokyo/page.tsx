import type { Metadata, Route } from "next";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { TokyoMunicipalityMap } from "@/features/tokyo-map/client/tokyo-municipality-map";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "東京都の区市町村 | みらい議会",
  description:
    "東京都の地図から区市町村を選び、各自治体のみらい議会を開きます。現在は中央区、大田区、足立区を開けます。",
};

export default function TokyoMapPage() {
  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <div className="mb-8 space-y-3">
        <Link
          href={routes.japanMap() as Route}
          className="text-sm font-bold underline underline-offset-2 hover:opacity-80"
        >
          全国の都道府県を見る
        </Link>
        <p className="text-sm font-bold text-primary-accent">東京都</p>
        <h1 className="text-3xl font-bold leading-tight">
          区市町村のみらい議会
        </h1>
        <p className="text-[15px] leading-7 text-black">
          地図上の名前、または一覧のリンクから区市町村を開けます。中央区、大田区、足立区は今すぐ開けます。ほかの区市町村は準備中です。
        </p>
      </div>
      <TokyoMunicipalityMap />
    </Container>
  );
}
