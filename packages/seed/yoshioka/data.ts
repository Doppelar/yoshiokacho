import type { Database } from "@mirai-gikai/supabase";

export const source =
  "https://www.town.yoshioka.lg.jp/gikai/kaigi/pdf/2_gijinittei1_r8_3t%20%282%29.pdf";
export const schedule =
  "https://www.town.yoshioka.lg.jp/gikai/kaigi/pdf/1_kaikinittei_r8_3t.pdf";
export const sessionId = "08000000-0000-4000-8000-000000000003";
export const topics = [
  [
    55,
    "吉岡町選挙公報の発行に関する条例",
    "選挙公報の発行について",
    "町政・選挙",
  ],
  [
    44,
    "吉岡町印鑑登録及び証明に関する条例の一部を改正する条例",
    "印鑑登録・証明の条例改正",
    "町政・選挙",
  ],
  [
    56,
    "吉岡町保健センターの設置及び管理に関する条例の一部を改正する条例",
    "保健センターの条例改正",
    "健康・福祉",
  ],
  [
    45,
    "よしおか温泉リバートピア吉岡の設置及び管理に関する条例の一部を改正する条例",
    "リバートピア吉岡の条例改正",
    "施設・環境",
  ],
  [
    46,
    "吉岡町火入れに関する条例の一部を改正する条例",
    "火入れに関する条例改正",
    "施設・環境",
  ],
  [
    47,
    "吉岡町上下水道事業運営審議会設置条例",
    "上下水道事業運営審議会の設置について",
    "上下水道",
  ],
  [
    48,
    "令和８年度吉岡町一般会計補正予算（第４号）",
    "町の一般会計補正予算（第4号）",
    "予算・財政",
  ],
  [
    49,
    "令和８年度吉岡町学校給食事業特別会計補正予算（第２号）",
    "学校給食事業の補正予算（第2号）",
    "子育て・教育",
  ],
  [
    50,
    "令和８年度吉岡町国民健康保険事業特別会計補正予算（第１号）",
    "国民健康保険事業の補正予算（第1号）",
    "健康・福祉",
  ],
  [
    51,
    "令和８年度吉岡町介護保険事業特別会計補正予算（第１号）",
    "介護保険事業の補正予算（第1号）",
    "健康・福祉",
  ],
  [
    52,
    "令和８年度吉岡町後期高齢者医療事業特別会計補正予算（第１号）",
    "後期高齢者医療事業の補正予算（第1号）",
    "健康・福祉",
  ],
  [
    53,
    "令和８年度吉岡町水道事業会計補正予算（第１号）",
    "水道事業の補正予算（第1号）",
    "上下水道",
  ],
  [
    54,
    "令和８年度吉岡町下水道事業会計補正予算（第１号）",
    "下水道事業の補正予算（第1号）",
    "上下水道",
  ],
] as const;

export function buildYoshiokaRows() {
  return topics.map(([number, name, title, label]) => {
    const id = `08000000-0000-4000-8002-${String(number).padStart(12, "0")}`;
    const content = `## 議題について\n\n${name}（議案第${number}号）。吉岡町が公開する令和8年第3回定例会の9月1日議事日程に掲載されています。\n\n## 確認できている情報\n\n議事日程では「提案・質疑・付託」が予定されています。これは日程の記載であり、実施済みの審議経過や可決・否決を確認したものではありません。\n\n## 詳細未確認\n\n議案本文・予算内訳・改正理由は未確認です。金額、住民負担、サービス変更、施行日、議決結果をこのページから断定することはできません。\n\n## 出典\n\n- [吉岡町議会・9月1日議事日程](${source})\n- [会期日程](${schedule})\n- 確認日：2026年9月13日\n\n本サイトは吉岡町の公式サイトではありません。掲載内容は公式資料の掲載情報を整理したものです。`;
    const bill = {
      id,
      name,
      slug: `yoshioka-r8-3-${number}`,
      diet_session_id: sessionId,
      // Legacy schema requires HR/HC; HR is a storage placeholder, not a claim about the Diet.
      originating_house: "HR",
      status: "introduced",
      status_note: "9月1日議事日程に掲載（議決結果未確認）",
      publish_status: "published",
      // Legacy trigger synchronizes these columns, so both must stay unknown.
      published_at: null,
      submitted_date: null,
      is_featured: [55, 45, 49].includes(number),
      is_review_completed: false,
      shugiin_url: source,
      knowledge_source: content,
      use_knowledge_source_in_chat: true,
    } satisfies Database["public"]["Tables"]["bills"]["Insert"];
    const contents = (["normal", "hard"] as const).map(
      (difficulty, index) =>
        ({
          id: `08000000-0000-4000-800${3 + index}-${String(number).padStart(12, "0")}`,
          bill_id: id,
          difficulty_level: difficulty,
          title,
          summary: `令和8年第3回吉岡町議会定例会の議案第${number}号。議事日程への掲載を確認しています。具体的な変更内容・議決結果は未確認です。`,
          content,
        }) satisfies Database["public"]["Tables"]["bill_contents"]["Insert"]
    );
    return { bill, contents, label };
  });
}
