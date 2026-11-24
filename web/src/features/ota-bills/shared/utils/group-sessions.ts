import type { SessionGroup } from "@/components/council/session-picker";
import type { OtaOfficialSession } from "../types/ota-bill";

const REIWA_OFFSET = 2018;

/**
 * 会期を年度（4月〜翌年3月）ごとにまとめ、「9月」「5月臨時」と短く表示する。並び順は元の順のまま。
 * 会期IDは「2026-09」のような開会年月。
 */
export function groupOtaSessionsByFiscalYear(
  sessions: readonly Pick<OtaOfficialSession, "id" | "name">[]
): SessionGroup[] {
  const groups: SessionGroup[] = [];
  for (const session of sessions) {
    const [year, month] = session.id.split("-").map(Number);
    const fiscalYear = month >= 4 ? year : year - 1;
    const label = `令和${fiscalYear - REIWA_OFFSET}年度`;
    // 定例会は月だけ、臨時会は「5月臨時」と短く表示する
    const suffix = session.name.includes("臨時会") ? "臨時" : "";
    const entry = { id: session.id, label: `${month}月${suffix}` };
    const group = groups.find((g) => g.label === label);
    if (group) group.sessions.push(entry);
    else groups.push({ label, sessions: [entry] });
  }
  return groups;
}
