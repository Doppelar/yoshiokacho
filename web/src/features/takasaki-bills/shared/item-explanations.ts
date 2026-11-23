import { TAKASAKI_R7_1_ITEM_EXPLANATIONS } from "./item-explanations-r7-1";
import { TAKASAKI_R7_2_ITEM_EXPLANATIONS } from "./item-explanations-r7-2";
import { TAKASAKI_R7_3_ITEM_EXPLANATIONS } from "./item-explanations-r7-3";
import { TAKASAKI_R7_4_ITEM_EXPLANATIONS } from "./item-explanations-r7-4";
import { TAKASAKI_R7_5_ITEM_EXPLANATIONS } from "./item-explanations-r7-5";
import { TAKASAKI_R8_5_ITEM_EXPLANATIONS } from "./item-explanations-r8-5";
import type { TakasakiItemExplanation } from "./types";

/** 議案ID → 内容と議論の解説。会期ごとのファイルをまとめる */
export const TAKASAKI_ITEM_EXPLANATIONS: Readonly<
  Partial<Record<string, TakasakiItemExplanation>>
> = {
  ...TAKASAKI_R8_5_ITEM_EXPLANATIONS,
  ...TAKASAKI_R7_1_ITEM_EXPLANATIONS,
  ...TAKASAKI_R7_2_ITEM_EXPLANATIONS,
  ...TAKASAKI_R7_3_ITEM_EXPLANATIONS,
  ...TAKASAKI_R7_4_ITEM_EXPLANATIONS,
  ...TAKASAKI_R7_5_ITEM_EXPLANATIONS,
};
