import "server-only";
import {
  FEEDBACK_PAGE_SIZE,
  type FeedbackPost,
} from "@mirai-gikai/shared/local-edition-feedback/feedback";
import { createAdminClient } from "@mirai-gikai/supabase";

export async function findPublicFeedback(
  page: number
): Promise<{ available: boolean; posts: FeedbackPost[]; count: number }> {
  const { data, count, error } = await createAdminClient()
    .from("local_edition_feedback")
    .select("id,display_name,body,created_at", { count: "exact" })
    .eq("is_hidden", false)
    .order("created_at", { ascending: false })
    .order("id", { ascending: false })
    .range((page - 1) * FEEDBACK_PAGE_SIZE, page * FEEDBACK_PAGE_SIZE - 1);
  if (error?.code === "PGRST205" || error?.code === "42P01")
    return { available: false, posts: [], count: 0 };
  if (error) throw new Error(`掲示板の取得に失敗しました: ${error.message}`);
  return { available: true, posts: data ?? [], count: count ?? 0 };
}
export async function insertFeedback(input: {
  displayName: string;
  body: string;
}) {
  const { error } = await createAdminClient()
    .from("local_edition_feedback")
    .insert({
      display_name: input.displayName,
      body: input.body,
      is_hidden: false,
    });
  if (error) throw new Error(`掲示板への投稿に失敗しました: ${error.message}`);
}
export async function consumeFeedbackRateLimit(
  key: string,
  windowStart: string,
  limit: number
) {
  const { data, error } = await createAdminClient().rpc(
    "consume_local_edition_feedback_rate_limit",
    {
      p_key: key,
      p_window_start: windowStart,
      p_limit: limit,
    }
  );
  if (error) throw new Error(`投稿制限の確認に失敗しました: ${error.message}`);
  return data === true;
}
