import { DirectoryNotice } from "@/features/region-map/server/components/directory-notice";
import "server-only";

import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { routes } from "@/lib/routes";
import { ProvisionalStatus } from "../../client/provisional-mark";
import { RegionMunicipalityMap } from "../../client/region-municipality-map";
import { MuseMark } from "../../shared/components/muse-mark";
import type { RegionMapConfig } from "../../shared/types";
import { isMuseUrl } from "../../shared/utils/is-muse-url";
import {
  countProvisionalEditions,
  isProvisionalEdition,
} from "../../shared/utils/provisional-edition";

export function RegionMapPage(config: RegionMapConfig) {
  const liveCount = config.municipalities.filter((item) => item.href).length;
  const provisionalCount = countProvisionalEditions(
    config.prefectureCode,
    config.municipalities
  );
  const liveSummary =
    provisionalCount > 0
      ? `公開済みの${liveCount}市町村は今すぐ開けます（うち${provisionalCount}市町村は暫定公開・運営者募集中）。ほかの市町村は準備中です。`
      : `公開済みの${liveCount}市町村は今すぐ開けます。ほかの市町村は準備中です。`;
  return (
    <Container className="pt-36 pb-16 md:pt-12">
      <DirectoryNotice />
      <div className="mb-8 space-y-3">
        <Link
          href={routes.japanMap()}
          className="text-sm font-bold text-primary-accent underline underline-offset-2"
        >
          全国の都道府県を見る
        </Link>
        <p className="text-sm font-bold text-primary-accent">
          {config.prefectureName}
        </p>
        <h1 className="text-3xl font-bold leading-tight">市町村のみらい議会</h1>
        <p className="text-base leading-7 text-mirai-text">
          {config.prefectureName}の地図から市町村を選べます。
          {liveCount > 0 ? liveSummary : "各市町村のみらい議会は準備中です。"}
        </p>
        {config.portalHref && (
          <a
            href={config.portalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-primary-accent underline underline-offset-2"
          >
            県全体の一覧サイトを見る
            {isMuseUrl(config.portalHref) && <MuseMark />}
            {isProvisionalEdition(config.prefectureCode, config.portalHref) && (
              <ProvisionalStatus />
            )}
          </a>
        )}
      </div>
      <RegionMunicipalityMap {...config} />
    </Container>
  );
}
