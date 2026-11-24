import { describe, expect, it } from "vitest";
import {
  formatOtaVoteSummary,
  otaMemberVoteKey,
  tallyOtaMemberVotes,
} from "./member-votes";

const members = [
  { name: "議員A", faction: "甲会" },
  { name: "議員B", faction: "甲会" },
  { name: "議員C", faction: "乙党" },
  { name: "議員D", faction: "乙党" },
  { name: "議員E", faction: "丙会" },
  { name: "議員F", faction: "丙会" },
];

describe("tallyOtaMemberVotes", () => {
  it("会派ごとに賛成・反対を数え、議長は数えない", () => {
    const tally = tallyOtaMemberVotes(members, "〇/〇××〇");
    expect(tally.forCount).toBe(3);
    expect(tally.againstCount).toBe(2);
    expect(tally.byFaction).toEqual([
      { faction: "甲会", forMembers: ["議員A"], againstMembers: [] },
      { faction: "乙党", forMembers: ["議員C"], againstMembers: ["議員D"] },
      { faction: "丙会", forMembers: ["議員F"], againstMembers: ["議員E"] },
    ]);
    expect(tally.notVoting).toEqual([
      { label: "議長（表決に加わらない）", members: ["議員B"] },
    ]);
  });

  it("白票は反対に数え、退席・欠席・除斥は採決に加わらない議員にする", () => {
    const tally = tallyOtaMemberVotes(members, "白－欠除〇/");
    expect(tally.forCount).toBe(1);
    expect(tally.againstCount).toBe(1);
    expect(tally.blankMembers).toEqual(["議員A"]);
    expect(tally.notVoting.map((v) => [v.label, v.members])).toEqual([
      ["退席", ["議員B"]],
      ["欠席", ["議員C"]],
      ["除斥", ["議員D"]],
      ["議長（表決に加わらない）", ["議員F"]],
    ]);
  });

  it("記号の数が名簿と合わなければエラーにする", () => {
    expect(() => tallyOtaMemberVotes(members, "〇〇")).toThrow();
  });

  it("不明な記号はエラーにする", () => {
    expect(() => tallyOtaMemberVotes(members, "〇〇〇〇〇?")).toThrow();
  });
});

describe("otaMemberVoteKey", () => {
  it("種類と番号をつなげる", () => {
    expect(otaMemberVoteKey("議会議案", 4)).toBe("議会議案4");
  });
});

describe("formatOtaVoteSummary", () => {
  it("採決と賛成・反対の人数を添える", () => {
    const tally = tallyOtaMemberVotes(members, "〇/〇××〇");
    expect(
      formatOtaVoteSummary({
        vote: "賛成多数",
        memberVotes: { tally, sourceUrl: "https://example.com" },
      })
    ).toBe("（賛成多数：賛成3・反対2）");
  });

  it("議員別の賛否がなければ空文字", () => {
    expect(formatOtaVoteSummary({ vote: "賛成全員", memberVotes: null })).toBe(
      ""
    );
  });
});
