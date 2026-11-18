import {
  councilUuid,
  officialStatus,
  quote,
} from "../yoshioka/official-import";

/** AIインタビューを用意する高崎市の議案（静的データから必要な分だけ渡す） */
export type TakasakiInterviewItem = {
  id: string;
  kind: string;
  number: number;
  title: string;
  committee: string | null;
  result: string | null;
  summary: { plain: readonly string[]; detailed: readonly string[] };
};

const COUNCIL = "takasaki";

const quoteArray = (values: readonly string[]) =>
  `ARRAY[${values.map((value) => quote(value)).join(", ")}]::text[]`;

/** 同じ議案からは毎回同じIDを作る（SQLを何度流しても重複しない） */
export const takasakiUuid = (key: string) => councilUuid(COUNCIL, key);

const QUESTIONS: readonly {
  question: string;
  quickReplies: readonly string[] | null;
  followUpGuide: string;
}[] = [
  {
    question: "この議案に賛成ですか、反対ですか？",
    quickReplies: ["賛成", "反対", "どちらとも言えない", "よくわからない"],
    followUpGuide:
      "選んだ理由を一つ聞く。よくわからない場合は、議案の要点をやさしく一文で説明してから考えを聞く。",
  },
  {
    question:
      "この議案は、あなたやご家族、地域の暮らしにどのように関わりそうですか？",
    quickReplies: null,
    followUpGuide:
      "具体的な場面（通勤・子育て・仕事・地域活動など）を一つ聞く。関わりがないと答えた場合はそれでよい。",
  },
  {
    question: "この議案について、高崎市や市議会に伝えたいことはありますか？",
    quickReplies: ["特にない"],
    followUpGuide: "要望・心配・期待のどれに近いかを確認し、深追いしない。",
  },
];

function contentMarkdown(item: TakasakiInterviewItem, paragraphs: readonly string[]) {
  const info = [
    `- 種別: ${item.kind}第${item.number}号`,
    item.committee ? `- 付託委員会: ${item.committee}` : null,
    item.result ? `- 結果: ${item.result}` : null,
  ].filter((line): line is string => line !== null);
  return [
    "## 議案の情報",
    ...info,
    "",
    "## 委員会でどんな議論があったか",
    ...paragraphs.flatMap((paragraph) => [paragraph, ""]),
    "※ 高崎市議会の会議録をもとに本サイトがまとめたものです。",
  ].join("\n");
}

/**
 * 高崎市の議案を bills に登録し、AIインタビューを受付中にするSQLを作る。
 * すべて ON CONFLICT DO NOTHING で、既存データの変更・削除はしない。
 */
export function buildTakasakiInterviewSql(
  items: readonly TakasakiInterviewItem[]
): string {
  if (!items.length) throw new Error("議案がありません。");
  const statements = items.flatMap((item) => {
    if (!/^[a-z0-9-]{1,100}$/.test(item.id)) {
      throw new Error(`議案IDの形式が不正です: ${item.id}`);
    }
    const billId = takasakiUuid(`bill:${item.id}`);
    const configId = takasakiUuid(`interview-config:${item.id}`);
    // web の toCouncilBillSlug（council-item-opinions/shared/utils/councils.ts）と同じ形式
    const slug = `${COUNCIL}-${item.id}`;
    const name = `${item.kind}第${item.number}号 ${item.title}`;
    const contents = (
      [
        ["normal", item.summary.plain],
        ["hard", item.summary.detailed],
      ] as const
    ).map(
      ([level, paragraphs]) =>
        `INSERT INTO public.bill_contents (bill_id, difficulty_level, title, summary, content) VALUES (${quote(billId)}, '${level}', ${quote(name)}, ${quote(paragraphs[0] ?? item.title)}, ${quote(contentMarkdown(item, paragraphs))}) ON CONFLICT (bill_id, difficulty_level) DO NOTHING;`
    );
    const questions = QUESTIONS.map(
      (question, index) =>
        `INSERT INTO public.interview_questions (id, interview_config_id, question, question_order, quick_replies, follow_up_guide) VALUES (${quote(takasakiUuid(`interview-question:${item.id}:${index + 1}`))}, ${quote(configId)}, ${quote(question.question)}, ${index + 1}, ${question.quickReplies ? quoteArray(question.quickReplies) : "NULL"}, ${quote(question.followUpGuide)}) ON CONFLICT (id) DO NOTHING;`
    );
    return [
      `-- ${name}`,
      `INSERT INTO public.bills (id, name, slug, council, originating_house, status, status_note, publish_status) VALUES (${quote(billId)}, ${quote(name)}, ${quote(slug)}, '${COUNCIL}', 'HR', '${officialStatus(item.result)}', ${quote(item.result)}, 'published') ON CONFLICT (id) DO NOTHING;`,
      ...contents,
      `INSERT INTO public.interview_configs (id, bill_id, name, status, themes, estimated_duration) VALUES (${quote(configId)}, ${quote(billId)}, ${quote(`高崎市 ${name}`)}, 'public', ${quoteArray(["賛否とその理由", "暮らしへの影響", "市への要望"])}, 10) ON CONFLICT (id) DO NOTHING;`,
      ...questions,
    ];
  });
  return ["BEGIN;", ...statements, "COMMIT;", ""].join("\n");
}
