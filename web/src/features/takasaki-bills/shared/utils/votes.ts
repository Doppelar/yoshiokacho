import type { TakasakiItem, TakasakiItemKind, TakasakiSession } from "../types";

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
  session: Pick<TakasakiSession, "members" | "chair">,
  item: Pick<TakasakiItem, "rollCall">
): RollCallTally | null {
  if (!item.rollCall) return null;

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

/** 議決結果の表示。起立採決は「（賛成多数）」などを添える */
export function formatResult(
  session: Pick<TakasakiSession, "members" | "chair">,
  item: Pick<TakasakiItem, "result" | "rollCall">
): string {
  if (item.result === null) return "報告";
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
};

/** 賛否が分かれたものを先に、残りは種類・番号順に並べる */
export function sortItemsForDisplay(
  items: readonly TakasakiItem[]
): TakasakiItem[] {
  return [...items].sort((a, b) => {
    const splitA = a.rollCall ? 0 : 1;
    const splitB = b.rollCall ? 0 : 1;
    if (splitA !== splitB) return splitA - splitB;
    if (a.kind !== b.kind) return KIND_ORDER[a.kind] - KIND_ORDER[b.kind];
    return a.number - b.number;
  });
}
