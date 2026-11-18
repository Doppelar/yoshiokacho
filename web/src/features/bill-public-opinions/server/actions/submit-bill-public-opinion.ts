"use server";

import { revalidatePath } from "next/cache";
import { routes } from "@/lib/routes";
import {
  parseOpinionInput,
  type RawOpinionFields,
  type SubmitOpinionResult,
} from "../../shared/utils/opinion-input";
import { insertBillPublicOpinion } from "../repositories/bill-public-opinion-repository";

export type SubmitBillPublicOpinionResult = SubmitOpinionResult;

export async function submitBillPublicOpinion(
  billId: string,
  fields: RawOpinionFields
): Promise<SubmitBillPublicOpinionResult> {
  const parsed = parseOpinionInput({ billId, ...fields });
  if (!parsed.ok) return parsed;

  try {
    await insertBillPublicOpinion(parsed.value);
  } catch (error) {
    console.error("Failed to save bill public opinion", error);
    return {
      ok: false,
      error: "意見の保存に失敗しました。時間をおいて再度お試しください。",
    };
  }

  revalidatePath(routes.billDetail(parsed.value.billId));
  return { ok: true };
}
