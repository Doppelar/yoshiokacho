import { ExternalLink } from "lucide-react";
import { LOCAL_EDITION_CHANGELOG } from "../../shared/changelog-entries";

export function LocalEditionChangelog() {
  return (
    <section className="mt-10 space-y-4">
      <h2 className="text-lg font-bold">更新履歴</h2>
      <ol className="divide-y rounded-2xl border bg-white">
        {LOCAL_EDITION_CHANGELOG.map((entry) => (
          <li
            key={`${entry.date}-${entry.title}`}
            className="flex flex-col gap-1 p-4 md:flex-row md:gap-6"
          >
            <time
              dateTime={entry.date}
              className="shrink-0 text-sm font-bold text-primary-accent"
            >
              {entry.date.replaceAll("-", "/")}
            </time>
            {entry.href ? (
              <a
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[15px] underline underline-offset-2 hover:opacity-80"
              >
                {entry.title}
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            ) : (
              <p className="text-[15px]">{entry.title}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
