import { describe, expect, it } from "vitest";
import { filterBills } from "./filter-bills";

function bill(
  id: string,
  overrides: {
    title?: string;
    tags?: string[];
  } = {}
) {
  return {
    id,
    name: `${id} 法律案`,
    bill_content: { title: overrides.title ?? `${id} のタイトル` } as never,
    tags: (overrides.tags ?? []).map((label) => ({ id: label, label })),
  };
}

const ids = (bills: { id: string }[]) => bills.map((b) => b.id);
const base = { query: "", tagId: null };

describe("filterBills", () => {
  it("既定では絞り込まない", () => {
    const bills = [bill("a"), bill("b")];
    expect(ids(filterBills(bills, base))).toEqual(["a", "b"]);
  });

  it("キーワードで絞る", () => {
    const bills = [bill("a", { title: "ガソリン税" }), bill("b")];
    expect(ids(filterBills(bills, { ...base, query: "ガソリン" }))).toEqual([
      "a",
    ]);
  });

  it("カテゴリで絞る", () => {
    const bills = [
      bill("a", { tags: ["税金"] }),
      bill("b", { tags: ["教育"] }),
    ];
    expect(ids(filterBills(bills, { ...base, tagId: "税金" }))).toEqual(["a"]);
  });

  it("複数の条件を重ねる", () => {
    const bills = [
      bill("hit", {
        title: "ガソリン税",
        tags: ["税金"],
      }),
      bill("noTag", {
        title: "ガソリン税",
        tags: ["教育"],
      }),
    ];

    expect(
      ids(
        filterBills(bills, {
          query: "ガソリン",
          tagId: "税金",
        })
      )
    ).toEqual(["hit"]);
  });

  it("元の配列を壊さない", () => {
    const input = [bill("a")];
    filterBills(input, base).push(bill("b"));
    expect(input).toHaveLength(1);
  });
});
