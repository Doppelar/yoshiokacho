import type { FactionVoteRow } from "@/components/council/faction-vote-table";

export type OtaBillStatus = "可決" | "認定" | "否決" | "同意" | "承認" | "報告";

export type OtaLegacyBill = {
  id: string;
  number: number;
  name: string;
  officialName: string;
  status: string;
  thumbnailUrl: string | null;
  normal: string | null;
  hard: string | null;
  sources: readonly string[];
};

export type OtaOfficialItem = {
  kind: string;
  number: number;
  title: string;
  submittedDate: string;
  decisionDate: string;
  result: OtaBillStatus;
  vote: string | null;
  sourceUrl: string;
};

export type OtaOfficialSession = {
  id: string;
  name: string;
  sourceUrl: string;
  items: readonly OtaOfficialItem[];
};

export type OtaBill = Omit<OtaLegacyBill, "status"> & {
  status: OtaBillStatus;
  sessionId: string;
  kind: string;
  submittedDate: string;
  decisionDate: string;
  vote: string | null;
  /** 賛否が分かれた議案の議員別の賛否。全会一致や賛否の公表がない会期は null */
  memberVotes: OtaMemberVotes | null;
};

export type OtaCouncilMember = {
  name: string;
  faction: string;
};

/** 会期ごとの議員名簿と、賛否が分かれた議案の議員別の賛否 */
export type OtaSessionMemberVotes = {
  members: readonly OtaCouncilMember[];
  /** 市の「各議員の議案に対する賛否」PDF */
  sourceUrl: string;
  /** キーは「議案72」「議会議案4」。値は名簿順の賛否記号の並び */
  votes: Readonly<Record<string, string>>;
};

/** 会期IDごとの議員別の賛否 */
export type OtaMemberVotesBySession = Readonly<
  Partial<Record<string, OtaSessionMemberVotes>>
>;

/** 採決に加わらなかった議員（議長・退席・欠席・除斥） */
export type OtaNotVoting = {
  label: string;
  members: string[];
};

export type OtaMemberVoteTally = {
  forCount: number;
  /** 反対。白票（会議規則により否とみなされる）を含む */
  againstCount: number;
  blankMembers: string[];
  byFaction: FactionVoteRow[];
  notVoting: OtaNotVoting[];
};

export type OtaMemberVotes = {
  tally: OtaMemberVoteTally;
  /** 市の「各議員の議案に対する賛否」PDF */
  sourceUrl: string;
};
