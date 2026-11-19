import {
  isStance,
  type Stance,
} from "@/features/bill-public-opinions/shared/utils/opinion-input";

/** 賛成・反対・どちらでもないの件数 */
export type StanceCounts = Record<Stance, number>;

/** 1つの議案（または全体）に集まった声。AIインタビューと意見投稿は分けて数える */
export type VoiceTally = {
  interviews: StanceCounts;
  opinions: StanceCounts;
};

/** 議案ID → 集まった声 */
export type VoiceTallies = Readonly<Record<string, VoiceTally>>;

/** 集計の元になる1件（どの議案に、どの立場で寄せられたか） */
export type StanceRow = { itemId: string; stance: string | null };

const emptyCounts = (): StanceCounts => ({ for: 0, against: 0, neutral: 0 });

export const emptyVoiceTally = (): VoiceTally => ({
  interviews: emptyCounts(),
  opinions: emptyCounts(),
});

export function countTotal(counts: StanceCounts): number {
  return counts.for + counts.against + counts.neutral;
}

export function countVoiceTotal(tally: VoiceTally): number {
  return countTotal(tally.interviews) + countTotal(tally.opinions);
}

/**
 * AIインタビューの回答と意見投稿を、議案ごと・立場ごとに数える。
 * 立場が未設定・不明なものは数えない。
 */
export function buildVoiceTallies(
  interviewRows: readonly StanceRow[],
  opinionRows: readonly StanceRow[]
): VoiceTallies {
  const tallies: Record<string, VoiceTally> = {};
  const add = (rows: readonly StanceRow[], key: keyof VoiceTally) => {
    for (const { itemId, stance } of rows) {
      if (stance === null || !isStance(stance)) continue;
      tallies[itemId] ??= emptyVoiceTally();
      tallies[itemId][key][stance] += 1;
    }
  };
  add(interviewRows, "interviews");
  add(opinionRows, "opinions");
  return tallies;
}

/** 全議案の合計 */
export function sumVoiceTallies(tallies: VoiceTallies): VoiceTally {
  const total = emptyVoiceTally();
  for (const tally of Object.values(tallies)) {
    for (const key of ["interviews", "opinions"] as const) {
      for (const stance of Object.keys(total[key]) as Stance[]) {
        total[key][stance] += tally[key][stance];
      }
    }
  }
  return total;
}

/** 声の多い順に議案IDを並べる（同数なら元の順） */
export function rankItemsByVoices(
  tallies: VoiceTallies,
  limit: number
): string[] {
  return Object.entries(tallies)
    .map(([itemId, tally]) => ({ itemId, total: countVoiceTotal(tally) }))
    .filter(({ total }) => total > 0)
    .sort((a, b) => b.total - a.total)
    .slice(0, limit)
    .map(({ itemId }) => itemId);
}

/** 「賛成2・反対1」のように、0件の立場を省いて書く */
export function formatStanceCounts(
  counts: StanceCounts,
  labels: Record<Stance, string>
): string {
  return (Object.keys(counts) as Stance[])
    .filter((stance) => counts[stance] > 0)
    .map((stance) => `${labels[stance]}${counts[stance]}`)
    .join("・");
}
