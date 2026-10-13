import type { Metadata, Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { Card } from "@/components/ui/card";
import { getDifficultyLevel } from "@/features/bill-difficulty/server/loaders/get-difficulty-level";
import { CouncilSwitchBanner } from "@/features/gunma-map/client/council-switch-banner";
import { OTA_BILLS } from "@/features/ota-bills/shared/bills";
import { AI_SUMMARY_DISCLAIMER } from "@/lib/disclaimers";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "みらい議会＠太田市",
  description:
    "太田市議会で今どんな議案が検討されているか、わかりやすく伝えるプラットフォームです。",
};

export default async function OtaHomePage() {
  const difficulty = await getDifficultyLevel();

  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <CouncilSwitchBanner currentLabel="みらい議会＠太田市" />

      <section className="rounded-2xl bg-mirai-light-gradient px-5 py-6">
        <p className="text-sm font-bold text-primary-accent">太田市</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight">
          市議会での議論を
          <br />
          できる限りわかりやすく
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-black">
          みらい議会＠太田市は、太田市議会で今どんな議案が検討されているか、わかりやすく伝えるページです。住民の意見を政治に届けることを目指して、これから順次更新していきます。
        </p>
      </section>

      <section className="flex flex-col gap-6 py-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-bold leading-[1.48] text-black">
            注目の議案
          </h2>
          <p className="text-xs text-mirai-text-secondary">
            みらい議会は、順次更新されていきます
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {OTA_BILLS.map((bill) => {
            const body = difficulty === "hard" ? bill.hard : bill.normal;
            const summary = body?.split("\n").find((line) => line.trim());
            return (
              <Link key={bill.id} href={routes.otaBillDetail(bill.id) as Route}>
                <Card className="overflow-hidden border border-black shadow-none transition-colors hover:bg-muted/50">
                  <div className="flex items-start gap-4 p-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-primary-accent">
                        太田市議会 {bill.name}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold leading-tight">
                        {bill.officialName}
                      </h3>
                      <p className="mt-2 text-xs font-bold">{bill.status}</p>
                      <p className="mt-2 text-sm text-mirai-text-secondary">
                        {summary ?? "本文はこれから掲載します。"}
                      </p>
                    </div>
                    {bill.thumbnailUrl && (
                      <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={bill.thumbnailUrl}
                          alt={bill.name}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="space-y-6 pb-6">
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-black">
            掲載コンテンツについて
          </h2>
          <p className="text-xs leading-relaxed text-mirai-text-note">
            {AI_SUMMARY_DISCLAIMER}
          </p>
          <p className="text-xs leading-relaxed text-mirai-text-note">
            太田市の議案は、届いた原稿と画像だけを掲載します。確認できない金額や答弁は書いていません。本サイトは太田市・太田市議会・チームみらいの公式サイトではありません。
          </p>
        </div>
      </div>
    </Container>
  );
}
