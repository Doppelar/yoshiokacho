import { describe, expect, it } from "vitest";
import {
  getCouncilItemPathForBill,
  isCouncilId,
  parseCouncilItemOpinionInput,
  toCouncilBillSlug,
} from "./councils";

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

describe("toCouncilBillSlug / getCouncilItemPathForBill", () => {
  it("議会の議案の slug から議会ページのパスに戻せる", () => {
    const slug = toCouncilBillSlug("takasaki", "r8-4-gian-54");
    expect(slug).toBe("takasaki-r8-4-gian-54");
    expect(getCouncilItemPathForBill({ council: "takasaki", slug })).toBe(
      "/takasaki/bills/r8-4-gian-54"
    );
  });

  it("全国版のテーマ（national-iryo）はテーマのページを返し、未知のテーマは null", () => {
    expect(
      getCouncilItemPathForBill({ council: "national", slug: "national-iryo" })
    ).toBe("/japan/iryo");
    expect(
      getCouncilItemPathForBill({ council: "national", slug: "national-nope" })
    ).toBeNull();
    expect(
      getCouncilItemPathForBill({ council: "national", slug: "takasaki-iryo" })
    ).toBeNull();
  });

  it("吉岡町の議案・不明な議会・静的データにない議案は null", () => {
    expect(
      getCouncilItemPathForBill({ council: null, slug: "some-bill" })
    ).toBeNull();
    expect(
      getCouncilItemPathForBill({
        council: "unknown",
        slug: "unknown-r8-4-gian-54",
      })
    ).toBeNull();
    expect(
      getCouncilItemPathForBill({
        council: "takasaki",
        slug: "takasaki-no-such-item",
      })
    ).toBeNull();
    expect(
      getCouncilItemPathForBill({ council: "takasaki", slug: null })
    ).toBeNull();
    // slug の議会名と council が食い違う
    expect(
      getCouncilItemPathForBill({
        council: "takasaki",
        slug: "yoshioka-r8-4-gian-54",
      })
    ).toBeNull();
  });
});
