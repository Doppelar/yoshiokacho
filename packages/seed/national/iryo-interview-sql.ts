import { councilUuid, quote } from "../yoshioka/official-import";

/** SQL に必要な「医療のこれからを考える会」の内容（web の shared/forum.ts から渡す） */
export type IryoInterviewInput = {
  council: string;
  topicId: string;
  name: string;
  summary: string;
  content: string;
  themes: readonly string[];
  questions: readonly {
    question: string;
    quickReplies: readonly string[] | null;
    followUpGuide: string;
  }[];
};

const quoteArray = (values: readonly string[]) =>
  `ARRAY[${values.map((value) => quote(value)).join(", ")}]::text[]`;

/**
 * 全国版のテーマ（医療のこれから）を bills に登録し、AIインタビューを受付中にするSQLを作る。
 * すべて ON CONFLICT DO NOTHING で、既存データの変更・削除はしない。
 */
export function buildIryoInterviewSql(input: IryoInterviewInput): string {
  if (!/^[a-z0-9-]{1,40}$/.test(input.council)) {
    throw new Error(`議会IDの形式が不正です: ${input.council}`);
  }
  if (!/^[a-z0-9-]{1,100}$/.test(input.topicId)) {
    throw new Error(`テーマIDの形式が不正です: ${input.topicId}`);
  }
  if (!input.questions.length) throw new Error("質問がありません。");

  const uuid = (key: string) => councilUuid(input.council, key);
  const billId = uuid(`bill:${input.topicId}`);
  const configId = uuid(`interview-config:${input.topicId}`);
  // web の getCouncilItemPathForBill が読む slug（例: national-iryo）
  const slug = `${input.council}-${input.topicId}`;

  const contents = (["normal", "hard"] as const).map(
    (level) =>
      `INSERT INTO public.bill_contents (bill_id, difficulty_level, title, summary, content) VALUES (${quote(billId)}, '${level}', ${quote(input.name)}, ${quote(input.summary)}, ${quote(input.content)}) ON CONFLICT (bill_id, difficulty_level) DO NOTHING;`
  );
  const questions = input.questions.map(
    (question, index) =>
      `INSERT INTO public.interview_questions (id, interview_config_id, question, question_order, quick_replies, follow_up_guide) VALUES (${quote(uuid(`interview-question:${input.topicId}:${index + 1}`))}, ${quote(configId)}, ${quote(question.question)}, ${index + 1}, ${question.quickReplies ? quoteArray(question.quickReplies) : "NULL"}, ${quote(question.followUpGuide)}) ON CONFLICT (id) DO NOTHING;`
  );

  return [
    "BEGIN;",
    `-- ${input.name}`,
    `INSERT INTO public.bills (id, name, slug, council, originating_house, status, publish_status) VALUES (${quote(billId)}, ${quote(input.name)}, ${quote(slug)}, ${quote(input.council)}, 'HR', 'introduced', 'published') ON CONFLICT (id) DO NOTHING;`,
    ...contents,
    `INSERT INTO public.interview_configs (id, bill_id, name, status, themes, estimated_duration) VALUES (${quote(configId)}, ${quote(billId)}, ${quote(input.name)}, 'public', ${quoteArray(input.themes)}, 10) ON CONFLICT (id) DO NOTHING;`,
    ...questions,
    "COMMIT;",
    "",
  ].join("\n");
}
