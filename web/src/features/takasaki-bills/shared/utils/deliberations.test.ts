import { describe, expect, it } from "vitest";
import { TAKASAKI_SESSIONS } from "../sessions";
import type { TakasakiGeneralQuestion } from "../types";
import {
  countExchanges,
  getCommitteeDeliberations,
  getGeneralQuestions,
  groupQuestionsByDate,
  hasCommitteeQuestions,
} from "./deliberations";

describe("一般質問（議事ベース）", () => {
  it("令和8年第4回定例会は会議録から25人分の質問と答弁を持ち、欠席者を区別する", () => {
    const set = getGeneralQuestions("r8-4");
    expect(set?.status).toBe("published");
    expect(set?.questions).toHaveLength(25);
    expect(set?.absentMembers).toEqual(["後閑賢二", "大河原吉明"]);
    for (const question of set?.questions ?? []) {
      expect(question.minutesUrl).toMatch(
        /^https:\/\/takasaki\.gijiroku\.com\/voices\//
      );
      expect(question.topics.length).toBeGreaterThan(0);
      for (const topic of question.topics) {
        expect(topic.title.length).toBeGreaterThan(0);
        expect(topic.exchanges.length).toBeGreaterThan(0);
        for (const exchange of topic.exchanges) {
          expect(exchange.question.length).toBeGreaterThan(0);
          expect(exchange.answerer.length).toBeGreaterThan(0);
          expect(exchange.answer.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("会議録が未公開の第5回定例会は、通告項目だけを持ち要旨を推測しない", () => {
    const set = getGeneralQuestions("r8-5");
    expect(set?.status).toBe("pending");
    expect(set?.questions).toHaveLength(27);
    for (const question of set?.questions ?? []) {
      expect(question.minutesUrl).toBeUndefined();
      for (const topic of question.topics) {
        expect(topic.exchanges).toHaveLength(0);
      }
    }
  });

  it("データのない会期は undefined", () => {
    expect(getGeneralQuestions("r7-1")).toBeUndefined();
  });

  it("質問の件数を数え、日付ごとにまとめる", () => {
    const q = (date: string, n: number): TakasakiGeneralQuestion => ({
      date,
      member: "テスト",
      faction: "会派",
      topics: [
        {
          title: "項目",
          points: [],
          exchanges: Array.from({ length: n }, () => ({
            question: "問",
            answerer: "部長",
            answer: "答",
          })),
        },
      ],
    });
    expect(countExchanges(q("6月11日", 3))).toBe(3);
    const groups = groupQuestionsByDate([
      q("6月11日", 1),
      q("6月11日", 1),
      q("6月12日", 1),
    ]);
    expect(groups.map((g) => [g.date, g.questions.length])).toEqual([
      ["6月11日", 2],
      ["6月12日", 1],
    ]);
  });
});

describe("委員会質疑（議事ベース）", () => {
  it("委員会質疑は実在する議案にだけ紐づく", () => {
    const ids = new Set(
      TAKASAKI_SESSIONS.flatMap((s) => s.items.map((i) => i.id))
    );
    for (const itemId of [
      "r8-4-gian-54",
      "r8-4-gian-55",
      "r8-4-gian-59",
      "r8-4-gian-65",
      "r8-4-gian-66",
    ]) {
      expect(ids.has(itemId)).toBe(true);
      expect(hasCommitteeQuestions(itemId)).toBe(true);
    }
  });

  it("複数の委員会に付託された補正予算は委員会ごとの質疑を持つ", () => {
    const committees = getCommitteeDeliberations("r8-4-gian-65").map(
      (d) => d.committee
    );
    expect(committees).toEqual([
      "総務常任委員会",
      "教育福祉常任委員会",
      "市民経済常任委員会",
    ]);
    for (const d of getCommitteeDeliberations("r8-4-gian-65")) {
      for (const exchange of d.exchanges) {
        expect(exchange.questioner?.length).toBeGreaterThan(0);
      }
    }
  });

  it("質疑のない議案は空配列", () => {
    expect(getCommitteeDeliberations("r8-4-gian-58")).toEqual([]);
    expect(hasCommitteeQuestions("r8-4-gian-58")).toBe(false);
  });
});
