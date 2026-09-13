import { describe, expect, it } from "vitest";
import { buildYoshiokaRows } from "./data";

describe("吉岡町議案の初期データ", () => {
  it("13件の議案に重複しない固定IDを割り当て、再実行でも同じ行を生成する", () => {
    const rows = buildYoshiokaRows();
    expect(rows).toHaveLength(13);
    expect(new Set(rows.map(({ bill }) => bill.id)).size).toBe(13);
    expect(rows.map(({ bill }) => bill.slug)).toEqual(
      [55, 44, 56, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54].map(
        (number) => `yoshioka-r8-3-${number}`
      )
    );
    expect(rows[0].bill.id).toBe("08000000-0000-4000-8002-000000000055");
    expect(rows[7].bill.id).toBe("08000000-0000-4000-8002-000000000049");
    expect(buildYoshiokaRows()).toEqual(rows);
  });

  it("各議案に通常・詳細の本文を関連付け、全26本文のIDが重複しない", () => {
    const rows = buildYoshiokaRows();
    const contents = rows.flatMap((row) => row.contents);
    expect(contents).toHaveLength(26);
    expect(new Set(contents.map((content) => content.id)).size).toBe(26);
    for (const { bill, contents } of rows) {
      expect(contents.map((content) => content.difficulty_level)).toEqual([
        "normal",
        "hard",
      ]);
      for (const content of contents) {
        expect(content.bill_id).toBe(bill.id);
        expect(content.content).toContain(bill.name);
      }
    }
  });

  it("日付同期トリガーに備えて提出日と公開日を両方nullにし、議決結果は未確認とする", () => {
    for (const { bill, contents } of buildYoshiokaRows()) {
      expect(bill.submitted_date).toBeNull();
      expect(bill.published_at).toBeNull();
      expect(bill.status).toBe("introduced");
      expect(bill.status_note).toContain("議決結果未確認");
      expect(bill.is_review_completed).toBe(false);
      for (const content of contents) {
        expect(content.summary).toContain("具体的な変更内容・議決結果は未確認");
        expect(content.content).toContain("可決・否決を確認したものではありません");
      }
    }
  });

  it("公開本文とAI用資料に公式の議事日程・会期日程と非公式サイトの注記を含める", () => {
    for (const { bill, contents } of buildYoshiokaRows()) {
      expect(bill.shugiin_url).toBe(
        "https://www.town.yoshioka.lg.jp/gikai/kaigi/pdf/2_gijinittei1_r8_3t%20%282%29.pdf"
      );
      for (const content of contents) {
        expect(content.content).toContain(`](${bill.shugiin_url})`);
        expect(content.content).toContain(
          "](https://www.town.yoshioka.lg.jp/gikai/kaigi/pdf/1_kaikinittei_r8_3t.pdf)"
        );
        expect(content.content).toContain("本サイトは吉岡町の公式サイトではありません");
        expect(bill.knowledge_source).toBe(content.content);
      }
    }
  });
});
