import type { ParsedOpinion } from "../utils/format-utils";

interface ReportMainOpinionsProps {
  opinions: ParsedOpinion[];
}

/** レポート詳細「💬主な意見」セクション。会話ログは公開しないため、意見の要旨だけを載せる。 */
export function ReportMainOpinions({ opinions }: ReportMainOpinionsProps) {
  if (opinions.length === 0) return null;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-[22px] font-bold leading-9 text-mirai-text">
        💬主な意見
      </h2>
      <div className="flex flex-col gap-4">
        {opinions.map((opinion, index) => (
          <div
            key={`${index}-${opinion.title.slice(0, 16)}`}
            className="flex flex-col gap-3 rounded-2xl bg-white px-4 py-5"
          >
            <h3 className="text-base font-bold leading-6 text-mirai-text">
              {opinion.title}
            </h3>
            {opinion.content && (
              <div className="ml-2 border-l-2 border-mirai-border pl-4">
                <p className="font-mirai-serif text-[14px] font-medium leading-[22px] text-mirai-text">
                  <span className="mr-1 align-[-0.1em] text-[18px] text-primary-accent">
                    “
                  </span>
                  {opinion.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
