import type { Metadata } from "next";
import { Container } from "@/components/layouts/container";
import { JapanPrefectureMap } from "@/features/japan-map/client/japan-prefecture-map";
import { ApplicationCallToAction } from "@/features/local-edition-applications/client/components/application-call-to-action";
import { LocalEditionChangelog } from "@/features/local-edition-changelog/client/components/local-edition-changelog";

export const metadata: Metadata = {
  title: "日本の都道府県 | みらい議会",
  description:
    "日本地図から都道府県を選び、各自治体のみらい議会を開きます。現在は群馬県、埼玉県、東京都、神奈川県、静岡県、愛知県、滋賀県、奈良県、広島県、福岡県、大分県、沖縄県を開けます。",
};

export default function JapanMapPage() {
  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <div className="mb-8 space-y-3">
        <p className="text-sm font-bold text-primary-accent">日本</p>
        <h1 className="text-3xl font-bold leading-tight">
          都道府県のみらい議会
        </h1>
        <p className="text-[15px] leading-7 text-black">
          地図上の名前、または一覧のリンクから都道府県を開けます。群馬県、埼玉県、東京都、神奈川県、静岡県、愛知県、滋賀県、奈良県、広島県、福岡県、大分県、沖縄県は今すぐ開けます。ほかの都道府県は準備中です。都道府県を選ぶと、全国47都道府県の県議会のみらい議会も開けます。
        </p>
      </div>
      <ApplicationCallToAction />
      <JapanPrefectureMap />
      <LocalEditionChangelog />
    </Container>
  );
}
