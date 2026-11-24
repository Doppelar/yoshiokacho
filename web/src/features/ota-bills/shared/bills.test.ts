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
