/**
 * 吉岡町議会サイトからコピー&ペーストした「定例会 一般質問一覧」テキストを
 * パースする純粋関数群。DBアクセスは行わない（テスト容易性のため分離）。
 *
 * 想定入力フォーマット(吉岡町議会ホームページの一般質問一覧ページをそのまま
 * コピー&ペーストしたもの):
 *
 *   令和8年第3回定例会　令和8年9月4日（金）　　本会議 一般質問
 *
 *   大井　俊一　議員
 *   1.吉岡町に生息する外来種問題と在来種問題についての対応は
 *   (1)日本国内における外来種問題の現状をどのように捉えているのか
 *   (2)吉岡町内に生息する外来種と問題となる在来種の生息状況と問題の現状は
 *   2.コロナ後の吉岡町における産業振興策について
 *   (1)コロナ後の吉岡町における経済活動状況をどのように判断しているか	映像を再生します
 *
 *   飯島　衛　議員
 *   ...
 *
 * - 議員ブロックは空行で区切られる
 * - 各ブロックの1行目は「氏名(全角スペース区切り)　議員」
 * - 大項目は「N.見出し」、小項目は「(N)本文」
 * - 各行末尾にタブ区切りで「映像を再生します」等のリンク文言が付くことがあるため除去する
 */

export interface ParsedQuestionTheme {
  /** 大項目番号(1始まり) */
  order: number;
  /** 大項目の見出し */
  title: string;
  /** 小項目本文の配列 */
  items: string[];
}

export interface ParsedMemberQuestion {
  /** 元テキストの表記そのまま(例: "大井　俊一") */
  memberNameRaw: string;
  /** 空白を除去した氏名(例: "大井俊一") */
  memberName: string;
  themes: ParsedQuestionTheme[];
}

export interface ParsedGeneralQuestionsSession {
  /** 例: "令和8年第3回定例会" */
  sessionLabel: string;
  /** 例: "令和8年9月4日" */
  sessionDateLabel: string;
  /** 例: "本会議 一般質問" */
  meetingLabel: string;
  questions: ParsedMemberQuestion[];
}

const FULL_WIDTH_SPACE = "　";

/** 行末のタブ区切りリンク文言("映像を再生します"等)を取り除く */
function stripTrailingLinkLabel(line: string): string {
  const tabIndex = line.indexOf("\t");
  return (tabIndex === -1 ? line : line.slice(0, tabIndex)).trim();
}

function normalizeSpaces(value: string): string {
  return value.replace(new RegExp(FULL_WIDTH_SPACE, "g"), " ").trim();
}

/** ブロックの1行目が「氏名 議員」形式かどうか判定し、氏名部分を返す */
function matchMemberNameLine(line: string): string | null {
  const match = normalizeSpaces(stripTrailingLinkLabel(line)).match(
    /^(.+?)\s+議員$/
  );
  return match ? match[1] : null;
}

const THEME_LINE_PATTERN = /^(\d+)[.．]\s*(.+)$/;
const ITEM_LINE_PATTERN = /^\((\d+)\)\s*(.*)$/;

function parseMemberBlock(block: string): ParsedMemberQuestion | null {
  const lines = block
    .split("\n")
    .map((line) => stripTrailingLinkLabel(line))
    .filter((line) => line.length > 0);

  if (lines.length === 0) return null;

  const memberNameRaw = matchMemberNameLine(lines[0]);
  if (memberNameRaw === null) return null;

  const themes: ParsedQuestionTheme[] = [];
  for (const line of lines.slice(1)) {
    const themeMatch = line.match(THEME_LINE_PATTERN);
    if (themeMatch) {
      themes.push({
        order: Number(themeMatch[1]),
        title: themeMatch[2].trim(),
        items: [],
      });
      continue;
    }

    const itemMatch = line.match(ITEM_LINE_PATTERN);
    if (itemMatch && themes.length > 0) {
      themes[themes.length - 1].items.push(itemMatch[2].trim());
      continue;
    }
    // どちらにも一致しない行は直前の項目本文の続き(改行のみの折り返し)として結合する
    if (themes.length > 0) {
      const lastTheme = themes[themes.length - 1];
      if (lastTheme.items.length > 0) {
        lastTheme.items[lastTheme.items.length - 1] += line.trim();
      } else {
        lastTheme.title += line.trim();
      }
    }
  }

  return {
    memberNameRaw: normalizeSpaces(memberNameRaw),
    memberName: normalizeSpaces(memberNameRaw).replace(/\s+/g, ""),
    themes,
  };
}

const HEADER_LINE_PATTERN =
  /^(令和\d+年第\d+回(?:臨時会|定例会))[\s　]+(令和\d+年\d+月\d+日(?:[（(].*?[）)])?)[\s　]+(.+)$/;

/**
 * 吉岡町議会サイトからコピーした「定例会 一般質問一覧」テキストをパースする。
 */
export function parseGeneralQuestionsText(
  raw: string
): ParsedGeneralQuestionsSession {
  const blocks = raw
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n+/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0);

  if (blocks.length === 0) {
    throw new Error("入力テキストが空です");
  }

  const headerLine = normalizeSpaces(blocks[0].split("\n")[0]);
  const headerMatch = headerLine.match(HEADER_LINE_PATTERN);

  const memberBlocks = headerMatch ? blocks.slice(1) : blocks;

  const questions = memberBlocks
    .map(parseMemberBlock)
    .filter((q): q is ParsedMemberQuestion => q !== null);

  if (questions.length === 0) {
    throw new Error(
      "議員の質問ブロックを1件も検出できませんでした。入力フォーマットを確認してください。"
    );
  }

  return {
    sessionLabel: headerMatch?.[1] ?? "",
    sessionDateLabel: headerMatch?.[2] ?? "",
    meetingLabel: headerMatch?.[3] ?? "",
    questions,
  };
}

export interface GeneralQuestionBillDraft {
  /** bills.name */
  name: string;
  /** bill_contents.title */
  contentTitle: string;
  /** bill_contents.summary */
  contentSummary: string;
  /** bill_contents.content (Markdown) */
  contentMarkdown: string;
}

const SUMMARY_MAX_LENGTH = 100;

function truncate(text: string, maxLength: number): string {
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;
}

/**
 * パース結果の1議員分を、bills / bill_contents に挿入する下書きデータに変換する。
 */
export function toGeneralQuestionBillDraft(
  session: ParsedGeneralQuestionsSession,
  question: ParsedMemberQuestion
): GeneralQuestionBillDraft {
  const name = `${question.memberName}議員の一般質問(${session.sessionLabel})`;

  const summary = truncate(
    question.themes.map((theme) => theme.title).join("、"),
    SUMMARY_MAX_LENGTH
  );

  const markdownSections = question.themes.map((theme) => {
    const itemLines = theme.items
      .map((item, index) => `- (${index + 1}) ${item}`)
      .join("\n");
    return `### ${theme.order}. ${theme.title}\n\n${itemLines}`;
  });

  const contentMarkdown = [
    `${session.sessionLabel} ${session.sessionDateLabel} ${session.meetingLabel}`,
    ...markdownSections,
  ].join("\n\n");

  return {
    name,
    contentTitle: name,
    contentSummary: summary,
    contentMarkdown,
  };
}
