import { describe, expect, it } from "vitest";
import { getItemExplanation } from "./item-explanations";

describe("議案の説明の取得", () => {
  it("決算の説明を議案IDから取得する", () => {
    const explanation = getItemExplanation("gian-92");
    expect(explanation?.plain.join("")).toContain("令和7年度");
    expect(explanation?.detailed.join("")).toContain("1,761億6,249万円");
  });

  it.each([
    "unknown",
    "r8-4-gian-53",
    "constructor",
    "toString",
    "__proto__",
  ])("対象外のID %s に別の議案の説明を返さない", (id) => {
    expect(getItemExplanation(id)).toBeUndefined();
  });
});
