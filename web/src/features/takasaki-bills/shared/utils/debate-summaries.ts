import type { DifficultyLevelEnum } from "@/features/bill-difficulty/shared/types";
import {
  TAKASAKI_ITEM_DEBATE_SUMMARIES,
  TAKASAKI_SESSION_DEBATE_SUMMARIES,
} from "../debate-summaries";
import type { TakasakiDebateSummary } from "../types";

/** 議案の議論のまとめ。ない場合は undefined */
export function getItemDebateSummary(
  itemId: string
): TakasakiDebateSummary | undefined {
  return Object.hasOwn(TAKASAKI_ITEM_DEBATE_SUMMARIES, itemId)
    ? TAKASAKI_ITEM_DEBATE_SUMMARIES[itemId]
    : undefined;
}

/** 会期全体の議論のまとめ。ない場合は undefined */
export function getSessionDebateSummary(
  sessionId: string
): TakasakiDebateSummary | undefined {
  return Object.hasOwn(TAKASAKI_SESSION_DEBATE_SUMMARIES, sessionId)
    ? TAKASAKI_SESSION_DEBATE_SUMMARIES[sessionId]
    : undefined;
}

/** 「説明をもっと詳しく」の設定に合わせて、表示する段落を選ぶ */
export function selectDebateParagraphs(
  summary: TakasakiDebateSummary,
  level: DifficultyLevelEnum
): readonly string[] {
  return level === "hard" ? summary.detailed : summary.plain;
}
