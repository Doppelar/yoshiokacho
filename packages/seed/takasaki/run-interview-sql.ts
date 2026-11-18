// 高崎市の議案のAIインタビュー登録SQLを標準出力に出す（DBには接続しない）。
// 使い方: pnpm --filter @mirai-gikai/seed takasaki:interview-sql > takasaki-interview.sql
import * as debateSummaries from "../../../web/src/features/takasaki-bills/shared/debate-summaries";
import * as sessions from "../../../web/src/features/takasaki-bills/shared/sessions";
import { buildTakasakiInterviewSql } from "./interview-sql";

// web は ESM パッケージではないため、tsx 経由だと default にまとめて読み込まれる
type Module<T> = T & { default?: T };
const unwrap = <T>(module: Module<T>): T => module.default ?? module;

const { TAKASAKI_ITEM_DEBATE_SUMMARIES } = unwrap(
  debateSummaries as Module<typeof debateSummaries>
);
const { TAKASAKI_SESSIONS } = unwrap(sessions as Module<typeof sessions>);

const items = TAKASAKI_SESSIONS.flatMap((session) =>
  session.items.flatMap((item) => {
    const summary = TAKASAKI_ITEM_DEBATE_SUMMARIES[item.id];
    return summary ? [{ ...item, summary }] : [];
  })
);

process.stdout.write(buildTakasakiInterviewSql(items));
