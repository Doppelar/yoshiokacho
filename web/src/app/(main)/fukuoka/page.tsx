import type { Metadata, Route } from "next";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { FukuokaMunicipalityMap } from "@/features/fukuoka-map/client/fukuoka-municipality-map";
import { FUKUOKA_PREF_COUNCIL_HREF } from "@/features/fukuoka-map/shared/municipalities";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "福岡県の市町村 | みらい議会",
  description:
    "福岡県の地図から市町村を選び、各自治体のみらい議会を開きます。現在は福岡市、田川市、福津市、遠賀町、広川町を開けます。",
};

export default function FukuokaMapPage() {
  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <div className="mb-8 space-y-3">
        <Link
          href={routes.japanMap() as Route}
          className="text-sm font-bold underline underline-offset-2 hover:opacity-80"
        >
          全国の都道府県を見る
        </Link>
        <p className="text-sm font-bold text-primary-accent">福岡県</p>
        <h1 className="text-3xl font-bold leading-tight">市町村のみらい議会</h1>
        <p className="text-[15px] leading-7 text-black">
          地図上の名前、または一覧のリンクから市町村を開けます。福岡市、田川市、福津市、遠賀町、広川町は今すぐ開けます。ほかの市町村は準備中です。
        </p>
      </div>

      <section className="mb-8 rounded-2xl border bg-white p-5">
        <p className="text-sm text-muted-foreground">県のみらい議会</p>
        <h2 className="mt-1 text-2xl font-bold">みらい議会＠福岡県</h2>
        <p className="mt-2 text-sm">
          福岡県議会のサイトを別ページで開きます。全国の都道府県は日本地図から開けます。
        </p>
        <Button asChild className="mt-4">
          <a
            href={FUKUOKA_PREF_COUNCIL_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            みらい議会＠福岡県を見る
          </a>
        </Button>
      </section>

      <FukuokaMunicipalityMap />
    </Container>
  );
}
