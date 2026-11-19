import {
  type OpinionFields,
  type ParseResult,
  parseOpinionFields,
  type RawOpinionFields,
  type Residence,
} from "@/features/bill-public-opinions/shared/utils/opinion-input";
import {
  IRYO_TOPIC_ID,
  NATIONAL_COUNCIL,
} from "@/features/iryo-forum/shared/forum";
import { findTakasakiItem } from "@/features/takasaki-bills/shared/utils/sessions";
import { routes } from "@/lib/routes";

type CouncilConfig = {
  /** お住まいの選択肢の表示名 */
  residenceLabels: Record<Residence, string>;
  /** 静的データに存在する議案か */
  hasItem: (itemId: string) => boolean;
  /** 議案ページのパス（投稿後の再検証に使う） */
  itemPath: (itemId: string) => string;
};

/** 意見掲示板を置く、吉岡町以外の議会 */
export const COUNCILS = {
  takasaki: {
    residenceLabels: { in_town: "市内", out_of_town: "市外" },
    hasItem: (itemId) => findTakasakiItem(itemId) !== undefined,
    itemPath: routes.takasakiBillDetail,
  },
} as const satisfies Record<string, CouncilConfig>;

export type CouncilId = keyof typeof COUNCILS;

export type CouncilItemOpinionInput = OpinionFields & {
  council: CouncilId;
  itemId: string;
};

export function isCouncilId(value: string): value is CouncilId {
  return Object.hasOwn(COUNCILS, value);
}

/** 議会・議案の実在と入力内容を検証し、保存できる形に整える */
export function parseCouncilItemOpinionInput(
  council: string,
  itemId: string,
  raw: RawOpinionFields
): ParseResult<CouncilItemOpinionInput> {
  if (!isCouncilId(council) || !COUNCILS[council].hasItem(itemId)) {
    return { ok: false, error: "議案が見つかりません。" };
  }
  const fields = parseOpinionFields(raw);
  if (!fields.ok) return fields;
  return { ok: true, value: { council, itemId, ...fields.value } };
}

/** 議会の議案を bills に登録するときの slug（例: takasaki-r8-4-gian-54） */
export function toCouncilBillSlug(council: string, itemId: string): string {
  return `${council}-${itemId}`;
}

/** 全国版のテーマ（bills.council = national）ごとのページ */
const NATIONAL_TOPIC_PATHS: Readonly<Record<string, string>> = {
  [IRYO_TOPIC_ID]: routes.iryoForum(),
};

/**
 * bills の council・slug から、その議会の議案ページのパスを返す。
 * 全国版のテーマ（council = national）は、そのテーマのページを返す。
 * 吉岡町の議案（council が NULL）や、静的データにない議案なら null。
 */
export function getCouncilItemPathForBill(bill: {
  council: string | null;
  slug: string | null;
}): string | null {
  const { council, slug } = bill;
  if (council === NATIONAL_COUNCIL && slug !== null) {
    const prefix = `${NATIONAL_COUNCIL}-`;
    if (!slug.startsWith(prefix)) return null;
    return NATIONAL_TOPIC_PATHS[slug.slice(prefix.length)] ?? null;
  }
  if (council === null || slug === null || !isCouncilId(council)) return null;
  const prefix = `${council}-`;
  if (!slug.startsWith(prefix)) return null;
  const itemId = slug.slice(prefix.length);
  if (!COUNCILS[council].hasItem(itemId)) return null;
  return COUNCILS[council].itemPath(itemId);
}
