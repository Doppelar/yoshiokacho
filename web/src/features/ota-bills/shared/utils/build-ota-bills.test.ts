import { describe, expect, it } from "vitest";
import type { OtaLegacyBill, OtaOfficialSession } from "../types/ota-bill";
import { buildOtaBills, updateOtaDecisionText } from "./build-ota-bills";

const source = "https://www.city.ota.gunma.jp/uploaded/attachment/43607.pdf";
const session: OtaOfficialSession = {
  id: "2026-09",
  name: "令和8年9月太田市議会定例会",
  sourceUrl: source,
  items: [
    {
      kind: "議案",
      number: 92,
      title: "一般会計補正予算",
      submittedDate: "2026-08-31",
      decisionDate: "2026-09-29",
      result: "可決",
      vote: "賛成全員",
      sourceUrl: source,
    },
  ],
};
const legacy: OtaLegacyBill = {
  id: "92",
  number: 92,
  name: "議案第92号",
  officialName: "一般会計補正予算",
  status: "審議中",
  thumbnailUrl: "/img/ota-bill-92.jpg",
  normal:
    "約34億7,281万円を追加します。\n採決予定日：2026年9月29日\n賛成：未確定\n反対：未確定",
  hard: "審議中\n基金から10億3,246万円を繰り入れます。",
  sources: ["https://www.city.ota.gunma.jp/original.pdf"],
};

describe("太田市の公式議決結果の反映", () => {
  it("既存の詳細URL・原稿の金額・画像・出典を残して議決結果を更新する", () => {
    const [bill] = buildOtaBills([session], [legacy]);
    expect(bill.id).toBe("92");
    expect(bill.status).toBe("可決");
    expect(bill.thumbnailUrl).toBe(legacy.thumbnailUrl);
    expect(bill.normal).toContain("約34億7,281万円");
    expect(bill.hard).toContain("10億3,246万円");
    expect(bill.normal).not.toMatch(/採決予定|未確定|審議中/);
    expect(bill.sources).toEqual([source, ...legacy.sources]);
    expect(bill.hard).not.toMatch(/賛成\d+|反対\d+/);
  });

  it("別会期の同じ番号を既存の数値IDと混同しない", () => {
    const previousSession = { ...session, id: "2025-09" };
    const bills = buildOtaBills([session, previousSession], [legacy]);
    expect(bills.map((bill) => bill.id)).toEqual(["92", "2025-09-bill-92"]);
    expect(bills[1].thumbnailUrl).toBeNull();
    expect(bills[1].normal).not.toContain("34億7,281万円");
  });

  it("報告と否決された議会議案を可決と扱わず人数を補わない", () => {
    const records: OtaOfficialSession = {
      ...session,
      items: [
        {
          ...session.items[0],
          kind: "報告",
          number: 5,
          result: "報告",
          vote: null,
        },
        {
          ...session.items[0],
          kind: "議会議案",
          number: 4,
          result: "否決",
          vote: "賛成少数",
        },
      ],
    };
    const bills = buildOtaBills([records], []);
    expect(bills.map((bill) => bill.status)).toEqual(["報告", "否決"]);
    expect(bills.map((bill) => bill.id)).toEqual([
      "2026-09-report-5",
      "2026-09-council-4",
    ]);
    expect(bills[1].normal).toContain("賛成少数");
  });

  it("議員別の賛否は同じ会期・種類・番号の議案だけに付ける", () => {
    const records: OtaOfficialSession = {
      ...session,
      items: [
        { ...session.items[0], number: 85, vote: "賛成多数" },
        { ...session.items[0], number: 86 },
      ],
    };
    const memberVotes = {
      "2026-09": {
        members: [
          { name: "議員A", faction: "甲会" },
          { name: "議員B", faction: "乙党" },
          { name: "議員C", faction: "乙党" },
        ],
        sourceUrl: "https://example.com/votes.pdf",
        votes: { 議案85: "/〇×", 議会議案86: "/〇〇" },
      },
    };
    const [split, unanimous] = buildOtaBills([records], [], memberVotes);
    expect(split.memberVotes?.tally.forCount).toBe(1);
    expect(split.memberVotes?.tally.againstCount).toBe(1);
    expect(split.memberVotes?.sourceUrl).toBe("https://example.com/votes.pdf");
    expect(unanimous.memberVotes).toBeNull();
  });

  it("採決前の「議員別の賛否は採決後に掲載」を公表済みの表現に直す", () => {
    expect(
      updateOtaDecisionText(
        "議員別の賛否は、採決後に公式資料で確認して掲載します。"
      )
    ).toBe(
      "議員ごとの賛否は、市議会の「各議員の議案に対する賛否」で公表されています。"
    );
  });

  it("政策の実施予定・金額は採決予定の修正に巻き込まない", () => {
    const sentence = "配備先は次の予定です。契約金額は5,434万円です。";
    expect(updateOtaDecisionText(sentence)).toBe(sentence);
  });
});
