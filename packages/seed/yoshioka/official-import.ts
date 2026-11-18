import { createHash } from "node:crypto";

export type OfficialYoshiokaItem = {
  kind: string;
  number: number | null;
  title: string;
  result: string | null;
  decisionDate: string | null;
  sourceUrl: string;
};

export type OfficialYoshiokaSession = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  sourceUrl: string;
  items: readonly OfficialYoshiokaItem[];
};

const START = "<!-- yoshioka-official-result -->";
const END = "<!-- /yoshioka-official-result -->";
export const quote = (value: string | null) =>
  value === null ? "NULL" : `'${value.replaceAll("'", "''")}'`;

/** 議会とキーから、毎回同じUUID（v5相当）を作る */
export function councilUuid(council: string, key: string): string {
  const namespace = Buffer.from("6ba7b8109dad11d180b400c04fd430c8", "hex");
  const bytes = createHash("sha1")
    .update(namespace)
    .update(`mirai-gikai:${council}:${key}`)
    .digest()
    .subarray(0, 16);
  bytes[6] = (bytes[6] & 15) | 80;
  bytes[8] = (bytes[8] & 63) | 128;
  const hex = bytes.toString("hex");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function officialUuid(key: string): string {
  return councilUuid("yoshioka", key);
}

function requireSource(value: string) {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.hostname !== "www.town.yoshioka.lg.jp") {
    throw new Error("吉岡町の公式HTTPS出典だけを取り込めます。");
  }
}

function requireDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(value))) {
    throw new Error(`公式日付の形式が不正です: ${value}`);
  }
}

export function officialStatus(
  result: string | null
): "enacted" | "rejected" | "introduced" {
  if (result && /否決|不認定|不採択|不承認|不同意/.test(result))
    return "rejected";
  if (result && /可決|同意|認定|承認|採択|異議なし|適任|当選|答申/.test(result))
    return "enacted";
  return "introduced";
}

/** Existing human-authored content stays below one replaceable official-results block. */
export function mergeOfficialNote(
  previous: string | null,
  note: string
): string {
  let tail = previous ?? "";
  if (tail.startsWith(START) && tail.includes(END)) {
    tail = tail.slice(tail.indexOf(END) + END.length).replace(/^\n+/, "");
  }
  return `${START}\n${note}\n${END}${tail ? `\n\n${tail}` : ""}`;
}

