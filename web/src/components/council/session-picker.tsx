import type { Route } from "next";
import Link from "next/link";
import { useId } from "react";

/** 年（年度）ごとにまとめた会期。label は「令和7年度」「令和7年」など */
export type SessionGroup = {
  label: string;
  sessions: { id: string; label: string }[];
};

/** 会期を年（年度）ごとに1行にまとめて選ぶナビゲーション */
export function SessionPicker({
  heading,
  groups,
  currentId,
  hrefFor,
}: {
  heading: string;
  groups: readonly SessionGroup[];
  currentId: string;
  hrefFor: (sessionId: string) => string;
}) {
  const headingId = useId();
  return (
    <nav aria-labelledby={headingId} className="mt-8">
      <h2 id={headingId} className="mb-3 text-lg font-bold">
        {heading}
      </h2>
      <dl className="divide-y rounded-2xl border border-mirai-border bg-white">
        {groups.map((group) => (
          <div
            key={group.label}
            className="flex items-center gap-3 px-3 py-2.5"
          >
            <dt className="shrink-0 whitespace-nowrap text-sm font-bold">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-1">
              {group.sessions.map((session) => (
                <Link
                  key={session.id}
                  href={hrefFor(session.id) as Route}
                  aria-current={session.id === currentId ? "page" : undefined}
                  className="rounded-lg border border-mirai-border px-1.5 py-1 text-sm underline underline-offset-2 aria-[current=page]:bg-primary aria-[current=page]:font-bold aria-[current=page]:no-underline"
                >
                  {session.label}
                </Link>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </nav>
  );
}
