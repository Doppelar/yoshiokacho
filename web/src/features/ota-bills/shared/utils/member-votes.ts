import type {
  OtaBill,
  OtaCouncilMember,
  OtaMemberVoteTally,
  OtaNotVoting,
} from "../types/ota-bill";

/** 採決に加わらなかった議員の区分（賛否の公表の記号の意味） */
const NOT_VOTING_LABELS: Readonly<Record<string, string>> = {
  "/": "議長（表決に加わらない）",
  "－": "退席",
  欠: "欠席",
  除: "除斥",
};

/** 「議案72」のような、議員別賛否のキー */
export function otaMemberVoteKey(kind: string, number: number): string {
  return `${kind}${number}`;
}

/**
 * 賛否の公表の記号（〇賛成・×反対・白白票・－退席・欠欠席・除除斥・/議長）を
 * 会派ごとに集計する。白票は否とみなして反対に数える。
 */
export function tallyOtaMemberVotes(
  members: readonly OtaCouncilMember[],
  marks: string
): OtaMemberVoteTally {
  const symbols = [...marks];
  if (symbols.length !== members.length) {
    throw new Error(
      `賛否の記号の数（${symbols.length}）が名簿の人数（${members.length}）と一致しません`
    );
  }
  const byFaction = new Map<
    string,
    { faction: string; forMembers: string[]; againstMembers: string[] }
  >();
  const notVoting = new Map<string, string[]>();
  const blankMembers: string[] = [];
  let forCount = 0;
  let againstCount = 0;

  members.forEach(({ name, faction }, index) => {
    const symbol = symbols[index];
    const notVotingLabel = NOT_VOTING_LABELS[symbol];
    if (notVotingLabel) {
      const list = notVoting.get(notVotingLabel) ?? [];
      list.push(name);
      notVoting.set(notVotingLabel, list);
      return;
    }
    const vote = byFaction.get(faction) ?? {
      faction,
      forMembers: [],
      againstMembers: [],
    };
    if (symbol === "〇") {
      vote.forMembers.push(name);
      forCount++;
    } else if (symbol === "×" || symbol === "白") {
      // 白票は会議規則により否とみなす
      vote.againstMembers.push(name);
      againstCount++;
      if (symbol === "白") blankMembers.push(name);
    } else {
      throw new Error(`不明な賛否の記号です: ${symbol}`);
    }
    byFaction.set(faction, vote);
  });

  return {
    forCount,
    againstCount,
    blankMembers,
    byFaction: [...byFaction.values()],
    notVoting: [...notVoting.entries()].map(
      ([label, names]): OtaNotVoting => ({ label, members: names })
    ),
  };
}

/** 一覧のカードに添える「（賛成多数：賛成27・反対1）」。議員別の賛否がなければ空文字 */
export function formatOtaVoteSummary(
  bill: Pick<OtaBill, "vote" | "memberVotes">
): string {
  if (!bill.memberVotes || !bill.vote) return "";
  const { forCount, againstCount } = bill.memberVotes.tally;
  return `（${bill.vote}：賛成${forCount}・反対${againstCount}）`;
}