/** Builds an explicit transaction; never executes SQL, deletes data or changes active sessions. */
export function buildOfficialImportSql(
  sessions: readonly OfficialYoshiokaSession[],
  checkedAt: string
): string {
  requireDate(checkedAt);
  if (!sessions.length) throw new Error("会期データがありません。");
  const statements = [
    "BEGIN;",
    "SET LOCAL lock_timeout = '5s';",
    "SET LOCAL statement_timeout = '120s';",
  ];
  const selected = new Map<
    string,
    { session: OfficialYoshiokaSession; item: OfficialYoshiokaItem }
  >();
  const sessionIds = new Set<string>();
  for (const session of sessions) {
    if (!session.name.includes("吉岡町") || sessionIds.has(session.id))
      throw new Error("会期の自治体または識別子が不正です。");
    sessionIds.add(session.id);
    requireDate(session.startDate);
    requireDate(session.endDate);
    requireSource(session.sourceUrl);
    if (session.startDate > session.endDate)
      throw new Error("会期の日付が逆転しています。");
    const slug = `yoshioka-${session.id}`;
    const id = `coalesce((SELECT id FROM public.diet_sessions WHERE slug = ${quote(slug)} OR name = ${quote(session.name)} ORDER BY id LIMIT 1), ${quote(officialUuid(`session:${session.id}`))}::uuid)`;
    statements.push(
      `INSERT INTO public.diet_sessions (id, name, slug, start_date, end_date, shugiin_url, is_active) VALUES (${id}, ${quote(session.name)}, ${quote(slug)}, ${quote(session.startDate)}, ${quote(session.endDate)}, ${quote(session.sourceUrl)}, false) ON CONFLICT (id) DO NOTHING;`
    );
    for (const item of session.items) {
      requireSource(item.sourceUrl);
      if (!item.title.trim() || !item.kind.trim())
        throw new Error("件名または議案種別が空です。");
      if (
        item.number !== null &&
        (!Number.isInteger(item.number) || item.number < 0)
      )
        throw new Error("議案番号が不正です。");
      if (item.decisionDate) requireDate(item.decisionDate);
      const key = `${session.startDate.slice(0, 4)}:${session.id}:${item.kind}:${item.number ?? item.title.normalize("NFKC")}`;
      const existing = selected.get(key);
      if (
        existing &&
        existing.item.title.normalize("NFKC").replace(/\s/g, "") !==
          item.title.normalize("NFKC").replace(/\s/g, "")
      )
        throw new Error(`同じ年度・種別・番号で件名が衝突しています: ${key}`);
      if (
        !existing ||
        (item.decisionDate ?? session.endDate) >=
          (existing.item.decisionDate ?? existing.session.endDate)
      )
        selected.set(key, { session, item });
    }
  }
  for (const [key, { session, item }] of selected) {
    const year = Number(session.startDate.slice(0, 4));
    const reiwa = year - 2018;
    const legacy =
      item.kind === "議案" && item.number !== null
        ? `${String(reiwa).padStart(2, "0")}000000-0000-4000-8002-${String(item.number).padStart(12, "0")}`
        : null;
    const slug = `yoshioka-official-${key.replaceAll(":", "-")}`;
    const sessionId = `(SELECT id FROM public.diet_sessions WHERE slug = ${quote(`yoshioka-${session.id}`)} OR name = ${quote(session.name)} ORDER BY id LIMIT 1)`;
    const legacyMatch = legacy
      ? ` OR (id = ${quote(legacy)}::uuid AND (coalesce(slug, '') LIKE 'yoshioka-%' OR name LIKE '%吉岡町%') AND (diet_session_id = ${sessionId} OR slug = ${quote(`yoshioka-${session.id}-${item.number}`)}))`
      : "";
    const id = `coalesce((SELECT id FROM public.bills WHERE slug = ${quote(slug)}${legacyMatch} ORDER BY id LIMIT 1), ${quote(officialUuid(`bill:${key}`))}::uuid)`;

    const number =
      item.number === null ? item.kind : `${item.kind}第${item.number}号`;
    const result = item.result ?? "公式結果資料で議決の記載を確認できません。";
    const summary = `${session.name}の${number}。公式資料の記載: ${result}`;
    const note = `## 公式情報の更新（${checkedAt}確認）\n\n${session.name} / ${number}\n\n件名: ${item.title}\n\n公式結果: ${result}${item.decisionDate ? `\n\n議決日: ${item.decisionDate}` : ""}\n\n[吉岡町の公式資料](${item.sourceUrl})\n\n以下に以前の解説がある場合、議決状況はこの更新情報を優先してください。`;
    const newContent = mergeOfficialNote(null, note);
    statements.push(
      `WITH saved AS (INSERT INTO public.bills (id, name, slug, diet_session_id, originating_house, status, status_note, publish_status, shugiin_url) VALUES (${id}, ${quote(item.title)}, ${quote(slug)}, ${sessionId}, 'HR', ${quote(officialStatus(item.result))}, ${quote(`${number}: ${result}${item.decisionDate ? ` (${item.decisionDate})` : ""}`)}, 'published', ${quote(item.sourceUrl)}) ON CONFLICT (id) DO NOTHING RETURNING id) INSERT INTO public.bill_contents (bill_id, difficulty_level, title, summary, content) SELECT saved.id, level::public.difficulty_level_enum, ${quote(item.title)}, ${quote(summary)}, ${quote(newContent)} FROM saved CROSS JOIN (VALUES ('normal'), ('hard')) AS levels(level) ON CONFLICT (bill_id, difficulty_level) DO NOTHING;`
    );
  }
  statements.push("COMMIT;");
  return statements.join("\n\n");
}
