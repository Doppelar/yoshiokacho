import "server-only";

import {
  mapApprovedApplicationRow,
  type ParsedLocalEditionApplication,
  type PublicLocalEditionApplication,
} from "@mirai-gikai/shared/local-edition-application/parse-application";
import { createAdminClient } from "@mirai-gikai/supabase";

const PUBLIC_COLUMNS =
  "id,municipality_name,contact_name,site_url,introduction,status,created_at";

export async function findApprovedLocalEditionApplications(): Promise<
  PublicLocalEditionApplication[]
> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("local_edition_applications")
    .select(PUBLIC_COLUMNS)
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    throw new Error(`連載申請の取得に失敗しました: ${error.message}`);
  }

  return (data ?? []).flatMap((row) => {
    const application = mapApprovedApplicationRow(row);
    return application ? [application] : [];
  });
}

export async function insertLocalEditionApplication(
  input: ParsedLocalEditionApplication
): Promise<void> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("local_edition_applications").insert({
    municipality_name: input.municipalityName,
    contact_name: input.contactName,
    email: input.email,
    site_url: input.siteUrl,
    introduction: input.introduction,
    status: "pending",
  });

  if (error) {
    throw new Error(`連載申請の保存に失敗しました: ${error.message}`);
  }
}
