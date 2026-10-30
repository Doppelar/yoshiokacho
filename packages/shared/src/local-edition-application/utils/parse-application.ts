export const LOCAL_EDITION_APPLICATION_STATUSES = [
  "pending",
  "approved",
  "rejected",
] as const;

export type LocalEditionApplicationStatus =
  (typeof LOCAL_EDITION_APPLICATION_STATUSES)[number];

export const LOCAL_EDITION_APPLICATION_STATUS_LABELS: Record<
  LocalEditionApplicationStatus,
  string
> = {
  pending: "未審査",
  approved: "承認",
  rejected: "却下",
};

export const LOCAL_EDITION_REVIEW_DECISIONS = ["approved", "rejected"] as const;

export type LocalEditionReviewDecision =
  (typeof LOCAL_EDITION_REVIEW_DECISIONS)[number];

export const MUNICIPALITY_NAME_MAX_LENGTH = 80;
export const CONTACT_NAME_MAX_LENGTH = 80;
export const EMAIL_MAX_LENGTH = 254;
export const SITE_URL_MAX_LENGTH = 500;
export const INTRODUCTION_MAX_LENGTH = 2000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const APPLICATION_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type ParseResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

export type LocalEditionApplicationInput = {
  municipalityName: string;
  contactName: string;
  email: string;
  siteUrl: string;
  introduction: string;
};

export type ParsedLocalEditionApplication = {
  municipalityName: string;
  contactName: string;
  email: string;
  siteUrl: string | null;
  introduction: string;
};

export type ApprovedApplicationRow = {
  id: string;
  municipality_name: string;
  contact_name: string;
  site_url: string | null;
  introduction: string;
  status: string;
  created_at: string;
};

export type PublicLocalEditionApplication = {
  id: string;
  municipalityName: string;
  contactName: string;
  siteUrl: string | null;
  introduction: string;
  createdAt: string;
};

export type LocalEditionApplicationRow = ApprovedApplicationRow & {
  email: string;
  updated_at: string;
};

export type LocalEditionApplicationRecord = {
  id: string;
  municipalityName: string;
  contactName: string;
  email: string;
  siteUrl: string | null;
  introduction: string;
  status: LocalEditionApplicationStatus;
  createdAt: string;
  updatedAt: string;
};

function fail(error: string): { ok: false; error: string } {
  return { ok: false, error };
}

export function isLocalEditionApplicationStatus(
  value: string
): value is LocalEditionApplicationStatus {
  return (LOCAL_EDITION_APPLICATION_STATUSES as readonly string[]).includes(
    value
  );
}

export function isApplicationId(value: string): boolean {
  return APPLICATION_ID_PATTERN.test(value);
}

export function canReviewApplication(status: string): boolean {
  return status === "pending";
}

export function parseReviewDecision(
  value: string
): ParseResult<LocalEditionReviewDecision> {
  if (value === "approved" || value === "rejected") {
    return { ok: true, value };
  }
  return fail("承認または却下を選んでください。");
}

function parseRequiredText(
  value: string,
  maxLength: number,
  emptyMessage: string,
  tooLongMessage: string
): ParseResult<string> {
  const trimmed = value.trim();
  if (trimmed.length < 1) return fail(emptyMessage);
  if (trimmed.length > maxLength) return fail(tooLongMessage);
  return { ok: true, value: trimmed };
}

function parseEmail(value: string): ParseResult<string> {
  const email = value.trim().toLowerCase();
  if (email.length < 1) return fail("メールアドレスを入力してください。");
  if (email.length > EMAIL_MAX_LENGTH) {
    return fail(
      `メールアドレスは${EMAIL_MAX_LENGTH}文字以内にしてください。`
    );
  }
  if (!EMAIL_PATTERN.test(email)) {
    return fail("メールアドレスの形式が正しくありません。");
  }
  return { ok: true, value: email };
}

function parseSiteUrl(value: string): ParseResult<string | null> {
  const trimmed = value.trim();
  if (trimmed.length === 0) return { ok: true, value: null };
  if (trimmed.length > SITE_URL_MAX_LENGTH) {
    return fail(`サイトURLは${SITE_URL_MAX_LENGTH}文字以内にしてください。`);
  }

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return fail("サイトURLの形式が正しくありません。");
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return fail("サイトURLはhttpまたはhttpsにしてください。");
  }

  const normalized = url.toString();
  if (normalized.length > SITE_URL_MAX_LENGTH) {
    return fail(`サイトURLは${SITE_URL_MAX_LENGTH}文字以内にしてください。`);
  }
  return { ok: true, value: normalized };
}

export function toPublicSiteUrl(value: string | null): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function parseLocalEditionApplicationInput(
  input: LocalEditionApplicationInput
): ParseResult<ParsedLocalEditionApplication> {
  const municipalityName = parseRequiredText(
    input.municipalityName,
    MUNICIPALITY_NAME_MAX_LENGTH,
    "自治体名を入力してください。",
    `自治体名は${MUNICIPALITY_NAME_MAX_LENGTH}文字以内にしてください。`
  );
  if (!municipalityName.ok) return municipalityName;

  const contactName = parseRequiredText(
    input.contactName,
    CONTACT_NAME_MAX_LENGTH,
    "担当者名を入力してください。",
    `担当者名は${CONTACT_NAME_MAX_LENGTH}文字以内にしてください。`
  );
  if (!contactName.ok) return contactName;

  const email = parseEmail(input.email);
  if (!email.ok) return email;

  const siteUrl = parseSiteUrl(input.siteUrl);
  if (!siteUrl.ok) return siteUrl;

  const introduction = parseRequiredText(
    input.introduction,
    INTRODUCTION_MAX_LENGTH,
    "紹介文を入力してください。",
    `紹介文は${INTRODUCTION_MAX_LENGTH}文字以内にしてください。`
  );
  if (!introduction.ok) return introduction;

  return {
    ok: true,
    value: {
      municipalityName: municipalityName.value,
      contactName: contactName.value,
      email: email.value,
      siteUrl: siteUrl.value,
      introduction: introduction.value,
    },
  };
}

export function mapApprovedApplicationRow(
  row: ApprovedApplicationRow
): PublicLocalEditionApplication | null {
  if (row.status !== "approved") return null;
  return {
    id: row.id,
    municipalityName: row.municipality_name,
    contactName: row.contact_name,
    siteUrl: toPublicSiteUrl(row.site_url),
    introduction: row.introduction,
    createdAt: row.created_at,
  };
}

export function mapApplicationRow(
  row: LocalEditionApplicationRow
): LocalEditionApplicationRecord | null {
  if (!isLocalEditionApplicationStatus(row.status)) return null;
  return {
    id: row.id,
    municipalityName: row.municipality_name,
    contactName: row.contact_name,
    email: row.email,
    siteUrl: toPublicSiteUrl(row.site_url),
    introduction: row.introduction,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function formatApplicationDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
