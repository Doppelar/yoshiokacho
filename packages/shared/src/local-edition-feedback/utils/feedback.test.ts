import { describe, expect, it } from "vitest";
import {
  formatFeedbackDate,
  parseFeedbackInput,
  parseFeedbackPage,
  parseFeedbackVisibility,
} from "./feedback";
describe("意見掲示板の入力", () => {
  it("空白を取り除き名前なしは匿名にする", () => {
    expect(
      parseFeedbackInput({ displayName: "  ", body: " 改行\nを保つ " })
    ).toEqual({
      ok: true,
      value: { displayName: "匿名", body: "改行\nを保つ" },
    });
    expect(
      parseFeedbackInput({ displayName: " 投稿者 ", body: "意見" })
    ).toEqual({ ok: true, value: { displayName: "投稿者", body: "意見" } });
  });
  it("空欄、長すぎる入力、不正な型、自動入力を拒否する", () => {
    for (const input of [
      null,
      {},
      { body: "  " },
      { body: 123 },
      { body: "a".repeat(2001) },
      { displayName: "a".repeat(41), body: "意見" },
      { body: "意見", website: "https://bot.example" },
    ]) {
      expect(parseFeedbackInput(input).ok).toBe(false);
    }
    expect(
      parseFeedbackInput({
        body: "a".repeat(2000),
        displayName: "a".repeat(40),
        website: "",
      }).ok
    ).toBe(true);
  });
  it("投稿者の非表示フラグ等を保存データへ通さない", () => {
    expect(
      parseFeedbackInput({ body: "意見", is_hidden: true, id: "fake" })
    ).toEqual({ ok: true, value: { displayName: "匿名", body: "意見" } });
  });
  it("管理操作はUUIDと真偽値を必須にする", () => {
    const id = "11111111-1111-4111-8111-111111111111";
    expect(parseFeedbackVisibility({ id, hidden: true }).success).toBe(true);
    for (const input of [
      { id: "bad", hidden: true },
      { id, hidden: "false" },
      null,
    ])
      expect(parseFeedbackVisibility(input).success).toBe(false);
  });
});
describe("意見掲示板の表示", () => {
  it("ページ番号は正の整数だけを受け付ける", () => {
    expect(parseFeedbackPage("2")).toBe(2);
    for (const value of [
      undefined,
      ["2"],
      "0",
      "-1",
      "2.5",
      "Infinity",
      "10001",
      "abc",
    ])
      expect(parseFeedbackPage(value)).toBe(1);
  });
  it("投稿日時を日本時間で表示する", () => {
    expect(formatFeedbackDate("2026-11-15T15:05:00Z")).toBe("2026/11/16 00:05");
    expect(formatFeedbackDate("invalid")).toBe("");
  });
});
