import { randomUUID } from "node:crypto";
import { afterAll, describe, expect, it } from "vitest";
import {
  findVisibleTopicPosts,
  insertTopicPost,
} from "../../web/src/features/iryo-forum/server/repositories/iryo-forum-repository";
import { adminClient, getAnonClient } from "./utils";

describe("全国版のテーマごとの掲示板（実DB）", () => {
  // 他のテストと混ざらないよう、テストごとに別のテーマIDを使う
  const topic = `test-${randomUUID().slice(0, 8)}`;
  const otherTopic = `test-${randomUUID().slice(0, 8)}`;

  afterAll(async () => {
    await adminClient
      .from("national_topic_posts")
      .delete()
      .in("topic", [topic, otherTopic]);
  });

  it("投稿を即時公開し、テーマごとに分け、非表示の投稿は出さない", async () => {
    await insertTopicPost(topic, { displayName: "匿名", body: "最初の投稿" });
    await insertTopicPost(topic, { displayName: "医療者", body: "次の投稿" });
    await insertTopicPost(otherTopic, {
      displayName: "匿名",
      body: "別テーマの投稿",
    });
    const { error } = await adminClient.from("national_topic_posts").insert({
      topic,
      body: "非表示の投稿",
      is_hidden: true,
    });
    if (error) throw error;

    const { available, posts } = await findVisibleTopicPosts(topic);
    expect(available).toBe(true);
    expect(posts.map((post) => post.body)).toEqual(["次の投稿", "最初の投稿"]);
    expect(posts[0]).toMatchObject({ display_name: "医療者" });
  });

  it("テーマIDの形式・空の本文・長すぎる本文はDBで拒否する", async () => {
    const insert = (row: { topic: string; body: string }) =>
      adminClient.from("national_topic_posts").insert(row);
    expect(
      (await insert({ topic: "医療", body: "本文" })).error
    ).not.toBeNull();
    expect((await insert({ topic, body: "   " })).error).not.toBeNull();
    expect(
      (await insert({ topic, body: "あ".repeat(2001) })).error
    ).not.toBeNull();
  });

  it("匿名キーからは読み書きできない", async () => {
    const anon = getAnonClient();
    const { data } = await anon
      .from("national_topic_posts")
      .select("id")
      .eq("topic", topic);
    expect(data ?? []).toEqual([]);
    const { error } = await anon
      .from("national_topic_posts")
      .insert({ topic, body: "匿名キーからの投稿" });
    expect(error).not.toBeNull();
  });
});
