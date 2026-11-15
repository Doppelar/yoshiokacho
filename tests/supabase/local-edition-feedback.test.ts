import { randomUUID } from "node:crypto";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  findFeedbackForAdmin,
  updateFeedbackVisibility,
} from "../../admin/src/features/local-edition-feedback/server/repositories/feedback-repository";
import {
  consumeFeedbackRateLimit,
  findPublicFeedback,
  insertFeedback,
} from "../../web/src/features/local-edition-feedback/server/repositories/feedback-repository";
import { adminClient, getAnonClient } from "./utils";

describe("全国一覧の意見掲示板（実DB）", () => {
  const ids: string[] = [];
  const visibleId = randomUUID();
  const hiddenId = randomUUID();
  const rateKey = `feedback:test:${randomUUID()}`;
  beforeAll(async () => {
    ids.push(visibleId, hiddenId);
    const { error } = await adminClient.from("local_edition_feedback").insert([
      {
        id: visibleId,
        display_name: "テスト投稿者",
        body: "公開テスト",
        is_hidden: false,
      },
      {
        id: hiddenId,
        display_name: "非表示投稿者",
        body: "非表示テスト",
        is_hidden: true,
      },
    ]);
    if (error) throw error;
  });
  afterAll(async () => {
    await adminClient.from("local_edition_feedback").delete().in("id", ids);
    await adminClient.from("api_rate_limits").delete().eq("key", rateKey);
  });
  it("投稿を即時公開し、非表示本文を公開一覧へ出さない", async () => {
    const body = `即時公開テスト ${randomUUID()}`;
    await insertFeedback({ displayName: "匿名", body });
    const { data, error } = await adminClient
      .from("local_edition_feedback")
      .select("id")
      .eq("body", body)
      .single();
    if (error) throw error;
    ids.push(data.id);
    const page = await findPublicFeedback(1);
    expect(page.available).toBe(true);
    expect(page.posts.some((post) => post.id === data.id)).toBe(true);
    expect(page.posts.some((post) => post.id === hiddenId)).toBe(false);
    expect(page.posts.find((post) => post.id === data.id)).not.toHaveProperty(
      "is_hidden"
    );
  });
  it("管理画面で非表示・再公開でき、非表示投稿も管理一覧に残る", async () => {
    expect(await updateFeedbackVisibility(visibleId, true)).toBe(true);
    expect(
      (await findPublicFeedback(1)).posts.some((post) => post.id === visibleId)
    ).toBe(false);
    const admin = await findFeedbackForAdmin();
    expect(admin.posts.find((post) => post.id === visibleId)?.is_hidden).toBe(
      true
    );
    expect(await updateFeedbackVisibility(visibleId, false)).toBe(true);
    expect(
      (await findPublicFeedback(1)).posts.some((post) => post.id === visibleId)
    ).toBe(true);
    expect(await updateFeedbackVisibility(randomUUID(), true)).toBe(false);
  });
  it("ブラウザの公開キーから直接読み書きできない", async () => {
    const anon = getAnonClient();
    const { data, error } = await anon
      .from("local_edition_feedback")
      .select("id");
    expect(error !== null || data?.length === 0).toBe(true);
    const inserted = await anon
      .from("local_edition_feedback")
      .insert({ body: "直接投稿" });
    expect(inserted.error).not.toBeNull();
    const updated = await anon
      .from("local_edition_feedback")
      .update({ is_hidden: false })
      .eq("id", hiddenId);
    expect(updated.error).not.toBeNull();
  });
  it("DBでも空白・長すぎる本文を拒否する", async () => {
    for (const body of ["  ", "a".repeat(2001)]) {
      const { error } = await adminClient
        .from("local_edition_feedback")
        .insert({ body });
      expect(error?.code).toBe("23514");
    }
  });
  it("同じ投稿日時でもページ間で重複せず20件ずつ表示する", async () => {
    const baseline = (await findPublicFeedback(1)).count;
    const rows = Array.from({ length: 21 }, () => ({
      id: randomUUID(),
      body: "ページ切り替え",
      created_at: "2100-01-01T00:00:00Z",
    }));
    ids.push(...rows.map((row) => row.id));
    const { error } = await adminClient
      .from("local_edition_feedback")
      .insert(rows);
    if (error) throw error;
    const first = await findPublicFeedback(1),
      second = await findPublicFeedback(2);
    expect(first.count).toBe(baseline + 21);
    expect(first.posts).toHaveLength(20);
    const adminFirst = await findFeedbackForAdmin(1);
    const adminSecond = await findFeedbackForAdmin(2);
    expect(adminSecond.posts.length).toBeGreaterThan(0);
    expect(
      adminFirst.posts.some((post) =>
        adminSecond.posts.some((next) => next.id === post.id)
      )
    ).toBe(false);
    expect(
      first.posts.some((post) =>
        second.posts.some((next) => next.id === post.id)
      )
    ).toBe(false);
  });
  it("連続投稿の上限をDB側で適用する", async () => {
    const start = "2026-11-15T00:00:00Z";
    expect(await consumeFeedbackRateLimit(rateKey, start, 3)).toBe(true);
    expect(await consumeFeedbackRateLimit(rateKey, start, 3)).toBe(true);
    expect(await consumeFeedbackRateLimit(rateKey, start, 3)).toBe(true);
    expect(await consumeFeedbackRateLimit(rateKey, start, 3)).toBe(false);
  });
});
