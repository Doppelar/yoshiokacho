export type TakasakiItemKind =
  | "議案"
  | "報告"
  | "請願"
  | "意見書案"
  | "承認"
  | "議員提出";

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

/** 会議録から作成した質問と答弁の要旨（発言そのものではない） */
export type TakasakiExchange = {
  /** 委員会質疑の質問者。一般質問では省略（質問者は通告者） */
  questioner?: string;
  question: string;
  /** 答弁者の職名 */
  answerer: string;
  answer: string;
};

export type TakasakiQuestionTopic = {
  /** 質問の項目名（質問通告要旨の項目名、通告要旨がない会期は会議録から付けたもの） */
  title: string;
  /** 質問の小項目 */
  points: readonly string[];
  exchanges: readonly TakasakiExchange[];
};

export type TakasakiGeneralQuestion = {
  date: string;
  member: string;
  faction: string;
  topics: readonly TakasakiQuestionTopic[];
  /** その日の本会議の会議録 */
  minutesUrl?: string;
};

export type TakasakiGeneralQuestionSet = {
  /** published: 会議録公開済みで要旨あり / pending: 会議録の公開待ち（通告のみ） */
  status: "published" | "pending";
  questions: readonly TakasakiGeneralQuestion[];
  /** 決算などの議案について会派の代表が行う総括質疑。ない会期は省略 */
  representativeQuestions?: readonly TakasakiGeneralQuestion[];
  /** 通告したが欠席などで質問しなかった議員 */
  absentMembers?: readonly string[];
  /**
   * 質問項目の題の出どころ。notice（省略時）: 質問通告要旨の記載どおり /
   * minutes: 通告要旨がないため、本サイトが会議録から付けた
   */
  topicSource?: "notice" | "minutes";
};

export type TakasakiCommitteeDeliberation = {
  committee: string;
  date: string;
  /** 委員会での採決結果 */
  vote: string;
  minutesUrl: string;
  exchanges: readonly TakasakiExchange[];
};

export type TakasakiSession = {
  /** 未転記の議員別賛否を全会一致と扱わない。 */
  voteDetails?: "unconfirmed";
  id: string;
  name: string;
  period: string;
  sourceUrl: string;
  members: readonly TakasakiCouncilMember[];
  chair: string;
  items: readonly TakasakiItem[];
};

/**
 * 会議録でどんな議論が交わされたかのまとめ（本サイト作成）。
 * plain は中学生にもわかる言葉、detailed は専門用語や金額を含む詳しい内容。
 * 各要素が1段落。
 */
export type TakasakiDebateSummary = {
  plain: readonly string[];
  detailed: readonly string[];
};

/** 議案の解説で確認に使った公式資料 */
export type TakasakiExplanationSource = {
  label: string;
  url: string;
};

/**
 * 議案の内容と議論の解説（本サイト作成）。plain／detailed は議案の内容、
 * discussion はどんな議論があったか。右上の「説明をもっと詳しく」で切り替える。
 */
export type TakasakiItemExplanation = TakasakiDebateSummary & {
  discussion: TakasakiDebateSummary;
  /** 議案の提出者（請願は請願者） */
  submittedBy?: readonly string[];
  /** 請願の紹介議員 */
  introductionMembers?: readonly string[];
  /** 意見書を国などへ出すときの名義 */
  outgoingName?: string;
  sources: readonly TakasakiExplanationSource[];
};
