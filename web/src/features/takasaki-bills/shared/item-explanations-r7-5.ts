import type { TakasakiItemExplanation } from "./types";

/**
 * 令和7年第5回定例会（11〜12月）の議案の内容と議論の解説（本サイト作成）。
 * 高崎市議会の会議録（提案説明・委員長報告・討論・採決）と公式資料をもとにまとめたもので、
 * 発言そのものではない。
 */
export const TAKASAKI_R7_5_ITEM_EXPLANATIONS: Readonly<
  Record<string, TakasakiItemExplanation>
> = {
  "r7-5-hokoku-8": {
    plain: [
      "市の車が車庫の壁にぶつかった事故や、草刈り中に飛んだ石で車を傷つけた事故など、4件の事故の賠償について、市長が先に決めた処分を議会に報告する案件です。",
    ],
    detailed: [
      "地方自治法第180条第1項に基づき市長が専決処分した4件を、同条第2項により報告するものです。専決第12号は令和7年4月30日に箕郷町東明屋地内で障害福祉課職員の運転する普通乗用車が車庫の外壁に衝突した事故で8万2,456円、専決第13号は8月19日に綿貫町でエンジン草刈り機の作業中に小石を飛ばし駐車中の車両を破損した事故で27万6,716円です。",
      "専決第14号は7月30日に市が医療機関へ委託する胃がん内視鏡検診で受診者が胃粘膜を負傷した事故で2万1,194円、専決第15号は1月27日に中里見町地内で消防団榛名方面隊第6分団の消防ポンプ自動車がフェンスに接触した事故で10万4,236円です。報告のため、可決・否決を決める採決はありません。",
    ],
    discussion: {
      plain: [
        "11月28日の本会議で担当の課長が4件の事故と賠償額を説明しました。議員からの質疑の発言はなく、報告は終わりました。",
      ],
      detailed: [
        "障害福祉課長、文化財保護課長、健康課長、警防課長がそれぞれ専決第12号から第15号までを説明しました。議長が質疑を募りましたが、会議録に質疑の発言はなく、報告第8号を終了しています。報告案件のため採決は行われていません。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（報告第8号の説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194588&HATSUGENMODE=1",
      },
      {
        label: "11月28日本会議録（報告第8号の質疑終結）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194592&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-109": {
    plain: [
      "高崎市斎場（寺尾町）の管理を、令和8年4月から5年間、地元の2社でつくる「高崎市斎場共同企業体」に任せる議案です。",
    ],
    detailed: [
      "地方自治法第244条の2第6項に基づき、高崎市斎場（寺尾町1064番地57）の指定管理者を指定します。指定管理者は高崎市斎場共同企業体で、代表は株式会社環境保全センター（下大島町）、構成員は株式会社プリエッセ（本町）です。",
      "公募に応じた1者の申請書類とプレゼンテーションをもとに、指定管理者選定委員会の審査を経て選んだと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、市民経済委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日の本会議では質疑の発言はなく、市民経済常任委員会に付託されました。12月15日の委員長報告では、この議案についての個別の質疑は紹介されていません。委員会で質疑が一切なかったと断定するものではありません。委員会は起立採決で全会一致により原案可決すべきものと決定。12月15日の本会議では委員長報告に対する質疑と討論の発言はなく、委員長報告どおり原案可決とすることに異議がなかったため、他の32議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第109号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194595&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（市民経済常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195613&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-110": {
    plain: [
      "倉渕福祉センター、箕郷福祉会館エスポワール、箕郷福祉作業所、群馬福祉会館の4施設の管理を、令和8年4月から5年間、高崎市社会福祉協議会に任せる議案です。",
    ],
    detailed: [
      "地方自治法第244条の2第6項に基づき、高崎市倉渕福祉センター、高崎市箕郷福祉会館エスポワール、高崎市箕郷福祉作業所、高崎市群馬福祉会館の指定管理者として、社会福祉法人高崎市社会福祉協議会（末広町）を指定します。",
      "公募を行い、応じた1者との協議が調ったと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "委員会では、人件費が今後も上がりそうな中で、管理を任せる費用（指定管理料）にその分を見込んでいるのかが質問されました。市は、5年間の経済状況を見込んで計算しており、特別な事情があれば協議して取り決めを変えられると答えました。",
        "議案は全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の教育福祉常任委員長報告によると、今後も人件費の高騰が見込まれるが指定管理料はその分も加味して設定しているのかとの質疑に対し、指定期間5年間の経済状況等をあらかじめ鑑みて積算しており、特別な事情が生じたときなどは協議の上、協定の規定を変更できるとしているとの答弁がありました。",
        "11月28日の本会議では9議案一括の提案説明の後、質疑の発言はありませんでした。委員会は起立採決で全会一致により原案可決すべきものと決定し、12月15日の本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第110号ほか9議案の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194600&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "たかさき市議会だより第302号 10・11ページ（委員会審査）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36412.pdf",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-111": {
    plain: [
      "榛名福祉会館、榛名地域活動支援センター、榛名児童館の管理を、令和8年4月から5年間、株式会社榛名厚生会に任せる議案です。",
    ],
    detailed: [
      "高崎市榛名福祉会館、高崎市榛名地域活動支援センター、高崎市榛名児童館（いずれも下室田町900番地4）の指定管理者として、株式会社榛名厚生会（下室田町）を指定します。",
      "公募に応じた1者との協議が調ったと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、福祉部長が議案第110〜112・114・115・117〜120号の9議案を一括して提案説明し、質疑の発言はなく教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第111号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第110号ほか9議案の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194600&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-112": {
    plain: [
      "山名町の南八幡ふれあい館の管理を、令和8年4月から5年間、地元の「南八幡ふれあい推進会議」に引き続き任せる議案です。公募をせずに選びました。",
    ],
    detailed: [
      "高崎市南八幡ふれあい館（山名町155番地）の指定管理者として、南八幡ふれあい推進会議（会長 立見賢治）を指定します。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
      "現在の指定管理者が開設時から地域住民と円滑に連携し、利用者サービスの向上でも実績があるなど安定した管理能力があると認められるとして、公募によらない選定としたと説明されています。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。採決のときは、利害関係のある議員1人が議場を退席しました。議案は全会一致で可決されました。",
      ],
      detailed: [
        "11月28日は9議案一括で提案説明され、質疑の発言はなく教育福祉常任委員会に付託されました。12月15日の委員長報告は「慎重審査の上、起立採決をした結果、全会一致で原案可決すべきもの」とするもので、個別の質疑は紹介されていません。",
        "12月15日の本会議では地方自治法第117条の規定により高橋淳議員が退席（除斥）した上で単独で審議され、質疑・討論の発言はなく、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第110号ほか9議案の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194600&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第112号の除斥）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195620&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第112号の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195622&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第112号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195624&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-113": {
    plain: [
      "柴崎町のハーモニー高崎ケアセンターの管理を、令和8年4月から5年間、社会福祉法人榛桐会に任せる議案です。",
    ],
    detailed: [
      "ハーモニー高崎ケアセンター（柴崎町1746番地1）の指定管理者として、社会福祉法人榛桐会（大八木町、理事長 鈴木憲一）を指定します。",
      "公募に応じた1者との協議が調ったと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。審議と採決のときは、利害関係のある議員1人が議場を退席しました。議案は全会一致で可決されました。",
      ],
      detailed: [
        "11月28日・12月15日とも、地方自治法第117条の規定により大河原吉明議員が退席（除斥）した上で単独で審議されました。11月28日は質疑の発言がなく教育福祉常任委員会に付託。12月15日の委員長報告は全会一致で原案可決すべきものとするもので、個別の質疑は紹介されていません。",
        "12月15日の本会議では委員長報告への質疑・討論の発言はなく、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第113号の除斥）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194603&HATSUGENMODE=1",
      },
      {
        label: "11月28日本会議録（議案第113号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194605&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第113号の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195628&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第113号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195630&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-114": {
    plain: [
      "楽間町にある障害のある人の働く場「社会就労センターセルプ楽間」の管理を、令和8年4月から5年間、高崎市社会福祉協議会に任せる議案です。",
    ],
    detailed: [
      "高崎市社会就労センターセルプ楽間（楽間町9番地1）の指定管理者として、社会福祉法人高崎市社会福祉協議会（末広町、会長 新井正昭）を指定します。",
      "公募に応じた1者との協議が調ったと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、福祉部長が議案第110〜112・114・115・117〜120号の9議案を一括して提案説明し、質疑の発言はなく教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第114号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第110号ほか9議案の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194600&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-115": {
    plain: [
      "昭和町福祉作業所の管理を、令和8年4月から5年間、社会福祉法人高崎福祉会に任せる議案です。",
    ],
    detailed: [
      "高崎市昭和町福祉作業所（昭和町200番地2）の指定管理者として、社会福祉法人高崎福祉会（栗崎町、理事長 倉橋哲哉）を指定します。",
      "公募に応じた1者との協議が調ったと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、福祉部長が議案第110〜112・114・115・117〜120号の9議案を一括して提案説明し、質疑の発言はなく教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第115号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第110号ほか9議案の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194600&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-116": {
    plain: [
      "新町福祉作業所の管理を、令和8年4月から5年間、社会福祉法人しんまち元気村に任せる議案です。",
    ],
    detailed: [
      "高崎市新町福祉作業所（新町729番地3）の指定管理者として、社会福祉法人しんまち元気村（新町、理事長 八木秀明）を指定します。",
      "公募に応じた1者との協議が調ったと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。審議と採決のときは、利害関係のある議員1人が議場を退席しました。議案は全会一致で可決されました。",
      ],
      detailed: [
        "11月28日・12月15日とも、地方自治法第117条の規定により三島久美子議員が退席（除斥）した上で単独で審議されました。11月28日は質疑の発言がなく教育福祉常任委員会に付託。12月15日の委員長報告は全会一致で原案可決すべきものとするもので、個別の質疑は紹介されていません。",
        "12月15日の本会議では委員長報告への質疑・討論の発言はなく、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第116号の除斥）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194608&HATSUGENMODE=1",
      },
      {
        label: "11月28日本会議録（議案第116号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194610&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第116号の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195634&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第116号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195636&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-117": {
    plain: [
      "棟高町の群馬福祉作業所の管理を、令和8年4月から5年間、高崎市社会福祉協議会に任せる議案です。",
    ],
    detailed: [
      "高崎市群馬福祉作業所（棟高町975番地1）の指定管理者として、社会福祉法人高崎市社会福祉協議会（末広町、会長 新井正昭）を指定します。",
      "公募に応じた1者との協議が調ったと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、福祉部長が議案第110〜112・114・115・117〜120号の9議案を一括して提案説明し、質疑の発言はなく教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第117号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第110号ほか9議案の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194600&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-118": {
    plain: [
      "吉井町の吉井障害者自立支援センターの管理を、令和8年4月から5年間、高崎市社会福祉協議会に任せる議案です。",
    ],
    detailed: [
      "高崎市吉井障害者自立支援センター（吉井町吉井486番地1）の指定管理者として、社会福祉法人高崎市社会福祉協議会（末広町、会長 新井正昭）を指定します。",
      "公募に応じた1者との協議が調ったと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、福祉部長が議案第110〜112・114・115・117〜120号の9議案を一括して提案説明し、質疑の発言はなく教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第118号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第110号ほか9議案の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194600&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-119": {
    plain: [
      "三ツ寺町にある高齢者向け施設「群馬長寿センター」の管理を、令和8年4月から5年間、高崎市社会福祉協議会に任せる議案です。",
    ],
    detailed: [
      "高崎市群馬長寿センター（三ツ寺町1094番地2）の指定管理者として、社会福祉法人高崎市社会福祉協議会（末広町、会長 新井正昭）を指定します。",
      "公募に応じた1者との協議が調ったと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、福祉部長が議案第110〜112・114・115・117〜120号の9議案を一括して提案説明し、質疑の発言はなく教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第119号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第110号ほか9議案の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194600&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-120": {
    plain: [
      "新町長寿センターと新町鉄南長寿センターの2つの高齢者向け施設の管理を、令和8年4月から5年間、高崎市社会福祉協議会に任せる議案です。",
    ],
    detailed: [
      "高崎市新町長寿センターと高崎市新町鉄南長寿センター（位置はそれぞれ議案書に記載）の指定管理者として、社会福祉法人高崎市社会福祉協議会（末広町、会長 新井正昭）を指定します。",
      "公募に応じた1者との協議が調ったと説明されています。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、福祉部長が議案第110〜112・114・115・117〜120号の9議案を一括して提案説明し、質疑の発言はなく教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第120号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第110号ほか9議案の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194600&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-121": {
    plain: [
      "倉賀野・豊岡・井野・群馬の4つの児童館の管理を、令和8年4月から5年間、高崎市社会福祉協議会に任せる議案です。",
    ],
    detailed: [
      "高崎市倉賀野児童館、高崎市豊岡児童館、高崎市井野児童館、高崎市群馬児童館の4施設の指定管理者として、社会福祉法人高崎市社会福祉協議会（末広町、会長 新井正昭）を指定します。",
      "福祉部子育て支援担当部長は、公募に応じた1者との協議が調ったと説明しました。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日の本会議では質疑の発言はなく、教育福祉常任委員会に付託されました。12月15日の委員長報告では、この議案についての個別の質疑は紹介されていません。委員会で質疑が一切なかったと断定するものではありません。委員会は起立採決で全会一致により原案可決すべきものと決定し、12月15日の本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第121号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194614&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-122": {
    plain: [
      "夜や休日に急病の人を診る「夜間休日急病診療所」の管理を、令和8年4月から5年間、公益財団法人高崎・地域医療センターに引き続き任せる議案です。公募をせずに選びました。",
    ],
    detailed: [
      "高崎市夜間休日急病診療所（高松町5番地28）の指定管理者として、公益財団法人高崎・地域医療センター（代表理事 岡本克実）を指定します。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
      "保健医療部長は、夜間休日の応急診療という特殊性から業務への対応能力と継続への責任能力が不可欠であり、現指定管理者は市の健診業務を受託し、高崎市医師会と綿密な連携体制を維持しているとして、指定手続条例第6条第1項第3号により公募によらない選定としたと説明しました。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。利害関係のある議長ともう1人の議員が退席し、副議長が議事を進めました。議案は全会一致で可決されました。",
      ],
      detailed: [
        "11月28日・12月15日とも、議長の根岸赴夫議員が除斥対象として副議長と交代して退席し、地方自治法第117条の規定により丸山和久議員も退席した上で、副議長の進行で審議されました。11月28日は質疑の発言がなく教育福祉常任委員会に付託。",
        "12月15日の委員長報告は全会一致で原案可決すべきものとするもので、個別の質疑は紹介されていません。本会議では委員長報告への質疑・討論の発言はなく、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第122号の除斥）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194617&HATSUGENMODE=1",
      },
      {
        label: "11月28日本会議録（議案第122号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194619&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第122号の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195641&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第122号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195643&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-123": {
    plain: [
      "休日に歯の急病の人を診る「休日応急歯科診療所」の管理を、令和8年4月から5年間、公益財団法人高崎市歯科医療センターに引き続き任せる議案です。公募をせずに選びました。",
    ],
    detailed: [
      "高崎市休日応急歯科診療所（高松町5番地28）の指定管理者として、公益財団法人高崎市歯科医療センター（理事長 谷内晴夫）を指定します。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
      "保健医療部長は、休日等の歯科急病に対応する特殊性があり、現指定管理者は住民の歯科健診・歯科保健指導を実施し、高崎市歯科医師会と綿密な連携体制を維持しているとして、指定手続条例第6条第1項第3号により公募によらない選定としたと説明しました。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。審議と採決のときは、利害関係のある議員1人が議場を退席しました。議案は全会一致で可決されました。",
      ],
      detailed: [
        "11月28日・12月15日とも、地方自治法第117条の規定により松本賢一議員が退席（除斥）した上で単独で審議されました。11月28日は質疑の発言がなく教育福祉常任委員会に付託。12月15日の委員長報告は全会一致で原案可決すべきものとするもので、個別の質疑は紹介されていません。",
        "12月15日の本会議では委員長報告への質疑・討論の発言はなく、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第123号の除斥）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194622&HATSUGENMODE=1",
      },
      {
        label: "11月28日本会議録（議案第123号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194624&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第123号の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195647&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第123号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195649&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-124": {
    plain: [
      "問屋町のサンライフ高崎の管理を、令和8年4月から5年間、株式会社スポーツプロテクトに任せる議案です。公募に2者が応じました。",
    ],
    detailed: [
      "サンライフ高崎（問屋町四丁目8番地8）の指定管理者として、株式会社スポーツプロテクト（下里見町、代表取締役 赤尾真澄）を指定します。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
      "公募に応じた2者の申請書類とプレゼンテーションをもとに、指定管理者選定委員会の審査を経て候補者を選んだと説明されています。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、市民経済委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、商工観光部長が議案第124〜126号を一括して提案説明し、質疑の発言はなく市民経済常任委員会に付託されました。12月15日の委員長報告では議案第124号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第124〜126号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194628&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（市民経済常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195613&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-125": {
    plain: [
      "倉渕町水沼の農園付き宿泊施設「クラインガルテン」の管理を、令和8年4月から5年間、地元の相間川温泉株式会社に任せる議案です。公募をせずに選びました。",
    ],
    detailed: [
      "クラインガルテン（倉渕町水沼27番地）の指定管理者として、相間川温泉株式会社（代表取締役 関正）を指定します。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
      "都市部と農村部の交流拠点として整備され、地元に密着した事業展開による地域活性化と継続した運営が必要であるとして、指定手続条例第6条第1項第3号により公募によらない選定としたと説明されています。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、市民経済委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、商工観光部長が議案第124〜126号を一括して提案説明し、質疑の発言はなく市民経済常任委員会に付託されました。12月15日の委員長報告では議案第125号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第124〜126号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194628&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（市民経済常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195613&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-126": {
    plain: [
      "榛名湖温泉ゆうすげ元湯、ゆうすげコテージ、榛名湖ヴィレッジの管理を、令和8年4月から5年間、株式会社榛名湖温泉ゆうすげに任せる議案です。公募をせずに選びました。",
    ],
    detailed: [
      "榛名湖温泉ゆうすげ元湯・榛名湖温泉ゆうすげコテージ（榛名湖町846番地3）と榛名湖ヴィレッジ（榛名湖町845番地）の指定管理者として、株式会社榛名湖温泉ゆうすげ（代表取締役 清水敏博）を指定します。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
      "地域特性を生かして憩いと雇用の場を提供する施設で、観光振興の牽引役として地域と一体となった継続的な管理運営体制が必要であるとして、公募によらない選定としたと説明されています。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、市民経済委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、商工観光部長が議案第124〜126号を一括して提案説明し、質疑の発言はなく市民経済常任委員会に付託されました。12月15日の委員長報告では議案第126号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第124〜126号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194628&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（市民経済常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195613&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-127": {
    plain: [
      "吉井町の農産物直売所「吉井物産センターふれあいの里」の管理を、令和8年4月から5年間、地元の農事組合法人に任せる議案です。公募をせずに選びました。",
    ],
    detailed: [
      "吉井物産センターふれあいの里（吉井町池1944番地4）の指定管理者として、農事組合法人吉井物産センターふれあいの里（代表理事 堀口一夫）を指定します。指定期間は令和8年4月1日から令和13年3月31日までの5年間です。",
      "農政部長は、農産物直売所としての設置目的や地域特性から、農業者と消費者の交流促進と地域の生産者の視点を重視した継続的な管理運営が必要として、指定手続条例第6条第1項第3号により公募によらない選定としたと説明しました。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、市民経済委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日の本会議では質疑の発言はなく、市民経済常任委員会に付託されました。12月15日の委員長報告では、この議案についての個別の質疑は紹介されていません。委員会で質疑が一切なかったと断定するものではありません。委員会は起立採決で全会一致により原案可決すべきものと決定し、12月15日の本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第127号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194632&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（市民経済常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195613&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-128": {
    plain: [
      "市議会議員選挙と市長選挙で、候補者のポスターやビラを作る費用を市が負担する上限額を引き上げる議案です。国の選挙の上限額が上がったことに合わせます。",
    ],
    detailed: [
      "公職選挙法施行令の改正で国政選挙の公費負担の限度額が改正されたことに準じ、選挙運動用自動車の使用等の公営に関する条例を改正します。第9条で選挙運動用ポスターの作成費、第13条・第14条で選挙運動用ビラの作成費の限度額を引き上げます。",
      "附則で施行日を公布の日とし、経過措置を定めます。選挙管理委員会事務局長が提案説明しました。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、総務委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日の本会議では質疑の発言はなく、総務常任委員会に付託されました。12月15日の委員長報告では、この議案についての個別の質疑は紹介されていません。委員会で質疑が一切なかったと断定するものではありません。委員会は起立採決で全会一致により原案可決すべきものと決定し、12月15日の本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第128号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194636&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（総務常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195611&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-129": {
    plain: [
      "市の職員が出張するときの旅費の決まりを、国の制度の大きな見直しに合わせて全面的に作り直す議案です。",
      "特急に乗れる距離の制限をなくし、宿泊費は上限付きの実費払いに変え、日当をやめて宿泊手当を新しく設けます。",
    ],
    detailed: [
      "国家公務員等の旅費に関する法律が昭和25年の制定以来抜本的に改正されたことに準じ、高崎市職員等の旅費に関する条例を全部改正します。主な内容は、特急料金（片道100キロメートル以上）・急行料金（片道50キロメートル以上）の距離制限の廃止、国内宿泊費の定額支給から都道府県ごとの上限付き実費支給への変更、日当の廃止と宿泊に伴う諸雑費に充てる宿泊手当の新設の3点です。",
      "附則第1条で施行日を令和8年4月1日とし、第2条で経過措置、第3条で規則への委任、第4条から第12条で関係条例の改正を定めます。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、総務委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日の本会議では質疑の発言はなく、総務常任委員会に付託されました。12月15日の委員長報告では、この議案についての個別の質疑は紹介されていません。委員会で質疑が一切なかったと断定するものではありません。委員会は起立採決で全会一致により原案可決すべきものと決定し、12月15日の本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第129号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194640&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（総務常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195611&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-130": {
    plain: [
      "児童相談所が子どもを一時的に保護する施設で働く「児童指導員」になれる人の資格に、「こども家庭ソーシャルワーカー」と精神保健福祉士を加える議案です。国の基準の改正に合わせます。",
    ],
    detailed: [
      "国の省令で定める一時保護施設の設備・運営基準の改正に伴い、高崎市一時保護施設の設備及び運営に関する基準を定める条例を改正します。一時保護施設に配置する児童指導員の資格要件に、こども家庭ソーシャルワーカーの資格を有する者と精神保健福祉士の資格を有する者を追加します。施行日は令和8年3月1日です。",
      "こども家庭ソーシャルワーカーは、子どもと家庭の福祉に関する専門的な相談・支援を行うため令和6年4月に創設された資格だと説明されています。この議案は子育て支援・定住人口増加対策特別委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "委員会では、こども家庭ソーシャルワーカーとはどんな資格か、今何人いるのかが質問されました。市は、こども家庭庁が所管する新しい認定資格で、資格を持つ職員は今1人いると答え、職員の資格取得を検討すると説明しました。",
        "議案は全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の子育て支援・定住人口増加対策特別委員長報告によると、こども家庭ソーシャルワーカーの概要と役割について、こども家庭庁が管轄する新たな認定資格で、虐待や貧困などへの早期対応、関係機関との連絡調整、制度利用の支援などを通じて子どもが健やかに成長できる環境を整える役割が期待されているとの答弁がありました。",
        "現在の配置と人材育成については、資格を有する職員が1名在籍しており、他の児童相談所の動向も踏まえて職員の資格取得を検討したいとの答弁でした。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第130〜134号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194644&HATSUGENMODE=1",
      },
      {
        label:
          "12月15日本会議録（子育て支援・定住人口増加対策特別委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195615&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "たかさき市議会だより第302号 2・3ページ（定例会の概要）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36416.pdf",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-131": {
    plain: [
      "小規模保育や家庭的保育などで、子どもが利用を始めるときの健康診断について、市が行う乳幼児健診の結果がわかる場合は省略できるようにする議案です。国の基準の改正に合わせます。",
    ],
    detailed: [
      "国の家庭的保育事業等の設備・運営基準の改正に伴い、高崎市家庭的保育事業等の設備及び運営に関する基準を定める条例を改正します。入所時等の健康診断について、母子保健法による1歳6か月児健診などの結果を把握できる場合は、その全部または一部を行わないことができるようにします。この部分は公布の日から施行します。",
    ],
    discussion: {
      plain: [
        "委員会では改正の内容が質問され、市は、市町村が行う健康診査がその健康診断に当たると認められるときに、全部または一部を省略できるようにするものだと答えました。議案は全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の教育福祉常任委員長報告によると、条例改正の内容についての質疑に対し、市町村が実施する健康診査の内容が家庭的保育事業や保育所で実施する健康診断に相当すると認められるときは、保育所等における健康診断の全部または一部を省略できることとするものとの答弁がありました。",
        "11月28日の本会議では5議案一括の提案説明の後、質疑の発言はありませんでした。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第130〜134号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194644&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "たかさき市議会だより第302号 10・11ページ（委員会審査）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36412.pdf",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-132": {
    plain: [
      "保育所や児童養護施設などの児童福祉施設について、国の基準の改正に合わせて市の決まりを変える議案です。",
      "施設長などの職員になれる資格に「こども家庭ソーシャルワーカー」などを加え、入所時の健康診断は乳幼児健診の結果がわかれば省略できるようにします。",
    ],
    detailed: [
      "国の児童福祉施設の設備・運営基準の改正に伴い、高崎市児童福祉施設の設備及び運営に関する基準を定める条例を改正します。児童福祉施設の施設長や児童自立支援専門員等の職員の資格要件に、こども家庭ソーシャルワーカーの資格を有する者と精神保健福祉士の資格を有する者を追加します（令和8年3月1日施行）。",
      "入所時等の健康診断について、母子保健法による1歳6か月児健診などの結果を把握できる場合は、その全部または一部を行わないことができるようにします。この部分は公布の日から施行します。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、児童相談所長が議案第130〜134号の5議案を一括して提案説明し、質疑の発言はなく、議案第132号は教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第132号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第130〜134号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194644&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-133": {
    plain: [
      "障害のある子どもが通う児童発達支援などの事業で、利用を始めるときの健康診断について、乳幼児健診の結果がわかる場合は省略できるようにする議案です。国の基準の改正に合わせます。",
    ],
    detailed: [
      "国の指定通所支援の事業等の人員・設備・運営基準の改正に伴い、高崎市指定通所支援の事業等の人員、設備及び運営に関する基準を定める条例を改正します。入所時等の健康診断について、母子保健法による1歳6か月児健診などの結果を把握できる場合は、その全部または一部を行わないことができるようにします。この部分は公布の日から施行します。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、児童相談所長が議案第130〜134号の5議案を一括して提案説明し、質疑の発言はなく、議案第133号は教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第133号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第130〜134号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194644&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-134": {
    plain: [
      "障害のある子どもが入所する施設で、入所時の健康診断について、乳幼児健診の結果がわかる場合は省略できるようにする議案です。国の基準の改正に合わせます。",
    ],
    detailed: [
      "国の指定障害児入所施設等の人員・設備・運営基準の改正に伴い、高崎市指定障害児入所施設等の人員、設備及び運営に関する基準を定める条例を改正します。入所時等の健康診断について、母子保健法による1歳6か月児健診などの結果を把握できる場合は、その全部または一部を行わないことができるようにします。この部分は公布の日から施行します。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、児童相談所長が議案第130〜134号の5議案を一括して提案説明し、質疑の発言はなく、議案第134号は教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第134号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して異議なく、全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第130〜134号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194644&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-135": {
    plain: [
      "建築確認などの手数料を払うタイミングについて特別な扱いができるようにする議案です。審査で手数料が変わる場合や、国が進める建築確認のオンライン化に対応するためです。",
    ],
    detailed: [
      "建築基準法施行令の一部改正と手数料の徴収時期の特例を定めるため、高崎市建築基準法関係手数料条例を改正します。第3条にただし書を加えて徴収時期の特例を設け、建築基準法と関係法令の見直しに伴う引用条項のずれ（項ずれ）に対応します。",
      "審査の結果で手数料の額が変わる場合や建築確認のオンライン化に対応し、申請者の利便性向上と事務の効率化を図ると説明されています。公布の日から施行します。",
    ],
    discussion: {
      plain: [
        "委員会では、市長が「特別の理由がある」と認めるのはどんな場合かが質問されました。市は、審査で床面積が増減して手数料が変わる場合や、将来のオンライン申請に対応する場合を想定していると答えました。",
        "議案は全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の建設水道常任委員長報告によると、ただし書の「市長が特別の理由があると認めるとき」の想定について質疑があり、建築確認申請等の手数料は申請床面積に応じて定めており、審査の結果床面積が増減し手数料の額に変更が生じる場合や、将来的なオンライン申請の導入に対応する場合を想定しているとの答弁がありました。",
        "11月28日の本会議では4議案一括の提案説明の後、質疑の発言はありませんでした。委員会は起立採決で全会一致により原案可決すべきものと決定し、12月15日の本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第135〜138号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194649&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（建設水道常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195614&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "たかさき市議会だより第302号 2・3ページ（定例会の概要）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36416.pdf",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-136": {
    plain: [
      "長く使える良い住宅（長期優良住宅）の認定を申請するときの手数料について、オンライン化に対応して、払うタイミングに特別な扱いができるようにする議案です。",
    ],
    detailed: [
      "手数料の徴収時期の特例を定めるため、高崎市長期優良住宅の普及の促進に関する法律関係手数料条例を改正します。議案第135号・第138号と同様、建築確認等のオンライン化に対応するための改正で、議案第137号と改正内容が共通しています。公布の日から施行します。",
    ],
    discussion: {
      plain: [
        "委員会では、これまでの認定件数と普及の取り組みが質問されました。市は、長期優良住宅の認定は昨年度末までに7,250件あり、今後は関係部局と連携して周知を広げたいと答えました。議案は全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の建設水道常任委員長報告によると、議案第136・137号について、各法律に基づく認定件数と環境政策としての普及促進の取組を問う質疑があり、法律の施行から昨年度末までの認定件数は長期優良住宅が7,250件、都市の低炭素化の促進に関する法律に基づく建築物が117件で、法律の趣旨や優遇措置は国のホームページ、申請手続等は市のホームページで案内しているが、今後関係部局と連携して広く周知を図りたいとの答弁がありました。",
        "11月28日の本会議では4議案一括の提案説明の後、質疑の発言はありませんでした。委員会は起立採決で全会一致により原案可決すべきものと決定し、12月15日の本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第135〜138号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194649&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（建設水道常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195614&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "たかさき市議会だより第302号 10・11ページ（委員会審査）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36412.pdf",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-137": {
    plain: [
      "二酸化炭素の排出が少ない建物（低炭素建築物）の認定を申請するときの手数料について、オンライン化に対応して、払うタイミングに特別な扱いができるようにする議案です。",
    ],
    detailed: [
      "手数料の徴収時期の特例を定めるため、高崎市都市の低炭素化の促進に関する法律関係手数料条例を改正します。議案第136号と改正内容が共通しており、オンライン化に対応するための改正です。公布の日から施行します。",
    ],
    discussion: {
      plain: [
        "委員会では、これまでの認定件数と普及の取り組みが質問されました。市は、低炭素建築物の認定は昨年度末までに117件あり、今後は関係部局と連携して周知を広げたいと答えました。議案は全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の建設水道常任委員長報告によると、議案第136・137号について、各法律に基づく認定件数と環境政策としての普及促進の取組を問う質疑があり、法律の施行から昨年度末までの認定件数は長期優良住宅が7,250件、都市の低炭素化の促進に関する法律に基づく建築物が117件で、法律の趣旨や優遇措置は国のホームページ、申請手続等は市のホームページで案内しているが、今後関係部局と連携して広く周知を図りたいとの答弁がありました。",
        "11月28日の本会議では4議案一括の提案説明の後、質疑の発言はありませんでした。委員会は起立採決で全会一致により原案可決すべきものと決定し、12月15日の本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第135〜138号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194649&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（建設水道常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195614&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "たかさき市議会だより第302号 10・11ページ（委員会審査）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36412.pdf",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-138": {
    plain: [
      "建物の省エネ性能に関する手続きの手数料について、審査で額が変わる場合やオンライン化に対応して、払うタイミングに特別な扱いができるようにする議案です。",
    ],
    detailed: [
      "手数料の徴収時期の特例を定めるため、高崎市建築物のエネルギー消費性能の向上等に関する法律関係手数料条例を改正します。議案第135号と同様、手数料の額の変更とオンライン化に対応するための改正です。公布の日から施行します。",
    ],
    discussion: {
      plain: [
        "本会議では質疑の発言はなく、建設水道委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、建設部長が議案第135〜138号を一括して提案説明し、質疑の発言はなく建設水道常任委員会に付託されました。12月15日の委員長報告では議案第138号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、12月15日の本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第135〜138号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194649&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（建設水道常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195614&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-139": {
    plain: [
      "群馬県内の市町村が一緒に事務を行う「群馬県市町村総合事務組合」の決まり（規約）を変えることについて、関係する市町村と話し合って決めることに議会の同意を求める議案です。",
    ],
    detailed: [
      "地方自治法第286条第1項・第290条に基づく規約変更の協議です。組合を組織する太田市外三町広域清掃組合の名称が太田市外三町清掃斎場組合に変わること、沼田市・渋川市・みどり市ほか23町村が共同処理する災害弔慰金の支給等に関する事務を令和8年3月31日で取りやめることに伴い、別表第1・別表第2を改正します。",
      "施行期日は令和8年4月1日です。",
    ],
    discussion: {
      plain: [
        "11月28日の本会議では質疑・討論の発言はなく、委員会での審査を省略して、その日のうちに全会一致で可決されました。",
      ],
      detailed: [
        "総務部長が議案第139・140号を一括して提案説明しました。質疑の発言はなく、会議規則第36条第3項により委員会付託を省略することに異議はありませんでした。討論の発言もなく、2議案を一括して採決し、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第139・140号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194653&HATSUGENMODE=1",
      },
      {
        label: "11月28日本会議録（議案第139・140号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194656&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-140": {
    plain: [
      "群馬県市町村総合事務組合が一部の市町村の災害弔慰金の事務をやめるのに合わせ、そのために積み立てていた基金を関係する市町村に返す方法を決める議案です。",
    ],
    detailed: [
      "地方自治法第289条・第290条に基づく財産処分の協議です。令和8年3月31日現在の群馬県市町村総合事務組合自然災害救助基金を、災害弔慰金の支給等の事務の共同処理団体である沼田市・渋川市・みどり市ほか23町村に、各団体の人口割合に応じた額で還付します。",
      "還付後に剰余金が生じた場合は、組合の一般会計口座に収納します。",
    ],
    discussion: {
      plain: [
        "11月28日の本会議では質疑・討論の発言はなく、委員会での審査を省略して、その日のうちに全会一致で可決されました。",
      ],
      detailed: [
        "総務部長が議案第139・140号を一括して提案説明しました。質疑の発言はなく、会議規則第36条第3項により委員会付託を省略することに異議はありませんでした。討論の発言もなく、2議案を一括して採決し、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第139・140号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194653&HATSUGENMODE=1",
      },
      {
        label: "11月28日本会議録（議案第139・140号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194656&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-141": {
    plain: [
      "今年度の市の一般会計に約23億7千万円を追加する補正予算です。障害のある子どもの通所サービス費の増加、長寿センターなどの空調の更新、物価高による給食材料費の増額、道路・橋の工事の前倒しなどが入っています。",
      "あわせて、職員の異動などによる人件費の見直しや、翌年度に工事が続く事業の繰越しなども決めます。",
    ],
    detailed: [
      "歳入歳出それぞれ23億6,815万8千円を追加し、予算総額を1,708億2,241万2千円とします。繰越明許費の追加9件、債務負担行為の追加13件・変更1件、地方債の追加1件・変更6件も含みます。一般会計・特別会計を合わせた人件費の補正総額は5億3,828万2千円の減額です。",
      "主な歳出は、障害児通所給付費・障害児相談支援給付費の増額、総合福祉センターや六郷・中川長寿センター、箕郷保健センター、倉渕中学校などの空調設備、産後ケアの利用増への対応、物価高騰を受けた小・中学校等の給食材料費の増額、ふるさと納税の返礼品等の経費、国の補正予算による道路橋りょう事業の前倒し、群馬中央第二土地区画整理事業、スマートIC産業団地の連絡橋整備のための地質調査などです。市議会だよりは、障害児通所給付費4億6,994万円、産後ケア委託料3,000万円、群馬中央第二土地区画整理事業1億549万円、地質調査委託料1,100万円などを紹介しています（万円未満四捨五入）。",
      "債務負担行為には、榛名支所の空調設備・照明LED化改修工事、令和8年度当初に使う防災頭巾購入費、小栗記念館（仮称）建設補助金などが含まれます。歳入は普通交付税の確定、国・県支出金、寄附金、財政調整基金繰入金、市債などで調整しています。4常任委員会と都市集客施設整備特別委員会に分けて付託されました。",
    ],
    discussion: {
      plain: [
        "委員会では、くらぶちこども天文台の改修、長寿センターの空調工事の時期、産後ケアの費用が増えた理由、小栗記念館（仮称）への補助、水門の遠隔監視システム、スマートICの連絡橋の地質調査などが質問されました。",
        "市は、産後ケアは周知と受け入れ施設が広がり昨年度の3割増の利用を見込むこと、小栗記念館は2027年の大河ドラマ放映決定を受け地元団体が建てる記念館の建設費の一部を支援することなどを説明しました。議案は全会一致で可決されました。",
      ],
      detailed: [
        "総務委員会では、くらぶちこども天文台の改修について、出入口付近の床材が腐食し破損の危険があるため床板の張替えと風雨・積雪を防ぐひさしの設置等を行うと答弁。教育福祉委員会では、六郷・中川長寿センターの主に大広間の空調更新を2月に入札し、六郷は5月下旬、中川は4月下旬に完了予定とし、産後ケア委託料は周知や受入れ体制の拡充で昨年度の3割増の利用が見込まれるためと答弁しました。",
        "市民経済委員会では、小栗記念館（仮称）建設補助金について、東善寺で独自に検討されていた記念館を、2027年のNHK大河ドラマ放映決定を機に一般社団法人となった小栗顕彰会が建設・管理運営し、市が建設費用の一部を支援するもので、早期着工のため今年度中に債務負担行為を設定すると答弁しました。",
        "建設水道委員会では、遠隔水門等監視システム改修は中央監視センターの制御盤回線の不具合に対しアナログから光ケーブルへ変更するもので、対象は浜尻堰や貝沢堰など18か所、橋りょう長寿命化工事は環状大橋で、あと4年ほどで完了見込みと答弁。都市集客施設整備特別委員会では、連絡橋下部工付近の地盤情報が不足していることが判明したため地質調査を行うこと、パーク型商業施設の優先交渉権者である株式会社BETTER DAYSは人件費・建設費の高騰を考慮した事業計画を立てており現時点でスケジュールに大きな影響はないことなどを答弁しました。",
        "11月28日の本会議では質疑の発言はありませんでした。各委員会は起立採決で全会一致により原案可決すべきものと決定し、12月15日の本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第141〜146号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194659&HATSUGENMODE=1",
      },
      {
        label: "11月28日本会議録（議案第141号の委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194661&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（総務常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195611&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（市民経済常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195613&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（建設水道常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195614&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（都市集客施設整備特別委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195616&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "たかさき市議会だより第302号 2・3ページ（定例会の概要）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36416.pdf",
      },
      {
        label: "たかさき市議会だより第302号 10・11ページ（委員会審査）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36412.pdf",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-142": {
    plain: [
      "国民健康保険の特別会計から約2,900万円を減らす補正予算です。主に職員の人件費の見直しによるものです。",
    ],
    detailed: [
      "国民健康保険事業特別会計の歳入歳出それぞれ2,923万円を減額し、予算総額を336億5,025万5千円とします。歳出は一般管理費の人件費の補正と、徴税費の郵便料の実績見込みによる増額です。歳入は人件費等の補正に伴い一般会計繰入金を減額します。",
    ],
    discussion: {
      plain: [
        "11月28日の本会議では質疑の発言はなく、委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、財務部長が議案第141〜146号を一括して提案説明し、質疑の発言はなく議案第142号は市民経済常任委員会に付託されました。12月15日の委員長報告では議案第142号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第141〜146号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194659&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（市民経済常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195613&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-143": {
    plain: [
      "介護保険の特別会計から約2,600万円を減らす補正予算です。人件費の見直しのほか、介護事業所の情報を管理するシステムの改修費を入れています。",
    ],
    detailed: [
      "介護保険特別会計の歳入歳出それぞれ2,563万円を減額し、予算総額を396億3,120万円とします。歳出は一般管理費の人件費の補正と介護事業所台帳管理システムの改修経費、徴収費の郵便料の増額、地域支援事業の総務費の人件費の補正です。歳入は国庫補助金から基金繰入金までを、それぞれの負担割合により増減します。",
    ],
    discussion: {
      plain: [
        "11月28日の本会議では質疑の発言はなく、委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、財務部長が議案第141〜146号を一括して提案説明し、質疑の発言はなく議案第143号は教育福祉常任委員会に付託されました。12月15日の委員長報告では議案第143号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第141〜146号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194659&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（教育福祉常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195612&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-144": {
    plain: [
      "牛伏ドリームセンターの特別会計に1,300万円を追加し、非常用発電機などを修理・交換する補正予算です。",
    ],
    detailed: [
      "牛伏ドリームセンター事業特別会計の歳入歳出それぞれ1,300万円を追加し、予算総額を1億4,120万4千円とします。歳出は施設管理費で非常用発電機等の修繕に必要な経費、歳入は繰越金です。総務常任委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "委員会では、この費用の中身と経緯が質問されました。市は、停電時に防火設備を動かす非常用発電機で、7月の消防署の立入検査で故障が見つかり、指導を受けて交換することになったと答えました。議案は全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の総務常任委員長報告によると、施設運営経費に計上された需用費の内容と経緯について質疑があり、電力が途絶えた際に一定時間防火設備を稼働させるための非常用発電機を設置するもので、7月の消防署による立入検査で故障が判明し、指導を受けて交換することになったとの答弁がありました。",
        "11月28日の本会議では質疑の発言はありませんでした。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第141〜146号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194659&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（総務常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195611&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-145": {
    plain: [
      "後期高齢者医療の特別会計に約650万円を追加する補正予算です。人間ドックを受ける人が増えたことなどに対応します。",
    ],
    detailed: [
      "後期高齢者医療特別会計の歳入歳出それぞれ646万円を追加し、予算総額を63億8,750万4千円とします。歳出は徴収費の郵便料の実績見込みによる増額と、人間ドックの受診者数の増加に伴う疾病予防費の増額です。歳入は一般会計繰入金で差引きを調整し、雑入を実績見込みに合わせて増額します。",
    ],
    discussion: {
      plain: [
        "11月28日の本会議では質疑の発言はなく、委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、財務部長が議案第141〜146号を一括して提案説明し、質疑の発言はなく議案第145号は市民経済常任委員会に付託されました。12月15日の委員長報告では議案第145号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第141〜146号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194659&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（市民経済常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195613&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-146": {
    plain: [
      "農村地域の下水処理（農業集落排水）の特別会計に約550万円を追加し、電気代や設備の修理、管路の改修に充てる補正予算です。",
    ],
    detailed: [
      "農業集落排水事業特別会計の歳入歳出それぞれ546万5千円を追加し、予算総額を9,642万7千円とします。歳出は農業集落排水管理費で、電気料のほか設備の修繕と管路施設改修に係る経費を増額します。歳入は一般会計繰入金で差引きを調整し、繰越金を精算します。",
    ],
    discussion: {
      plain: [
        "11月28日の本会議では質疑の発言はなく、委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日、財務部長が議案第141〜146号を一括して提案説明し、質疑の発言はなく議案第146号は市民経済常任委員会に付託されました。12月15日の委員長報告では議案第146号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では委員長報告への質疑・討論の発言はなく、他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第141〜146号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194659&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（市民経済常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195613&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-147": {
    plain: [
      "水道事業の予算で、職員の人件費や簡易水道の費用を見直し、借入金の利率の決まりを変える補正予算です。",
    ],
    detailed: [
      "収益的支出は、水道事業費用の人件費を313万6千円、簡易水道事業費用の配水及び給水費を事業の見直しにより141万5千円増額し、合計455万1千円を増額します。資本的支出は建設改良費の人件費を38万7千円増額し、不足額と補塡財源を改めます。",
      "あわせて予算第5条に定めた起債の利率を変更し、予算第7条の職員給与費を補正に合わせて変更します。",
    ],
    discussion: {
      plain: [
        "11月28日の本会議では質疑の発言はなく、建設水道委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日に水道局長が提案説明し、質疑の発言はなく建設水道常任委員会に付託されました。12月15日の委員長報告では議案第147号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第147号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194664&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（建設水道常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195614&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-148": {
    plain: [
      "公共下水道事業の予算で、職員の人件費を減らす一方、令和8年度から行う下水道管の総点検に使う機材などの購入費を加える補正予算です。",
    ],
    detailed: [
      "収益的支出は、営業費用の人件費を5,054万8千円減額し、下水道管渠の事故予防のため令和8年度から実施する総点検に必要な備品等の購入で管渠費を100万円増額し、合計4,954万8千円を減額します。",
      "資本的支出は、建設改良費の人件費を1,199万9千円減額し、総点検に必要な機材等の購入で固定資産購入費を862万円増額します。あわせて予算第6条の起債の利率と第8条の職員給与費を変更します。",
    ],
    discussion: {
      plain: [
        "11月28日の本会議では質疑の発言はなく、建設水道委員会で審査されました。委員会の報告でもこの議案についての質疑は紹介されず、全会一致で可決されました。",
      ],
      detailed: [
        "11月28日に下水道局長が提案説明し、質疑の発言はなく建設水道常任委員会に付託されました。12月15日の委員長報告では議案第148号についての個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により原案可決すべきものと決定し、本会議では他の議案と一括して全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "11月28日本会議録（議案第148号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194668&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（建設水道常任委員会の委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195614&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（33議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195618&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-149": {
    plain: [
      "国の人事院勧告にあわせて、市の職員の給料を今年4月にさかのぼって平均約3%引き上げ、12月のボーナスも増やす議案です。",
      "令和8年4月からは、駐車場を使って通勤する職員に月5,000円までの手当を新しく出します。",
    ],
    detailed: [
      "人事院勧告に基づく国家公務員の給与改定に準じ、一般職の職員の給与に関する条例等を改正します。第1条で、医師の初任給調整手当と宿日直手当の上限を引き上げ、本年12月の期末手当・勤勉手当の支給率をそれぞれ100分の2.5引き上げ、給料表を本年4月に遡って平均3.3％引き上げます（国の俸給表に準拠）。",
      "第2条で令和8年4月以降、駐車場の利用に対する通勤手当を月5,000円を上限に新設し、期末・勤勉手当の支給率を平準化します。第3条で市立学校職員の幼稚園教育職給料表、第4条・第5条で特定任期付職員の期末手当と給料表、第6条で企業職員の給与の基準を改正します。",
    ],
    discussion: {
      plain: [
        "林恒徳議員が、市長の就任時と比べて職員の給料がどう変わったかを質問しました。市は、大学卒の初任給が平成23年度の約17万7千円から今年度は24万3,600円になったことなどを答えました。",
        "委員会での審査を省略し、討論もなく全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の質疑で林恒徳議員は、平成23年度・平成30年度・令和7年度の一般行政職の平均年齢と地域手当を含む平均給料月額、大卒初任給、部長級の平均給料月額を質しました。総務部長は、平成23年度は平均43.4歳・33万8,199円、大卒初任給17万7,366円、部長級47万8,793円、平成30年度は42歳・32万5,088円、19万1,542円、52万566円、本年度は43.9歳・34万4,658円、24万3,600円、57万1,935円と答弁しました。",
        "林議員は、初任給が15年で7万円近く伸びた一方、大都市圏では30万円を超える企業も増え、新規採用者の確保が難しくなっているとの認識を述べました。12月15日に追加提出され、委員会付託を省略することに異議はありませんでした。討論の発言はなく、議案第149〜155号の7議案を一括して採決し、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "12月15日本会議録（議案第149・150号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195652&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（林恒徳議員の質疑）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195660&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（総務部長の答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195661&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第149〜155号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195671&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-150": {
    plain: [
      "市長・副市長・教育長や市議会議員など特別職の12月のボーナス（期末手当）を、一般の職員と同じように引き上げる議案です。",
    ],
    detailed: [
      "特別職の職員の期末手当の支給に関する条例と教育委員会教育長の給与等に関する条例を改正します。第1条・第3条で、議員を含む特別職の職員と教育長の本年12月の期末手当の支給率を一般職と同様に100分の5引き上げ、第2条・第4条で令和8年4月以降の支給率を平準化します。",
    ],
    discussion: {
      plain: [
        "林恒徳議員が、特別職や議員の報酬の移り変わりと、ほかの中核市と比べた水準を質問しました。市は、給料・報酬の月額は平成15年12月から変えておらず、議員報酬は中核市62市の平均を下回っていると答えました。",
        "委員会での審査を省略し、討論もなく全会一致で可決されました。",
      ],
      detailed: [
        "総務部長は、特別職の給料月額は市長110万円、副市長88万円、教育長76万円で平成15年12月1日以降改定しておらず、期末手当の支給率は平成23年度3.9か月、平成30年度4.4か月、本年度4.6か月と答弁。中核市62市の平均は市長約108万円、副市長約89万円、教育長約76万円で、いずれも平均的な水準と推測されるとしました。",
        "議員報酬月額は議長63万5,000円、副議長60万5,000円、議員57万円で同じく平成15年12月以降改定がなく、中核市62市の平均（議長約71万円、副議長約65万円、議員約61万円）を下回っていると答弁。改定は市長が10人の委員による特別職報酬等審議会に諮問し、答申を踏まえて条例を提出する手続きだと説明しました。林議員は審議会開催も含めた検討を求めました。12月15日に追加提出され、委員会付託を省略することに異議はありませんでした。討論の発言はなく、議案第149〜155号の7議案を一括して採決し、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "12月15日本会議録（議案第149・150号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195652&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（林恒徳議員の質疑）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195660&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（総務部長の答弁（特別職））",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195663&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（総務部長の答弁（議員報酬））",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195665&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第149〜155号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195671&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-151": {
    plain: [
      "職員の給料の引き上げ（議案第149・150号）に合わせて、今年度の一般会計に約7億3千万円を追加する補正予算です。新町文化ホールの空調改修やはまゆう山荘のポンプ修理の費用も入っています。",
    ],
    detailed: [
      "歳入歳出それぞれ7億2,528万5千円を追加し、予算総額を1,715億4,769万7千円とします。一般会計・特別会計を合わせた給与改定に伴う人件費の補正総額は7億1,979万1千円の増額です（報酬1億2,298万4千円、給料2億9,515万9千円、職員手当2億6,021万6千円、共済費4,143万2千円）。",
      "人件費のほか、新町文化ホールの空調設備改修、はまゆう山荘のポンプ修繕、国民健康保険・介護保険特別会計への繰出金を計上します。繰越明許費は新町文化ホール空調設備設計委託と榛名湖ヴィレッジ受変電設備設計委託の2件を追加し、歳入は財政調整基金繰入金と繰越金です。",
    ],
    discussion: {
      plain: [
        "12月15日に追加で出された議案です。質疑・討論の発言はなく、委員会での審査を省略して、全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の本会議では、議案第149〜155号を一括して議題とし、林恒徳議員の質疑は議案第149・150号に対するもので、本議案についての質疑の発言はありませんでした。12月15日に追加提出され、委員会付託を省略することに異議はありませんでした。討論の発言はなく、議案第149〜155号の7議案を一括して採決し、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "12月15日本会議録（議案第151〜153号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195654&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第149〜155号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195671&HATSUGENMODE=1",
      },
      {
        label: "たかさき市議会だより第302号 2・3ページ（定例会の概要）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36416.pdf",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-152": {
    plain: [
      "職員の給料の引き上げに合わせて、国民健康保険の特別会計に約970万円を追加する補正予算です。",
    ],
    detailed: [
      "国民健康保険事業特別会計の歳入歳出それぞれ974万5千円を追加し、予算総額を336億6,000万円とします。歳出は一般管理費の給与改定に伴う人件費の補正、歳入は一般会計繰入金です。",
    ],
    discussion: {
      plain: [
        "12月15日に追加で出された議案です。質疑・討論の発言はなく、委員会での審査を省略して、全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の本会議では、議案第149〜155号を一括して議題とし、林恒徳議員の質疑は議案第149・150号に対するもので、本議案についての質疑の発言はありませんでした。12月15日に追加提出され、委員会付託を省略することに異議はありませんでした。討論の発言はなく、議案第149〜155号の7議案を一括して採決し、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "12月15日本会議録（議案第151〜153号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195654&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第149〜155号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195671&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-153": {
    plain: [
      "職員の給料の引き上げに合わせて、介護保険の特別会計に約1,500万円を追加する補正予算です。",
    ],
    detailed: [
      "介護保険特別会計の歳入歳出それぞれ1,502万7千円を追加し、予算総額を396億4,622万7千円とします。歳出は一般管理費と地域支援事業の総務費の給与改定に伴う人件費の補正で、介護サービス等諸費などは財源変更です。歳入は国庫補助金から基金繰入金までを負担割合により計上します。",
    ],
    discussion: {
      plain: [
        "12月15日に追加で出された議案です。質疑・討論の発言はなく、委員会での審査を省略して、全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の本会議では、議案第149〜155号を一括して議題とし、林恒徳議員の質疑は議案第149・150号に対するもので、本議案についての質疑の発言はありませんでした。12月15日に追加提出され、委員会付託を省略することに異議はありませんでした。討論の発言はなく、議案第149〜155号の7議案を一括して採決し、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "12月15日本会議録（議案第151〜153号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195654&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第149〜155号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195671&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-154": {
    plain: [
      "人事院勧告による職員の給料の引き上げに合わせて、水道事業の人件費を増やす補正予算です。",
    ],
    detailed: [
      "収益的支出の水道事業費用（営業費用）の人件費を2,255万9千円、資本的支出の建設改良費の人件費を380万7千円増額し、資本的収支の不足額と補塡財源の充当額を改めます。予算第7条の職員給与費も変更します。",
    ],
    discussion: {
      plain: [
        "12月15日に追加で出された議案です。質疑・討論の発言はなく、委員会での審査を省略して、全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の本会議では、議案第149〜155号を一括して議題とし、林恒徳議員の質疑は議案第149・150号に対するもので、本議案についての質疑の発言はありませんでした。12月15日に追加提出され、委員会付託を省略することに異議はありませんでした。討論の発言はなく、議案第149〜155号の7議案を一括して採決し、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "12月15日本会議録（議案第154号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195656&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第149〜155号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195671&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-gian-155": {
    plain: [
      "人事院勧告による職員の給料の引き上げに合わせて、公共下水道事業の人件費を増やす補正予算です。",
    ],
    detailed: [
      "収益的支出の下水道事業費用（営業費用）の人件費を2,084万3千円、資本的支出の建設改良費の人件費を487万円増額し、資本的収支の不足額と補塡財源の充当額を改めます。予算第8条の職員給与費も変更します。",
    ],
    discussion: {
      plain: [
        "12月15日に追加で出された議案です。質疑・討論の発言はなく、委員会での審査を省略して、全会一致で可決されました。",
      ],
      detailed: [
        "12月15日の本会議では、議案第149〜155号を一括して議題とし、林恒徳議員の質疑は議案第149・150号に対するもので、本議案についての質疑の発言はありませんでした。12月15日に追加提出され、委員会付託を省略することに異議はありませんでした。討論の発言はなく、議案第149〜155号の7議案を一括して採決し、異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "12月15日本会議録（議案第155号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195658&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議案第149〜155号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195671&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-giinteishutsu-4": {
    plain: [
      "市議会の事務を担う「議会事務局」について定めた条例を一部改正する、議員が提出した議案です。",
      "提出者の説明が省略されたため、どこをどう変えるのかは会議録には記されていません。",
    ],
    detailed: [
      "高崎市議会事務局設置条例の一部改正です。12月15日の会議録には件名のみが記載され、条文や改正理由、提出者の氏名は掲載されていません。提出者の説明も省略されたため、改正の具体的な内容は本サイトでは確認できていません。",
    ],
    discussion: {
      plain: [
        "12月15日の本会議では、提出者の説明と委員会での審査を省略しました。質疑・討論の発言はなく、異議なく可決されました。",
      ],
      detailed: [
        "議員提出第4号議案と第5号議案を一括して議題とし、会議規則第36条第3項により提出者の説明と委員会付託を省略することに異議はありませんでした。質疑・討論の発言はなく、2議案を一括して採決し、異議がなかったため原案のとおり可決されました。市の審議結果一覧でも簡易採決（出席議員全員の異議がないことを確認して可決）とされています。",
      ],
    },
    sources: [
      {
        label: "12月15日本会議録（議員提出第4・5号議案の議題）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195673&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議員提出第4・5号議案の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195676&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-giinteishutsu-5": {
    plain: [
      "市議会の広報委員会の議員が、議会の情報発信や市民の声の聞き方を調べるため、広島県の福山市と呉市へ視察に行くことを決める議案です。",
    ],
    detailed: [
      "会議規則第166条に基づく議員派遣です。令和7年度広報委員会行政視察として、議会の広報広聴に関する調査のため、広報委員会に所属する議員を令和8年1月22日から23日まで広島県福山市・呉市へ派遣します。",
      "樋口哲郎、谷川留美子、中村さと美、中島輝男、林恒徳、青柳隆、渡辺幹治、丸山覚、大竹隆一、松本賢一、三島久美子の11議員が令和7年12月15日に提出しました。",
    ],
    discussion: {
      plain: [
        "12月15日の本会議では、提出者の説明と委員会での審査を省略しました。質疑・討論の発言はなく、異議なく可決されました。",
      ],
      detailed: [
        "議員提出第4号議案と第5号議案を一括して議題とし、会議規則第36条第3項により提出者の説明と委員会付託を省略することに異議はありませんでした。質疑・討論の発言はなく、2議案を一括して採決し、異議がなかったため原案のとおり可決されました。市の審議結果一覧でも簡易採決（出席議員全員の異議がないことを確認して可決）とされています。",
      ],
    },
    submittedBy: [
      "樋口哲郎（新風会）",
      "谷川留美子（超党派の会）",
      "中村さと美（公明党）",
      "中島輝男（市民クラブ）",
      "林恒徳（市民クラブ）",
      "青柳隆（新風会）",
      "渡辺幹治（新風会）",
      "丸山覚（公明党）",
      "大竹隆一（新風会）",
      "松本賢一（新風会）",
      "三島久美子（たかさき未来）",
    ],
    sources: [
      {
        label: "12月15日本会議録（議員提出第5号議案の本文・提出者）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195673&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（議員提出第4・5号議案の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195676&HATSUGENMODE=1",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-ikensho-1": {
    plain: [
      "国に対し、利根川上流の洪水対策を強めるための調査で、建設が中止された倉渕ダムを検討の対象にすることなどを求める意見書です。",
      "樋口哲郎議員ら7人が提出し、賛成多数で可決されました。",
    ],
    detailed: [
      "国土交通省関東地方整備局が令和7年3月に変更した利根川水系利根川・江戸川河川整備計画に「治水機能増強検討調査」が盛り込まれ、ダムの改造・新設が必要な場合は過去に中止となったダム等も選択肢から排除しないとされたことを踏まえた意見書です。令和元年東日本台風では烏川が氾濫危険水位を超え、市内63か所の避難所に3,300人を超える市民が避難したことも挙げています。",
      "求める事項は、(1)用地買収や付替道路工事が完了している倉渕ダムを検討対象とすること、(2)本市を含む烏川下流域の治水安全度向上にも役立つ調査とすること、(3)農業用水の取水など水利用に配慮すること、(4)再生可能エネルギーの有効活用で地域の活性化に資することの4点です。",
      "地方自治法第99条に基づき、国土交通大臣と国土交通省関東地方整備局長あてに、議長・根岸赴夫の名義で提出します。可決は国が倉渕ダムの事業再開を決めたことを意味するものではありません。",
    ],
    discussion: {
      plain: [
        "本会議では提出者の説明と委員会での審査を省略し、質疑・討論の発言はありませんでした。起立による採決で賛成多数となり、可決されました。",
        "市の賛否一覧では、新風会と公明党が賛成し、市民クラブ、たかさき未来、超党派の会、日本共産党は反対（起立せず）でした。",
      ],
      detailed: [
        "12月15日の本会議では、会議規則第36条第3項により提出者の説明と委員会付託を省略することに異議はなく、質疑・討論の発言はありませんでした。そのため、反対した会派の理由は会議録からは分かりません。起立採決の結果、起立多数で原案のとおり可決されました。",
        "市の賛否一覧表では、新風会（後閑賢二議員は欠席、根岸赴夫議長は採決に加わらず）と公明党5人が賛成。市民クラブ6人、たかさき未来3人、超党派の会3人、日本共産党2人が起立しませんでした（賛成22人、反対14人）。",
      ],
    },
    submittedBy: [
      "樋口哲郎（新風会）",
      "中村さと美（公明党）",
      "青柳隆（新風会）",
      "渡辺幹治（新風会）",
      "丸山覚（公明党）",
      "大竹隆一（新風会）",
      "松本賢一（新風会）",
    ],
    outgoingName: "高崎市議会議長 根岸赴夫",
    sources: [
      {
        label: "12月15日本会議録（意見書案第1号の本文・提出者）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195678&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（意見書案第1号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195681&HATSUGENMODE=1",
      },
      {
        label: "可決した意見書の本文（令和7年第5回定例会）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/35668.pdf",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
  "r7-5-seigan-6": {
    plain: [
      "市の小・中学校の給食費をすべて無料にすることなどを求める請願です。",
      "教育福祉委員会で審査されましたが、結論は出ず、議会が閉じている間も審査を続ける「継続審査」になりました。",
    ],
    detailed: [
      "請願者は学校給食の無償化をめざす高崎の会代表の戸川節子さん、紹介議員は伊藤敦博・金子和幸の両議員で、令和7年11月20日に受理されました。憲法26条の義務教育無償の精神や、県内35市町村中25市町村が完全無償化、10市町村が一部無償化していることなどを理由に挙げています。",
      "求める事項は、(1)小・中学校の全児童・生徒の学校給食の完全無償化、(2)県・国への小・中学校給食無償化の働きかけ、(3)地産地消で安心・安全な有機食材を使った給食の実施の3点です。",
    ],
    discussion: {
      plain: [
        "11月28日に教育福祉委員会へ付託されました。12月15日、委員会から「慎重に審査すべき」として、閉会中も審査を続けたいとの申し出があり、異議なく認められました。採択・不採択の採決は行われていません。",
      ],
      detailed: [
        "12月15日の本会議で、教育福祉常任委員長から会議規則第110条に基づき、理由を「慎重に審査すべきものと認める」とする閉会中の継続審査の申し出がありました。異議なく継続審査に付することが決まり、本定例会では採択・不採択の結論は出ていません。委員会での審査の内容は本会議録には報告されていません。",
      ],
    },
    submittedBy: ["学校給食の無償化をめざす高崎の会 代表 戸川節子"],
    introductionMembers: ["伊藤敦博", "金子和幸"],
    sources: [
      {
        label: "11月28日本会議録（請願第6号の付託・請願文書表）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2124&HUID=194671&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（請願第6号の継続審査の申し出）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195683&HATSUGENMODE=1",
      },
      {
        label: "12月15日本会議録（継続審査の決定）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1032&FINO=2135&HUID=195685&HATSUGENMODE=1",
      },
      {
        label: "たかさき市議会だより第302号 2・3ページ（定例会の概要）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36416.pdf",
      },
      {
        label: "令和7年第5回定例会 議案等審議結果一覧（賛否一覧表）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
      },
    ],
  },
};
