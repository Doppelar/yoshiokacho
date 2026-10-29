import { describe, expect, it } from "vitest";
import {
  countByStance,
  isStance,
  OPINION_BODY_MAX_LENGTH,
  parseOpinionInput,
} from "./opinion-input";

const validInput = {
  billId: "11111111-2222-3333-4444-555555555555",
  commenterType: "citizen",
  stance: "for",
  residence: "in_town",
  body: "  子育て支援の拡充に賛成です。  ",
};

describe("parseOpinionInput", () => {
  it("正しい入力は本文の前後の空白を除いて受け付ける", () => {
    const result = parseOpinionInput(validInput);

    expect(result).toEqual({
      ok: true,
      value: {
        billId: validInput.billId,
        commenterType: "citizen",
        stance: "for",
        residence: "in_town",
        body: "子育て支援の拡充に賛成です。",
      },
    });
  });

  it("専門家・反対・町外・どちらでもないも受け付ける", () => {
    expect(
      parseOpinionInput({
        ...validInput,
        commenterType: "expert",
        stance: "against",
        residence: "out_of_town",
      }).ok
    ).toBe(true);
    expect(parseOpinionInput({ ...validInput, stance: "neutral" }).ok).toBe(
      true
    );
  });

  it("選択肢にない値は受け付けない", () => {
    expect(parseOpinionInput({ ...validInput, commenterType: "" }).ok).toBe(
      false
    );
    expect(parseOpinionInput({ ...validInput, stance: "maybe" }).ok).toBe(
      false
    );
    expect(parseOpinionInput({ ...validInput, residence: "tokyo" }).ok).toBe(
      false
    );
  });

  it("議案IDがUUIDでなければ受け付けない", () => {
    expect(parseOpinionInput({ ...validInput, billId: "abc" }).ok).toBe(false);
  });

  it("空の本文と長すぎる本文は受け付けない", () => {
    expect(parseOpinionInput({ ...validInput, body: "   " }).ok).toBe(false);
    expect(
      parseOpinionInput({
        ...validInput,
        body: "あ".repeat(OPINION_BODY_MAX_LENGTH + 1),
      }).ok
    ).toBe(false);
    expect(
      parseOpinionInput({
        ...validInput,
        body: "あ".repeat(OPINION_BODY_MAX_LENGTH),
      }).ok
    ).toBe(true);
  });
});

describe("countByStance", () => {
  it("賛否ごとに数え、0件の賛否も含める", () => {
    expect(
      countByStance([{ stance: "for" }, { stance: "for" }, { stance: "against" }])
    ).toEqual({ for: 2, against: 1, neutral: 0 });
    expect(countByStance([])).toEqual({ for: 0, against: 0, neutral: 0 });
  });
});

describe("isStance", () => {
  it("想定した値だけ true を返す", () => {
    expect(isStance("neutral")).toBe(true);
    expect(isStance("unknown")).toBe(false);
  });
});
