import type { Metadata } from "next";
import { Container } from "@/components/layouts/container";
import { JapanPrefectureMap } from "@/features/japan-map/client/japan-prefecture-map";
import { PrefectureCouncilLink } from "@/features/japan-map/client/prefecture-council-link";
import { LocalEditionLinkCollection } from "@/features/japan-map/server/components/local-edition-link-collection";
import { MunicipalityCoverage } from "@/features/japan-map/server/components/municipality-coverage";
import { ApplicationCallToAction } from "@/features/local-edition-applications/client/components/application-call-to-action";
import { LocalEditionChangelog } from "@/features/local-edition-changelog/client/components/local-edition-changelog";
import { FeedbackBoardLink } from "@/features/local-edition-feedback/server/components/feedback-board-link";
import { DirectoryNotice } from "@/features/region-map/server/components/directory-notice";

export const metadata: Metadata = {
  title: "日本の都道府県 | みらい議会",
  description: "日本地図から都道府県を選び、各地域のみらい議会を開けます。",
};

export default function JapanMapPage() {
  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <DirectoryNotice />
      <MunicipalityCoverage />
      <div className="mb-8 space-y-3">
        <p className="text-sm font-bold text-primary-accent">日本</p>
        <h1 className="text-3xl font-bold leading-tight">
          都道府県のみらい議会
        </h1>
        <p className="text-[15px] leading-7 text-black">
          地図または一覧から都道府県を選べます。公開済みの都道府県は今すぐ開けます。
        </p>
      </div>
      <ApplicationCallToAction />
      <PrefectureCouncilLink />
      <JapanPrefectureMap />
      <FeedbackBoardLink />
      <LocalEditionChangelog />
      <LocalEditionLinkCollection />
    </Container>
  );
}
