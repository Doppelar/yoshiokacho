import {
  type OpinionFields,
  type ParseResult,
  parseOpinionFields,
  type RawOpinionFields,
  type Residence,
} from "@/features/bill-public-opinions/shared/utils/opinion-input";
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
