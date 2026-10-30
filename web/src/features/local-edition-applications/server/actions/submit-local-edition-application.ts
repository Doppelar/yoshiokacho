"use server";

import { parseLocalEditionApplicationInput } from "@mirai-gikai/shared/local-edition-application/parse-application";
import { insertLocalEditionApplication } from "../repositories/local-edition-application-repository";

export type SubmitLocalEditionApplicationResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitLocalEditionApplication(input: {
  municipalityName: string;
  contactName: string;
  email: string;
  siteUrl: string;
  introduction: string;
}): Promise<SubmitLocalEditionApplicationResult> {
  const parsed = parseLocalEditionApplicationInput(input);
  if (!parsed.ok) return parsed;

  try {
    await insertLocalEditionApplication(parsed.value);
  } catch (error) {
    console.error("Failed to save local edition application", error);
    return {
      ok: false,
      error: "申請の保存に失敗しました。時間をおいて再度お試しください。",
    };
  }

  return { ok: true };
}
