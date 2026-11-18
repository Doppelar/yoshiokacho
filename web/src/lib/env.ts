/**
 * 環境変数の設定
 * アプリケーション全体で使用する環境変数を一元管理
 */

import {
  FREE_TIER_COST_CAPS_USD,
  resolveCostLimitUsd,
} from "./utils/cost-limit";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("環境変数 NEXT_PUBLIC_SUPABASE_URL が設定されていません");
}

if (!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
  throw new Error(
    "環境変数 NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY が設定されていません"
  );
}

// AIの利用コスト上限。無料枠を超えないよう、環境変数の値は天井で頭打ちにする
const chatDailyUserCostLimitUsd = resolveCostLimitUsd(
  process.env.CHAT_DAILY_USER_COST_LIMIT_USD ||
    process.env.CHAT_DAILY_COST_LIMIT_USD,
  FREE_TIER_COST_CAPS_USD.dailyUser,
  "CHAT_DAILY_USER_COST_LIMIT_USD"
);
const chatDailyTotalCostLimitUsd = resolveCostLimitUsd(
  process.env.CHAT_DAILY_TOTAL_COST_LIMIT_USD,
  FREE_TIER_COST_CAPS_USD.dailyTotal,
  "CHAT_DAILY_TOTAL_COST_LIMIT_USD"
);
const chatMonthlyTotalCostLimitUsd = resolveCostLimitUsd(
  process.env.CHAT_MONTHLY_TOTAL_COST_LIMIT_USD,
  FREE_TIER_COST_CAPS_USD.monthlyTotal,
  "CHAT_MONTHLY_TOTAL_COST_LIMIT_USD"
);

export const env = {
  webUrl: process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3000",
  adminUrl: process.env.ADMIN_URL || "http://localhost:3001",
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabasePublishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  revalidateSecret: process.env.REVALIDATE_SECRET,
  analytics: {
    gaTrackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  },
  langfuse: {
    publicKey: process.env.LANGFUSE_PUBLIC_KEY,
    secretKey: process.env.LANGFUSE_SECRET_KEY,
    baseUrl: process.env.LANGFUSE_BASE_URL || "https://cloud.langfuse.com",
    promptLabel: process.env.LANGFUSE_PROMPT_LABEL || "production",
  },
  chat: {
    dailyUserCostLimitUsd: chatDailyUserCostLimitUsd,
    dailyTotalCostLimitUsd: chatDailyTotalCostLimitUsd,
    monthlyTotalCostLimitUsd: chatMonthlyTotalCostLimitUsd,
  },
} as const;

// 型定義
export type Env = typeof env;
