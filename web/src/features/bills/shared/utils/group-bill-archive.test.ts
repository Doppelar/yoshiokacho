import { describe, expect, it } from "vitest";
import {
  type ArchiveBill,
  type ArchiveSession,
  groupBillArchive,
} from "./group-bill-archive";
import { pickHomeSections } from "./pick-home-sections";

const session = (id: string, date: string): ArchiveSession => ({
  id,
  name: id,
  start_date: date,
});
const bill = (
  id: string,
  sessionId: string | null,
  date: string | null = null
): ArchiveBill => ({
  id,
  diet_session_id: sessionId,
  submitted_date: date,
});
describe("トップの会期・月別整理", () => {
  it("直近会期だけを開き、以前の会期も全件保持する", () => {
    const sessions = [
      session("june", "2026-06-01"),
      session("september", "2026-09-01"),
    ];
    const input = [
      bill("old", "june"),
      bill("new", "september"),
      bill("new2", "september"),
    ];
    const [year] = groupBillArchive(input, sessions, "2026-11-16");
    expect(year.fiscalYear).toBe(2026);
    expect(year.groups.map((group) => [group.label, group.open])).toEqual([
      ["september", true],
      ["june", false],
    ]);
    expect(
      year.groups.flatMap((group) => group.bills.map((item) => item.id)).sort()
    ).toEqual(input.map((item) => item.id).sort());
  });
  it("過年度の同じ月の複数会期をまとめ、すべて閉じておく", () => {
    const [year] = groupBillArchive(
      [bill("a", "one"), bill("b", "two")],
      [session("one", "2025-06-01"), session("two", "2025-06-20")],
      "2026-11-16"
    );
    expect(year.fiscalYear).toBe(2025);
    expect(year.groups).toHaveLength(1);
    expect(year.groups[0].label).toBe("2025年6月");
    expect(year.groups[0].bills).toHaveLength(2);
    expect(year.groups[0].open).toBe(false);
  });
  it("4月1日で年度を区切り、3月の議案は前年度へ残す", () => {
    const years = groupBillArchive(
      [bill("march", "m"), bill("april", "a")],
      [session("m", "2026-03-31"), session("a", "2026-04-01")],
      "2026-04-01"
    );
    expect(years.map((year) => year.fiscalYear)).toEqual([2026, 2025]);
    expect(years[0].groups[0].open).toBe(true);
    expect(years[1].groups[0].label).toBe("2026年3月");
    expect(years[1].groups[0].open).toBe(false);
  });
  it("将来の会期を直近会期として開かない", () => {
    const [year] = groupBillArchive(
      [bill("future", "dec"), bill("latest", "sep")],
      [session("dec", "2026-12-01"), session("sep", "2026-09-01")],
      "2026-11-16"
    );
    expect(year.groups.map((group) => [group.label, group.open])).toEqual([
      ["dec", false],
      ["sep", true],
    ]);
  });
  it("会期未登録も提出日または未登録枠に残し、欠落させない", () => {
    const years = groupBillArchive(
      [bill("dated", "missing", "2026-08-20"), bill("unknown", null)],
      [],
      "2026-11-16"
    );
    expect(years[0].groups[0].label).toBe("2026年8月（会期未登録）");
    expect(years[1].fiscalYear).toBeNull();
    expect(years[1].groups[0].bills[0].id).toBe("unknown");
    expect(
      years.flatMap((year) => year.groups).every((group) => !group.open)
    ).toBe(true);
  });
  it("同じ議案IDを重複させず、入力を変更しない", () => {
    const bills = [bill("same", "s"), bill("same", "s")];
    const before = JSON.stringify(bills);
    const years = groupBillArchive(
      bills,
      [session("s", "2026-09-01")],
      "2026-11-16"
    );
    expect(years[0].groups[0].bills).toHaveLength(1);
    expect(JSON.stringify(bills)).toBe(before);
  });
  it("開催中がない年度末でも、1〜3月を同じ年度の会期として扱う", () => {
    const [year] = groupBillArchive(
      [bill("jan", "j")],
      [session("j", "2027-01-10")],
      "2027-02-01"
    );
    expect(year.fiscalYear).toBe(2026);
    expect(year.groups[0].open).toBe(true);
  });
  it("上部の注目・意見募集と重複せず、過去と新規の議案を保持する", () => {
    const old = bill("old", "s");
    const featured = bill("featured", "s");
    const interview = bill("interview", "s");
    const latest = bill("latest", "s");
    const [year] = groupBillArchive(
      [old, featured, interview, latest],
      [session("s", "2026-09-01")],
      "2026-11-16"
    );
    const result = pickHomeSections({
      billsByTag: year.groups,
      featuredBills: [featured],
      interviewOpenBills: [interview],
      inSession: true,
    });
    expect(
      result.tagGroups.flatMap((group) => group.bills.map((item) => item.id))
    ).toEqual(["old", "latest"]);
    expect(result.shownBills.map((item) => item.id).sort()).toEqual([
      "featured",
      "interview",
      "latest",
      "old",
    ]);
  });
  it("議案がない場合は空配列", () => {
    expect(groupBillArchive([], [], "2026-11-16")).toEqual([]);
  });
});
