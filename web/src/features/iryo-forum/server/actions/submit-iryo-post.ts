"use server";

import { createHash } from "node:crypto";
import { parseFeedbackInput } from "@mirai-gikai/shared/local-edition-feedback/feedback";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { consumeFeedbackRateLimit } from "@/features/local-edition-feedback/server/repositories/feedback-repository";
import { getClientIp } from "@/features/open-data/shared/utils/client-ip";
import { getWindowStart } from "@/features/open-data/shared/utils/rate-limit-window";
import { routes } from "@/lib/routes";
import { IRYO_TOPIC_ID } from "../../shared/forum";
import { insertTopicPost } from "../repositories/iryo-forum-repository";

/** 同じ人（IP）からの投稿は1分に3件、この掲示板全体で1分に30件まで */
const PER_IP_LIMIT = 3;
const GLOBAL_LIMIT = 30;

/** 「医療のこれからを考える会」の掲示板に投稿する（即時公開） */
export async function submitIryoPost(
  input: unknown
): Promise<{ ok: true } | { ok: false; error: string }> {
  const parsed = parseFeedbackInput(input);
  if (!parsed.ok) return parsed;
  try {
    const ip = getClientIp(await headers()) ?? "unknown";
    const hash = createHash("sha256").update(ip).digest("hex");
    const windowStart = getWindowStart(new Date(), 60).toISOString();
    const allowed =
      (await consumeFeedbackRateLimit(
        `topic:${IRYO_TOPIC_ID}:ip:${hash}`,
        windowStart,
        PER_IP_LIMIT
      )) &&
      (await consumeFeedbackRateLimit(
        `topic:${IRYO_TOPIC_ID}:global`,
        windowStart,
        GLOBAL_LIMIT
      ));
    if (!allowed) {
      return {
        ok: false,
        error: "投稿が続いています。1分ほど待ってからもう一度お試しください。",
      };
    }
    await insertTopicPost(IRYO_TOPIC_ID, parsed.value);
    revalidatePath(routes.iryoForum());
    return { ok: true };
  } catch (error) {
    console.error("Failed to submit iryo post", error);
    return {
      ok: false,
      error: "投稿を保存できませんでした。時間をおいて再度お試しください。",
    };
  }
}
