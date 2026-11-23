import { TAKASAKI_SPLIT_VOTES, TAKASAKI_VOTE_ROSTERS } from "../split-votes";
import type {
  TakasakiItem,
  TakasakiSession,
  TakasakiSplitVoteRecord,
} from "../types";
import { type RollCallTally, tallyRollCall, tallyVotes } from "./votes";

/** 賛否が分かれた議案の、採決で諮った内容と賛成・反対の理由 */
export function getSplitVote(
  itemId: string
): TakasakiSplitVoteRecord | undefined {
  return TAKASAKI_SPLIT_VOTES[itemId];
}

/**
 * 議員ごとの賛否。議員別賛否を転記した会期は会期のデータから、
 * それ以外の会期は公式の議員別賛否一覧表から転記した記録から集計する。
 */
export function tallyItemVotes(
  session: Pick<TakasakiSession, "id" | "members" | "chair" | "voteDetails">,
  item: Pick<TakasakiItem, "id" | "rollCall">
): RollCallTally | null {
  const fromSession = tallyRollCall(session, item);
  if (fromSession) return fromSession;
  const rollCall = getSplitVote(item.id)?.rollCall;
  const roster = TAKASAKI_VOTE_ROSTERS[session.id];
  if (!rollCall || !roster) return null;
  return tallyVotes(roster, rollCall);
}
