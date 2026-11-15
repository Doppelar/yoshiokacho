import "server-only";
import {
  FEEDBACK_PAGE_SIZE,
  type FeedbackRecord,
} from "@mirai-gikai/shared/local-edition-feedback/feedback";
import { createAdminClient } from "@mirai-gikai/supabase";
export async function findFeedbackForAdmin(page = 1): Promise<{
  available: boolean;
  posts: FeedbackRecord[];
  count: number;
}> {
  const { data, count, error } = await createAdminClient()
    .from("local_edition_feedback")
    .select("id,display_name,body,created_at,is_hidden", { count: "exact" })
    .order("created_at", { ascending: false })
    .order("id", { ascending: false })
    .range((page - 1) * FEEDBACK_PAGE_SIZE, page * FEEDBACK_PAGE_SIZE - 1);
  if (error?.code === "PGRST205" || error?.code === "42P01")
    return { available: false, posts: [], count: 0 };
  if (error) throw new Error(`掲示板の取得に失敗しました: ${error.message}`);
  return { available: true, posts: data ?? [], count: count ?? 0 };
}
export async function updateFeedbackVisibility(id: string, hidden: boolean) {
  const { data, error } = await createAdminClient()
    .from("local_edition_feedback")
    .update({ is_hidden: hidden })
    .eq("id", id)
    .select("id")
    .maybeSingle();
  if (error) throw new Error(`投稿の更新に失敗しました: ${error.message}`);
  return data !== null;
}
