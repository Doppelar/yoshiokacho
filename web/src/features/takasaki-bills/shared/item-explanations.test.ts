import { describe, expect, it } from "vitest";
import { TAKASAKI_ITEM_EXPLANATIONS } from "./item-explanations";
import { TAKASAKI_SESSIONS } from "./sessions";

const OFFICIAL_HOSTS = /^(www.city.takasaki.gunma.jp|takasaki.gijiroku.com)$/;

describe("高崎市の議案の解説", () => {
  it("解説のある会期は、すべての議案に内容・議論・公式出典を揃える", () => {
    const explained = new Set(Object.keys(TAKASAKI_ITEM_EXPLANATIONS));
    const allItemIds = new Set(
      TAKASAKI_SESSIONS.flatMap((session) => session.items.map((i) => i.id))
    );
    for (const id of explained) {
      expect(allItemIds.has(id), id).toBe(true);
    }
    for (const session of TAKASAKI_SESSIONS) {
      if (!session.items.some((item) => explained.has(item.id))) continue;
      for (const item of session.items) {
        const explanation = TAKASAKI_ITEM_EXPLANATIONS[item.id];
        expect(explanation, item.id).toBeDefined();
        if (!explanation) continue;
        for (const mode of ["plain", "detailed"] as const) {
          expect(explanation[mode].join("").length, item.id).toBeGreaterThan(
            20
          );
          expect(
            explanation.discussion[mode].join("").length,
            item.id
          ).toBeGreaterThan(20);
        }
        expect(explanation.plain, item.id).not.toEqual(explanation.detailed);
        expect(explanation.sources.length, item.id).toBeGreaterThan(0);
        for (const source of explanation.sources) {
          expect(new URL(source.url).hostname, item.id).toMatch(OFFICIAL_HOSTS);
          expect(source.label.length, item.id).toBeGreaterThan(0);
        }
      }
    }
  });

  it.each([
    ["r8-5", 31],
    ["r7-5", 52],
    ["r7-4", 36],
    ["r7-3", 22],
    ["r7-2", 5],
    ["r7-1", 64],
  ] as const)("%s は全%i議案に解説がある", (sessionId, count) => {
    const session = TAKASAKI_SESSIONS.find((s) => s.id === sessionId);
    expect(session?.items).toHaveLength(count);
    expect(
      session?.items.filter((item) => TAKASAKI_ITEM_EXPLANATIONS[item.id])
    ).toHaveLength(count);
  });
});
