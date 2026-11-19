import "server-only";

import { unstable_cache } from "next/cache";
import type { CouncilId } from "@/features/council-item-opinions/shared/utils/councils";
import { withFallback } from "@/lib/utils/with-fallback";
import {
  buildVoiceTallies,
  type VoiceTallies,
} from "../../shared/utils/voice-tally";
import {
  findCouncilInterviewStances,
  findCouncilOpinionStances,
} from "../repositories/council-voice-repository";

const _getCachedCouncilVoiceTallies = unstable_cache(
  async (council: CouncilId): Promise<VoiceTallies> => {
    const [interviews, opinions] = await Promise.all([
      findCouncilInterviewStances(council),
      findCouncilOpinionStances(council),
    ]);
    return buildVoiceTallies(interviews, opinions);
  },
  ["council-voice-tallies"],
  // 新しい声は5分以内に反映する
  { revalidate: 300 }
);

/**
 * 議会の議案ごとに集まった声（AIインタビュー・意見投稿）の件数。
 * テーブルがない環境などで取得できないときは空にする。
 */
export function getCouncilVoiceTallies(
  council: CouncilId
): Promise<VoiceTallies> {
  return withFallback(
    _getCachedCouncilVoiceTallies(council),
    {},
    "council voice tallies"
  );
}
