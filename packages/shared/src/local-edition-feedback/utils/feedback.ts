import { z } from "zod";

export const FEEDBACK_NAME_MAX_LENGTH = 40;
export const FEEDBACK_BODY_MAX_LENGTH = 2000;
export const FEEDBACK_PAGE_SIZE = 20;
export type FeedbackPost = {
  id: string;
  display_name: string;
  body: string;
  created_at: string;
};
export type FeedbackRecord = FeedbackPost & { is_hidden: boolean };
const inputSchema = z.object({
  displayName: z
    .string()
    .trim()
    .max(FEEDBACK_NAME_MAX_LENGTH, "名前は40文字以内で入力してください。")
    .default(""),
  body: z
    .string()
    .trim()
    .min(1, "ご意見を入力してください。")
    .max(FEEDBACK_BODY_MAX_LENGTH, "ご意見は2000文字以内で入力してください。"),
  website: z.string().max(0, "投稿を受け付けられませんでした。").optional(),
});
export function parseFeedbackInput(input: unknown) {
  const result = inputSchema.safeParse(input);
  if (!result.success)
    return {
      ok: false as const,
      error: result.error.issues[0]?.message ?? "入力内容を確認してください。",
    };
  return {
    ok: true as const,
    value: {
      displayName: result.data.displayName || "匿名",
      body: result.data.body,
    },
  };
}
export function parseFeedbackVisibility(input: unknown) {
  return z
    .object({ id: z.string().uuid(), hidden: z.boolean() })
    .safeParse(input);
}
export function parseFeedbackPage(value: unknown): number {
  if (typeof value !== "string" || !/^\d+$/.test(value)) return 1;
  const page = Number(value);
  return Number.isSafeInteger(page) && page >= 1 && page <= 10000 ? page : 1;
}
export function formatFeedbackDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Tokyo",
  }).format(date);
}
