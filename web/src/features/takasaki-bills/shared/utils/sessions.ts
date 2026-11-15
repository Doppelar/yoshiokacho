import { TAKASAKI_SESSIONS } from "../sessions";

export function findTakasakiSession(id?: string) {
  return (
    TAKASAKI_SESSIONS.find((session) => session.id === id) ??
    TAKASAKI_SESSIONS[0]
  );
}

export function findTakasakiItem(id: string) {
  for (const session of TAKASAKI_SESSIONS) {
    const item = session.items.find((candidate) => candidate.id === id);
    if (item) return { session, item };
  }
  return undefined;
}
