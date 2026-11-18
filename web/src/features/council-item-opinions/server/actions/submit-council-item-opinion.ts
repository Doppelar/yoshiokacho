"use server";

import { createHash } from "node:crypto";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import type {
  RawOpinionFields,
  SubmitOpinionResult,
} from "@/features/bill-public-opinions/shared/utils/opinion-input";
import { consumeFeedbackRateLimit } from "@/features/local-edition-feedback/server/repositories/feedback-repository";
import { getClientIp } from "@/features/open-data/shared/utils/client-ip";
import { getWindowStart } from "@/features/open-data/shared/utils/rate-limit-window";
import {
  COUNCILS,
  parseCouncilItemOpinionInput,
} from "../../shared/utils/councils";
import { insertCouncilItemOpinion } from "../repositories/council-item-opinion-repository";

/** 同じ人（IP）からの投稿は1分に3件、全体で1分に30件まで */
const PER_IP_LIMIT = 3;
const GLOBAL_LIMIT = 30;

export async function submitCouncilItemOpinion(
  council: string,
  itemId: string,
  fields: RawOpinionFields
): Promise<SubmitOpinionResult> {
  const parsed = parseCouncilItemOpinionInput(council, itemId, fields);
  if (!parsed.ok) return parsed;

  try {
    const ip = getClientIp(await headers()) ?? "unknown";
    const hash = createHash("sha256").update(ip).digest("hex");
    const windowStart = getWindowStart(new Date(), 60).toISOString();
    const allowed =
      (await consumeFeedbackRateLimit(
        `council-opinion:ip:${hash}`,
        windowStart,
        PER_IP_LIMIT
      )) &&
      (await consumeFeedbackRateLimit(
        "council-opinion:global",
        windowStart,
        GLOBAL_LIMIT
      ));
    if (!allowed) {
      return {
        ok: false,
        error: "投稿が続いています。1分ほど待ってからもう一度お試しください。",
      };
    }
    await insertCouncilItemOpinion(parsed.value);
  } catch (error) {
    console.error("Failed to save council item opinion", error);
    return {
      ok: false,
      error: "意見の保存に失敗しました。時間をおいて再度お試しください。",
    };
  }

  const { council: councilId, itemId: savedItemId } = parsed.value;
  revalidatePath(COUNCILS[councilId].itemPath(savedItemId));
  return { ok: true };
}
