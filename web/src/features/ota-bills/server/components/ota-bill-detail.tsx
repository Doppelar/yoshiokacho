import "server-only";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layouts/container";
import { getDifficultyLevel } from "@/features/bill-difficulty/server/loaders/get-difficulty-level";
import { getOtaBillById } from "@/features/ota-bills/shared/bills";
import { AI_SUMMARY_DISCLAIMER } from "@/lib/disclaimers";
import { routes } from "@/lib/routes";

export async function OtaBillDetail({ id }: { id: string }) {
  const bill = getOtaBillById(id);

  if (!bill) {
    notFound();
  }

  const difficulty = await getDifficultyLevel();
  const body = (difficulty === "hard" ? bill.hard : bill.normal) ?? null;

  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <Link
        href={routes.otaHome(bill.sessionId) as Route}
        className="text-sm font-bold underline underline-offset-2 hover:opacity-80"
      >
        みらい議会＠太田市に戻る
      </Link>

      <p className="mt-6 text-sm font-bold text-primary-accent">
        太田市議会 {bill.name}
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight">
        {bill.officialName}
      </h1>
      <p className="mt-3 text-sm font-bold">{bill.status}</p>

      {bill.thumbnailUrl && (
        <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border">
          <Image
            src={bill.thumbnailUrl}
            alt={bill.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <section className="mt-8 whitespace-pre-wrap text-[15px] leading-7 text-black">
        {body ?? "本文はこれから掲載します。"}
      </section>

      {bill.sources.length > 0 && (
        <div className="mt-8 space-y-2">
          <h2 className="text-sm font-bold text-black">出典</h2>
          <ul className="space-y-1 text-xs leading-relaxed text-mirai-text-note">
            {bill.sources.map((href) => (
              <li key={href}>
                <a
                  href={href}
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {href}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 space-y-3">
        <h2 className="text-sm font-bold text-black">掲載コンテンツについて</h2>
        <p className="text-xs leading-relaxed text-mirai-text-note">
          {AI_SUMMARY_DISCLAIMER}
        </p>
        <p className="text-xs leading-relaxed text-mirai-text-note">
          公式資料の議決結果と、既存の解説・画像を掲載しています。確認できない金額や答弁は補っていません。本サイトは太田市・太田市議会・チームみらいの公式サイトではありません。
        </p>
      </div>
    </Container>
  );
}
