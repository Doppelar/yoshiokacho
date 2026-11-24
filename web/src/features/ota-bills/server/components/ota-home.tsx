import "server-only";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { Card } from "@/components/ui/card";
import { getDifficultyLevel } from "@/features/bill-difficulty/server/loaders/get-difficulty-level";
import { CouncilSwitchBanner } from "@/features/gunma-map/client/council-switch-banner";
import {
  getOtaBillsForSession,
  getOtaSession,
  OTA_SESSIONS,
} from "@/features/ota-bills/shared/bills";
import { AI_SUMMARY_DISCLAIMER } from "@/lib/disclaimers";
import { routes } from "@/lib/routes";

export async function OtaHome({ sessionId }: { sessionId?: string }) {
  const difficulty = await getDifficultyLevel();
  const session = getOtaSession(sessionId);
  const bills = getOtaBillsForSession(session.id);

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
          令和3年12月から現在までの太田市議会の公式議決一覧に基づき、会期ごとの議案・報告と議決結果を紹介します。
        </p>
      </section>

      <nav aria-label="会期を選ぶ" className="mt-8">
        <h2 className="mb-3 text-lg font-bold">会期を選ぶ</h2>
        <div className="flex flex-wrap gap-2">
          {OTA_SESSIONS.map((item) => (
            <Link
              key={item.id}
              href={routes.otaHome(item.id) as Route}
              aria-current={item.id === session.id ? "page" : undefined}
              className="rounded-lg border px-3 py-2 text-sm underline underline-offset-2 aria-[current=page]:bg-muted aria-[current=page]:font-bold"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <p className="mt-4 text-sm text-mirai-text-secondary">
        <a
          href={session.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          この会期の公式議決一覧を見る
        </a>
      </p>
      <section className="flex flex-col gap-6 py-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-bold leading-[1.48] text-black">
            {session.name}
          </h2>
          <p className="text-xs text-mirai-text-secondary">
            議案・報告・議会議案 {bills.length}
            件。公式議決一覧で確認した結果を掲載しています。
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {bills.map((bill) => {
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
            公式資料で確認できる議決結果と、既存の解説・画像を掲載しています。確認できない金額や答弁は補っていません。本サイトは太田市・太田市議会・チームみらいの公式サイトではありません。
          </p>
        </div>
      </div>
    </Container>
  );
}
