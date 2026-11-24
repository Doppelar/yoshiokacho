import { describe, expect, it } from "vitest";
import { TAKASAKI_SESSION_R8_5 } from "../session-r8-5";
import { TAKASAKI_SESSIONS } from "../sessions";
import type { TakasakiItem } from "../types";
import { getItemExplanation } from "./item-explanations";
import {
  formatItemName,
  formatResult,
  isSplitVote,
  isUnanimityConfirmed,
  sortItemsForDisplay,
  tallyRollCall,
  tallySessionResults,
} from "./votes";

const session = TAKASAKI_SESSION_R8_5;
const item = (id: string) => {
  const found = session.items.find((i) => i.id === id);
  if (!found) throw new Error(`missing ${id}`);
  return found;
};

describe("令和8年第5回定例会のデータ", () => {
  it("議員は38人（議長を含む）で、名前に重複がない", () => {
    expect(session.members).toHaveLength(38);
    expect(new Set(session.members.map((m) => m.name)).size).toBe(38);
  });

  it("起立採決の反対議員はすべて議員名簿にいて、議長を含まない", () => {
    const names = new Set(session.members.map((m) => m.name));
    for (const i of session.items) {
      for (const name of i.rollCall?.against ?? []) {
        expect(names.has(name)).toBe(true);
        expect(name).not.toBe(session.chair);
      }
    }
  });

  it("項目IDに重複がない", () => {
    const ids = session.items.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("公式の賛否一覧表と人数が一致する", () => {
    const counts = (id: string) => {
      const tally = tallyRollCall(session, item(id));
      return [tally?.forCount, tally?.againstCount];
    };
    expect(counts("gian-92")).toEqual([35, 2]);
    expect(counts("gian-108")).toEqual([35, 2]);
    expect(counts("seigan-1")).toEqual([7, 30]);
    expect(counts("ikensho-1")).toEqual([19, 18]);
  });
});

describe("tallyRollCall", () => {
  it("会派ごとに賛成・反対を分ける", () => {
    const tally = tallyRollCall(session, item("seigan-1"));
    const kyosan = tally?.byFaction.find((f) => f.faction === "日本共産党");
    const choutoha = tally?.byFaction.find((f) => f.faction === "超党派の会");

    expect(kyosan).toEqual({
      faction: "日本共産党",
      forMembers: ["金子和幸", "伊藤敦博"],
      againstMembers: [],
    });
    expect(choutoha?.forMembers).toEqual(["角倉邦良"]);
    expect(choutoha?.againstMembers).toEqual(["新倉哲郎", "谷川留美子"]);
  });

  it("簡易採決（rollCall なし）は null", () => {
    expect(tallyRollCall(session, item("gian-94"))).toBeNull();
  });
});

describe("formatResult", () => {
  it("起立採決は賛成多数・賛成少数を、簡易採決は全会一致を添える", () => {
    expect(formatResult(session, item("gian-92"))).toBe("認定（賛成多数）");
    expect(formatResult(session, item("seigan-1"))).toBe("不採択（賛成少数）");
    expect(formatResult(session, item("gian-94"))).toBe("原案可決（全会一致）");
    expect(formatResult(session, item("hokoku-10"))).toBe("報告");
  });
});

describe("formatItemName", () => {
  it("種類と番号から表示名を作る", () => {
    expect(formatItemName({ kind: "議案", number: 92 })).toBe("議案第92号");
    expect(formatItemName({ kind: "意見書案", number: 1 })).toBe(
      "意見書案第1号"
    );
  });
});

describe("sortItemsForDisplay", () => {
  it("賛否が分かれたものを先頭に、残りは議案→請願→意見書案→報告・番号順", () => {
    const items: TakasakiItem[] = [
      {
        id: "h",
        kind: "報告",
        number: 10,
        title: "",
        committee: null,
        result: null,
      },
      {
        id: "g2",
        kind: "議案",
        number: 2,
        title: "",
        committee: null,
        result: "可決",
      },
      {
        id: "g1",
        kind: "議案",
        number: 1,
        title: "",
        committee: null,
        result: "可決",
      },
      {
        id: "s",
        kind: "請願",
        number: 1,
        title: "",
        committee: null,
        result: "不採択",
        rollCall: { against: [] },
      },
    ];

    expect(sortItemsForDisplay(items).map((i) => i.id)).toEqual([
      "s",
      "g1",
      "g2",
      "h",
    ]);
  });
});

describe("isSplitVote", () => {
  it("起立採決の記録か、公式資料の「賛成多数」「賛成少数」の記載で判断する", () => {
    expect(isSplitVote({ result: "不採択", rollCall: { against: [] } })).toBe(
      true
    );
    expect(isSplitVote({ result: "原案可決（賛成多数）" })).toBe(true);
    expect(isSplitVote({ result: "不採択（賛成少数）" })).toBe(true);
    expect(isSplitVote({ result: "原案可決" })).toBe(false);
    expect(isSplitVote({ result: null })).toBe(false);
  });
});

describe("tallySessionResults", () => {
  it("可決・不採択・報告・継続審査と、全会一致・賛否が分かれたものを数え分ける", () => {
    expect(
      tallySessionResults([
        { result: "原案可決" },
        { result: "原案可決（賛成多数）" },
        { result: "不採択（賛成少数）" },
        { result: "同意" },
        { result: null },
        { result: "―" },
      ])
    ).toEqual({
      total: 6,
      passed: 3,
      rejected: 1,
      reports: 1,
      undecided: 1,
      unanimous: 2,
      split: 2,
    });
  });

  it.each([
    ["r8-5", 4],
    ["r8-4", 2],
    ["r8-2", 4],
    ["r7-5", 1],
    ["r7-4", 6],
    ["r7-1", 1],
    ["r7-3", 0],
    ["r6-5", 3],
    ["r6-4", 1],
    ["r6-3", 1],
    ["r6-2", 0],
    ["r6-1", 4],
    ["r5-5", 5],
    ["r5-4", 3],
    ["r5-3", 3],
    ["r5-2", 0],
    ["r5-1", 4],
    ["r4-5", 3],
    ["r4-4", 2],
    ["r4-3", 0],
    ["r4-2", 7],
    ["r4-1", 2],
    ["r3-5", 4],
    ["r3-4", 1],
    ["r3-3", 0],
    ["r3-2", 0],
    ["r3-1", 6],
    ["r2-5", 1],
    ["r2-4", 2],
    ["r2-3", 0],
    ["r2-2", 1],
    ["r2-1", 3],
  ] as const)("%s の賛否が分かれた議案は%i件で、件数の合計が全件と一致する", (id, split) => {
    const target = TAKASAKI_SESSIONS.find((s) => s.id === id);
    if (!target) throw new Error(`missing ${id}`);
    const tally = tallySessionResults(target.items);
    expect(tally.split).toBe(split);
    expect(
      tally.passed + tally.rejected + tally.reports + tally.undecided
    ).toBe(tally.total);
    expect(tally.unanimous + tally.split).toBe(tally.passed + tally.rejected);
    expect(
      sortItemsForDisplay(target.items).slice(0, split).every(isSplitVote)
    ).toBe(true);
  });
});

describe("isUnanimityConfirmed", () => {
  const byId = (id: string) => {
    const found = TAKASAKI_SESSIONS.find((s) => s.id === id);
    if (!found) throw new Error(`missing ${id}`);
    return found;
  };

  it("議員別賛否がある会期と、全議案に会議録からの解説がある令和7年の会期だけ true", () => {
    for (const id of ["r8-5", "r7-1", "r7-2", "r7-3", "r7-4", "r7-5"]) {
      expect(isUnanimityConfirmed(byId(id)), id).toBe(true);
    }
    for (const id of ["r8-1", "r8-2", "r8-3", "r8-4", "r6-5", "r5-3"]) {
      expect(isUnanimityConfirmed(byId(id)), id).toBe(false);
    }
  });

  it("解説で全会一致とする会期は、解説の採決の記述が公式資料の賛否の記載と食い違わない", () => {
    for (const session of TAKASAKI_SESSIONS) {
      if (session.voteDetails !== "unconfirmed") continue;
      if (!isUnanimityConfirmed(session)) continue;
      for (const item of session.items) {
        if (item.result === null || item.result === "―") continue;
        const text = getItemExplanation(item.id)?.discussion.detailed.join("");
        expect(text, item.id).toMatch(
          isSplitVote(item)
            ? /賛成多数|賛成少数|起立多数|起立少数/
            : /全会一致|起立全員|異議な|異議がな|簡易採決/
        );
      }
    }
  });
});
