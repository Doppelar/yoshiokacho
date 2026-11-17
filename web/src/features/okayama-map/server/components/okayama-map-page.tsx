import { DirectoryNotice } from "@/features/region-map/server/components/directory-notice";
import "server-only";

import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { routes } from "@/lib/routes";
import { OkayamaMunicipalityMap } from "../../client/okayama-municipality-map";

export function OkayamaMapPage() {
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
        <p className="text-sm font-bold text-primary-accent">岡山県</p>
        <h1 className="text-3xl font-bold leading-tight">市町村のみらい議会</h1>
        <p className="text-base leading-7 text-mirai-text">
          岡山県の地図から市町村を選べます。27市町村を公開しています。
        </p>
      </div>
      <OkayamaMunicipalityMap />
    </Container>
  );
}
