import { describe, expect, it } from "vitest";
import { TAKASAKI_SESSION_R8_5 } from "../session-r8-5";
import type { TakasakiItem } from "../types";
import {
  formatItemName,
  formatResult,
  sortItemsForDisplay,
  tallyRollCall,
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
