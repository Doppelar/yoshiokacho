import type { Database } from "@mirai-gikai/supabase";
import { createClient } from "@supabase/supabase-js";
import { bills as demoBills } from "../main/data";
import { buildYoshiokaRows, schedule, sessionId, topics } from "./data";

// Local-only, repeatable import. Existing demo records are retained as drafts.
const url = process.env.SUPABASE_URL;
if (
  !url ||
  !["localhost", "127.0.0.1", "[::1]"].includes(new URL(url).hostname)
) {
  throw new Error("吉岡町データの初期投入はローカル環境専用です。");
}
const key = process.env.SUPABASE_SECRET_KEY;
if (!key) throw new Error("SUPABASE_SECRET_KEY が必要です。");
const db = createClient<Database>(url, key);

async function main() {
  const session = await db.from("diet_sessions").upsert({
    id: sessionId,
    name: "令和8年第3回吉岡町議会定例会",
    slug: "yoshioka-r8-3",
    start_date: "2026-09-01",
    end_date: "2026-09-16",
    is_active: false,
    shugiin_url: schedule,
  });
  if (session.error) throw session.error;
  const labels = [...new Set(topics.map((topic) => topic[3]))];
  const tagIds = new Map<string, string>();
  for (const [index, label] of labels.entries()) {
    const result = await db
      .from("tags")
      .upsert(
        {
          label,
          description: `吉岡町の${label}に関する議案`,
          featured_priority: index + 1,
        },
        { onConflict: "label" }
      )
      .select("id")
      .single();
    if (result.error) throw result.error;
    tagIds.set(label, result.data.id);
  }
  for (const { bill, contents, label } of buildYoshiokaRows()) {
    const result = await db.from("bills").upsert(bill);
    if (result.error) throw result.error;
    for (const content of contents) {
      const result = await db.from("bill_contents").upsert(content);
      if (result.error) throw result.error;
    }
    const tagId = tagIds.get(label);
    if (!tagId) throw new Error(`タグが見つかりません: ${label}`);
    const relation = await db
      .from("bills_tags")
      .upsert({ bill_id: bill.id, tag_id: tagId }, { onConflict: "bill_id,tag_id" });
    if (relation.error) throw relation.error;
  }
  const demos = await db
    .from("bills")
    .update({ publish_status: "draft" })
    .in(
      "name",
      demoBills.map((bill) => bill.name)
    );
  if (demos.error) throw demos.error;
  const demoTags = await db
    .from("tags")
    .select("id")
    .in("label", ["エネルギー・環境", "選挙・政治改革"]);
  if (demoTags.error) throw demoTags.error;
  for (const tag of demoTags.data) {
    const published = await db
      .from("bills_tags")
      .select("bill_id,bills!inner(publish_status)", { count: "exact", head: true })
      .eq("tag_id", tag.id)
      .eq("bills.publish_status", "published");
    if (published.error) throw published.error;
    if (published.count === 0) {
      const cleared = await db
        .from("tags")
        .update({ featured_priority: null })
        .eq("id", tag.id);
      if (cleared.error) throw cleared.error;
    }
  }
  const active = await db.rpc("set_active_diet_session", {
    target_session_id: sessionId,
  });
  if (active.error) throw active.error;
  console.log(
    `吉岡町の議案${topics.length}件を登録しました。国会サンプルは非公開で保持しています。`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
