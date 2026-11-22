import { TAKASAKI_ITEM_EXPLANATIONS } from "../item-explanations";

export function getItemExplanation(itemId: string) {
  return Object.hasOwn(TAKASAKI_ITEM_EXPLANATIONS, itemId)
    ? TAKASAKI_ITEM_EXPLANATIONS[itemId]
    : undefined;
}
