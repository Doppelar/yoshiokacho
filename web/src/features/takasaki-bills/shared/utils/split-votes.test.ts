import { describe, expect, it } from "vitest";
import { TAKASAKI_SESSIONS } from "../sessions";
import { getSplitVote, tallyItemVotes } from "./split-votes";
import { isSplitVote, tallyVotes } from "./votes";

const splitItems = TAKASAKI_SESSIONS.flatMap((session) =>
  session.items.filter(isSplitVote).map((item) => ({ session, item }))
);

describe("tallyVotes", () => {
  it("議長と採決に加わらなかった議員を数えない", () => {
    const tally = tallyVotes(
      {
        chair: "議長",
        members: [
          { name: "議長", faction: "A" },
          { name: "甲", faction: "A" },
          { name: "乙", faction: "B" },
          { name: "丙", faction: "B" },
        ],
      },
      { against: ["乙"], absent: ["丙"] }
    );
    expect([tally.forCount, tally.againstCount]).toEqual([1, 1]);
    expect(tally.absentMembers).toEqual(["丙"]);
    expect(tally.chair).toBe("議長");
  });
});

describe("賛否が分かれた議案の議員別賛否と理由", () => {
  it("すべての会期の賛否が分かれた議案に、議員ごとの賛否と理由（または討論がなかった旨）がある", () => {
    expect(splitItems.length).toBeGreaterThan(0);
    for (const { session, item } of splitItems) {
      const record = getSplitVote(item.id);
      expect(record, item.id).toBeDefined();
      expect(tallyItemVotes(session, item), item.id).not.toBeNull();
      expect(
        (record?.reasons.length ?? 0) > 0 || Boolean(record?.reasonsNote),
        item.id
      ).toBe(true);
    }
  });

  it("賛成・反対の人数が議決結果（賛成多数・賛成少数）と合う", () => {
    for (const { session, item } of splitItems) {
      const tally = tallyItemVotes(session, item);
      if (!tally) throw new Error(item.id);
      const passed = tally.forCount > tally.againstCount;
      const rejected = /不採択|否決|賛成少数/.test(item.result ?? "");
      expect(passed, item.id).toBe(!rejected);
    }
  });

  it("理由は会議録の発言へのリンクを持ち、賛成か反対のどちらか", () => {
    for (const { item } of splitItems) {
      for (const reason of getSplitVote(item.id)?.reasons ?? []) {
        expect(["賛成", "反対"]).toContain(reason.side);
        expect(reason.summary.length, item.id).toBeGreaterThan(0);
        expect(reason.minutesUrl).toMatch(
          /^https:\/\/takasaki\.gijiroku\.com\/voices\/.*HUID=\d+/
        );
      }
    }
  });
});
