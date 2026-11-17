import {
  TAKASAKI_COMMITTEE_DELIBERATIONS,
  TAKASAKI_GENERAL_QUESTIONS,
} from "../deliberations";
import type {
  TakasakiCommitteeDeliberation,
  TakasakiGeneralQuestion,
  TakasakiGeneralQuestionSet,
} from "../types";

/** 会期の一般質問。データのない会期は undefined */
export function getGeneralQuestions(
  sessionId: string
): TakasakiGeneralQuestionSet | undefined {
  return TAKASAKI_GENERAL_QUESTIONS[sessionId];
}

/** 議案の委員会質疑。ない場合は空配列 */
export function getCommitteeDeliberations(
  itemId: string
): readonly TakasakiCommitteeDeliberation[] {
  return TAKASAKI_COMMITTEE_DELIBERATIONS[itemId] ?? [];
}

/** 委員会で質疑があった（質問が1件以上ある）か */
export function hasCommitteeQuestions(itemId: string): boolean {
  return getCommitteeDeliberations(itemId).some(
    (deliberation) => deliberation.exchanges.length > 0
  );
}

/** 一般質問の質問と答弁の件数 */
export function countExchanges(question: TakasakiGeneralQuestion): number {
  return question.topics.reduce(
    (sum, topic) => sum + topic.exchanges.length,
    0
  );
}

/** 一般質問を日付ごとにまとめる（並び順は保つ） */
export function groupQuestionsByDate(
  questions: readonly TakasakiGeneralQuestion[]
): { date: string; questions: TakasakiGeneralQuestion[] }[] {
  const groups: { date: string; questions: TakasakiGeneralQuestion[] }[] = [];
  for (const question of questions) {
    const last = groups.at(-1);
    if (last && last.date === question.date) {
      last.questions.push(question);
    } else {
      groups.push({ date: question.date, questions: [question] });
    }
  }
  return groups;
}
