import { TAKASAKI_ARCHIVE_SESSIONS } from "./archive-sessions";
import { TAKASAKI_ARCHIVE_SESSIONS_R2_R5 } from "./archive-sessions-r2-r5";
import { TAKASAKI_ARCHIVE_SESSIONS_R5_R6 } from "./archive-sessions-r5-r6";
import { TAKASAKI_SESSION_R8_5 } from "./session-r8-5";
import type { TakasakiSession } from "./types";

export const TAKASAKI_SESSIONS: readonly TakasakiSession[] = [
  TAKASAKI_SESSION_R8_5,
  ...TAKASAKI_ARCHIVE_SESSIONS,
  ...TAKASAKI_ARCHIVE_SESSIONS_R5_R6,
  ...TAKASAKI_ARCHIVE_SESSIONS_R2_R5,
];
