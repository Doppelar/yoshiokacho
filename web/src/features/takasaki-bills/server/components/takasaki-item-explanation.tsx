import "server-only";

import { TakasakiExplanationTabs } from "../../client/components/takasaki-explanation-tabs";
import { TAKASAKI_EXPLANATION_SOURCES } from "../../shared/item-explanations";
import { getItemExplanation } from "../../shared/utils/item-explanations";

function ExplanationBody({
  paragraphs,
  discussion,
}: {
  paragraphs: readonly string[];
  discussion?: readonly string[];
}) {
  return (
    <div className="space-y-4 text-[15px] leading-7">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {discussion && (
        <div className="space-y-3 border-t pt-4">
          <h3 className="text-lg font-bold">どんな議論があったか</h3>
          {discussion.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export function TakasakiItemExplanationSection({ itemId }: { itemId: string }) {
  const explanation = getItemExplanation(itemId);
  if (!explanation) return null;

  return (
    <section
      aria-label="議案の内容と議論"
      className="mt-6 space-y-5 rounded-2xl border bg-white p-5"
    >
      <h2 className="text-xl font-bold">議案の内容と議論</h2>
      {explanation.submittedBy && (
        <dl className="space-y-3 rounded-xl bg-muted p-4 text-sm leading-7">
          <div>
            <dt className="font-bold">
              {itemId === "seigan-1" ? "請願者" : "議会への提出者"}
            </dt>
            <dd>{explanation.submittedBy.join("、")}</dd>
          </div>
          {explanation.introductionMembers && (
            <div>
              <dt className="font-bold">紹介議員</dt>
              <dd>{explanation.introductionMembers.join("、")}</dd>
            </div>
          )}
          {explanation.outgoingName && (
            <div>
              <dt className="font-bold">国への文書の提出名義</dt>
              <dd>{explanation.outgoingName}</dd>
            </div>
          )}
        </dl>
      )}
      <TakasakiExplanationTabs
        plain={
          <ExplanationBody
            paragraphs={explanation.plain}
            discussion={explanation.discussion?.plain}
          />
        }
        detailed={
          <ExplanationBody
            paragraphs={explanation.detailed}
            discussion={explanation.discussion?.detailed}
          />
        }
      />
      <div className="space-y-2 border-t pt-4 text-xs">
        <h3 className="font-bold">確認に使った公式資料</h3>
        <ul className="space-y-2">
          {explanation.sourceIds.map((id) => {
            const source = TAKASAKI_EXPLANATION_SOURCES[id];
            return (
              <li key={id}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-accent underline underline-offset-2"
                >
                  {source.label}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="leading-6 text-mirai-text-note">
          公式資料をもとに本サイトがまとめた説明です。質疑・討論は掲載資料の要旨です。
        </p>
      </div>
    </section>
  );
}
