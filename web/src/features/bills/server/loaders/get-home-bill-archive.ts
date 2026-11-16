import "server-only";
import { unstable_cache } from "next/cache";
import { findArchiveDietSessions } from "@/features/diet-sessions/server/repositories/diet-session-repository";
import { CACHE_TAGS } from "@/lib/cache-tags";
import { groupBillArchive } from "../../shared/utils/group-bill-archive";
import { getBills } from "./get-bills";

const getArchiveSessions = unstable_cache(
  findArchiveDietSessions,
  ["home-archive-sessions"],
  {
    revalidate: 600,
    tags: [CACHE_TAGS.DIET_SESSIONS],
  }
);

export async function getHomeBillArchive(today: string) {
  const [bills, sessions] = await Promise.all([
    getBills(),
    getArchiveSessions(),
  ]);
  return groupBillArchive(bills, sessions, today);
}
