/**
 * 「医療のこれからを考える会」の掲載内容と、AIインタビューの設定。
 * ページ（web）と、DB登録用SQLの生成（packages/seed/national）の両方から使う。
 */

/** 全国版のテーマを bills に登録するときの議会ID（bills.council） */
export const NATIONAL_COUNCIL = "national";

/** このテーマのID。bills.slug は `national-iryo` になる */
export const IRYO_TOPIC_ID = "iryo";

export const IRYO_FORUM = {
  title: "医療のこれからを考える会",
  subtitle: "制度・お金・地域・AI",
  question: "将来も、必要な医療を安心して受けられる社会にするには？",
  description:
    "医療費、病院経営、地域医療、医療従事者の将来、製薬業界、医療AI、診療報酬改定、高額療養費制度など、医療の未来について幅広く意見交換する場を作りました。",
  welcome: [
    "医療関係者はもちろん、医療政策・社会保障・AIなどに関心がある方も歓迎します。",
    "専門知識は必要ありません。ニュースや疑問の共有だけでも大歓迎です。",
  ],
  notes: [
    "個別の診断・治療・薬剤選択については扱いません。",
    "チームみらいサポーターが自主的に運営するコミュニティであり、党主催の公式コミュニティではありません。",
  ],
  closing: "医療のこれからについて、一緒に考えていければと思います。",
  lineUrl:
    "https://line.me/ti/g2/w1qsvhrYuBa02GnThee_DcGeTYDdsAV8g2H13A?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
} as const;

/** 関心のあるテーマの選択肢（AIインタビューの最初の質問のクイックリプライ） */
export const IRYO_THEMES = [
  "医療費・保険料",
  "病院経営",
  "地域医療",
  "医療従事者の将来",
  "製薬業界・薬の値段",
  "医療AI",
  "診療報酬改定",
  "高額療養費制度",
  "その他",
] as const;

export const IRYO_INTERVIEW_NAME = "医療のこれから ― 制度・お金・地域・AI";

/** AIインタビューの質問（上から順に聞く） */
export const IRYO_INTERVIEW_QUESTIONS: readonly {
  question: string;
  quickReplies: readonly string[] | null;
  followUpGuide: string;
}[] = [
  {
    question: "医療制度について、いちばん関心があるテーマはどれですか？",
    quickReplies: IRYO_THEMES,
    followUpGuide:
      "選んだテーマを確認する。複数ある場合はいちばん気になるものを一つ選んでもらう。その他の場合は、どんなテーマか一言で聞く。",
  },
  {
    question:
      "そのテーマに関心を持ったきっかけや、身近で感じていることを教えてください。",
    quickReplies: null,
    followUpGuide:
      "ご自身・家族・仕事・ニュースなど、具体的な場面を一つ聞く。病名や治療内容などの個人的な健康情報は聞かず、書かれても深追いしない。",
  },
  {
    question:
      "将来も必要な医療を安心して受けられるために、どうなってほしいですか？心配なことでも構いません。",
    quickReplies: null,
    followUpGuide: "期待と心配のどちらに近いかを確認し、理由を一つ聞く。",
  },
  {
    question: "国や政治、医療に関わる人たちに伝えたいことはありますか？",
    quickReplies: ["特にない"],
    followUpGuide: "要望・提案・疑問のどれに近いかを確認し、深追いしない。",
  },
];

/** AIインタビューの「テーマ」欄（インタビュー概要に表示） */
export const IRYO_INTERVIEW_THEMES = [
  "関心のあるテーマ",
  "身近で感じていること",
  "これからへの期待と心配",
];

/** AIに渡す、このテーマの説明（bill_contents.content） */
export function buildIryoInterviewContent(): string {
  return [
    `## ${IRYO_FORUM.title} ― ${IRYO_FORUM.subtitle}`,
    `「${IRYO_FORUM.question}」`,
    "",
    IRYO_FORUM.description,
    "",
    "## 話題の例",
    ...IRYO_THEMES.filter((theme) => theme !== "その他").map(
      (theme) => `- ${theme}`
    ),
    "",
    "## インタビューで気をつけること",
    "- これは法案ではなく、医療制度のどんなことに関心があるかを聞くインタビューです。賛成・反対を聞く必要はありません。",
    "- 個別の診断・治療・薬剤選択については扱いません。相談された場合は、医療機関に相談するよう丁寧に伝えてください。",
    "- 病名や治療内容など、個人の健康情報を詳しく聞かないでください。",
    "- 専門知識は不要です。ニュースや疑問の共有も歓迎してください。",
  ].join("\n");
}
