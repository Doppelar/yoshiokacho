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
};
