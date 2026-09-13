/**
 * 吉岡町議会「定例会 一般質問一覧」のテキストを bills / bill_contents に
 * 追加投入するスクリプト。既存データは削除しない(追加のみ)。
 *
 * 使い方:
 *   pnpm --filter @mirai-gikai/seed seed:general-questions -- \
 *     general-questions/data/2026-reiwa8-3rd-teireikai.txt 2026-09-04
 *
 * 第1引数: 入力テキストファイルのパス(吉岡町議会サイトからのコピペそのまま)
 * 第2引数: 定例会の開催日(YYYY-MM-DD)。bills.submitted_date に使用する。
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createAdminClient } from "../shared/helper";
import {
  parseGeneralQuestionsText,
  toGeneralQuestionBillDraft,
} from "./parse-general-questions";

const DIFFICULTY_LEVELS = ["normal", "hard"] as const;

async function main() {
  const [inputPathArg, submittedDateArg] = process.argv.slice(2);

  if (!inputPathArg || !submittedDateArg) {
    console.error(
      "使い方: tsx import-general-questions.ts <入力テキストファイル> <YYYY-MM-DD>"
    );
    process.exit(1);
  }

  const inputPath = resolve(process.cwd(), inputPathArg);
  const rawText = readFileSync(inputPath, "utf-8");
  const session = parseGeneralQuestionsText(rawText);

  console.log(
    `🏛️  ${session.sessionLabel}(${session.sessionDateLabel}) ${session.meetingLabel}`
  );
  console.log(`👥 検出した議員数: ${session.questions.length}`);

  const supabase = createAdminClient();
  let insertedCount = 0;

  for (const question of session.questions) {
    const draft = toGeneralQuestionBillDraft(session, question);

    const { data: bill, error: billError } = await supabase
      .from("bills")
      .insert({
        name: draft.name,
        // 町議会は衆参の区別が存在しないため、DB制約上の必須値として固定値を使う。
        // UI側の発議院ラベルは表示しない運用のため実害はない。
        originating_house: "HR",
        status: "enacted",
        status_note: "答弁済み",
        submitted_date: submittedDateArg,
        publish_status: "published",
      })
      .select("id")
      .single();

    if (billError || !bill) {
      throw new Error(
        `bills insert failed for ${draft.name}: ${billError?.message}`
      );
    }

    for (const difficultyLevel of DIFFICULTY_LEVELS) {
      const { error: contentError } = await supabase
        .from("bill_contents")
        .insert({
          bill_id: bill.id,
          difficulty_level: difficultyLevel,
          title: draft.contentTitle,
          summary: draft.contentSummary,
          content: draft.contentMarkdown,
        });

      if (contentError) {
        throw new Error(
          `bill_contents insert failed for ${draft.name} (${difficultyLevel}): ${contentError.message}`
        );
      }
    }

    console.log(`✅ ${draft.name}`);
    insertedCount += 1;
  }

  console.log(`\n🎉 ${insertedCount}件の一般質問を投入しました`);
}

main().catch((error) => {
  console.error("❌ Error importing general questions:", error);
  process.exit(1);
});
