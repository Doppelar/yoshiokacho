import "server-only";

import type { Route } from "next";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { routes } from "@/lib/routes";
import { ApplicationForm } from "../../client/components/application-form";
import { loadApprovedLocalEditionApplications } from "../loaders/load-approved-applications";
import { ApprovedApplicationList } from "./approved-application-list";

export async function LocalEditionApplicationBoard() {
  const applications = await loadApprovedLocalEditionApplications();

  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <div className="mb-8 space-y-3">
        <Link
          href={routes.japanMap() as Route}
          className="text-sm font-bold underline underline-offset-2 hover:opacity-80"
        >
          都道府県のみらい議会へ戻る
        </Link>
        <p className="text-sm font-bold text-primary-accent">地方版</p>
        <h1 className="text-3xl font-bold leading-tight">
          みらい議会地方版 連載申請
        </h1>
        <p className="text-[15px] leading-7 text-black">
          自治体からの連載申請を受け付けています。ログインは不要です。送信した申請は未審査として保存され、承認されたものだけを下の一覧に掲載します。
        </p>
      </div>

      <section className="mb-10 rounded-2xl border bg-white p-5">
        <h2 className="mb-4 text-lg font-bold">申請する</h2>
        <ApplicationForm />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold">承認済みの申請</h2>
        <ApprovedApplicationList applications={applications} />
      </section>
    </Container>
  );
}
