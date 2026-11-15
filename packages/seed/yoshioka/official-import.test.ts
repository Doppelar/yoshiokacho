import { describe, expect, it } from "vitest";
import {
  buildOfficialImportSql,
  mergeOfficialNote,
  officialStatus,
  officialUuid,
  type OfficialYoshiokaSession,
} from "./official-import";
const session: OfficialYoshiokaSession = {
  id: "r8-3",
  name: "令和8年第3回吉岡町議会定例会",
  startDate: "2026-09-01",
  endDate: "2026-09-16",
  sourceUrl: "https://www.town.yoshioka.lg.jp/gikai/kekka/index.html",
  items: [
    {
      kind: "議案",
      number: 44,
      title: "吉岡町条例 O'Brien",
      result: "原案可決",
      decisionDate: "2026-09-16",
      sourceUrl: "https://www.town.yoshioka.lg.jp/gikai/kaigi/pdf/result.pdf",
    },
  ],
};
describe("official Yoshioka import", () => {
  it("uses stable UUIDs distinct by fiscal year and bill kind", () => {
    expect(officialUuid("2026:議案:1")).toBe(officialUuid("2026:議案:1"));
    expect(
      new Set(["2026:議案:1", "2025:議案:1", "2026:認定:1"].map(officialUuid))
        .size
    ).toBe(3);
  });
  it("keeps existing explanation and replaces only its official-results prefix", () => {
    const once = mergeOfficialNote("住民への影響の解説", "原案可決");
    const twice = mergeOfficialNote(once, "原案可決");
    expect(twice).toBe(once);
    expect(twice).toContain("住民への影響の解説");
    expect(mergeOfficialNote(once, "訂正結果")).not.toContain("原案可決");
  });
  it("does not confuse negative votes with approval", () => {
    expect(officialStatus("不認定")).toBe("rejected");
    expect(officialStatus("不承認")).toBe("rejected");
    expect(officialStatus("継続審査")).toBe("introduced");
    expect(officialStatus(null)).toBe("introduced");
    expect(officialStatus("原案答申")).toBe("enacted");
  });
  it("escapes official titles and retains legacy IDs without deleting data or changing active sessions", () => {
    const sql = buildOfficialImportSql([session], "2026-11-15");
    expect(sql).toContain("O''Brien");
    expect(sql).toContain("08000000-0000-4000-8002-000000000044");
    expect(sql).toContain("確認）" + String.fromCharCode(10, 10));
    expect(sql).toContain("BEGIN;");
    expect(sql).toContain("COMMIT;");
    expect(sql).not.toMatch(/DELETE FROM|TRUNCATE|SET is_active|DO UPDATE/i);
    expect(sql).toContain("ON CONFLICT (bill_id, difficulty_level)");
  });
  it("keeps reused numbers distinct across sessions", () => {
    const first = {
      ...session,
      items: [
        { ...session.items[0], kind: "発委", number: 1, title: "附帯決議" },
      ],
    };
    const second = {
      ...session,
      id: "r8-1-rinji",
      name: "令和8年第1回吉岡町議会臨時会",
      items: [
        { ...session.items[0], kind: "発委", number: 1, title: "委員会条例" },
      ],
    };
    const sql = buildOfficialImportSql([first, second], "2026-11-15");
    expect(sql).toContain(officialUuid("bill:2026:r8-3:発委:1"));
    expect(sql).toContain(officialUuid("bill:2026:r8-1-rinji:発委:1"));
  });
  it("rejects unofficial sources, mismatched bill identities and reversed dates before execution", () => {
    expect(() =>
      buildOfficialImportSql(
        [{ ...session, sourceUrl: "https://example.com" }],
        "2026-11-15"
      )
    ).toThrow();
    expect(() =>
      buildOfficialImportSql(
        [{ ...session, endDate: "2026-08-31" }],
        "2026-11-15"
      )
    ).toThrow();
    expect(() =>
      buildOfficialImportSql(
        [
          {
            ...session,
            items: [
              ...session.items,
              { ...session.items[0], title: "別の条例" },
            ],
          },
        ],
        "2026-11-15"
      )
    ).toThrow();
  });
});
