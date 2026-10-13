import "server-only";

import type { PublicLocalEditionApplication } from "@mirai-gikai/shared/local-edition-application/parse-application";
import { formatApplicationDate } from "@mirai-gikai/shared/local-edition-application/parse-application";
import { ExternalLink } from "lucide-react";

export function ApprovedApplicationList({
  applications,
}: {
  applications: readonly PublicLocalEditionApplication[];
}) {
  if (applications.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        承認済みの申請はまだありません。
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {applications.map((application) => (
        <li key={application.id} className="rounded-2xl border bg-white p-5">
          <ApprovedApplicationCard application={application} />
        </li>
      ))}
    </ul>
  );
}

function ApprovedApplicationCard({
  application,
}: {
  application: PublicLocalEditionApplication;
}) {
  const publishedOn = formatApplicationDate(application.createdAt);

  return (
    <article className="space-y-2">
      <h3 className="text-xl font-bold">{application.municipalityName}</h3>
      <p className="text-sm text-muted-foreground">
        担当: {application.contactName}
        {publishedOn ? ` / ${publishedOn}` : ""}
      </p>
      <p className="whitespace-pre-wrap text-[15px] leading-7 text-black">
        {application.introduction}
      </p>
      {application.siteUrl ? (
        <a
          href={application.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-bold text-primary-accent underline underline-offset-2 hover:opacity-80"
        >
          サイトを見る
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      ) : null}
    </article>
  );
}
