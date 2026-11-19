// 「医療のこれからを考える会」のAIインタビュー登録SQLを標準出力に出す（DBには接続しない）。
// 使い方: pnpm --filter @mirai-gikai/seed national:iryo-interview-sql > iryo-interview.sql
import * as forum from "../../../web/src/features/iryo-forum/shared/forum";
import { buildIryoInterviewSql } from "./iryo-interview-sql";

// web は ESM パッケージではないため、tsx 経由だと default にまとめて読み込まれる
type Module<T> = T & { default?: T };
const unwrap = <T>(module: Module<T>): T => module.default ?? module;

const {
  NATIONAL_COUNCIL,
  IRYO_TOPIC_ID,
  IRYO_FORUM,
  IRYO_INTERVIEW_NAME,
  IRYO_INTERVIEW_QUESTIONS,
  IRYO_INTERVIEW_THEMES,
  buildIryoInterviewContent,
} = unwrap(forum as Module<typeof forum>);

process.stdout.write(
  buildIryoInterviewSql({
    council: NATIONAL_COUNCIL,
    topicId: IRYO_TOPIC_ID,
    name: IRYO_INTERVIEW_NAME,
    summary: IRYO_FORUM.question,
    content: buildIryoInterviewContent(),
    themes: IRYO_INTERVIEW_THEMES,
    questions: IRYO_INTERVIEW_QUESTIONS,
  })
);
