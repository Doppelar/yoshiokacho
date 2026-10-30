import "server-only";

import {
  formatApplicationDate,
  LOCAL_EDITION_APPLICATION_STATUS_LABELS,
  type LocalEditionApplicationRecord,
} from "@mirai-gikai/shared/local-edition-application/parse-application";
import { ExternalLink } from "lucide-react";
import { ReviewApplicationButtons } from "../../client/components/review-application-buttons";

export function PendingApplicationList({
  applications,
}: {
  applications: readonly LocalEditionApplicationRecord[];
}) {
  if (applications.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        未審査の申請はありません。
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {applications.map((application) => (
        <li key={application.id} className="rounded-lg border bg-white p-6">
          <PendingApplicationCard application={application} />
        </li>
      ))}
    </ul>
  );
}

function PendingApplicationCard({
  application,
}: {
  application: LocalEditionApplicationRecord;
}) {
  const submittedOn = formatApplicationDate(application.createdAt);

  return (
    <article className="space-y-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-bold">{application.municipalityName}</h2>
        <p className="text-sm font-semibold">
          {LOCAL_EDITION_APPLICATION_STATUS_LABELS[application.status]}
        </p>
      </div>
      <dl className="space-y-1 text-sm">
        <Detail term="担当者名" value={application.contactName} />
        <Detail term="メール" value={application.email} />
        <Detail term="受付日" value={submittedOn || application.createdAt} />
      </dl>
      {application.siteUrl ? (
        <a
          href={application.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary underline underline-offset-2"
        >
          サイトを見る
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      ) : null}
      <p className="whitespace-pre-wrap text-sm leading-6">
        {application.introduction}
      </p>
      <ReviewApplicationButtons id={application.id} />
    </article>
  );
}

function Detail({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="w-24 shrink-0 text-muted-foreground">{term}</dt>
      <dd>{value}</dd>
    </div>
  );
}
