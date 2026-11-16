export type ArchiveBill = {
  id: string;
  diet_session_id: string | null;
  submitted_date: string | null;
};
export type ArchiveSession = { id: string; name: string; start_date: string };
export type ArchiveGroup<T> = {
  key: string;
  label: string;
  startDate: string | null;
  open: boolean;
  bills: T[];
};
export type ArchiveYear<T> = {
  fiscalYear: number | null;
  groups: ArchiveGroup<T>[];
};

function fiscalYear(date: string) {
  return Number(date.slice(0, 4)) - (Number(date.slice(5, 7)) < 4 ? 1 : 0);
}

/** 会期開始月を使い、年度をまたいでも重複・欠落なく整理する。 */
export function groupBillArchive<T extends ArchiveBill>(
  bills: readonly T[],
  sessions: readonly ArchiveSession[],
  today: string
): ArchiveYear<T>[] {
  const currentYear = fiscalYear(today);
  const sessionById = new Map(sessions.map((session) => [session.id, session]));
  const years = new Map<number | null, Map<string, ArchiveGroup<T>>>();
  const seen = new Set<string>();
  for (const bill of bills) {
    if (seen.has(bill.id)) continue;
    seen.add(bill.id);
    const session = bill.diet_session_id
      ? sessionById.get(bill.diet_session_id)
      : undefined;
    const rawDate = session?.start_date ?? bill.submitted_date?.slice(0, 10);
    const date =
      rawDate && /^\d{4}-\d{2}-\d{2}$/.test(rawDate) ? rawDate : null;
    const year = date ? fiscalYear(date) : null;
    const bySession = year === currentYear && session && date;
    const month = date?.slice(0, 7);
    const key = bySession ? `session:${session.id}` : (month ?? "unknown");
    const label = bySession
      ? session.name
      : month
        ? `${month.slice(0, 4)}年${Number(month.slice(5))}月${year === currentYear ? "（会期未登録）" : ""}`
        : "会期・月が未登録の議案";
    let groups = years.get(year);
    if (!groups) {
      groups = new Map();
      years.set(year, groups);
    }
    let group = groups.get(key);
    if (!group) {
      group = { key, label, startDate: date, open: false, bills: [] };
      groups.set(key, group);
    }
    group.bills.push(bill);
  }
  const result = [...years]
    .sort(([a], [b]) => (b ?? -1) - (a ?? -1))
    .map(([year, groups]) => ({
      fiscalYear: year,
      groups: [...groups.values()].sort(
        (a, b) =>
          (b.startDate ?? "").localeCompare(a.startDate ?? "") ||
          a.key.localeCompare(b.key)
      ),
    }));
  const current = result.find((year) => year.fiscalYear === currentYear);
  const latest = current?.groups.find(
    (group) =>
      group.key.startsWith("session:") &&
      group.startDate &&
      group.startDate <= today
  );
  if (latest) latest.open = true;
  return result;
}
