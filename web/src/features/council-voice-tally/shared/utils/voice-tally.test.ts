import { describe, expect, it } from "vitest";
import {
  buildVoiceTallies,
  countTotal,
  countVoiceTotal,
  emptyVoiceTally,
  formatStanceCounts,
  rankItemsByVoices,
  sumVoiceTallies,
} from "./voice-tally";

const LABELS = { for: "賛成", against: "反対", neutral: "どちらでもない" };

describe("buildVoiceTallies", () => {
  it("AIインタビューと意見投稿を、議案ごと・立場ごとに分けて数える", () => {
    const tallies = buildVoiceTallies(
      [
        { itemId: "a", stance: "for" },
        { itemId: "a", stance: "for" },
        { itemId: "a", stance: "against" },
        { itemId: "b", stance: "neutral" },
      ],
      [
        { itemId: "a", stance: "against" },
        { itemId: "c", stance: "for" },
      ]
    );

    expect(tallies).toEqual({
      a: {
        interviews: { for: 2, against: 1, neutral: 0 },
        opinions: { for: 0, against: 1, neutral: 0 },
      },
      b: {
        interviews: { for: 0, against: 0, neutral: 1 },
        opinions: { for: 0, against: 0, neutral: 0 },
      },
      c: {
        interviews: { for: 0, against: 0, neutral: 0 },
        opinions: { for: 1, against: 0, neutral: 0 },
      },
    });
  });

  it("立場が未設定・不明なものは数えない", () => {
    expect(
      buildVoiceTallies(
        [
          { itemId: "a", stance: null },
          { itemId: "a", stance: "unknown" },
        ],
        []
      )
    ).toEqual({});
  });
});

describe("sumVoiceTallies", () => {
  it("全議案の件数を種類・立場ごとに合計する", () => {
    const total = sumVoiceTallies(
      buildVoiceTallies(
        [
          { itemId: "a", stance: "for" },
          { itemId: "b", stance: "for" },
        ],
        [{ itemId: "b", stance: "neutral" }]
      )
    );
    expect(total).toEqual({
      interviews: { for: 2, against: 0, neutral: 0 },
      opinions: { for: 0, against: 0, neutral: 1 },
    });
    expect(countTotal(total.interviews)).toBe(2);
    expect(countVoiceTotal(total)).toBe(3);
  });

  it("議案がなければすべて0", () => {
    expect(sumVoiceTallies({})).toEqual(emptyVoiceTally());
  });
});

describe("rankItemsByVoices", () => {
  it("声の多い順に、上限件数まで並べる", () => {
    const tallies = buildVoiceTallies(
      [
        { itemId: "a", stance: "for" },
        { itemId: "b", stance: "for" },
        { itemId: "b", stance: "against" },
      ],
      [
        { itemId: "c", stance: "for" },
        { itemId: "c", stance: "for" },
        { itemId: "c", stance: "for" },
      ]
    );
    expect(rankItemsByVoices(tallies, 2)).toEqual(["c", "b"]);
  });
});

describe("formatStanceCounts", () => {
  it("0件の立場を省いて書く", () => {
    expect(formatStanceCounts({ for: 2, against: 0, neutral: 1 }, LABELS)).toBe(
      "賛成2・どちらでもない1"
    );
  });

  it("すべて0なら空文字", () => {
    expect(formatStanceCounts({ for: 0, against: 0, neutral: 0 }, LABELS)).toBe(
      ""
    );
  });
});
