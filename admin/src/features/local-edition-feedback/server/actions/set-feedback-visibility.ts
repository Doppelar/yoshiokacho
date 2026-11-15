"use server";
import { parseFeedbackVisibility } from "@mirai-gikai/shared/local-edition-feedback/feedback";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/features/auth/server/lib/auth-server";
import { routes } from "@/lib/routes";
import { updateFeedbackVisibility } from "../repositories/feedback-repository";
export async function setFeedbackVisibility(
  input: unknown
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    await requireAdmin();
  } catch {
    return { ok: false, error: "管理者権限が必要です。" };
  }
  const parsed = parseFeedbackVisibility(input);
  if (!parsed.success) return { ok: false, error: "投稿が見つかりません。" };
  try {
    const updated = await updateFeedbackVisibility(
      parsed.data.id,
      parsed.data.hidden
    );
    if (!updated) return { ok: false, error: "投稿が見つかりません。" };
    revalidatePath(routes.localEditionFeedback());
    return { ok: true };
  } catch (error) {
    console.error("Failed to update feedback visibility", error);
    return { ok: false, error: "公開状態の更新に失敗しました。" };
  }
}
