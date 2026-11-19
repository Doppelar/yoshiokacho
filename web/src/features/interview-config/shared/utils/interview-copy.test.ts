import { describe, expect, it } from "vitest";
import { getInterviewCopy } from "./interview-copy";

describe("getInterviewCopy", () => {
  it("吉岡町・高崎市などの議案は法案向けの文言", () => {
    for (const council of [null, "takasaki"]) {
      const copy = getInterviewCopy(council);
      expect(copy.heading).toBe("法案についてのAIインタビュー");
      expect(copy.backLink).toBe("法案詳細に戻る");
    }
  });

  it("全国版のテーマは「法案」を使わない文言", () => {
    const copy = getInterviewCopy("national");
    expect(copy.heading).toBe("テーマについてのAIインタビュー");
    expect(Object.values(copy).join("")).not.toMatch(/法案|議案|審議/);
  });
});
