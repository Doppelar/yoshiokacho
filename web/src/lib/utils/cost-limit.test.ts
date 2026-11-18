import { describe, expect, it } from "vitest";
import { resolveCostLimitUsd } from "./cost-limit";

describe("resolveCostLimitUsd", () => {
  it("未指定なら無料枠の天井を使う", () => {
    expect(resolveCostLimitUsd(undefined, 4, "X")).toBe(4);
    expect(resolveCostLimitUsd("", 4, "X")).toBe(4);
  });

  it("天井より小さい値はそのまま使う", () => {
    expect(resolveCostLimitUsd("1.5", 4, "X")).toBe(1.5);
  });

  it("天井より大きい値を指定しても天井で頭打ちにする", () => {
    expect(resolveCostLimitUsd("1000", 4, "X")).toBe(4);
  });

  it("正の数値でなければ例外を投げる", () => {
    expect(() => resolveCostLimitUsd("abc", 4, "X")).toThrow("X");
    expect(() => resolveCostLimitUsd("0", 4, "X")).toThrow("X");
    expect(() => resolveCostLimitUsd("-1", 4, "X")).toThrow("X");
  });
});
