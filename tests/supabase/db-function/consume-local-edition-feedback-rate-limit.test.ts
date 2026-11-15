import { randomUUID } from "node:crypto";
import { afterAll, describe, expect, it } from "vitest";
import { adminClient, getAnonClient } from "../utils";

describe("consume_local_edition_feedback_rate_limit（実DB）", () => {
  const keys: string[] = [];
  const start = new Date(Math.floor(Date.now() / 60000) * 60000);
  function newKey() {
    const key = `feedback:rpc-test:${randomUUID()}`;
    keys.push(key);
    return key;
  }
  async function consume(key: string, windowStart = start, limit = 3) {
    const { data, error } = await adminClient.rpc(
      "consume_local_edition_feedback_rate_limit",
      { p_key: key, p_window_start: windowStart.toISOString(), p_limit: limit }
    );
    if (error) throw error;
    return data;
  }
  afterAll(async () => {
    await adminClient
      .from("local_edition_feedback_rate_limits")
      .delete()
      .in("key", keys);
  });
  it("同時リクエストでも上限を超える投稿を許可しない", async () => {
    const key = newKey();
    const results = await Promise.all(
      Array.from({ length: 4 }, () => consume(key))
    );
    expect(results.filter(Boolean)).toHaveLength(3);
    expect(results.filter((result) => !result)).toHaveLength(1);
    const { data, error } = await adminClient
      .from("local_edition_feedback_rate_limits")
      .select("request_count")
      .eq("key", key)
      .single();
    expect(error).toBeNull();
    expect(data?.request_count).toBe(4);
  });
  it("時間枠が変わると再開し、別のキーは独立して集計する", async () => {
    const key = newKey(),
      anotherKey = newKey();
    expect(await consume(key, start, 1)).toBe(true);
    expect(await consume(key, start, 1)).toBe(false);
    expect(await consume(anotherKey, start, 1)).toBe(true);
    expect(await consume(key, new Date(start.getTime() + 60000), 1)).toBe(true);
    const { data, error } = await adminClient
      .from("local_edition_feedback_rate_limits")
      .select("window_start")
      .eq("key", key);
    expect(error).toBeNull();
    expect(data).toHaveLength(2);
    expect(
      data?.some(
        (row) =>
          new Date(row.window_start).getTime() === start.getTime() + 60000
      )
    ).toBe(true);
    // Delayed requests from an exhausted previous window must stay rejected.
    expect(await consume(key, start, 1)).toBe(false);
  });
  it("使われなくなった古いキーを削除する", async () => {
    const key = newKey();
    const { error } = await adminClient
      .from("local_edition_feedback_rate_limits")
      .insert({
        key,
        window_start: new Date(start.getTime() - 7200000).toISOString(),
      });
    expect(error).toBeNull();
    await consume(newKey());
    const result = await adminClient
      .from("local_edition_feedback_rate_limits")
      .select("*", { count: "exact", head: true })
      .eq("key", key);
    expect(result.error).toBeNull();
    expect(result.count).toBe(0);
  });
  it("0以下の上限を拒否する", async () => {
    const { error } = await adminClient.rpc(
      "consume_local_edition_feedback_rate_limit",
      { p_key: newKey(), p_window_start: start.toISOString(), p_limit: 0 }
    );
    expect(error?.code).toBe("22023");
  });
  it("公開キーから関数の実行や制限値の直接変更ができない", async () => {
    const anon = getAnonClient(),
      key = newKey();
    const result = await anon.rpc("consume_local_edition_feedback_rate_limit", {
      p_key: key,
      p_window_start: start.toISOString(),
      p_limit: 3,
    });
    expect(result.error).not.toBeNull();
    const inserted = await anon
      .from("local_edition_feedback_rate_limits")
      .insert({ key, window_start: start.toISOString(), request_count: 1 });
    expect(inserted.error).not.toBeNull();
    const { data, error } = await anon
      .from("local_edition_feedback_rate_limits")
      .select("*");
    expect(error !== null || data?.length === 0).toBe(true);
  });
});
