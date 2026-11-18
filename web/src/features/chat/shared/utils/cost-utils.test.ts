import { describe, expect, it } from "vitest";
import {
  extractGatewayCost,
  getModelName,
  parseCost,
  resolveCostUsd,
} from "./cost-utils";

describe("getModelName", () => {
  it("文字列はそのまま、モデルオブジェクトは modelId を返す", () => {
    expect(getModelName("openai/gpt-5.2")).toBe("openai/gpt-5.2");
    expect(getModelName({ modelId: "anthropic/claude-haiku-4.5" })).toBe(
      "anthropic/claude-haiku-4.5"
    );
  });

  it("modelId がなければ unknown を返す", () => {
    expect(getModelName({})).toBe("unknown");
  });
});

describe("parseCost", () => {
  it("正常な数値をそのまま返す", () => {
    expect(parseCost({ cost_usd: 0.123456 })).toBe(0.123456);
  });

  it("0を正しく返す", () => {
    expect(parseCost({ cost_usd: 0 })).toBe(0);
  });

  it("nullなら0を返す", () => {
    expect(parseCost({ cost_usd: null })).toBe(0);
  });

  it("NaNなら0を返す", () => {
    expect(parseCost({ cost_usd: Number.NaN as number })).toBe(0);
  });

  it("Infinityなら0を返す", () => {
    expect(parseCost({ cost_usd: Number.POSITIVE_INFINITY as number })).toBe(0);
  });
});

describe("resolveCostUsd", () => {
  const zeroUsage = { inputTokens: 0, outputTokens: 0, totalTokens: 0 };
  const someUsage = { inputTokens: 100, outputTokens: 50, totalTokens: 150 };

  it("costOverrideが有限数値ならroundCostされた値を返す", () => {
    const result = resolveCostUsd("any-model", zeroUsage, 0.001);
    expect(result).toBe(0.001);
  });

  it("costOverrideがNaNなら無視して次のフォールバックへ", () => {
    const result = resolveCostUsd("any-model", zeroUsage, Number.NaN);
    expect(result).toBe(0);
  });

  it("costOverrideがnullなら無視して計算へフォールバック", () => {
    // unknown modelなのでcalculateUsageCostUsdがthrowし、0にフォールバック
    const result = resolveCostUsd("unknown-model", someUsage, null);
    expect(result).toBe(0);
  });

  it("costOverrideがundefinedならトークンベース計算へフォールバック", () => {
    const result = resolveCostUsd("unknown-model", someUsage);
    // unknown modelなのでcalculateUsageCostUsdがthrowし、0にフォールバック
    expect(result).toBe(0);
  });

  it("トークンが0でoverrideもなければ0を返す", () => {
    expect(resolveCostUsd("any-model", zeroUsage)).toBe(0);
  });
});

describe("extractGatewayCost", () => {
  it("AI Gateway の請求額を数値で取り出す", () => {
    expect(extractGatewayCost({ gateway: { cost: "0.0012" } })).toBe(0.0012);
    expect(extractGatewayCost({ gateway: { cost: 0.5 } })).toBe(0.5);
  });

  it("請求額が無い・数値でないときは undefined を返す", () => {
    expect(extractGatewayCost(undefined)).toBeUndefined();
    expect(extractGatewayCost({})).toBeUndefined();
    expect(extractGatewayCost({ gateway: {} })).toBeUndefined();
    expect(extractGatewayCost({ gateway: { cost: null } })).toBeUndefined();
    expect(extractGatewayCost({ gateway: { cost: "" } })).toBeUndefined();
    expect(extractGatewayCost({ gateway: { cost: "abc" } })).toBeUndefined();
  });
});
