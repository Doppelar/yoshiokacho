import "server-only";

import type { FeedbackPost } from "@mirai-gikai/shared/local-edition-feedback/feedback";
import { createAdminClient } from "@mirai-gikai/supabase";
import { toCouncilBillSlug } from "@/features/council-item-opinions/shared/utils/councils";
import { IRYO_TOPIC_ID, NATIONAL_COUNCIL } from "../../shared/forum";

/**
 * 「医療のこれから」のAIインタビューに寄せられた回答（レポート）の件数。
 * 公開・非公開を問わず数え、モデレーションで NG のものは除く。
 */
export async function countIryoInterviewReports(): Promise<number> {
  const supabase = createAdminClient();
  const { count, error } = await supabase
    .from("interview_report")
    .select(
      "id, interview_sessions!inner(interview_configs!inner(bills!inner(slug)))",
      { count: "exact", head: true }
    )
    .eq(
      "interview_sessions.interview_configs.bills.slug",
      toCouncilBillSlug(NATIONAL_COUNCIL, IRYO_TOPIC_ID)
    )
    .or("moderation_status.is.null,moderation_status.neq.ng");

  if (error) {
    throw new Error(
      `AIインタビューの回答数の取得に失敗しました: ${error.message}`
    );
  }
  return count ?? 0;
}

/** 掲示板に表示する最大件数（新しい順） */
const POST_LIMIT = 100;

/**
 * 全国版のテーマの掲示板の投稿（非表示を除く、新しい順）。
 * テーブル未作成の環境では available: false を返す。
 */
export async function findVisibleTopicPosts(
  topic: string
): Promise<{ available: boolean; posts: FeedbackPost[] }> {
  const { data, error } = await createAdminClient()
    .from("national_topic_posts")
    .select("id, display_name, body, created_at")
    .eq("topic", topic)
    .eq("is_hidden", false)
    .order("created_at", { ascending: false })
    .order("id", { ascending: false })
    .limit(POST_LIMIT);
  if (error?.code === "PGRST205" || error?.code === "42P01") {
    return { available: false, posts: [] };
  }
  if (error) throw new Error(`掲示板の取得に失敗しました: ${error.message}`);
  return { available: true, posts: data ?? [] };
}

export async function insertTopicPost(
  topic: string,
  input: { displayName: string; body: string }
): Promise<void> {
  const { error } = await createAdminClient()
    .from("national_topic_posts")
    .insert({ topic, display_name: input.displayName, body: input.body });
  if (error) throw new Error(`掲示板への投稿に失敗しました: ${error.message}`);
}
