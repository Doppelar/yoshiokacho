import { randomUUID } from "node:crypto";
import { afterAll, describe, expect, it } from "vitest";
import {
  findVisibleCouncilItemOpinions,
  insertCouncilItemOpinion,
} from "../../web/src/features/council-item-opinions/server/repositories/council-item-opinion-repository";
import { adminClient, getAnonClient } from "./utils";

describe("高崎市などの議案への意見掲示板（実DB）", () => {
  // 他のテストと混ざらないよう、テストごとに別の議案IDを使う
  const itemId = `test-${randomUUID()}`;
  const otherItemId = `test-${randomUUID()}`;

  afterAll(async () => {
    await adminClient
      .from("council_item_opinions")
      .delete()
      .in("item_id", [itemId, otherItemId]);
  });

  it("投稿を即時公開し、議案ごとに分け、非表示の投稿は出さない", async () => {
    const base = {
      council: "takasaki" as const,
      commenterType: "citizen" as const,
      stance: "for" as const,
      residence: "in_town" as const,
    };
    await insertCouncilItemOpinion({ ...base, itemId, body: "公開する意見" });
    await insertCouncilItemOpinion({
      ...base,
      itemId: otherItemId,
      body: "別の議案への意見",
    });
    const { error } = await adminClient.from("council_item_opinions").insert({
      council: "takasaki",
      item_id: itemId,
      commenter_type: "expert",
      stance: "against",
      residence: "out_of_town",
      body: "非表示の意見",
      is_hidden: true,
    });
    if (error) throw error;

    const opinions = await findVisibleCouncilItemOpinions("takasaki", itemId);
    expect(opinions.map((opinion) => opinion.body)).toEqual(["公開する意見"]);

    // 当事者・事業者の立場でも投稿できる
    for (const commenterType of ["affected", "business"] as const) {
      await insertCouncilItemOpinion({
        ...base,
        commenterType,
        itemId: otherItemId,
        body: `${commenterType}の意見`,
      });
    }
    expect(opinions[0]).toMatchObject({
      commenterType: "citizen",
      stance: "for",
      residence: "in_town",
    });
  });

  it("DBでも不正な値・空白だけ・長すぎる本文を拒否する", async () => {
    const row = {
      council: "takasaki",
      item_id: itemId,
      commenter_type: "citizen",
      stance: "for",
      residence: "in_town",
      body: "本文",
    };
    for (const invalid of [
      { ...row, stance: "maybe" },
      { ...row, council: "Takasaki City" },
      { ...row, item_id: "" },
      { ...row, body: "" },
      { ...row, body: "a".repeat(1001) },
    ]) {
      const { error } = await adminClient
        .from("council_item_opinions")
        .insert(invalid);
      expect(error?.code).toBe("23514");
    }
  });

  it("ブラウザの公開キーから直接読み書きできない", async () => {
    const anon = getAnonClient();
    const { error } = await anon.from("council_item_opinions").select("id");
    expect(error).not.toBeNull();
    const inserted = await anon.from("council_item_opinions").insert({
      council: "takasaki",
      item_id: itemId,
      commenter_type: "citizen",
      stance: "for",
      residence: "in_town",
      body: "直接投稿",
    });
    expect(inserted.error).not.toBeNull();
  });
});
