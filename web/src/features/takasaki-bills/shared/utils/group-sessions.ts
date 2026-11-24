import type { SessionGroup } from "@/components/council/session-picker";
import type { TakasakiSession } from "../types";

/** 「令和7年第1回定例会」を年ごとにまとめ、年の中は「第1回」「第2回臨時」と短く表示する。並び順は元の順のまま */
export function groupTakasakiSessionsByYear(
  sessions: readonly Pick<TakasakiSession, "id" | "name">[]
): SessionGroup[] {
  const groups: SessionGroup[] = [];
  for (const session of sessions) {
    const match = session.name.match(/^(令和\d+年)(.+)$/);
    const label = match?.[1] ?? "その他";
    // 「第1回定例会」は「第1回」、「第2回臨時会」は「第2回臨時」と短く表示する
    const rest = match?.[2] ?? session.name;
    const entry = {
      id: session.id,
      label: rest.replace(/定例会$/, "").replace(/臨時会$/, "臨時"),
    };
    const group = groups.find((g) => g.label === label);
    if (group) group.sessions.push(entry);
    else groups.push({ label, sessions: [entry] });
  }
  return groups;
}
