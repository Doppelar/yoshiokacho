import "server-only";

import {
  type LocalEditionApplicationRecord,
  type LocalEditionReviewDecision,
  mapApplicationRow,
} from "@mirai-gikai/shared/local-edition-application/parse-application";
import { createAdminClient } from "@mirai-gikai/supabase";

const ADMIN_COLUMNS =
  "id,municipality_name,contact_name,email,site_url,introduction,status,created_at,updated_at";

export async function findPendingLocalEditionApplications(): Promise<
  LocalEditionApplicationRecord[]
> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("local_edition_applications")
    .select(ADMIN_COLUMNS)
    .eq("status", "pending")
    .order("created_at", { ascending: true })
    .limit(100);

  if (error) {
    throw new Error(`未審査の連載申請の取得に失敗しました: ${error.message}`);
  }

  return (data ?? []).flatMap((row) => {
    const application = mapApplicationRow(row);
    return application ? [application] : [];
  });
}

export async function reviewPendingApplication(
  id: string,
  status: LocalEditionReviewDecision
): Promise<"updated" | "not_pending"> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("local_edition_applications")
    .update({ status })
    .eq("id", id)
    .eq("status", "pending")
    .select("id")
    .maybeSingle();

  if (error) {
    throw new Error(`連載申請の審査に失敗しました: ${error.message}`);
  }

  return data ? "updated" : "not_pending";
}
