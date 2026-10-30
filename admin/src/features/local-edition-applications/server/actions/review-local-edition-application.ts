"use server";

import {
  isApplicationId,
  parseReviewDecision,
} from "@mirai-gikai/shared/local-edition-application/parse-application";
import { requireAdmin } from "@/features/auth/server/lib/auth-server";
import { reviewPendingApplication } from "../repositories/local-edition-application-repository";

export type ReviewLocalEditionApplicationResult =
  | { ok: true }
  | { ok: false; error: string };

export async function reviewLocalEditionApplication(input: {
  id: string;
  decision: string;
}): Promise<ReviewLocalEditionApplicationResult> {
  try {
    await requireAdmin();
  } catch (error) {
    console.error("Local edition application review denied", error);
    return { ok: false, error: "管理者権限が必要です。" };
  }

  if (!isApplicationId(input.id)) {
    return { ok: false, error: "申請が見つかりません。" };
  }

  const decision = parseReviewDecision(input.decision);
  if (!decision.ok) return { ok: false, error: decision.error };

  try {
    const outcome = await reviewPendingApplication(input.id, decision.value);
    if (outcome === "not_pending") {
      return { ok: false, error: "この申請はすでに審査済みです。" };
    }
    return { ok: true };
  } catch (error) {
    console.error("Failed to review local edition application", error);
    return { ok: false, error: "審査結果の保存に失敗しました。" };
  }
}
