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
  /** テーマ詳細の前置き */
  themeIntro:
    "「将来も、必要な医療を安心して受けられる社会にするには？」を入り口に、医療の仕組みや持続可能性について、立場や専門知識を問わず学び、話し合うコミュニティです。医療に関わる仕事をしている方も、生活者として関心のある方も歓迎します。",
  /** テーマ詳細の結び */
  themeOutro:
    "さまざまな立場の経験や疑問を持ち寄り、医療の将来を一緒に考える場を目指します。",
  notes: [
    "個別の病気の診断、治療方法、薬の選択・使用に関する相談や助言は扱いません。不妊治療についても、費用や制度を対象とします。",
    "チームみらいサポーターが自主的に運営するコミュニティであり、党主催の公式コミュニティではありません。",
  ],
  closing: "医療のこれからについて、一緒に考えていければと思います。",
  lineUrl:
    "https://line.me/ti/g2/w1qsvhrYuBa02GnThee_DcGeTYDdsAV8g2H13A?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
} as const;

/**
 * 扱うテーマ。label は AIインタビューの選択肢（クイックリプライ）、
 * detail はページに載せる説明。
 */
export const IRYO_THEME_DETAILS: readonly { label: string; detail: string }[] =
  [
    {
      label: "病院経営・医療費・医療経済",
      detail: "病院経営、医療費の動向、国の医療関連予算、医療経済",
    },
    {
      label: "医療従事者・人材不足",
      detail: "医療従事者数の推移と将来、人材不足や地域偏在",
    },
    {
      label: "地域の医療提供体制",
      detail: "各地域の病院数や医療提供体制、地域ごとの医療資源",
    },
    {
      label: "医療AI・業務効率化",
      detail: "医療現場でのAI利活用、メディカルAI、業務効率化",
    },
    {
      label: "製薬業界・薬剤費・医薬品供給",
      detail: "製薬業界の動向、薬剤費、医薬品の供給体制",
    },
    {
      label: "医療機器の価格・保険償還",
      detail: "医療機器の価格や保険償還の仕組み",
    },
    {
      label: "ドラッグストア・OTC医薬品",
      detail: "ドラッグストアのOTC医薬品に関する制度・費用・役割",
    },
    {
      label: "調剤薬局・調剤報酬",
      detail: "調剤薬局の役割や経営、調剤報酬",
    },
    {
      label: "高額療養費・医療保険",
      detail: "高額療養費制度、公的医療保険と民間医療保険の役割",
    },
    {
      label: "不妊治療・出産の費用と支援",
      detail: "不妊治療や出産にかかる費用と支援制度",
    },
    {
      label: "診療報酬・介護報酬改定",
      detail: "診療報酬改定、介護報酬改定",
    },
    {
      label: "生涯の医療費と家計の備え",
      detail: "生涯にかかる医療費と、家計としての備え方",
    },
    {
      label: "国会の議論・チームみらいの取り組み",
      detail:
        "医療に関する国会の議論と、チームみらいの公開情報に基づく取り組み",
    },
  ];

/** 関心のあるテーマの選択肢（AIインタビューの最初の質問のクイックリプライ） */
export const IRYO_THEMES = [
  ...IRYO_THEME_DETAILS.map((theme) => theme.label),
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
    question:
      "このコミュニティで扱うテーマのうち、いちばん関心があるのはどれですか？",
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
    IRYO_FORUM.themeIntro,
    "",
    "## 扱うテーマ（選択肢の名前：内容）",
    ...IRYO_THEME_DETAILS.map(({ label, detail }) => `- ${label}：${detail}`),
    "",
    IRYO_FORUM.themeOutro,
    "",
    "## インタビューで気をつけること",
    "- これは法案ではなく、上のテーマのどこに関心があるかを聞くインタビューです。賛成・反対を聞く必要はありません。",
    "- 個別の病気の診断、治療方法、薬の選択・使用に関する相談や助言はしません。相談された場合は、医療機関に相談するよう丁寧に伝えてください。不妊治療についても、費用や制度だけを扱います。",
    "- 病名や治療内容など、個人の健康情報を詳しく聞かないでください。",
    "- 専門知識は不要です。ニュースや疑問の共有も歓迎してください。",
  ].join("\n");
}
