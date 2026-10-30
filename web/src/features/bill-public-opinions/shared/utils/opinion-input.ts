export const COMMENTER_TYPES = ["citizen", "expert"] as const;
export const STANCES = ["for", "against", "neutral"] as const;
export const RESIDENCES = ["in_town", "out_of_town"] as const;

export type CommenterType = (typeof COMMENTER_TYPES)[number];
export type Stance = (typeof STANCES)[number];
export type Residence = (typeof RESIDENCES)[number];

export const OPINION_BODY_MAX_LENGTH = 1000;

export const COMMENTER_TYPE_LABELS: Record<CommenterType, string> = {
  citizen: "一般市民",
  expert: "専門家",
};

export const STANCE_LABELS: Record<Stance, string> = {
  for: "賛成",
  against: "反対",
  neutral: "どちらでもない",
};

export const RESIDENCE_LABELS: Record<Residence, string> = {
  in_town: "町内",
  out_of_town: "町外",
};

export type BillPublicOpinionInput = {
  billId: string;
  commenterType: CommenterType;
  stance: Stance;
  residence: Residence;
  body: string;
};

export type ParseOpinionResult =
  | { ok: true; value: BillPublicOpinionInput }
  | { ok: false; error: string };

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isOneOf<T extends string>(
  values: readonly T[],
  value: string
): value is T {
  return (values as readonly string[]).includes(value);
}

/** フォーム入力を検証し、保存できる形に整える */
export function parseOpinionInput(raw: {
  billId: string;
  commenterType: string;
  stance: string;
  residence: string;
  body: string;
}): ParseOpinionResult {
  if (!UUID_PATTERN.test(raw.billId)) {
    return { ok: false, error: "議案が見つかりません。" };
  }
  if (!isOneOf(COMMENTER_TYPES, raw.commenterType)) {
    return { ok: false, error: "立場（一般市民・専門家）を選んでください。" };
  }
  if (!isOneOf(STANCES, raw.stance)) {
    return { ok: false, error: "賛成・反対・どちらでもないを選んでください。" };
  }
  if (!isOneOf(RESIDENCES, raw.residence)) {
    return { ok: false, error: "お住まい（町内・町外）を選んでください。" };
  }

  const body = raw.body.trim();
  if (body.length === 0) {
    return { ok: false, error: "意見を入力してください。" };
  }
  if (body.length > OPINION_BODY_MAX_LENGTH) {
    return {
      ok: false,
      error: `意見は${OPINION_BODY_MAX_LENGTH}文字以内で入力してください。`,
    };
  }

  return {
    ok: true,
    value: {
      billId: raw.billId,
      commenterType: raw.commenterType,
      stance: raw.stance,
      residence: raw.residence,
      body,
    },
  };
}

/** 賛否ごとの件数を数える（0件の賛否も含める） */
export function countByStance(
  opinions: readonly { stance: Stance }[]
): Record<Stance, number> {
  const counts: Record<Stance, number> = { for: 0, against: 0, neutral: 0 };
  for (const opinion of opinions) {
    counts[opinion.stance] += 1;
  }
  return counts;
}

/** DBの値が想定外のときは表示しない */
export function isStance(value: string): value is Stance {
  return isOneOf(STANCES, value);
}

export function isCommenterType(value: string): value is CommenterType {
  return isOneOf(COMMENTER_TYPES, value);
}

export function isResidence(value: string): value is Residence {
  return isOneOf(RESIDENCES, value);
}
