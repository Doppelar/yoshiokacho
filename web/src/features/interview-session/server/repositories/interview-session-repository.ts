import "server-only";

import { createAdminClient } from "@mirai-gikai/supabase";
import type { InterviewMessage } from "../../shared/types";

/**
 * セッションの所有者情報（user_id）を取得
 */
export async function findSessionOwnerById(sessionId: string) {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("interview_sessions")
    .select("user_id")
    .eq("id", sessionId)
    .single();

  if (error) {
    throw new Error(`Failed to fetch session owner: ${error.message}`);
  }

  return data;
}

/**
 * セッションのメッセージを時系列順で取得
 */
export async function findInterviewMessagesBySessionId(
  sessionId: string
): Promise<InterviewMessage[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("interview_messages")
    .select("*")
    .eq("interview_session_id", sessionId)
    .order("created_at", { ascending: true })
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch interview messages: ${error.message}`);
  }

  return data || [];
}
