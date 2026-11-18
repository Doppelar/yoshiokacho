import { describe, expect, it } from "vitest";
import {
  TAKASAKI_ITEM_DEBATE_SUMMARIES,
  TAKASAKI_SESSION_DEBATE_SUMMARIES,
} from "../debate-summaries";
import { TAKASAKI_COMMITTEE_DELIBERATIONS } from "../deliberations";
import {
  getItemDebateSummary,
  getSessionDebateSummary,
  selectDebateParagraphs,
} from "./debate-summaries";
import { findTakasakiItem, findTakasakiSession } from "./sessions";

const summary = { plain: ["やさしい"], detailed: ["くわしい"] };

describe("selectDebateParagraphs", () => {
  it("ふつうのときはわかりやすい段落を返す", () => {
    expect(selectDebateParagraphs(summary, "normal")).toEqual(["やさしい"]);
  });

  it("詳しくのときは詳しい段落を返す", () => {
    expect(selectDebateParagraphs(summary, "hard")).toEqual(["くわしい"]);
  });
});

describe("議論のまとめのデータ", () => {
  it("委員会で質疑があった議案には、すべてまとめがある", () => {
    for (const itemId of Object.keys(TAKASAKI_COMMITTEE_DELIBERATIONS)) {
      expect(getItemDebateSummary(itemId), itemId).toBeDefined();
    }
  });

  it("まとめのある議案・会期は実在し、両方の段落が空でない", () => {
    for (const [itemId, entry] of Object.entries(
      TAKASAKI_ITEM_DEBATE_SUMMARIES
    )) {
      expect(findTakasakiItem(itemId), itemId).toBeDefined();
      expect(entry.plain.length).toBeGreaterThan(0);
      expect(entry.detailed.length).toBeGreaterThan(0);
    }
    for (const [sessionId, entry] of Object.entries(
      TAKASAKI_SESSION_DEBATE_SUMMARIES
    )) {
      expect(findTakasakiSession(sessionId).id).toBe(sessionId);
      expect(entry.plain.length).toBeGreaterThan(0);
      expect(entry.detailed.length).toBeGreaterThan(0);
    }
  });

  it("まとめのない会期は undefined", () => {
    expect(getSessionDebateSummary("no-such-session")).toBeUndefined();
    expect(getSessionDebateSummary("constructor")).toBeUndefined();
    expect(getItemDebateSummary("toString")).toBeUndefined();
  });
});
