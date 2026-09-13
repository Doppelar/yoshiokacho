import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  parseGeneralQuestionsText,
  toGeneralQuestionBillDraft,
} from "./parse-general-questions";

const sampleText = readFileSync(
  join(import.meta.dirname, "data/2026-reiwa8-3rd-teireikai.txt"),
  "utf-8"
);

describe("parseGeneralQuestionsText", () => {
  it("ヘッダー行から定例会名・日付・会議名を抽出する", () => {
    const result = parseGeneralQuestionsText(sampleText);

    expect(result.sessionLabel).toBe("令和8年第3回定例会");
    expect(result.sessionDateLabel).toBe("令和8年9月4日（金）");
    expect(result.meetingLabel).toBe("本会議 一般質問");
  });

  it("議員ごとのブロックを全件検出する", () => {
    const result = parseGeneralQuestionsText(sampleText);

    expect(result.questions.map((q) => q.memberName)).toEqual([
      "大井俊一",
      "飯島衛",
      "飯塚憲治",
      "坂田一広",
      "小池春雄",
    ]);
  });

  it("大項目・小項目を正しくネストして抽出する(先頭議員)", () => {
    const result = parseGeneralQuestionsText(sampleText);
    const first = result.questions[0];

    expect(first.themes).toHaveLength(2);
    expect(first.themes[0]).toEqual({
      order: 1,
      title: "吉岡町に生息する外来種問題と在来種問題についての対応は",
      items: [
        "日本国内における外来種問題の現状をどのように捉えているのか",
        "吉岡町内に生息する外来種と問題となる在来種の生息状況と問題の現状は",
        "吉岡町における外来種問題と在来種問題の把握状況と対応の現状は",
        "今後想定される吉岡町における外来種問題と在来種問題の対策は",
      ],
    });
  });

  it("行末のタブ区切りリンク文言(映像を再生します)を除去する", () => {
    const result = parseGeneralQuestionsText(sampleText);
    const first = result.questions[0];
    const lastItem = first.themes.at(-1)?.items.at(-1);

    expect(lastItem).toBe(
      "町イベントや自治会イベント、地域と企業のコラボイベント等を含めたＰＲの方法による県外を含めた集客方法の改善は"
    );
    expect(lastItem).not.toContain("映像を再生します");
    expect(lastItem).not.toContain("\t");
  });

  it("大項目が1件・小項目が1件のみのシンプルなブロックも解析できる(坂田議員)", () => {
    const result = parseGeneralQuestionsText(sampleText);
    const sakata = result.questions.find((q) => q.memberName === "坂田一広");

    expect(sakata?.themes).toEqual([
      {
        order: 1,
        title: "町の財政について",
        items: ["町の財政状況と今後の見通し及び事業展開について"],
      },
    ]);
  });

  it("空文字列を渡すとエラーになる", () => {
    expect(() => parseGeneralQuestionsText("")).toThrow();
  });

  it("ヘッダー行がなくても議員ブロックだけで解析できる", () => {
    const withoutHeader = sampleText
      .split("\n")
      .slice(2)
      .join("\n");

    const result = parseGeneralQuestionsText(withoutHeader);

    expect(result.sessionLabel).toBe("");
    expect(result.questions).toHaveLength(5);
  });
});

describe("toGeneralQuestionBillDraft", () => {
  it("議員1名分をbills/bill_contents向けの下書きデータに変換する", () => {
    const session = parseGeneralQuestionsText(sampleText);
    const draft = toGeneralQuestionBillDraft(session, session.questions[0]);

    expect(draft.name).toBe(
      "大井俊一議員の一般質問(令和8年第3回定例会)"
    );
    expect(draft.contentTitle).toBe(draft.name);
    expect(draft.contentSummary).toContain(
      "吉岡町に生息する外来種問題と在来種問題についての対応は"
    );
    expect(draft.contentMarkdown).toContain("### 1. 吉岡町に生息する外来種問題");
    expect(draft.contentMarkdown).toContain(
      "- (1) 日本国内における外来種問題の現状をどのように捉えているのか"
    );
  });

  it("要約が長すぎる場合は省略記号付きで切り詰める", () => {
    const session = parseGeneralQuestionsText(sampleText);
    const kaizuka = session.questions.find(
      (q) => q.memberName === "飯塚憲治"
    );
    if (!kaizuka) throw new Error("fixture missing");

    const draft = toGeneralQuestionBillDraft(session, kaizuka);

    expect(draft.contentSummary.length).toBeLessThanOrEqual(101);
  });
});
