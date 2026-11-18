import { describe, expect, it } from "vitest";
import { isCouncilId, parseCouncilItemOpinionInput } from "./councils";

const fields = {
  commenterType: "citizen",
  stance: "for",
  residence: "in_town",
  body: "  賛成です。  ",
};

describe("parseCouncilItemOpinionInput", () => {
  it("高崎市に実在する議案への意見を受け付ける", () => {
    expect(
      parseCouncilItemOpinionInput("takasaki", "r8-4-gian-54", fields)
    ).toEqual({
      ok: true,
      value: {
        council: "takasaki",
        itemId: "r8-4-gian-54",
        commenterType: "citizen",
        stance: "for",
        residence: "in_town",
        body: "賛成です。",
      },
    });
  });

  it("存在しない議会・議案は受け付けない", () => {
    expect(
      parseCouncilItemOpinionInput("unknown", "r8-4-gian-54", fields).ok
    ).toBe(false);
    expect(
      parseCouncilItemOpinionInput("takasaki", "no-such-item", fields).ok
    ).toBe(false);
  });

  it("入力内容が不正なら受け付けない", () => {
    expect(
      parseCouncilItemOpinionInput("takasaki", "r8-4-gian-54", {
        ...fields,
        body: " ",
      }).ok
    ).toBe(false);
  });
});

describe("isCouncilId", () => {
  it("登録済みの議会だけ true を返す", () => {
    expect(isCouncilId("takasaki")).toBe(true);
    expect(isCouncilId("toString")).toBe(false);
  });
});
