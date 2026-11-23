import type { TakasakiItem, TakasakiItemKind, TakasakiSession } from "../types";
import { getItemExplanation } from "./item-explanations";

export type FactionVote = {
  faction: string;
  forMembers: string[];
  againstMembers: string[];
};

export type RollCallTally = {
  forCount: number;
  againstCount: number;
  byFaction: FactionVote[];
};

/** 「議案第92号」「請願第1号」のような表示名 */
export function formatItemName(item: Pick<TakasakiItem, "kind" | "number">) {
  return `${item.kind}第${item.number}号`;
}

/**
 * 起立採決の賛否を会派ごとに集計する。議長は数えない。
 * 反対に挙がっていない議員は賛成とする。
 */
export function tallyRollCall(
  session: Pick<TakasakiSession, "members" | "chair" | "voteDetails">,
  item: Pick<TakasakiItem, "rollCall">
): RollCallTally | null {
  if (session.voteDetails === "unconfirmed" || !item.rollCall) return null;

  const against = new Set(item.rollCall.against);
  const byFaction = new Map<string, FactionVote>();

  for (const member of session.members) {
    if (member.name === session.chair) continue;
    const vote =
      byFaction.get(member.faction) ??
      ({
        faction: member.faction,
        forMembers: [],
        againstMembers: [],
      } as FactionVote);
    if (against.has(member.name)) {
      vote.againstMembers.push(member.name);
    } else {
      vote.forMembers.push(member.name);
    }
    byFaction.set(member.faction, vote);
  }

  const factions = [...byFaction.values()];
  return {
    forCount: factions.reduce((sum, f) => sum + f.forMembers.length, 0),
    againstCount: factions.reduce((sum, f) => sum + f.againstMembers.length, 0),
    byFaction: factions,
  };
}

/** 公式の審議結果一覧で、賛否が分かれた採決に添えられる記載 */
const SPLIT_RESULT_PATTERN = /賛成多数|賛成少数/;
/** 結論が出ていない（継続審査など）ことを表す議決結果 */
const NO_DECISION_RESULT = "―";
const REJECTED_RESULT_PATTERN = /不採択|否決/;

/**
 * 賛否が分かれた（全会一致でなかった）採決か。議員別賛否を転記した会期は起立採決の記録で、
 * 未転記の会期は公式の審議結果一覧の「賛成多数」「賛成少数」の記載で判断する。
 */
export function isSplitVote(
  item: Pick<TakasakiItem, "result" | "rollCall">
): boolean {
  return (
    item.rollCall !== undefined ||
    (item.result !== null && SPLIT_RESULT_PATTERN.test(item.result))
  );
}

/** 議決結果の表示。起立採決は「（賛成多数）」などを添える */
export function formatResult(
  session: Pick<TakasakiSession, "members" | "chair" | "voteDetails">,
  item: Pick<TakasakiItem, "result" | "rollCall">
): string {
  if (item.result === null) return "報告";
  if (session.voteDetails === "unconfirmed")
    return item.result === NO_DECISION_RESULT
      ? "資料に結果の記載なし"
      : item.result;
  const tally = tallyRollCall(session, item);
  if (!tally) return `${item.result}（全会一致）`;
  const majority =
    tally.forCount > tally.againstCount ? "賛成多数" : "賛成少数";
  return `${item.result}（${majority}）`;
}

const KIND_ORDER: Record<TakasakiItemKind, number> = {
  議案: 0,
  請願: 1,
  意見書案: 2,
  報告: 3,
  承認: 4,
  議員提出: 5,
};

/** 賛否が分かれたものを先に、残りは種類・番号順に並べる */
export function sortItemsForDisplay(
  items: readonly TakasakiItem[]
): TakasakiItem[] {
  return [...items].sort((a, b) => {
    const splitA = isSplitVote(a) ? 0 : 1;
    const splitB = isSplitVote(b) ? 0 : 1;
    if (splitA !== splitB) return splitA - splitB;
    if (a.kind !== b.kind) return KIND_ORDER[a.kind] - KIND_ORDER[b.kind];
    return a.number - b.number;
  });
}

export type SessionResultTally = {
  total: number;
  /** 可決・同意・承認・認定など */
  passed: number;
  /** 不採択・否決 */
  rejected: number;
  /** 採決のない報告 */
  reports: number;
  /** 継続審査など、この会期で結論が出ていないもの */
  undecided: number;
  /** 採決したもののうち、賛否が分かれた記録・記載がないもの */
  unanimous: number;
  /** 採決したもののうち賛否が分かれたもの */
  split: number;
};

/** 会期の議案等を、可決・不採択・報告と、全会一致・賛否が分かれたものに数え分ける */
export function tallySessionResults(
  items: readonly Pick<TakasakiItem, "result" | "rollCall">[]
): SessionResultTally {
  const tally: SessionResultTally = {
    total: items.length,
    passed: 0,
    rejected: 0,
    reports: 0,
    undecided: 0,
    unanimous: 0,
    split: 0,
  };
  for (const item of items) {
    if (item.result === null) {
      tally.reports++;
      continue;
    }
    if (item.result === NO_DECISION_RESULT) {
      tally.undecided++;
      continue;
    }
    if (REJECTED_RESULT_PATTERN.test(item.result)) tally.rejected++;
    else tally.passed++;
    if (isSplitVote(item)) tally.split++;
    else tally.unanimous++;
  }
  return tally;
}

/**
 * 賛否が分かれたもの以外を全会一致と言えるか。議員別賛否を転記した会期か、
 * 採決したすべての議案に会議録から作った解説（採決の結果を含む）がある会期だけ true。
 */
export function isUnanimityConfirmed(
  session: Pick<TakasakiSession, "voteDetails" | "items">
): boolean {
  if (session.voteDetails !== "unconfirmed") return true;
  return session.items.every(
    (item) =>
      item.result === null ||
      item.result === NO_DECISION_RESULT ||
      isSplitVote(item) ||
      getItemExplanation(item.id) !== undefined
  );
}
