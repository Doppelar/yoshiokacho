import { describe, expect, it } from "vitest";
import {
  getOtaBillById,
  getOtaBillsForSession,
  getOtaSession,
  OTA_BILLS,
  OTA_SESSIONS,
} from "./bills";

describe("太田市の令和3年12月からの会期別アーカイブ", () => {
  it("公式25会期を重複しない詳細URLで掲載する", () => {
    expect(OTA_SESSIONS).toHaveLength(25);
    expect(new Set(OTA_BILLS.map((bill) => bill.id)).size).toBe(
      OTA_BILLS.length
    );
    expect(
      OTA_BILLS.every((bill) =>
        bill.sources.some((url) =>
          url.startsWith("https://www.city.ota.gunma.jp/uploaded/attachment/")
        )
      )
    ).toBe(true);
    expect(
      OTA_BILLS.every((bill) => /^\d{4}-\d{2}-\d{2}$/.test(bill.decisionDate))
    ).toBe(true);
  });

  it("最新会期の84〜106号と報告・議会議案を掲載する", () => {
    const latest = getOtaBillsForSession("2026-09");
    expect(
      latest.filter((bill) => bill.kind === "議案").map((bill) => bill.number)
    ).toEqual(Array.from({ length: 23 }, (_, index) => index + 84));
    expect(
      latest.find((bill) => bill.kind === "議会議案" && bill.number === 4)
        ?.status
    ).toBe("否決");
    expect(getOtaBillById("92")?.decisionDate).toBe("2026-09-29");
    expect(getOtaBillById("83")?.sessionId).toBe("2026-06");
  });

  it("不明な会期は最新会期へ戻り、別年の同じ議案番号を区別する", () => {
    expect(getOtaSession("unknown").id).toBe("2026-09");
    expect(getOtaBillById("2025-09-bill-92")?.sessionId).toBe("2025-09");
    expect(
      getOtaBillsForSession("2025-09").every(
        (bill) => bill.sessionId === "2025-09"
      )
    ).toBe(true);
  });

  it("令和3年12月〜令和6年12月の16会期を公式の議決一覧から掲載する", () => {
    expect(OTA_SESSIONS.at(-1)?.id).toBe("2021-12");
    expect(getOtaBillsForSession("2023-06")).toHaveLength(33);
    const budget = getOtaBillById("2024-03-bill-10");
    expect(budget?.officialName).toBe("令和6年度太田市一般会計予算について");
    expect(budget?.vote).toBe("賛成多数");
    expect(budget?.decisionDate).toBe("2024-03-15");
    expect(getOtaBillById("2024-12-council-9")?.status).toBe("可決");
    expect(getOtaBillById("2022-09-report-5")?.vote).toBeNull();
  });

  it("既存の9月原稿から未採決・未確定の表示を取り除く", () => {
    for (const number of [92, 93, 94, 95, 96, 97, 98]) {
      const bill = getOtaBillById(String(number));
      expect(bill?.normal).not.toMatch(
        /まだ採決されていません|可決・否決が決まる予定/
      );
      expect(bill?.hard).not.toMatch(
        /審議中|採決予定|未確定|本会議予定|本会議で採決予定/
      );
    }
  });
});

describe("太田市議会の議員別の賛否", () => {
  const sessionsWithoutRollCall = new Set(["2021-12", "2022-03"]);
  const hasRollCall = (bill: (typeof OTA_BILLS)[number]) =>
    (bill.vote === "賛成多数" || bill.vote === "賛成少数") &&
    !sessionsWithoutRollCall.has(bill.sessionId);
  const findBill = (sessionId: string, kind: string, number: number) =>
    OTA_BILLS.find(
      (bill) =>
        bill.sessionId === sessionId &&
        bill.kind === kind &&
        bill.number === number
    );

  it("賛否の公表がある会期の、賛否が分かれた議案すべてに議員別の賛否がある", () => {
    const split = OTA_BILLS.filter(hasRollCall);
    expect(split).toHaveLength(144);
    for (const bill of split) {
      expect(bill.memberVotes, bill.id).not.toBeNull();
    }
  });

  it("全会一致の議案と、賛否の公表がない会期の議案には載せない", () => {
    for (const bill of OTA_BILLS.filter((bill) => !hasRollCall(bill))) {
      expect(bill.memberVotes, bill.id).toBeNull();
    }
  });

  it("賛成・反対の人数が公式の賛成多数・賛成少数と合う", () => {
    for (const bill of OTA_BILLS) {
      if (!bill.memberVotes) continue;
      const { forCount, againstCount } = bill.memberVotes.tally;
      expect(forCount + againstCount, bill.id).toBeGreaterThan(20);
      if (bill.vote === "賛成多数") {
        expect(forCount, bill.id).toBeGreaterThan(againstCount);
      } else {
        expect(forCount, bill.id).toBeLessThan(againstCount);
      }
    }
  });

  it("令和8年9月の決算認定は共産党の1人だけが反対した", () => {
    const votes = findBill("2026-09", "議案", 85)?.memberVotes;
    expect(votes?.tally.forCount).toBe(28);
    expect(votes?.tally.byFaction.flatMap((f) => f.againstMembers)).toEqual([
      "水野正己",
    ]);
    expect(votes?.tally.notVoting).toEqual([
      { label: "議長（表決に加わらない）", members: ["渡辺謙一郎"] },
    ]);
    expect(votes?.sourceUrl).toBe(
      "https://www.city.ota.gunma.jp/uploaded/attachment/43608.pdf"
    );
  });

  it("辞職勧告決議の否決は賛成少数で、除斥の議員を採決に数えない", () => {
    const tally = findBill("2026-09", "議会議案", 4)?.memberVotes?.tally;
    expect(tally?.forCount).toBe(8);
    expect(tally?.againstCount).toBe(20);
    expect(tally?.notVoting.find((v) => v.label === "除斥")?.members).toEqual([
      "仁藤すぐる",
    ]);
  });
});
