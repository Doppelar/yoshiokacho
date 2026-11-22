import { describe, expect, it } from "vitest";
import {
  TAKASAKI_EXPLANATION_SOURCES,
  TAKASAKI_ITEM_EXPLANATIONS,
} from "./item-explanations";
import { TAKASAKI_R8_5_MEMBERS, TAKASAKI_SESSION_R8_5 } from "./session-r8-5";

describe("高崎市の直近会期の議案説明", () => {
  it("全31件の要約と詳細に、内容・議論・公式出典を揃える", () => {
    expect(Object.keys(TAKASAKI_ITEM_EXPLANATIONS).sort()).toEqual(
      TAKASAKI_SESSION_R8_5.items.map((item) => item.id).sort()
    );
    for (const item of TAKASAKI_SESSION_R8_5.items) {
      const explanation = TAKASAKI_ITEM_EXPLANATIONS[item.id];
      expect(explanation, item.id).toBeDefined();
      if (!explanation) throw new Error(item.id);
      for (const mode of ["plain", "detailed"] as const) {
        expect(explanation[mode].join("").length, item.id).toBeGreaterThan(20);
        expect(
          explanation.discussion[mode].join("").length,
          item.id
        ).toBeGreaterThan(20);
      }
      expect(explanation.plain).not.toEqual(explanation.detailed);
      expect(explanation.sourceIds.length).toBeGreaterThan(0);
      for (const sourceId of explanation.sourceIds) {
        const source = TAKASAKI_EXPLANATION_SOURCES[sourceId];
        expect(new URL(source.url).hostname).toMatch(
          /^(www\.city\.takasaki\.gunma\.jp|takasaki\.gijiroku\.com)$/
        );
      }
    }
  });

  it("意見書案の共同提出者6人と議長の国への提出名義を分ける", () => {
    const opinion = TAKASAKI_ITEM_EXPLANATIONS["ikensho-1"];
    expect(opinion?.submittedBy).toEqual([
      "谷川留美子（超党派の会）",
      "中島輝男（市民クラブ）",
      "小野聡子（公明党）",
      "林恒徳（市民クラブ）",
      "丸山覚（公明党）",
      "三島久美子（たかさき未来）",
    ]);
    expect(opinion?.outgoingName).toBe("高崎市議会議長 長壁真樹");
    expect(opinion?.sourceIds).toContain("opinionSubmission");
    for (const name of opinion?.submittedBy ?? []) {
      const [memberName, faction] = name.replace("）", "").split("（");
      expect(
        TAKASAKI_R8_5_MEMBERS.find((member) => member.name === memberName)
          ?.faction
      ).toBe(faction);
    }
  });

  it("請願者と紹介議員を意見書案の提出者と混同しない", () => {
    const petition = TAKASAKI_ITEM_EXPLANATIONS["seigan-1"];
    expect(petition?.submittedBy).toEqual([
      "原水爆禁止高崎協議会 理事長 平井敏久",
    ]);
    expect(petition?.introductionMembers).toEqual(["伊藤敦博", "金子和幸"]);
    expect(petition?.plain.join("")).toContain("不採択");
    expect(TAKASAKI_ITEM_EXPLANATIONS["ikensho-1"]?.plain.join("")).toContain(
      "可決"
    );
  });

  it("同名の人事案件を候補者ごとに区別する", () => {
    const candidates = [
      [115, "廣瀬一成"],
      [116, "田中友里"],
      [117, "塚越房江"],
      [118, "千葉照真"],
      [119, "久保奈津江"],
    ] as const;
    for (const [number, name] of candidates) {
      const explanation = TAKASAKI_ITEM_EXPLANATIONS[`gian-${number}`];
      expect(explanation?.plain.join("")).toContain(name);
      expect(explanation?.detailed.join("")).toContain(name);
    }
  });

  it("給付の拡充と誤解されやすい介護補正の返還・積立てを説明する", () => {
    expect(TAKASAKI_ITEM_EXPLANATIONS["gian-112"]?.plain.join("")).toContain(
      "返還"
    );
    expect(TAKASAKI_ITEM_EXPLANATIONS["gian-112"]?.detailed.join("")).toContain(
      "前年度事業費の確定"
    );
  });
});
