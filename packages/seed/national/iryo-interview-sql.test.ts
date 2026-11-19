import { describe, expect, it } from "vitest";
import { councilUuid } from "../yoshioka/official-import";
import { buildIryoInterviewSql, type IryoInterviewInput } from "./iryo-interview-sql";

const INPUT: IryoInterviewInput = {
  council: "national",
  topicId: "iryo",
  name: "医療のこれから",
  summary: "医療の未来について",
  content: "## 説明\n患者さんの'声'",
  themes: ["関心のあるテーマ"],
  questions: [
    {
      question: "関心のあるテーマは？",
      quickReplies: ["医療費", "医療AI"],
      followUpGuide: "理由を聞く",
    },
    { question: "伝えたいことは？", quickReplies: null, followUpGuide: "深追いしない" },
  ],
};

describe("buildIryoInterviewSql", () => {
  const sql = buildIryoInterviewSql(INPUT);

  it("議案・説明・インタビュー設定・質問を1つのトランザクションで登録する", () => {
    expect(sql.startsWith("BEGIN;")).toBe(true);
    expect(sql.trimEnd().endsWith("COMMIT;")).toBe(true);
    expect(sql.match(/INSERT INTO public\.bills /g)).toHaveLength(1);
    expect(sql.match(/INSERT INTO public\.bill_contents /g)).toHaveLength(2);
    expect(sql.match(/INSERT INTO public\.interview_configs /g)).toHaveLength(1);
    expect(sql.match(/INSERT INTO public\.interview_questions /g)).toHaveLength(2);
  });

  it("全国版の議会IDと slug（national-iryo）で登録する", () => {
    expect(sql).toContain("'national-iryo', 'national'");
  });

  it("何度流しても重複しないよう、固定のIDと ON CONFLICT DO NOTHING を使う", () => {
    expect(sql).toContain(councilUuid("national", "bill:iryo"));
    expect(sql).toContain(councilUuid("national", "interview-config:iryo"));
    // 説明文に改行を含むため、行ではなく件数で比べる
    const insertCount = sql.match(/^INSERT INTO /gm)?.length ?? 0;
    expect(insertCount).toBe(6);
    expect(sql.match(/ON CONFLICT .*? DO NOTHING;/g)).toHaveLength(insertCount);
  });

  it("文字列中の ' をエスケープし、クイックリプライは配列にする", () => {
    expect(sql).toContain("患者さんの''声''");
    expect(sql).toContain("ARRAY['医療費', '医療AI']::text[]");
    expect(sql).toContain(", NULL, '深追いしない'");
  });

  it("不正なIDや質問なしはエラーにする", () => {
    expect(() => buildIryoInterviewSql({ ...INPUT, council: "国" })).toThrow();
    expect(() => buildIryoInterviewSql({ ...INPUT, topicId: "a b" })).toThrow();
    expect(() => buildIryoInterviewSql({ ...INPUT, questions: [] })).toThrow();
  });
});
