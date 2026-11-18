import {
  calculateUsageCostUsd,
  roundCost,
  type SanitizedUsage,
} from "@/lib/ai/calculate-ai-cost";

/**
 * cost_usdカラムの値を安全にパースする
 */
export function parseCost(row: { cost_usd: number | null }): number {
  const value = Number(row.cost_usd);
  return Number.isFinite(value) ? value : 0;
}

/**
 * override > calculated > default の3段階フォールバックでコストを決定する
 */
export function resolveCostUsd(
  model: string,
  usage: SanitizedUsage,
  costOverride?: number | null
): number {
  if (typeof costOverride === "number" && Number.isFinite(costOverride)) {
    return roundCost(costOverride);
  }

  if (usage.inputTokens > 0 || usage.outputTokens > 0) {
    try {
      return calculateUsageCostUsd(model, usage);
    } catch (error) {
      console.error("Failed to calculate usage cost:", error);
    }
  }

  return 0;
}

/** 利用コストの記録用に、モデルID（文字列またはモデルオブジェクト）を文字列にする */
export function getModelName(model: string | { modelId?: string }): string {
  return typeof model === "string" ? model : (model.modelId ?? "unknown");
}

/**
 * Vercel AI Gateway の応答メタデータから、実際に請求されたコスト（USD）を取り出す。
 * 取り出せなければ undefined（呼び出し側でトークン数からの計算に切り替える）。
 */
export function extractGatewayCost(
  providerMetadata: unknown
): number | undefined {
  if (!providerMetadata || typeof providerMetadata !== "object") {
    return undefined;
  }
  const gatewayCost = (providerMetadata as { gateway?: { cost?: unknown } })
    .gateway?.cost;
  if (gatewayCost === undefined || gatewayCost === null || gatewayCost === "") {
    return undefined;
  }
  const numericCost = Number(gatewayCost);
  return Number.isFinite(numericCost) ? numericCost : undefined;
}
