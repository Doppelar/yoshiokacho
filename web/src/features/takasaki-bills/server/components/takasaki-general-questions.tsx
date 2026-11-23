import "server-only";

import { ChevronDown, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import type {
  TakasakiExchange,
  TakasakiGeneralQuestion,
  TakasakiGeneralQuestionSet,
} from "../../shared/types";
import {
  countExchanges,
  groupQuestionsByDate,
} from "../../shared/utils/deliberations";

export const GENERAL_QUESTIONS_SECTION_ID = "general-questions";

export function TakasakiGeneralQuestions({
  set,
}: {
  set: TakasakiGeneralQuestionSet;
}) {
  const published = set.status === "published";
  return (
    <>
      {set.representativeQuestions?.length ? (
        <QuestionsSection
          id="representative-questions"
          title="総括質疑"
          description="決算などの議案について、会派の代表が市長の考えをただした質疑です。会議録から質問と答弁の要旨をまとめました。名前を押すと内容が開きます。"
          questions={set.representativeQuestions}
          published={published}
        />
      ) : null}
      <QuestionsSection
        id={GENERAL_QUESTIONS_SECTION_ID}
        title="一般質問"
        description={
          published
            ? `議員が市の考えをただした一般質問です。${set.topicSource === "minutes" ? "質問の項目" : "質問通告の項目"}ごとに、会議録から質問と答弁の要旨をまとめました。名前を押すと内容が開きます。`
            : "この会期の会議録はまだ公開されていません。現在は質問通告の項目のみを掲載しており、会議録の公開後に質問と答弁の要旨を追加します。"
        }
        questions={set.questions}
        published={published}
      >
        {published && set.absentMembers && set.absentMembers.length > 0 && (
          <p className="text-xs text-mirai-text-note">
            {set.absentMembers.join("・")}
            議員は質問を通告していましたが、会議を欠席したため質問は行われませんでした。
          </p>
        )}
      </QuestionsSection>
    </>
  );
}

function QuestionsSection({
  id,
  title,
  description,
  questions,
  published,
  children,
}: {
  id: string;
  title: string;
  description: string;
  questions: readonly TakasakiGeneralQuestion[];
  published: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="flex scroll-mt-28 flex-col gap-4 py-10"
    >
      <div className="space-y-2">
        <h3 id={`${id}-heading`} className="text-lg font-bold">
          {title}（{questions.length}人）
        </h3>
        <p className="text-sm leading-7 text-mirai-text-secondary">
          {description}
        </p>
        {children}
      </div>

      {groupQuestionsByDate(questions).map((group) => (
        <div key={group.date} className="space-y-3">
          <h4 className="text-sm font-bold text-primary-accent">
            {group.date}
          </h4>
          {group.questions.map((question) => (
            <QuestionCard
              key={question.member}
              question={question}
              published={published}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

function QuestionCard({
  question,
  published,
}: {
  question: TakasakiGeneralQuestion;
  published: boolean;
}) {
  const topicTitles = question.topics.map((topic) => topic.title);
  return (
    <details className="group rounded-xl border bg-white">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-3 p-4 [&::-webkit-details-marker]:hidden">
        <span className="space-y-1">
          <span className="block text-base font-bold">
            {question.member}
            <span className="ml-2 text-xs font-normal text-mirai-text-secondary">
              {question.faction}
            </span>
          </span>
          <span className="block text-sm leading-6 text-mirai-text">
            {topicTitles.join("／")}
          </span>
          {published && (
            <span className="block text-xs text-mirai-text-note">
              質問と答弁 {countExchanges(question)}件
            </span>
          )}
        </span>
        <ChevronDown
          aria-hidden="true"
          className="mt-1 h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="space-y-6 border-t px-4 pb-5 pt-4">
        {question.topics.map((topic, index) => (
          <div key={topic.title} className="space-y-3">
            <p className="font-bold">
              {index + 1}　{topic.title}
            </p>
            {topic.points.length > 0 && (
              <ul className="list-disc space-y-1 pl-5 text-sm text-mirai-text-secondary">
                {topic.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {topic.exchanges.length > 0 && (
              <ol className="space-y-3">
                {topic.exchanges.map((exchange) => (
                  <li key={exchange.question}>
                    <ExchangeBlock
                      exchange={exchange}
                      questioner={question.member}
                    />
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
        {question.minutesUrl && <MinutesLink href={question.minutesUrl} />}
      </div>
    </details>
  );
}

export function ExchangeBlock({
  exchange,
  questioner,
}: {
  exchange: TakasakiExchange;
  questioner?: string;
}) {
  const asker = exchange.questioner ?? questioner;
  return (
    <div className="space-y-2 rounded-lg bg-muted/50 p-3 text-sm leading-6">
      <p>
        <span className="mr-1 font-bold">問</span>
        {asker && (
          <span className="mr-1 text-xs text-mirai-text-secondary">
            （{asker}）
          </span>
        )}
        {exchange.question}
      </p>
      <p>
        <span className="mr-1 font-bold">答</span>
        <span className="mr-1 text-xs text-mirai-text-secondary">
          （{exchange.answerer}）
        </span>
        {exchange.answer}
      </p>
    </div>
  );
}

export function MinutesLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-bold underline underline-offset-2"
    >
      会議録で発言の全文を読む
      <ExternalLink aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
