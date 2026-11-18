/**
 * AI利用コスト上限（USD）の、無料枠に収めるための天井。
 * Vercel AI Gateway の無料枠（30日ごとに5ドル）を超えないよう、
 * 環境変数でこれより大きい値を指定しても、この値で頭打ちにする。
 */
export const FREE_TIER_COST_CAPS_USD = {
  dailyUser: 0.1,
  dailyTotal: 0.5,
  monthlyTotal: 4,
} as const;

/**
 * 環境変数のコスト上限を数値にし、無料枠の天井で頭打ちにする。
 * 未指定なら天井の値を使う。正の数値でなければ例外を投げる。
 */
export function resolveCostLimitUsd(
  raw: string | undefined,
  capUsd: number,
  envName: string
): number {
  if (raw === undefined || raw === "") return capUsd;
  const value = Number(raw);
  if (Number.isNaN(value) || value <= 0) {
    throw new Error(`環境変数 ${envName} は正の数値で指定してください`);
  }
  return Math.min(value, capUsd);
}
