export type TakasakiItemKind = "議案" | "報告" | "請願" | "意見書案";

export type TakasakiCouncilMember = {
  name: string;
  faction: string;
};

export type TakasakiItem = {
  id: string;
  kind: TakasakiItemKind;
  number: number;
  title: string;
  /** 付託委員会。付託なしは null */
  committee: string | null;
  /** 議決結果。報告など議決のないものは null */
  result: string | null;
  /**
   * 起立採決（賛否が分かれたもの）。反対（起立しなかった）議員だけを持ち、
   * 議長以外の残りの議員を賛成とみなす。簡易採決（全員異議なし）は undefined。
   */
  rollCall?: { against: readonly string[] };
};

export type TakasakiSession = {
  id: string;
  name: string;
  period: string;
  sourceUrl: string;
  members: readonly TakasakiCouncilMember[];
  chair: string;
  items: readonly TakasakiItem[];
};
