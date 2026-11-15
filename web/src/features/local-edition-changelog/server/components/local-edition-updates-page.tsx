import "server-only";

import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { routes } from "@/lib/routes";
import { LocalEditionChangelog } from "../../client/components/local-edition-changelog";

export function LocalEditionUpdatesPage() {
  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <Link
        href={routes.japanMap()}
        className="text-sm font-bold text-primary-accent underline underline-offset-2"
      >
        全国の都道府県を見る
      </Link>
      <h1 className="mt-6 text-3xl font-bold leading-tight">
        地方版の更新履歴
      </h1>
      <p className="mt-4 text-base leading-7 text-mirai-text">
        みらい議会地方版の公開・更新履歴を新しい順に紹介します。
      </p>
      <LocalEditionChangelog showAll />
    </Container>
  );
}
