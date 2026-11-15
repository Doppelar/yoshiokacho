"use server";
import { createHash } from "node:crypto";
import { parseFeedbackInput } from "@mirai-gikai/shared/local-edition-feedback/feedback";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { getClientIp } from "@/features/open-data/shared/utils/client-ip";
import { getWindowStart } from "@/features/open-data/shared/utils/rate-limit-window";
import { routes } from "@/lib/routes";
import {
  consumeFeedbackRateLimit,
  insertFeedback,
} from "../repositories/feedback-repository";

export async function submitFeedback(
  input: unknown
): Promise<{ ok: true } | { ok: false; error: string }> {
  const parsed = parseFeedbackInput(input);
  if (!parsed.ok) return parsed;
  try {
    const ip = getClientIp(await headers()) ?? "unknown";
    const hash = createHash("sha256").update(ip).digest("hex");
    const windowStart = getWindowStart(new Date(), 60).toISOString();
    if (
      !(await consumeFeedbackRateLimit(
        `feedback:ip:${hash}`,
        windowStart,
        3
      )) ||
      !(await consumeFeedbackRateLimit("feedback:global", windowStart, 30))
    ) {
      return {
        ok: false,
        error: "投稿が続いています。1分ほど待ってからもう一度お試しください。",
      };
    }
    await insertFeedback(parsed.value);
    revalidatePath(routes.localEditionFeedback());
    return { ok: true };
  } catch (error) {
    console.error("Failed to submit feedback", error);
    return {
      ok: false,
      error: "投稿を保存できませんでした。時間をおいて再度お試しください。",
    };
  }
}
