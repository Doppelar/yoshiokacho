import "server-only";

import { env } from "@/lib/env";
import { ChatError, ChatErrorCode } from "../../shared/types/errors";
import {
  getJstDayRange,
  getRollingRange,
} from "../../shared/utils/jst-day-range";
import { getTotalUsageCostUsd } from "./cost-tracker";

/**
 * システム全体の1日の予算上限を超過していないかチェックし、
 * 超過している場合は ChatError をスローする
 */
export async function checkSystemDailyCostLimit(): Promise<void> {
  const jstDayRange = getJstDayRange();
  const totalCost = await getTotalUsageCostUsd(
    jstDayRange.from,
    jstDayRange.to
  );
  const limitCost = env.chat.dailyTotalCostLimitUsd;

  if (totalCost >= limitCost) {
    throw new ChatError(ChatErrorCode.SYSTEM_DAILY_COST_LIMIT_REACHED);
  }
}

/** 期間上限を集計する日数。AI Gateway の無料枠（30日ごとに5ドル）に合わせる */
const COST_LIMIT_WINDOW_DAYS = 30;

/**
 * システム全体の直近30日の予算上限を超過していないかチェックし、
 * 超過している場合は ChatError をスローする
 */
export async function checkSystemMonthlyCostLimit(): Promise<void> {
  const range = getRollingRange(COST_LIMIT_WINDOW_DAYS);
  const totalCost = await getTotalUsageCostUsd(range.from, range.to);
  const limitCost = env.chat.monthlyTotalCostLimitUsd;

  if (totalCost >= limitCost) {
    throw new ChatError(ChatErrorCode.SYSTEM_MONTHLY_COST_LIMIT_REACHED);
  }
}

/**
 * システム全体の日次・月次の予算上限を並列に確認し、超過していれば ChatError をスローする
 */
export async function assertWithinSystemCostLimits(): Promise<void> {
  await Promise.all([
    checkSystemDailyCostLimit(),
    checkSystemMonthlyCostLimit(),
  ]);
}

/**
 * システム全体の日次・月次の予算上限内かを返す。
 * 確認に失敗したときも false（上限超過扱い）にして、AIを呼ばない側に倒す。
 */
export async function isWithinSystemCostLimits(): Promise<boolean> {
  try {
    await assertWithinSystemCostLimits();
    return true;
  } catch (error) {
    if (!(error instanceof ChatError)) {
      console.error("System cost limit check failed:", error);
    }
    return false;
  }
}
