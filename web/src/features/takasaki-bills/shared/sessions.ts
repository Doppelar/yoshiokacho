import { TAKASAKI_ARCHIVE_SESSIONS } from "./archive-sessions";
import { TAKASAKI_SESSION_R8_5 } from "./session-r8-5";
import type { TakasakiSession } from "./types";

export const TAKASAKI_SESSIONS: readonly TakasakiSession[] = [
  TAKASAKI_SESSION_R8_5,
  ...TAKASAKI_ARCHIVE_SESSIONS,
];
