"use server";

import { revalidatePath } from "next/cache";
import { routes } from "@/lib/routes";
import { parseOpinionInput } from "../../shared/utils/opinion-input";
import { insertBillPublicOpinion } from "../repositories/bill-public-opinion-repository";

export type SubmitBillPublicOpinionResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitBillPublicOpinion(input: {
  billId: string;
  commenterType: string;
  stance: string;
  residence: string;
  body: string;
}): Promise<SubmitBillPublicOpinionResult> {
  const parsed = parseOpinionInput(input);
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
