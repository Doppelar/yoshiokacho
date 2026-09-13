import type { Database } from "@mirai-gikai/supabase";

// Database types
export type InterviewMessage =
  Database["public"]["Tables"]["interview_messages"]["Row"];
export type InterviewMessageInsert =
  Database["public"]["Tables"]["interview_messages"]["Insert"];
