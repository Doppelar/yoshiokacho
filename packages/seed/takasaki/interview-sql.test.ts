import { describe, expect, it } from "vitest";
import { buildTakasakiInterviewSql, takasakiUuid } from "./interview-sql";

const item = {
  id: "r8-4-gian-54",
  kind: "議案",
  number: 54,
  title: "工事請負契約の締結について（市民's施設）",
  committee: "建設水道常任委員会",
  result: "原案可決",
  summary: { plain: ["やさしい説明"], detailed: ["詳しい説明"] },
};

describe("buildTakasakiInterviewSql", () => {
  const sql = buildTakasakiInterviewSql([item]);

  it("議案・2段階の説明・受付中のインタビュー設定・3つの質問を登録する", () => {
    expect(sql.startsWith("BEGIN;\n")).toBe(true);
    expect(sql.trimEnd().endsWith("COMMIT;")).toBe(true);
    expect(sql).toContain("'takasaki-r8-4-gian-54', 'takasaki'");
    expect(sql).toContain("'enacted'");
    expect(sql).toContain("'normal', '議案第54号");
    expect(sql).toContain("'hard', '議案第54号");
    expect(sql).toContain("'public'");
    expect(sql.match(/INSERT INTO public\.interview_questions/g)).toHaveLength(
      3
    );
  });

  it("既存データを変更・削除しない", () => {
    expect(sql).not.toMatch(/\b(UPDATE|DELETE|DROP|TRUNCATE)\b/);
    const inserts = sql.match(/INSERT INTO/g) ?? [];
    const guarded = sql.match(/ON CONFLICT [^;]*DO NOTHING;/g) ?? [];
    expect(guarded).toHaveLength(inserts.length);
  });

  it("文字列中の ' をエスケープする", () => {
    expect(sql).toContain("市民''s施設");
  });

  it("同じ議案からは同じIDを作る", () => {
    expect(takasakiUuid("bill:x")).toBe(takasakiUuid("bill:x"));
    expect(takasakiUuid("bill:x")).not.toBe(takasakiUuid("bill:y"));
    expect(takasakiUuid("bill:x")).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    );
  });

  it("不正な議案IDや空の入力は受け付けない", () => {
    expect(() => buildTakasakiInterviewSql([])).toThrow();
    expect(() =>
      buildTakasakiInterviewSql([{ ...item, id: "R8'; DROP" }])
    ).toThrow();
  });
});
