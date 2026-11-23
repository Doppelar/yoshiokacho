import type { TakasakiItemExplanation } from "./types";

/**
 * 令和7年第1回定例会（2〜3月）の議案の内容と議論の解説（本サイト作成）。
 * 高崎市議会の会議録（提案説明・委員長報告・討論・採決）と公式資料をもとにまとめたもので、
 * 発言そのものではない。
 */
export const TAKASAKI_R7_1_ITEM_EXPLANATIONS: Readonly<
  Record<string, TakasakiItemExplanation>
> = {
  "r7-1-hokoku-1": {
    plain: [
      "市の職員が運転する車が、寺尾町で敷地のコンクリートブロックにぶつかった事故について、市長が先に決めた賠償を議会に報告する案件です。",
    ],
    detailed: [
      "地方自治法第180条第1項に基づき、議会の議決で市長に任されている範囲で行った専決処分（専決第1号）の報告です。令和6年11月12日午前9時10分頃、寺尾町地内で資産税課職員の運転する軽乗用車が、敷地に設置されたコンクリートブロックに接触した事故で、損害賠償の額は5万5,000円です。",
      "同条第2項に基づく事後の報告で、可決・否決を決める採決はありません。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で資産税課長が事故と賠償額を説明しました。議員からの質疑の発言はなく、報告のため採決はありません。",
      ],
      detailed: [
        "2月20日の本会議で資産税課長が専決第1号の内容を説明。議長が質疑を募りましたが会議録に質疑の発言はなく、報告第1号を終了しています。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（報告第1号の説明・資産税課長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187878&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（報告第1号の質疑・終了）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187879&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-hokoku-2": {
    plain: [
      "下室田町の林道で、走っていた自転車が道路の壊れた所に車輪を落とし、自転車と服が傷んだ事故について、市長が先に決めた賠償を議会に報告する案件です。",
    ],
    detailed: [
      "地方自治法第180条第1項に基づく専決処分（専決第2号）の報告です。令和6年10月20日正午頃、下室田町地内の林道で、走行中の自転車が路面の破損箇所に車輪を落とし、車両と衣服を破損した事故で、損害賠償の額は5万5,953円です。",
      "同条第2項に基づく事後の報告で、可決・否決を決める採決はありません。会期最終日の3月18日に報告されました。",
    ],
    discussion: {
      plain: [
        "3月18日の本会議で榛名支所の産業観光課長が説明しました。議員からの質疑の発言はなく、報告のため採決はありません。",
      ],
      detailed: [
        "3月18日の本会議で榛名支所産業観光課長が専決第2号の事故と賠償額を説明。議長が質疑を募りましたが会議録に質疑の発言はなく、報告第2号を終了しています。",
      ],
    },
    sources: [
      {
        label: "3月18日本会議録（報告第2号の説明・榛名支所産業観光課長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190029&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（報告第2号の質疑・終了）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190030&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-shonin-1": {
    plain: [
      "物価高で家計への影響が大きい住民税非課税の世帯に給付金を配るため、議会を開く時間がなかったので市長が先に決めた補正予算を、議会が認める（承認する）案件です。",
      "1世帯3万円に、子ども1人あたり2万円を上乗せする内容で、約12億円を予算に追加しました。",
    ],
    detailed: [
      "地方自治法第179条第1項に基づき令和7年1月10日付で専決処分した令和6年度一般会計補正予算（第7号）について、同条第3項により報告し、承認を求めるものです。歳入歳出それぞれ12億4,949万1,000円を追加し、予算総額を1,792億236万円としました。",
      "歳出は3款1項1目社会福祉総務費で、住民税非課税世帯に1世帯当たり3万円、子育て世帯への加算として、世帯で扶養されている18歳以下の子ども1人当たり2万円を給付する経費です。財源は全額、国の物価高騰対応重点支援地方創生臨時交付金（16款2項1目総務費国庫補助金）です。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で財政課長が説明しました。質疑・討論の発言はなく、委員会での審査を省略して、異議なく承認されました。",
      ],
      detailed: [
        "提案理由説明の後、議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。採決では「異議なし」により承認することに決しました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（承認第1号の提案説明・財政課長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187882&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（承認第1号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187884&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-1": {
    plain: [
      "菅谷高畑土地区画整理事業で土地の区画や形が新しくなったため、もとの「字（あざ）」という地名の区域をなくす議案です。",
    ],
    detailed: [
      "高崎都市計画事業菅谷高畑土地区画整理事業の施行で土地の区画・形状を改めた結果、市の区域内の字の区域を廃止する必要が生じたため、地方自治法第260条第1項に基づき議決を求めるものです。施行地区界で囲まれた区域にある10の字を廃止します。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で総務部長が説明しました。質疑・討論の発言はなく、委員会での審査を省略して、その日のうちに異議なく可決されました。",
      ],
      detailed: [
        "提案理由説明の後、議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。採決では「異議なし」により原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第1号の提案説明・総務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187888&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（議案第1号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187891&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-2": {
    plain: [
      "市立中学校の先生が授業で使う教師用の指導書1,763冊を、約7,800万円で買う議案です。",
    ],
    detailed: [
      "中学校教師用指導書1,763冊を7,844万3,684円で取得する契約です。高崎市議会の議決に付すべき契約及び財産の取得又は処分に関する条例第3条に基づき議決を求めます。",
      "県内の取扱業者が1者であるため随意契約とし、相手方は群馬県教科書販売株式会社高崎営業所です。契約保証金は高崎市契約規則第26条第1項第7号により免除されます。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告ではこの議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月20日に財務部長が提案説明し、質疑の発言はなく教育福祉常任委員会に付託されました。3月10日の委員会審査について、3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第2号の提案説明・財務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187894&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-3": {
    plain: [
      "高い医療費を払うのが難しい人にお金を貸す制度と、そのための基金をやめる議案です。",
      "マイナンバーカードなどで病院の窓口で保険の資格を確認できるようになり、高い医療費を窓口で立て替える必要がなくなったため、借りる人がいなくなりました。",
    ],
    detailed: [
      "高額療養費の支払いが困難な人に高額療養費相当額を貸し付けるために定額の資金を運用してきた、高崎市高額療養費貸付基金条例を廃止します。令和3年9月に運用が始まったオンライン資格確認制度の普及で、受診者が医療機関から高額療養費分を請求されることがなくなり、貸付けの需要がなくなったことが理由です。",
      "附則で公布日施行とし、貸付け中の貸付金には廃止後もこの条例の効力を適用する経過措置と、貸付けから長期間経過しているなど回収困難な少額の貸付金について、要件に当てはまるものは債権放棄できる経過措置を設けます。同じ会期の一般会計補正予算（第8号）には、基金の廃止に伴う高額療養費貸付基金繰入金が計上されています。",
    ],
    discussion: {
      plain: [
        "委員会では、残った基金のお金をどうするのか、やめても困る人はいないのかが質問されました。市は、残りは一般会計に入れる予定で、今は貸付けが必要とされないため不利益はないと答えました。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月20日に市民部長が提案説明し、質疑の発言はなく市民経済常任委員会に付託されました。3月18日の委員長報告によると、3月11日の委員会で基金残高の取扱いと廃止による不利益について質疑があり、市は、基金残高は条例廃止後に一般会計に繰り入れる予定で、オンライン資格確認システムの運用開始で医療機関窓口での限度額を超えた支払いが不要となり、今後の需要が見込まれないことから廃止による不利益はないと答弁しました。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第3号の提案説明・市民部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187898&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（市民経済常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190035&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-4": {
    plain: [
      "地域で高齢者や子育て家庭などの相談にのる民生委員の人数の上限を、9人増やす議案です。",
      "独り暮らしのお年寄りが増え、民生委員の活動が必要な場面が多くなっているためです。今年11月の任期満了後の一斉改選から適用します。",
    ],
    detailed: [
      "高崎市民生委員定数条例第2条の民生委員定数を724人から733人に改めます。令和7年11月末に3年の任期満了を迎える民生委員・児童委員の一斉改選に先立ち、独り暮らし高齢者の増加等による活動需要の増加に対応するものです。",
      "公布日施行で、改正後の定数は令和7年12月1日以降に委嘱される民生委員に適用されます。",
    ],
    discussion: {
      plain: [
        "委員会では、なぜ増やすのかが質問され、市は、地区からの要望や独り暮らしの高齢者の数などを考えて9人増やすと答えました。",
        "一般質問でも民生委員のなり手不足が取り上げられ、市は、定数724人に対して720人が務めていると説明しました。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月20日に福祉部長が提案説明し、質疑の発言はなく教育福祉常任委員会に付託されました。3月18日の委員長報告によると、3月10日の委員会で増員の理由について質疑があり、市は、民生委員・児童委員協議会の地区会長から要望のあった地区を対象に、国の配置基準や当該地区の独り暮らし高齢者数などを勘案し、需要増への対応と適正な配置のため9名増員すると答弁しました。委員会は起立採決で全会一致により可決すべきものとしました。",
        "議案そのものの審査ではありませんが、2月27日の一般質問で中島輝男議員が、この定数増の議案に触れながら民生委員の充足率と人材発掘を質問。福祉部長は、2月1日現在で定数724人に対し720人が委嘱され充足率は99.45％であること、区長に推薦を依頼し、推薦が難しい地域には地域のサロン等で候補者を掘り起こす提案をしていることを答えました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第4号の提案説明・福祉部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187902&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "2月27日本会議録（中島輝男議員の一般質問・民生委員）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2054&HUID=188232&HATSUGENMODE=1",
      },
      {
        label: "2月27日本会議録（福祉部長の答弁・民生委員）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2054&HUID=188233&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-5": {
    plain: [
      "幼保連携型認定こども園の副園長と教頭について、幼稚園の先生と保育士の資格の片方だけでもよいとする特別な扱いを、国に合わせて2年延ばす議案です。",
    ],
    detailed: [
      "幼保連携型認定こども園で園児の教育・保育に直接従事する職員は、幼稚園教諭免許状と保育士登録の両方が必要ですが、副園長と教頭には条例施行後10年間はどちらか一方でよいとする特例があります。国の基準省令の改正で特例の期限が令和8年度末まで2年間延長されたことに伴い、期間を10年間から12年間に改めます。公布日施行です。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議では質疑の発言はなく、教育福祉委員会で審査されました。委員会の報告ではこの議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月20日に福祉部子育て支援担当部長が提案説明し、質疑の発言はなく教育福祉常任委員会に付託されました。3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第5号の提案説明・子育て支援担当部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187906&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-6": {
    plain: [
      "長い間だれも住んでおらず、とても古くなった市営の一戸建て住宅を取り壊したため、条例に書いてある市営住宅の戸数を直す議案です。",
    ],
    detailed: [
      "市営住宅のうち長期間入居がなく老朽化の著しい戸建て住宅の解体・撤去を行ったため、高崎市市営住宅の設置及び管理に関する条例の別表に定める管理戸数を改めます。公布日施行です。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議では質疑の発言はなく、建設水道委員会で審査されました。委員会の報告ではこの議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月20日に建設部長が提案説明し、質疑の発言はなく建設水道常任委員会に付託されました。3月12日の委員会審査について、3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第6号の提案説明・建設部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187910&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-7": {
    plain: [
      "水道工事の監督者などの資格を定めた条例の改正（令和7年4月から施行予定）が引用している国の法令の条文番号が変わったため、施行前にその番号を直す議案です。",
    ],
    detailed: [
      "令和6年6月定例会で議決した、布設工事監督者と水道技術管理者の資格要件の追加等を行う改正条例（施行日は令和7年4月1日）について、引用する建設業法施行令が改正され第34条が第37条に繰り下げられたため、施行前に改正条例中の「第34条」を「第37条」に改めます。公布日施行です。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議では質疑の発言はなく、建設水道委員会で審査されました。委員会の報告ではこの議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月20日に水道局長が提案説明し、質疑の発言はなく建設水道常任委員会に付託されました。3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第7号の提案説明・水道局長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187914&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-8": {
    plain: [
      "令和6年度の終わりに向けて、市全体のお金の使い道を決めた一般会計の予算を、実際の見込みに合わせて整理する補正予算です。全体で約40億円を追加します。",
      "物価高の影響を受けている畜産農家や福祉施設・保育所などへの支援（約1.3億円）や、ふるさと納税の寄附の増加に伴う経費なども含まれます。",
    ],
    detailed: [
      "歳入歳出それぞれ39億9,916万9,000円を追加し、予算総額を1,832億152万9,000円とします。繰越明許費は追加20件・変更5件、債務負担行為は追加2件・廃止2件・変更8件、地方債は廃止1件・変更17件の補正です。",
      "歳出は、おおむね執行済みとなった事業の不用額整理と不足見込み分の増額が中心です。国の物価高騰対応重点支援地方創生臨時交付金を活用し、畜産農家経営継続支援金、障害者・高齢者福祉施設の物価高騰対策臨時支援金、放課後児童クラブ・私立保育所等や幼稚園への物価高騰対策支援事業補助金、学校給食の米価上昇分の支援など総額1億3,184万6,000円を計上しました。ほかにふるさと納税の返礼品等・基金積立、豪雨被災地区の排水対策、箕輪城跡の崩落箇所の復旧、豊岡新駅（仮称）設置事業の豊岡だるま駅設置事業への名称変更などが含まれます。",
      "歳入は地方交付税の追加交付、国・県支出金や市債の実績見込みによる増減、寄附金、財政調整基金繰入金による調整などです。高額療養費貸付基金の廃止に伴う繰入金も計上しました。債務負担行為では、烏川かわまちレストハウス建設工事を事業計画の変更に伴い廃止します。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で財務部長が特別会計の補正予算とまとめて説明しました。質疑・討論の発言はなく、委員会での審査を省略して、その日のうちに異議なく可決されました。",
      ],
      detailed: [
        "2月20日の本会議で、議案第8号から第14号までの7議案を財務部長が一括して説明しました。議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。7議案を一括して採決し、「異議なし」により、いずれも原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第8〜14号の提案説明・財務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187918&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（議案第8〜14号の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187921&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-9": {
    plain: [
      "国民健康保険の会計の令和6年度の予算を、医療費などの実際の見込みに合わせて整理する補正予算です。約8.4億円を追加します。",
    ],
    detailed: [
      "国民健康保険事業特別会計の歳入歳出それぞれに8億4,019万5,000円を追加し、予算総額を349億5,079万4,000円とします。",
      "歳入では、マイナンバーカードの保険証利用の促進に係る経費への国庫補助金、保険給付費の実績見込みに伴う県補助金、基金運用益などを計上し、一般会計繰入金・基金繰入金を整理します。歳出は総務管理費から高額療養費までの実績見込みによる増減、交付金の確定等による財源変更、保健事業費の減額、過年度分の精算による償還金などです。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で、一般会計などの補正予算とまとめて説明されました。質疑・討論の発言はなく、委員会での審査を省略して、異議なく可決されました。",
      ],
      detailed: [
        "2月20日の本会議で、議案第8号から第14号までの7議案を財務部長が一括して説明しました。議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。7議案を一括して採決し、「異議なし」により、いずれも原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第8〜14号の提案説明・財務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187918&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（議案第8〜14号の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187921&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-10": {
    plain: [
      "介護保険の会計の令和6年度の予算を、介護サービスなどの実際の見込みに合わせて整理する補正予算です。約15億円を追加します。",
    ],
    detailed: [
      "介護保険特別会計の歳入歳出それぞれに15億3,569万円を追加し、予算総額を390億2,738万8,000円とします。",
      "歳入は介護保険料の収入見込みによる整理、国庫負担金から財産運用収入までの実績見込みによる整理、一般会計繰入金・基金繰入金の整理、繰越金の精算などです。歳出は電算事務負担金の確定による総務管理費の増額、介護認定審査会費から諸支出までの実績見込みによる増減と財源変更、基金積立金の整理です。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で、一般会計などの補正予算とまとめて説明されました。質疑・討論の発言はなく、委員会での審査を省略して、異議なく可決されました。",
      ],
      detailed: [
        "2月20日の本会議で、議案第8号から第14号までの7議案を財務部長が一括して説明しました。議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。7議案を一括して採決し、「異議なし」により、いずれも原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第8〜14号の提案説明・財務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187918&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（議案第8〜14号の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187921&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-11": {
    plain: [
      "牛伏ドリームセンターの会計で、施設の運営にかかるお金を実際の見込みに合わせて約400万円増やす補正予算です。",
    ],
    detailed: [
      "牛伏ドリームセンター事業特別会計の歳入歳出それぞれに403万2,000円を追加し、予算総額を1億2,979万7,000円とします。歳入は事業収入の増額、繰入金による差引きの調整、繰越金の精算、雑入の増額で、歳出は施設管理費の実績見込みによる増額です。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で、一般会計などの補正予算とまとめて説明されました。質疑・討論の発言はなく、委員会での審査を省略して、異議なく可決されました。",
      ],
      detailed: [
        "2月20日の本会議で、議案第8号から第14号までの7議案を財務部長が一括して説明しました。議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。7議案を一括して採決し、「異議なし」により、いずれも原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第8〜14号の提案説明・財務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187918&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（議案第8〜14号の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187921&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-12": {
    plain: [
      "ひとり親家庭などにお金を貸す制度の会計で、事務にかかる費用を約95万円増やす補正予算です。",
    ],
    detailed: [
      "母子父子寡婦福祉資金貸付事業特別会計の歳入歳出それぞれに94万9,000円を追加し、予算総額を1億4,085万5,000円とします。歳出は母子父子寡婦福祉資金貸付事業費の電算事務負担金を実績見込みにより増額するもので、歳入は一般会計繰入金で整理します。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で、一般会計などの補正予算とまとめて説明されました。質疑・討論の発言はなく、委員会での審査を省略して、異議なく可決されました。",
      ],
      detailed: [
        "2月20日の本会議で、議案第8号から第14号までの7議案を財務部長が一括して説明しました。議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。7議案を一括して採決し、「異議なし」により、いずれも原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第8〜14号の提案説明・財務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187918&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（議案第8〜14号の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187921&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-13": {
    plain: [
      "75歳以上の人などが入る後期高齢者医療の会計の令和6年度の予算を、実際の見込みに合わせて約1.6億円増やす補正予算です。",
    ],
    detailed: [
      "後期高齢者医療特別会計の歳入歳出それぞれに1億6,376万4,000円を追加し、予算総額を63億6,951万8,000円とします。",
      "歳入は後期高齢者医療保険料の収入見込みによる増減、事務費繰入金による差引きの調整、群馬県後期高齢者医療広域連合の決定額による保険基盤安定繰入金の減額、繰越金の精算などです。歳出は総務管理費から保健事業費までの実績見込みによる増額です。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で、一般会計などの補正予算とまとめて説明されました。質疑・討論の発言はなく、委員会での審査を省略して、異議なく可決されました。",
      ],
      detailed: [
        "2月20日の本会議で、議案第8号から第14号までの7議案を財務部長が一括して説明しました。議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。7議案を一括して採決し、「異議なし」により、いずれも原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第8〜14号の提案説明・財務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187918&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（議案第8〜14号の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187921&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-14": {
    plain: [
      "農村の集落の下水を処理する農業集落排水の会計で、使用料などの収入が見込みより少なくなる分を、市の一般会計からのお金で補う補正予算です。予算の総額は変わりません。",
    ],
    detailed: [
      "農業集落排水事業特別会計の歳入予算だけを補正します。1款事業収入の実績見込みによる減額を、3款繰入金の一般会計繰入金で調整する内容です。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で、一般会計などの補正予算とまとめて説明されました。質疑・討論の発言はなく、委員会での審査を省略して、異議なく可決されました。",
      ],
      detailed: [
        "2月20日の本会議で、議案第8号から第14号までの7議案を財務部長が一括して説明しました。議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。7議案を一括して採決し、「異議なし」により、いずれも原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第8〜14号の提案説明・財務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187918&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（議案第8〜14号の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187921&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-15": {
    plain: [
      "水道事業の令和6年度の予算を、決算の見込みに合わせて直す補正予算です。水道料金などの収入や工事のお金を、実際の見込みに合わせて減らします。",
    ],
    detailed: [
      "業務の予定量を改めるとともに、収益的収支では水道事業収益を1億4,777万1,000円減額して70億4,774万2,000円、簡易水道事業収益を128万2,000円減額して1億20万9,000円とします。支出は水道事業費用を6,045万8,000円減額して62億3,948万円、簡易水道事業費用を235万6,000円増額して1億5,366万5,000円とします。",
      "資本的収支では、企業債・負担金の変更などで資本的収入を7億945万5,000円減額して4億8,488万2,000円、建設改良費・固定資産購入費などの変更で資本的支出を5,597万円減額して35億7,489万7,000円とし、資本的収入の不足額と補填財源の額を改めます。あわせて起債の限度額を改めます。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で水道局長が説明しました。質疑・討論の発言はなく、委員会での審査を省略して、その日のうちに異議なく可決されました。",
      ],
      detailed: [
        "提案理由説明の後、議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。採決では「異議なし」により原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第15号の提案説明・水道局長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187924&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（議案第15号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187927&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-16": {
    plain: [
      "下水道事業の令和6年度の予算を、決算の見込みに合わせて直す補正予算です。阿久津水処理センターの土地の一部を公園の用地として譲る費用も入っています。",
    ],
    detailed: [
      "収益的収支では、下水道使用料などの変更で下水道事業収益を1,928万9,000円減額して79億8,198万円、減価償却費などの変更で下水道事業費用を1,555万1,000円減額して74億4,369万5,000円とします。費用の特別損失には、阿久津水処理センターの土地の一部を公園用地として譲渡するために必要な費用を計上します。",
      "資本的収支では、国庫補助金などの確定で資本的収入を1億1,720万3,000円減額して22億4,696万5,000円、事業費の確定で建設改良費を減らし資本的支出を8,969万円減額して63億1,523万4,000円とします。また、当初に設定した債務負担行為を、工事の施工方法を短期間かつ低価格なものに変更したため廃止します。",
    ],
    discussion: {
      plain: [
        "2月20日の本会議で下水道局長が説明しました。質疑・討論の発言はなく、委員会での審査を省略して、その日のうちに異議なく可決されました。",
      ],
      detailed: [
        "提案理由説明の後、議長が質疑を募りましたが発言は記録されていません。会議規則第36条第3項により委員会付託を省略することに異議はなく、討論の発言もありませんでした。採決では「異議なし」により原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（議案第16号の提案説明・下水道局長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187930&HATSUGENMODE=1",
      },
      {
        label: "2月20日本会議録（議案第16号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187933&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-17": {
    plain: [
      "市の外にいる専門家（公認会計士）に、市のお金の使い方などを1年間チェックしてもらう「包括外部監査」の契約を結ぶ議案です。上限は約1,100万円です。",
    ],
    detailed: [
      "地方自治法第252条の36第1項に基づき、包括外部監査契約の締結について議決を求めるものです。契約金額は1,120万円を上限とする額、契約の始期は令和7年4月1日、相手方は公認会計士の木倉也寸人氏です。",
      "監査委員事務局長は、同氏が平成28年8月に公認会計士登録し、企業等の監査に携わってきたほか、令和5年度から本市の包括外部監査人を務めていると説明しました。",
    ],
    discussion: {
      plain: [
        "2月25日の本会議では質疑の発言はなく、総務委員会で審査されました。委員会の報告ではこの議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に監査委員事務局長が提案説明し、2月25日の総括質疑を経て総務常任委員会に付託されました。総括質疑の中で本議案を取り上げた発言は確認できません。3月7日の委員会審査について、3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第17号の提案説明・監査委員事務局長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187959&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-18": {
    plain: [
      "国の刑法が改正され、刑罰の「懲役」と「禁錮」がなくなり「拘禁刑」にまとめられるため、市の11の条例の言葉を「拘禁刑」に直す議案です。",
    ],
    detailed: [
      "刑法改正で懲役と禁錮が廃止され拘禁刑が創設されることに伴い、第1条から第11条までの11条例中の「懲役」または「禁錮」を「拘禁刑」に改めます。施行日は刑法の改正に合わせて令和7年6月1日とし、経過措置を定めます。",
      "関係する条例が各分野にわたるため、総務・教育福祉・市民経済・建設水道の4常任委員会にそれぞれの所管部分が付託されました。",
    ],
    discussion: {
      plain: [
        "4つの常任委員会がそれぞれ担当する部分を審査し、いずれも全会一致で可決すべきものとしました。委員会の報告では、この議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に総務部長が提案説明し、2月25日に所管事項別に4常任委員会へ付託されました。3月18日の4委員長の報告では、本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。4委員会とも所管部分を起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label:
          "2月21日本会議録（議案第18・20〜25・27・28号の提案説明・総務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187961&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（市民経済常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190035&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-19": {
    plain: [
      "国の法律が変わり、管理栄養士の学校を卒業した人は栄養士の免許がなくても管理栄養士の試験を受けられるようになりました。そこで、施設に栄養士を置くよう定めた市の条例に「管理栄養士」も書き加える議案です。",
    ],
    detailed: [
      "第14次地方分権一括法による栄養士法の一部改正で、管理栄養士養成施設の卒業者は管理栄養士国家試験を受けるのに栄養士免許が不要となりました。これを踏まえ、栄養士の配置等を求める市の各条例で、栄養士免許を持たない管理栄養士を配置した場合も要件を満たせるよう、管理栄養士を併記します。",
      "対象は第1条の高崎市保護施設等の設備及び運営に関する基準を定める条例から、第17条の高崎市女性自立支援施設の設備及び運営に関する基準を定める条例までです。令和7年4月1日施行で、教育福祉・市民経済の両常任委員会に所管部分が付託されました。",
    ],
    discussion: {
      plain: [
        "教育福祉委員会と市民経済委員会がそれぞれ担当する部分を審査し、いずれも全会一致で可決すべきものとしました。委員会の報告では、この議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に福祉部長が提案説明し、2月25日に教育福祉・市民経済の両常任委員会へ付託されました。3月18日の両委員長の報告では、本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。両委員会とも所管部分を起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第19・29・35・36号の提案説明・福祉部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187963&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（市民経済常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190035&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-20": {
    plain: [
      "マイナンバー法の改正で条文の項の番号がずれたため、マイナンバーの利用について定めた市の3つの条例で、引用している番号を直す議案です。",
    ],
    detailed: [
      "いわゆるマイナンバー法の改正に伴い、第1条から第3条までの3条例について、引用するマイナンバー法の項ずれに対応する所要の改正を行います。施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "総務委員会で審査され、全会一致で可決すべきものとされました。委員会の報告では、この議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に総務部長が提案説明し、2月25日に総務常任委員会へ付託されました。3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label:
          "2月21日本会議録（議案第18・20〜25・27・28号の提案説明・総務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187961&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-21": {
    plain: [
      "令和7年4月の組織の見直しで総務部に「国際課」を新しく作るため、市役所の仕事の分担を定めた条例に、外国人の生活支援と国際交流の仕事を加える議案です。",
    ],
    detailed: [
      "高崎市事務分掌条例第1条の総務部の項に、新たに「外国人生活支援及び国際交流に関する事項」を加えます。令和7年4月の組織機構改編で総務部に国際課を新設することに伴うもので、施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "予算の総括質疑で、外国人に関する新しい取り組みや国際課の仕事が質問されました。市長は、外国人の相談支援センターを置き、病院での多言語の通訳の仕組みづくりも支援して、17か国ほどの言葉に対応できるようにすると答えました。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月25日の総括質疑で、新風会の青柳隆議員が外国人との共生に向けた新たな施策を、市民クラブの林恒徳議員が新設する国際課の取組を質問。市長は、外国人相談員と多言語映像通訳システムを活用した外国人相談支援センターを設置し、救急告示病院等の多言語映像医療通訳システムの整備を支援するなどで、おおむね17か国以上の言語に対応できるようになると答弁しました。これらは主に令和7年度予算についての質疑です。",
        "議案は2月21日に総務部長が提案説明し、2月25日に総務常任委員会へ付託されました。3月18日の委員長報告で本議案の個別の質疑は紹介されていません。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label:
          "2月21日本会議録（議案第18・20〜25・27・28号の提案説明・総務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187961&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（青柳隆議員の総括質疑・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187989&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（青柳隆議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187990&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（林恒徳議員の総括質疑・市民クラブ）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187993&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（林恒徳議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187994&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-22": {
    plain: [
      "高崎芸術劇場の使用料のうち、公演を一般の人に見せる目的以外で使う場合と、市民など以外の人が使う場合の料金を見直す議案です。",
      "開館から5年がたち、公演以外の使い方や市外の団体の利用が増えているため、市民が使いやすいようにするのがねらいです。",
    ],
    detailed: [
      "大劇場、スタジオシアター、音楽ホールと楽屋について、舞台芸術等の公演を一般公衆に鑑賞させる目的以外で利用する場合と、市民等以外の者が利用する場合の利用料金の額を改定します。施行日は令和7年4月1日で、経過措置を定めます。",
    ],
    discussion: {
      plain: [
        "総務委員会で改正の理由が質問されました。市は、公演を見せる以外の利用が増え、市外の団体の利用もさらに増えると心配されるため、市民の利用を優先できるよう料金を改めると答えました。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に総務部長が提案説明し、2月25日に総務常任委員会へ付託されました。3月18日の委員長報告によると、3月7日の委員会で改正の経緯について質疑があり、市は、開館から5年が経過した劇場の利用料金を見直すもので、一般公衆の鑑賞以外での利用が増加傾向にあり、市外団体等の利用の一層の増加も懸念されることから、市民利用の優位性を確保するため改定すると答弁しました。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label:
          "2月21日本会議録（議案第18・20〜25・27・28号の提案説明・総務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187961&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-23": {
    plain: [
      "市民から遺贈（亡くなった方からの贈与）を受けた庭つきの住宅を、茶道・華道・和楽器などの伝統文化の活動の場「高崎伝統文化の館」として開くため、そのルールを定める条例を作る議案です。",
    ],
    detailed: [
      "高崎伝統文化の館設置及び管理に関する条例を制定します。名称は高崎伝統文化の館、所在地は歌川町42番地1です。第1条の趣旨から第16条の規則への委任まで、設置、職員、利用や使用料などを定めます。",
      "施行日は令和7年4月1日で、施行日前の準備行為について規定します。",
    ],
    discussion: {
      plain: [
        "予算の総括質疑で、館を何に使うのか、こうした寄贈の物件が今後増えないかが質問されました。市長は、茶道や華道、邦楽などの活動の場として貸し出すことや、寄贈を受けるかは使い道と費用対効果を見て判断すると答えました。",
        "委員会では運営の方法が質問され、市は、水曜から日曜の週5日開き、職員を置くと説明しました。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月25日の総括質疑で、新風会の青柳隆議員が施設の活用目的を質問。市長は、令和5年10月に遺贈を受けた庭園つき住宅を直営施設として運営し、茶道・華道・邦楽の演奏など伝統文化の活動の場として貸し出すとともに、市民が伝統文化に触れる事業を行うと答え、伝統文化の音楽・活動への支援がこれまで抜けていたと述べました。市民クラブの林恒徳議員は今後こうした物件が増える懸念を含め将来の展望を質問し、市長は、遺贈寄附の受入れは市民の利活用を十分検討し費用対効果を検証して判断すると答弁しました。",
        "3月18日の総務常任委員長報告によると、令和7年度一般会計予算の審査（歳出2款2項文化スポーツ振興費）で運営方針の質疑があり、市は、華道・茶道・邦楽など日本文化の活動の場とし、高崎市文化協会加盟団体を中心とした利用を考えていること、開館日は水曜日から日曜日の週5日で、嘱託職員と臨時職員を計5名配置し、開館日には1名が常駐する予定と答弁しました。委員会は本議案を起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label:
          "2月21日本会議録（議案第18・20〜25・27・28号の提案説明・総務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187961&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（青柳隆議員の総括質疑・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187989&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（青柳隆議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187990&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（林恒徳議員の総括質疑・市民クラブ）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187993&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（林恒徳議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187994&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-24": {
    plain: [
      "市の職員が子育てや介護と仕事を両立しやすくするため、国の育児・介護休業法の改正に合わせて、残業の免除を求められる職員の範囲を広げるなどの議案です。",
      "これまで3歳未満の子どもがいる職員が対象でしたが、小学校に入るまでの子どもがいる職員に広げます。",
    ],
    detailed: [
      "いわゆる育児・介護休業法の改正に伴う改正です。第10条の2で、時間外勤務の免除を請求できる職員の範囲を、3歳に満たない子を持つ者から小学校就学の始期に達するまでの子を持つ者に拡大します。",
      "第17条の2・第17条の3を新設し、配偶者等が介護を必要とする状況に至った職員に介護両立支援制度を周知するとともに、制度等を利用しやすい勤務環境の整備に関する措置等を講じることを定めます。施行日は令和7年4月1日で、経過措置を定めます。",
    ],
    discussion: {
      plain: [
        "総務委員会で審査され、全会一致で可決すべきものとされました。委員会の報告では、この議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に総務部長が提案説明し、2月25日に総務常任委員会へ付託されました。3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label:
          "2月21日本会議録（議案第18・20〜25・27・28号の提案説明・総務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187961&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-25": {
    plain: [
      "国の育児・介護休業法の改正に合わせて、非常勤の市職員が育児のために勤務時間の一部を休む「部分休業」のルールを直す議案です。",
    ],
    detailed: [
      "いわゆる育児・介護休業法の改正に伴い、非常勤職員の部分休業の承認について、準用する同法の規定が改正されたことに対応して高崎市職員の育児休業等に関する条例を改正します。施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "総務委員会で審査され、全会一致で可決すべきものとされました。委員会の報告では、この議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に総務部長が提案説明し、2月25日に総務常任委員会へ付託されました。3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label:
          "2月21日本会議録（議案第18・20〜25・27・28号の提案説明・総務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187961&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-26": {
    plain: [
      "学校で子どもの健康を見る学校医・学校歯科医・学校薬剤師と、教職員の健康を見る医師の報酬を上げる議案です。",
      "子どもの健康の問題が多様になり仕事が増えているため、医師などを確保し続けられるようにするのがねらいです。",
    ],
    detailed: [
      "高崎市非常勤の特別職の職員の報酬及び費用弁償に関する条例を改正し、学校医、学校歯科医、学校薬剤師、教職員健康管理医の報酬をそれぞれ増額します。アレルギーや精神的な健康問題、感染症対策など学校医などに求められる業務が増えていることを踏まえ、確保と定着を図るものです。施行日は令和7年4月1日です。",
      "具体的な報酬額は議案書に記載されていますが、本会議の説明では金額は読み上げられていません。",
    ],
    discussion: {
      plain: [
        "教育福祉委員会で審査され、全会一致で可決すべきものとされました。委員会の報告では、この議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に教育部学校教育担当部長が提案説明し、2月25日に教育福祉常任委員会へ付託されました。3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label:
          "2月21日本会議録（議案第26号の提案説明・教育部学校教育担当部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187965&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-27": {
    plain: [
      "国の地方公務員法の改正法の条文の項の番号がずれたため、それを引用している職員の定年と企業職員の給与に関する市の2つの条例を直す議案です。",
    ],
    detailed: [
      "地方公務員法の一部を改正する法律が一部改正され、暫定再任用職員の定義を定める条文に項ずれが生じたため、これを引用する高崎市職員の定年等に関する条例等の一部を改正する条例と、高崎市企業職員の給与の種類及び基準に関する条例の2条例を改正します。施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "総務委員会で審査され、全会一致で可決すべきものとされました。委員会の報告では、この議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に総務部長が提案説明し、2月25日に総務常任委員会へ付託されました。3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label:
          "2月21日本会議録（議案第18・20〜25・27・28号の提案説明・総務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187961&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-28": {
    plain: [
      "国の雇用保険法などの改正に合わせて、市の職員の退職手当の条例を直す議案です。仕事が見つかりにくい地域で職を探す人への給付日数を延ばす特別な扱いも、令和9年3月まで続けます。",
    ],
    detailed: [
      "雇用保険法の規定に準じて給付する失業者の退職手当について、同法改正で就業促進手当の規定の一部が削除されたことに準じて第10条第11項・第14項を改正します。附則第13項・第14項は国立大学法人法の改正による条ずれ等への対応です。",
      "附則第17項では、雇用保険法の改正に準じ、雇用機会が不足する地域の求職者に対する給付日数を延長する暫定措置を令和9年3月31日まで延長します。施行日は令和7年4月1日で、経過措置を定めます。",
    ],
    discussion: {
      plain: [
        "総務委員会で審査され、全会一致で可決すべきものとされました。委員会の報告では、この議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に総務部長が提案説明し、2月25日に総務常任委員会へ付託されました。3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label:
          "2月21日本会議録（議案第18・20〜25・27・28号の提案説明・総務部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187961&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-29": {
    plain: [
      "生活に困っている人が入所する救護施設などの基準を、国の基準の改正に合わせて直す議案です。",
      "感染症への備え、災害などのときも支援を続けるための計画づくり、入所者一人ひとりの支援計画の作成を義務にします。",
    ],
    detailed: [
      "国の救護施設、厚生施設、授産施設及び宿所提供施設の設備及び運営に関する基準の改正に伴う改正です。主な内容は3点で、感染症の発生・蔓延防止のための委員会の開催、指針の整備、研修・訓練の実施の義務づけ、感染症や災害の発生時にも処遇を継続できるよう業務継続計画等の策定と研修・訓練の実施等の義務づけ、入所者ごとの個別支援計画の作成の義務づけです。",
      "施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "教育福祉委員会で審査され、全会一致で可決すべきものとされました。委員会の報告では、この議案についての質疑は紹介されていません。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に福祉部長が提案説明し、2月25日に教育福祉常任委員会へ付託されました。3月18日の委員長報告で本議案の個別の質疑は紹介されていません（委員会で質疑が一切なかったと断定するものではありません）。委員会は起立採決で全会一致により可決すべきものとしました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第19・29・35・36号の提案説明・福祉部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187963&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-30": {
    plain: [
      "高崎市が自分で児童相談所を持つため、その名前・場所・担当する区域を決める条例を作る議案です。",
      "問屋町に「高崎市児童相談所」を置き、市内全域を担当します。令和7年10月に始まります。",
    ],
    detailed: [
      "児童福祉法の規定に基づき児童相談所を設置するため、高崎市児童相談所設置条例を制定します。名称は高崎市児童相談所、位置は問屋町で、本市全域を管轄します。施行日は令和7年10月1日です。",
      "常任委員会ではなく、子育て支援・定住人口増加対策特別委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "予算の総括質疑では4つの会派すべてが児童相談所を取り上げ、開設の準備、市が持つ利点、職員の確保と育成などを質問しました。市長は、これまで県と相談しながら進めていた対応を、最初から最後まで市の判断で素早く行えるようになると答えました。",
        "市は、県の西部児童相談所へ17人の職員を送って仕事を引き継ぐことや、7月に新しい建物へ移り、10月の開所に備えることも説明しました。",
        "3月18日の本会議では、新風会と公明党が、予算案を含む42議案全体に賛成する討論を行いました。反対の討論はなく、42議案をまとめて採決し、全会一致で可決されました。",
      ],
      detailed: [
        "2月25日の総括質疑で、新風会の青柳隆議員が開設に向けた準備を質問し、市長は、7月から新しい建物へ移転して10月の開所時に適切に業務ができるよう準備し、職員には十分な実地研修でスキルアップを図ると答弁しました。市民クラブの林恒徳議員は市長が期待する点を質問し、市長は、県と協議しながら進めていた対応を本市の判断で初動からその後の支援まで迅速に行えることを挙げ、「行動する児童相談所」を体現すると述べました。",
        "公明党の逆瀬川義久議員は設置のメリット、市内外の児童養護施設・里親との連携、関係部署との情報連携、職員の資質向上を質問。市長は、現在は県の西部児童相談所と協議しているが、設置後は初動から一時保護、その後の支援まで一貫して迅速に対応できると答え、社会福祉士や児童福祉司の任用資格を持つ職員の配置、国の研修の受講、他自治体に派遣していた職員を中心とした職場内研修で人材育成に努めるとしました。たかさき未来の荒木征二議員は人材確保・育成のロードマップを質問し、市長は、西部児童相談所に17名の職員を派遣してケースの引継ぎを行い、正規職員の確保には一定のめどが立ったため、新年度は一時保護所で必要な会計年度任用職員の採用を進めると答弁しました。",
        "議案は2月25日に子育て支援・定住人口増加対策特別委員会へ付託され、3月10日に審査されました。3月18日の特別委員長報告では、同時に付託された令和7年度一般会計予算の児童相談所関係部分について、里親登録数が42世帯で前年より5世帯増えたこと、児童相談所整備事業の初度調弁費で相談室の机・椅子、一時保護所の電化製品や家具類などをそろえることなどの答弁が紹介されています。本議案は起立採決で全会一致により可決すべきものとされました。",
        "3月18日の討論では、新風会を代表して青木和也議員、公明党を代表して中村さと美議員が、令和7年度予算と関係議案（42議案）への賛成討論を行い、反対討論はありませんでした。議案第2号から第7号と第17号から第52号の42議案を一括して採決し、「異議なし」により、いずれも全会一致で原案のとおり可決されました。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第30号の提案説明・児童相談所担当部長）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187967&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（青柳隆議員の総括質疑・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187989&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（青柳隆議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187990&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（林恒徳議員の総括質疑・市民クラブ）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187993&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（林恒徳議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187994&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（逆瀬川義久議員の総括質疑・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188001&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（逆瀬川義久議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188002&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（荒木征二議員の総括質疑・たかさき未来）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188005&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（荒木征二議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188006&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188010&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（子育て支援・定住人口増加対策特別委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190037&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（青木和也議員の賛成討論・新風会）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（中村さと美議員の賛成討論・公明党）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-31": {
    plain: [
      "主に2歳児までを少人数で預かる保育事業では、3歳になった後も保育を続けられるよう、保育所などを「連携施設」として確保する決まりがあります。その確保を猶予できる期間を、国の基準に合わせて5年延ばす議案です。",
    ],
    detailed: [
      "国の基準省令の改正に伴う改正です。地域型保育事業を行う者は認定こども園や保育所等の連携施設を確保しなければなりませんが、市が認める場合は条例施行後10年間の経過措置として確保しないことができるとされています。国の基準改正でこの経過措置の期限が令和11年度末まで5年間延長されたため、期間を10年間から15年間に改めます。",
      "あわせて、連携施設で提供する連携内容について、提供が不要となる要件が追加されたことに対応します。施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "教育福祉常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に福祉部子育て支援担当部長が議案第31〜34号を一括してが提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の教育福祉常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第31〜34号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187969&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-32": {
    plain: [
      "家庭的保育事業など、少人数で子どもを預かる事業についても、議案第31号と同じく、連携施設の確保を猶予できる期間を5年延ばす議案です。",
    ],
    detailed: [
      "国の基準省令の改正に伴い、高崎市家庭的保育事業等の設備及び運営に関する基準を定める条例を改正します。家庭的保育事業等を行う者が連携施設を設けないことができる経過措置の期間を10年間から15年間に改め、連携施設での提供が不要となる要件の追加にも対応します。",
      "議案第31号は特定教育・保育施設と特定地域型保育事業の「運営」の基準、本議案は家庭的保育事業等の「設備及び運営」の基準を定める別の条例が対象です。施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "教育福祉常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に福祉部子育て支援担当部長が議案第31〜34号を一括してが提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の教育福祉常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第31〜34号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187969&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-33": {
    plain: [
      "国が始めた「こども誰でも通園制度」が、令和7年度から法律上の「乳児等通園支援事業」になります。そのため、この事業を行う施設の設備や職員などの基準を、市の条例として新しく定める議案です。",
    ],
    detailed: [
      "国のこども未来戦略に基づき創設されたこども誰でも通園制度が、児童福祉法の改正により令和7年度から乳児等通園支援事業として法制化されることに伴う条例の制定です。全27条と附則で構成されます。",
      "第1章（第1〜19条）は趣旨・目的、一般原則、非常災害時の対策、職員の一般的条件、衛生管理などの総則、第2章（第20〜26条）は設備の基準、職員の配置基準、事業の内容等、第3章は書面に代えて電磁的記録で行えることを定めます。施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "教育福祉常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に福祉部子育て支援担当部長が議案第31〜34号を一括してが提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の教育福祉常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第31〜34号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187969&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-34": {
    plain: [
      "令和7年度から通う園児がいなくなる箕郷第三保育園はるな分園を廃止するため、市立保育所の一覧からこの分園を外す議案です。",
    ],
    detailed: [
      "箕郷第三保育園はるな分園は、在籍園児の卒園・転園により令和7年度から利用する園児がいなくなるため、令和6年度をもって廃止します。高崎市立保育所設置条例の別表から同分園を削除する改正で、施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "教育福祉常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に福祉部子育て支援担当部長が議案第31〜34号を一括してが提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の教育福祉常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第31〜34号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187969&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-35": {
    plain: [
      "障害のある人が自分に合った働き方を選べるよう手助けする新しいサービス「就労選択支援」ができたため、市の指定を受けてこのサービスを行う事業者の人員・設備・運営の基準を加える議案です。",
    ],
    detailed: [
      "障害福祉サービスの基準を定める際に参照すべき国の基準が改正され、新たなサービスとして就労選択支援が創設されたことに伴う改正です。高崎市指定障害福祉サービスの事業等の人員、設備及び運営に関する基準を定める条例の第9章の次に第9章の2を加え、就労選択支援に係る指定障害福祉サービスの人員・設備・運営の基準を定めます。",
      "施行日は、障害者の日常生活及び社会生活を総合的に支援するための法律等の一部を改正する法律の附則第1条第4号に掲げる規定の施行日です。",
    ],
    discussion: {
      plain: [
        "教育福祉常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に福祉部長が議案第19・29・35・36号を一括して（第35・36号は共通事項として一括で）が提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の教育福祉常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第35・36号ほかの提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187963&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-36": {
    plain: [
      "議案第35号と同じく、新しいサービス「就労選択支援」に対応する議案です。こちらは、障害福祉サービスの事業そのものの設備と運営の基準を定める条例に、就労選択支援の基準を加えます。",
    ],
    detailed: [
      "高崎市障害福祉サービス事業の設備及び運営に関する基準を定める条例の第5章の次に第5章の2を加え、就労選択支援の設備及び運営に関する基準を定めるなど、就労選択支援の創設に伴う所要の改正を行います。あわせて文言を整理します。",
      "施行日は議案第35号と同じく障害者総合支援法等の一部改正法の附則第1条第4号に掲げる規定の施行日ですが、第12条第4項と第69条の改正規定は公布の日から施行します。",
    ],
    discussion: {
      plain: [
        "教育福祉常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に福祉部長が議案第19・29・35・36号を一括して（第35・36号は共通事項として一括で）が提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の教育福祉常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第35・36号ほかの提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187963&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-37": {
    plain: [
      "農林水産物や食品を外国へ輸出するときに必要な証明書などについて、保健所で払う手数料を国と同じ額にそろえる議案です。施設の認定を申請するときの審査手数料も新しく設けます。",
    ],
    detailed: [
      "農林水産物及び食品の輸出の促進に関する法律の施行に伴う改正です。輸出先国の食品安全基準に適合すること等を示す輸出証明書の発行や適合施設の認定の手続が法定化され、国が既に徴収している適合施設の認定手数料に加え、令和7年4月1日から輸出証明書発行手数料の徴収を始めます。",
      "これに合わせ、手数料の額が国と同額になるよう輸出証明書の発行手数料を改定し、適合施設認定の申請に対する審査手数料を新設します。施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "教育福祉常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に保健医療部長が提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の教育福祉常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第37号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187971&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-38": {
    plain: [
      "建築基準法が改正され、建物を建てる前の審査の対象が広がり、省エネに関する審査も加わりました。それに合わせて、市に払う建築確認などの手数料を改める議案です。",
    ],
    detailed: [
      "建築基準法の改正に伴い、手数料の額を改定します。都市計画区域の内外にかかわらず、2階建て以上または延べ面積200平方メートルを超える木造建築物に審査対象が拡大されたことや、省エネ基準に伴う審査項目が追加されたことなどから、手数料を徴収する事務を改正します。",
      "施行日は令和7年4月1日で、別表3、別表4の一部、別表5・6は公布の日から施行します。改正後の別表1・別表4は、施行日より前に建築確認等の申請がされた場合は従前の例によります。",
    ],
    discussion: {
      plain: [
        "建設水道常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に建設部長が議案第38〜40号を一括してが提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の建設水道常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第38〜40号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187973&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-39": {
    plain: [
      "住宅などを新築・増改築するとき、国の省エネの基準に合わせることが義務になりました。こうした制度の変更に合わせて、省エネに関する審査の手数料を改める議案です。",
    ],
    detailed: [
      "建築物のエネルギー消費性能の向上等に関する法律の改正に伴い、手数料を徴収する事務と額を改定します。住宅・小規模非住宅の新築または増改築時に建築物のエネルギー消費性能基準への適合が義務付けられたこと、省エネ性能向上計画認定制度で共同住宅の認定手数料の算定方法が戸数方式から床面積方式に変わったことなど、省エネ基準適合制度の改正に対応します。",
      "施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "建設水道常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に建設部長が議案第38〜40号を一括してが提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の建設水道常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第38〜40号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187973&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-40": {
    plain: [
      "盛土などの工事の途中で受ける「中間検査」の手数料について、国や県などが行う公共事業からは取らないことをはっきりさせる議案です。",
    ],
    detailed: [
      "先に新たに手数料を徴収する事務として追加した中間検査申請手数料について、公共事業は徴収しないこととするための改正です。宅地造成及び特定盛土等規制法第15条第1項に規定する国や都道府県等が行う公共事業に係る工事と、同条第2項で規定する都市計画法第29条第1項または第2項の許可を受けた工事の取扱いを明確にするため、文言を改めます。",
      "施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "建設水道常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に建設部長が議案第38〜40号を一括してが提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の建設水道常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第38〜40号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187973&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-41": {
    plain: [
      "お年寄りや障害のある人が公園を使いやすくするための設備の基準を定めた条例で、国の政令の条文番号がずれたため、引用している番号を直す議案です。",
    ],
    detailed: [
      "高齢者、障害者等の移動等の円滑化の促進に関する法律施行令の改正により生じた引用条文の条ずれに対応する改正です。内容の変更ではなく引用の整理で、施行日は令和7年6月1日です。",
    ],
    discussion: {
      plain: [
        "建設水道常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に都市整備部長が提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の建設水道常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第41号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187975&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-42": {
    plain: [
      "水道料金をクレジットカードでも払えるようにするため、市の給水条例に支払い方法を加える議案です。",
    ],
    detailed: [
      "水道料金の徴収方法を改める改正です。クレジットカードによる支払いを可能にするため、指定納付受託者制度による納付の方法を追加し、使用者の利便性向上を図ります。あわせて、現在の徴収方法が納付書払いと口座振替であることから、実情に合わせて規定を改めます。施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "建設水道常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に水道局長が提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の建設水道常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "関連して、3月18日の総務常任委員長報告では、令和7年度一般会計予算（議案第44号）の審査の中で、新しい地方経済・生活環境創生交付金を上下水道の検針票や納付書を電子化しクレジット決済を可能にする上下水道料金情報化推進事業に充てる予定との答弁が紹介されています。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第42号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187977&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-43": {
    plain: [
      "下水道の使用料も、水道料金と同じくクレジットカードなどで払えるようにする議案です。国の政令に合わせて、放流する水の水質基準の引用も改めます。",
    ],
    detailed: [
      "下水道法施行令の改正と使用料の徴収方法の変更に伴う改正です。第8条の3第1項第9号は、公共下水道等からの放流水の基準が大腸菌群数に係る基準から大腸菌数に係る基準に改正されたことに伴い、当該基準を引用するよう改めます。",
      "第12条第2項・第3項では、使用料の支払い方法として指定納付受託者制度による納付の方法を追加し、あわせて所要の改正を行います。施行日は令和7年4月1日です。",
    ],
    discussion: {
      plain: [
        "建設水道常任委員会で審査され、全会一致で可決されました。本会議での質疑の発言や、委員長報告での個別の質疑の紹介はありません。",
      ],
      detailed: [
        "2月21日に下水道局長が提案理由を説明しました。2月25日の総括質疑（4会派）でこの議案を直接取り上げた質疑はありませんでした。3月18日の建設水道常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。委員会での全質疑を網羅する記載ではありません。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第43号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187979&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-44": {
    plain: [
      "令和7年度（2025年4月〜2026年3月）に市が使うお金の計画のうち、中心となる一般会計の予算です。総額は約1,647億円で、大きな建設工事が終わったため前の年度より約2％少なくなりました。",
      "学校給食費の第2子以降の無償化と第1子の1割軽減、10月の市の児童相談所の開設、学校体育館へのエアコン設置の拡大、高齢者世帯の防犯対策への補助などが盛り込まれています。議会は全会一致で可決しました。",
    ],
    detailed: [
      "一般会計の予算額は1,647億円で前年度比2.1％減、一般会計・特別会計・企業会計を合わせた総額は2,696億188万円で0.3％減です。市長は、徹底した事業費の削減、重点事業の積極的な推進、人件費の圧縮を基本方針に掲げたと説明しました。",
      "歳入は、市税が過去最大の667億3,975万円（5.9％増）で、うち市民税個人は239億7,720万円（12.2％増）、市民税法人は62億8,978万円（5.6％増）。地方交付税は普通交付税130億円・特別交付税19億円の計149億円です。財政調整基金から28億5,000万円、減債基金から16億7,000万円、ふるさと応援基金から10億5,000万円などを繰り入れます。市債は臨時財政対策債を発行しないこともあり33億4,930万円（68.8％減）で、令和7年度末の市債現在高は1,371億5,296万円（95億1,379万円減）と見込んでいます。",
      "歳出の主な新規・拡充事業は、学校給食費の第2子以降無償化・第1子1割軽減、児童相談所の開所準備と運営、放課後児童クラブの施設整備と長期休業期間の一時預かり・高学年児童の受入れ促進の補助、学校体育館（年3校から10校へ）と給食室への空調設置の拡充、5歳児健康確認・診査、70歳以上の人がいる世帯への住まいの防犯対策補助、移動期日前投票所、外国人相談支援センター、GunMaaS（グンマース）への参画、上信電鉄の第4種踏切道の改良支援、豊岡だるま駅の駅施設工事などです。財源確保のため、中小企業経営安定化助成の黒字企業への助成率を事業所税相当額の4分の3から4分の1へ見直します。予備費は3億円です。",
      "4常任委員会のほか、児童相談所の整備に関する部分は子育て支援・定住人口増加対策特別委員会に、再開発ビルの整備、労使会館の建設、高崎スマートインターチェンジ産業団地A・B地区の整備に関する部分は都市集客施設整備特別委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "2月25日には4つの会派が代表して予算全体について質問しました。給食費をなぜ全員無償にしなかったのかという質問に、市長は、全部無償にすると20億円かかるため、第2子以降を無償、第1子を1割軽減にしたと答えました。",
        "委員会では、スマートインターチェンジ近くの商業施設への市の支援額が建設費の上昇などで約28億円に増える見込みであることや、学校の水泳授業で民間プールを使う対象を4〜5校程度と想定していることなどが説明されました。",
        "新風会と公明党が賛成討論を行い、反対討論はなく、全会一致で可決されました。",
      ],
      detailed: [
        "総括質疑で新風会の青柳隆議員は予算の特徴や学校の空調、給食費無償化の財源などを質問しました。市長は、大規模建設事業の終了を踏まえた「脇を固めた節約型の予算」と述べ、体育館の空調は部活動で利用頻度の高い中学校を優先して10校、給食室は小学校6校・中学校2校の計8校に設置すると答弁。給食費の財源は黒字企業への助成率見直しや既存事業の見直し等で確保し、国・県にも財源措置を要望するとしました。スマートIC産業団地A・B地区のパーク型商業施設は優先交渉権者の株式会社BETTER DAYSの基本構想に基づき整備し、A・B地区を結ぶ連絡橋を市が整備する方針と説明しています。",
        "市民クラブの林恒徳議員は、市税増収分の使い道や給食費の制度設計などを質問しました。市長は、第何子かの判定で第1子の年齢制限を設けず高校生以上や別居の子も含めると答弁。高校生等の通学支援は1か月当たりの控除額を2万円から1万5,000円に引き下げて補助を増額し、スマートICの施設への支援は5年後の見直し後も必要なら延長する考えを示しました。移動期日前投票所は倉渕・榛名・吉井地域で各1日2か所、計3日間6か所の予定としています。",
        "公明党の逆瀬川義久議員は、給食費を一部軽減とした理由や交付金・基金の使途などを質問しました。市長は、全部無償にすれば20億円かかるためと答弁。物価高騰対応重点支援地方創生臨時交付金5億9,572万3,000円のうち給食材料費の高騰分に1億9,323万9,000円を充てること、一般財源は約994億8,600万円で前年度より約16億9,500万円増えたこと、住まいの防犯対策補助は設置費も対象とすること、新しい高浜クリーンセンターの年間発電量は約8,500万キロワットアワー、売電は約7億円を見込むことなどを説明しました。",
        "たかさき未来の荒木征二議員は、土木費の減少や上下水道の経営、児童相談所の人材などを質問しました。市長は、道路橋りょう費が平成27年度28億1,719万円から令和7年度25億6,678万円、都市計画費が185億509万円から81億5,761万円となった点について、平成27年度は公園整備や高崎芸術劇場・高崎アリーナの建設が集中していたためと説明。児童相談所には群馬県西部児童相談所から円滑に業務を引き継ぐため17名の職員を派遣していると答弁しました。",
        "3月18日の委員長報告によると、教育福祉委員会では、塚沢・城東・桜山小学校の敷地内にリース契約で2階建ての放課後児童クラブ施設を建てること、5歳児健診は3歳児健診以降に健診機会のない未就園児などを中心に月1回の集団方式で行うこと、民間プールの利用は4〜5校程度を想定し監視員1名の配置や送迎バスの利用を委託内容とすることが答弁されました。総務委員会では高崎伝統文化の館を水〜日曜の週5日開館とすること、石川県珠洲市に土木技師1名を1年間派遣することなどが説明されています。",
        "市民経済委員会ではぐるりんの減便に伴う運行補助金の減額や、かがやけ新規就農者応援給付金で15名程度の支援を見込むこと、建設水道委員会ではGunMaaS参画費7,500万円のうち5,000万円を国庫補助で見込むことや、倉賀野町・中豊岡町・箕郷町上芝の排水路と京目町の水門の雨水対策工事が答弁されました。子育て支援の特別委員会では里親登録数が42世帯であること、都市集客施設整備特別委員会では、スマートICのパーク型商業施設への市の支援額の試算が、初期投資で約8億円増の約28億円、管理運営で約3.7億円から3.8億円となる見込みと答弁されています。6つの委員会はいずれも起立採決で全会一致で可決すべきものとしました。",
        "本会議の討論では、新風会の青木和也議員が給食費の一部無償化や児童相談所の開設、放課後児童クラブの充実などを評価して賛成し、公明党の中村さと美議員が住まいの防犯対策補助金や学童保育の支援、学校体育館・給食室の空調設置の拡充などを評価して賛成しました。反対討論はなく、42議案の一括採決で異議なく全会一致で可決されました。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（市長の施政方針・予算の大要）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187938&HATSUGENMODE=1",
      },
      {
        label: "2月21日本会議録（議案第44号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187948&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（総括質疑・新風会 青柳隆議員）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187989&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（青柳隆議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187990&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（林恒徳議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187994&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（逆瀬川義久議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188002&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（荒木征二議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188006&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（委員会付託）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188011&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（市民経済常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190035&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（子育て支援・定住人口増加対策特別委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190037&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（都市集客施設整備特別委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190038&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（新風会 青木和也議員の賛成討論）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190040&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（公明党 中村さと美議員の賛成討論）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190042&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-45": {
    plain: [
      "自営業の人や退職した人などが入る国民健康保険の、令和7年度のお金の計画です。加入する人が減っているため、保険税の収入は前の年度より少なく見込んでいます。",
    ],
    detailed: [
      "国民健康保険事業特別会計予算です。歳入の国民健康保険税は61億5,688万7,000円で、被保険者数の減により前年度より8,453万2,000円減。一般会計からの繰入金は22億9,234万円、国民健康保険基金からの繰入金は13億3,741万9,000円です。",
      "歳出は保険給付費（過去の実績や伸び率を勘案）、県へ納める国民健康保険事業費納付金（県から示された額）、特定健康診査・特定保健指導、人間ドックの検診費補助などです。出産育児一時金は1件50万円、葬祭費は1件5万円で計上しています。教育福祉・市民経済の両常任委員会に所管部分ごとに付託されました。",
    ],
    discussion: {
      plain: [
        "2月25日の総括質疑や委員長報告で、この会計を取り上げた個別の質疑は紹介されていません。両委員会とも全会一致で、本会議でも全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に財務部長が議案第45〜50号を一括して提案説明しました。市長は2月20日の施政方針で、被保険者数や医療費の動向に応じた保険給付費を計上したと述べています。2月25日の総括質疑でこの会計を直接取り上げた質疑はありませんでした。",
        "3月18日の教育福祉・市民経済の両常任委員会の委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月20日本会議録（市長の施政方針・予算の大要）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187938&HATSUGENMODE=1",
      },
      {
        label: "2月21日本会議録（議案第45〜50号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187953&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（市民経済常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190035&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-46": {
    plain: [
      "介護保険の令和7年度のお金の計画です。お年寄りが増え、介護サービスを使う人が増えることに合わせて、サービスに払うお金を増やしています。",
    ],
    detailed: [
      "介護保険特別会計予算です。財源は、65歳以上の第1号被保険者の保険料（標準給付費等の23％）、40〜64歳の第2号被保険者分として社会保険診療報酬支払基金から交付される27％、国（居宅給付20％・施設等給付15％の負担金と調整交付金）、県（居宅給付12.5％・施設等給付17.5％）、市の一般会計（標準給付費の12.5％など）の法定負担で構成されます。一般会計からの繰出金は58億326万1,000円です。",
      "歳出は要介護・要支援認定者への保険給付費のほか、地域支援事業として高齢者あんしんセンターの運営、高齢者福祉なんでも相談センター、認知症の早期対応・予防を目的とした農業体験バスツアー、成年後見制度の利用支援、配食サービスなどの経費を計上しています。教育福祉常任委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "介護保険の給付が増える理由が質問されました。市長は、お年寄りの人口が増え、特に団塊の世代が75歳以上になったことや、介護報酬の引上げが大きな理由だと答えました。全会一致で可決されました。",
      ],
      detailed: [
        "2月25日の総括質疑で市民クラブの林恒徳議員がサービス給付費等の増額の実情を質問。市長は、65歳以上の高齢者人口の増加、中でも団塊の世代が75歳以上となったことによる利用者の増加と、令和6年度に実施された介護報酬の増額改定が大きな要因と答弁しました。本市の介護保険事業は、サービスを提供する事業者数や利用者1人当たりのサービス給付費で、全国の中核市や県内他市と比べ上位にあるとの認識も示しています。",
        "3月18日の教育福祉常任委員会の委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第45〜50号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187953&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（総括質疑・市民クラブ 林恒徳議員）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187993&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（林恒徳議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187994&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-47": {
    plain: [
      "吉井地域にある宿泊などができる施設「牛伏ドリームセンター」を運営するための、令和7年度のお金の計画です。",
    ],
    detailed: [
      "牛伏ドリームセンター事業特別会計予算です。歳入は宿泊・休憩等の施設使用料、一般会計からの繰入金、食堂・売店・自動販売機等の売上金が主な内容です。一般会計の予算説明では、施設管理費分の繰出金を8,242万7,000円としています。",
      "歳出は職員人件費と施設の維持管理・運営経費、一時借入金の利子で、予備費は200万円です。総務常任委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "総括質疑や委員長報告で、この会計を取り上げた個別の質疑は紹介されていません。全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に財務部長が議案第45〜50号を一括して提案説明しました。2月25日の総括質疑でこの会計を直接取り上げた質疑はありませんでした。",
        "3月18日の総務常任委員会の委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第44号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187948&HATSUGENMODE=1",
      },
      {
        label: "2月21日本会議録（議案第45〜50号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187953&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（総務常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190033&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-48": {
    plain: [
      "ひとり親の家庭などに、子どもの進学や生活のためのお金を貸す制度の、令和7年度のお金の計画です。",
    ],
    detailed: [
      "母子父子寡婦福祉資金貸付事業特別会計予算です。歳入は母子福祉資金貸付金元利収入など貸付事業収入3,409万9,000円、一般会計からの事務費繰入金、繰越金6,782万2,000円です。",
      "歳出は事務経費、貸付金2,383万9,000円、国への償還元金、一般会計への繰出金です。教育福祉常任委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "総括質疑や委員長報告で、この会計を取り上げた個別の質疑は紹介されていません。全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に財務部長が議案第45〜50号を一括して提案説明しました。2月25日の総括質疑でこの会計を直接取り上げた質疑はありませんでした。",
        "3月18日の教育福祉常任委員会の委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第45〜50号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187953&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（教育福祉常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190034&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-49": {
    plain: [
      "75歳以上の人などが入る後期高齢者医療制度について、市が保険料を集めて県の広域連合に納めるための、令和7年度のお金の計画です。",
    ],
    detailed: [
      "後期高齢者医療特別会計予算です。歳入は保険料の収入見込額と、一般会計からの繰入金13億1,606万4,000円（事務費分・保険基盤安定分）、人間ドックの検診費補助に対する県後期高齢者医療広域連合からの補助金等です。",
      "歳出は、徴収した保険料と保険料軽減額相当分を群馬県後期高齢者医療広域連合へ納める納付金、保険料徴収の経費、人間ドックの検診費補助などです。市民経済常任委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "総括質疑や委員長報告で、この会計を取り上げた個別の質疑は紹介されていません。全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に財務部長が議案第45〜50号を一括して提案説明しました。2月25日の総括質疑でこの会計を直接取り上げた質疑はありませんでした。",
        "3月18日の市民経済常任委員会の委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第45〜50号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187953&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（市民経済常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190035&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-50": {
    plain: [
      "農村の集落で使う下水処理施設（農業集落排水）を管理するための、令和7年度のお金の計画です。一部の地区の管を公共下水道につなぐための調査も行います。",
    ],
    detailed: [
      "農業集落排水事業特別会計予算です。歳入は分担金、施設使用料、県補助金、歳入歳出の不足額を補う一般会計からの繰入金などです。",
      "歳出は職員人件費と楽間・行力、富岡、善地、蟹沢の各地区の処理場等の維持管理費のほか、楽間・行力地区内の管路を公共下水道に接続するための現況調査委託（県補助の対象）、公債費などで、予備費は100万円です。市民経済常任委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "総括質疑や委員長報告で、この会計を取り上げた個別の質疑は紹介されていません。全会一致で可決されました。",
      ],
      detailed: [
        "2月21日に財務部長が議案第45〜50号を一括して提案説明しました。2月25日の総括質疑でこの会計を直接取り上げた質疑はありませんでした。",
        "3月18日の市民経済常任委員会の委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で原案のとおり可決すべきものと報告しています。3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第45〜50号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187953&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（市民経済常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190035&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-51": {
    plain: [
      "水道事業の令和7年度の収入と支出の計画です。水道料金などの収入で運営し、古い水道管を地震に強い管に替える工事などを進めます。",
    ],
    detailed: [
      "水道事業会計予算です。収益的収入は水道事業収益71億3,323万6,000円（うち給水収益61億870万3,000円）と簡易水道事業収益1億46万7,000円、収益的支出は水道事業費用63億4,716万2,000円と簡易水道事業費用1億5,932万4,000円です。",
      "資本的収入は水道事業12億1,560万4,000円・簡易水道事業8,695万4,000円、資本的支出は水道事業38億489万8,000円・簡易水道事業1億697万4,000円。配水管の複線化や耐震化など総延長約7.7キロメートルの管網整備と、約0.9キロメートルの配水設備整備拡張、浄水施設の更新工事などを行います。建設水道常任委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "老朽化した水道管への対策が質問され、市は耐震管への計画的な更新を続けると答えました。委員会では、水道メーターを交換するときに漏水がないかを音で調べる調査を約2万6,000件行う予定と説明されました。全会一致で可決されました。",
      ],
      detailed: [
        "2月25日の総括質疑で林恒徳議員（市民クラブ）は老朽管・耐震対策を質問し、市長は日常的な管路パトロールや漏水調査と、計画的・効率的な耐震管による更新を続けると答弁。逆瀬川義久議員（公明党）への答弁でも、水道では老朽管の布設替えなど計画的な更新を行うとしました。荒木征二議員（たかさき未来）の上下水道経営に関する質問には、水道料金収入は年度によって増える年もあるものの、10年前と比べて緩やかな減少傾向にあると答えています。",
        "3月18日の建設水道常任委員長報告では、検定満期時漏水調査について、水道メーターは7年間使用した時点で交換しており、その際に水道メーターから本管側の漏水を見つけるため音聴調査を行うもので、令和7年度は約2万6,000件を予定しているとの答弁が紹介されました。委員会は起立採決で全会一致で可決すべきものとしています。",
        "3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第51号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187955&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（林恒徳議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187994&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（逆瀬川義久議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188002&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（荒木征二議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188006&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-52": {
    plain: [
      "公共下水道事業の令和7年度の収入と支出の計画です。下水道使用料などの収入で運営し、新しい下水道管の整備や古い管の補修などを行います。",
    ],
    detailed: [
      "公共下水道事業会計予算です。収益的収入は下水道事業収益79億8,710万9,000円（うち下水道使用料43億59万8,000円）、収益的支出は下水道事業費用77億853万5,000円です。",
      "資本的収入は27億8,257万6,000円、資本的支出は69億7,926万5,000円。面積約37ヘクタール、管渠延長約9,000メートルの管渠布設、雨水管渠布設、ポンプ場建設、各処理場の設備更新や老朽化した管渠の更生工事、県央水質浄化センターの建設改良負担金などを計上しています。建設水道常任委員会に付託されました。",
    ],
    discussion: {
      plain: [
        "埼玉県八潮市の道路陥没事故を受けて、下水道管の点検や補修、下水道事業のお金のやりくりが質問されました。市は、緊急点検で急いで直す必要のある傷みはなかったと説明し、計画的に古い管を補修していくと答えました。全会一致で可決されました。",
      ],
      detailed: [
        "2月25日の総括質疑で林恒徳議員（市民クラブ）は下水管の更生工事を質問し、市長は目視やカメラ調査などで点検し、必要と判断した下水道管内に新たな管を挿入する更生工事を行うと答弁しました。逆瀬川義久議員（公明党）への答弁では、八潮市の事故を受けて4日間にわたり延べ24名の職員で下水道の緊急点検を行い、緊急対応が必要な損傷箇所はなかったと説明しています。",
        "荒木征二議員（たかさき未来）は、下水道事業のキャッシュフローが悪化し資金が不足するおそれを指摘して経営方針を質問。市長は、加入世帯の増加で収入は微増傾向にあるものの資金残高は減少傾向にあるため、計画的な更新や維持管理の予算を確保しつつ財政運営の健全化に努めると答弁しました。",
        "3月18日の建設水道常任委員長報告は本議案の個別の質疑を紹介しておらず、起立採決の結果、全会一致で可決すべきものと報告しています。3月18日の本会議では、議案第2〜7号と第17〜52号の42議案を一括して採決し、議長が異議の有無を諮って異議なしとなり、全会一致で原案のとおり可決されました。この日の討論は、新風会の青木和也議員と公明党の中村さと美議員が予算と関係議案全体に賛成する討論を行い、反対討論はありませんでした。",
      ],
    },
    sources: [
      {
        label: "2月21日本会議録（議案第52号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2051&HUID=187957&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（総括質疑・市民クラブ 林恒徳議員）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187993&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（林恒徳議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=187994&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（逆瀬川義久議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188002&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（総括質疑・たかさき未来 荒木征二議員）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188005&HATSUGENMODE=1",
      },
      {
        label: "2月25日本会議録（荒木征二議員への市長答弁）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2052&HUID=188006&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（建設水道常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190036&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（42議案の一括採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190044&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-53": {
    plain: [
      "令和6年度の一般会計に約3億円を追加する、年度末の補正予算です。退職する職員の退職手当や、企業や市民からの寄附を基金に積み立てる費用などが中心です。",
    ],
    detailed: [
      "令和6年度一般会計補正予算（第9号）は、歳入歳出にそれぞれ2億9,843万円を追加し、総額を1,834億9,995万9,000円とする内容です。歳出は、退職予定者の増加による退職手当（教育関係職員分を含む）の増額、ファームランド株式会社、生活協同組合コープぐんま、株式会社ハイパーソフトからの企業版ふるさと納税の企業版ふるさと納税基金への積立て、市民からの寄附のこども基金への積立て、過年度の国・県支出金の精算による返還金、群馬学校給食センターの排水処理施設の修繕費です。",
      "歳入は新型コロナウイルス感染症対策地方税減収補填特別交付金と寄附金を計上し、財政調整基金繰入金で差引きを調整します。繰越明許費の追加が1件あります。",
    ],
    discussion: {
      plain: [
        "最終日の3月18日に提出され、質疑・討論の発言はなく、委員会での審査を省略して全会一致で可決されました。",
      ],
      detailed: [
        "3月18日に財務部長が提案理由を説明しました。議長が質疑を募りましたが発言は記録されておらず、会議規則第36条第3項により委員会付託を省略することに異議はありませんでした。討論の発言もなく、異議なしで全会一致の可決となりました。",
      ],
    },
    sources: [
      {
        label: "3月18日本会議録（議案第53号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190056&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（議案第53号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190059&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-54": {
    plain: [
      "市のお金の使い方などを調べる監査委員に、南雲孝志さんを選ぶことに議会の同意を求める議案です。",
    ],
    detailed: [
      "議案第54号の候補者は南雲孝志さんです。令和7年3月31日に任期満了となる監査委員・小泉貴代子さんの後任として提案されました。副市長は、昭和57年に高崎市職員となり健康課長、保育課長、財政課長、財務部長などを歴任して令和5年3月に定年退職し、現在は公益財団法人高崎財団の専務理事を務める経歴を挙げ、豊富な行政経験から適任と説明しました。",
    ],
    discussion: {
      plain: [
        "3月18日の本会議では質疑・討論の発言はなく、委員会での審査を省略して全会一致で同意しました。",
      ],
      detailed: [
        "副市長が提案理由を説明しました。本会議に質疑の発言はなく、委員会付託を省略。討論の発言もなく、同意することに異議なしとして全会一致で同意しました。",
      ],
    },
    sources: [
      {
        label: "3月18日本会議録（議案第54号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190062&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（議案第54号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190065&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-55": {
    plain: [
      "人権擁護委員として、倉渕町の原田昌一さんを引き続き候補者に推薦することに議会の同意を求める議案です。",
    ],
    detailed: [
      "議案第55号の候補者は原田昌一さんです。令和7年6月30日の任期満了に伴う再推薦です。副市長は、太陽誘電株式会社に平成24年3月まで勤めた経歴、川浦小学校PTA会長や倉渕地域審議会委員などの地域活動、平成25年4月からの人権擁護委員の活動を紹介しました。",
    ],
    discussion: {
      plain: [
        "3月18日の本会議では質疑・討論の発言はなく、委員会での審査を省略して全会一致で同意しました。",
      ],
      detailed: [
        "副市長が議案第55〜57号を一括して提案説明しました。本会議に質疑・討論の発言はなく、委員会付託を省略。3議案を一括して採決し、異議なしとして全会一致で同意しました。",
      ],
    },
    sources: [
      {
        label: "3月18日本会議録（議案第55〜57号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190068&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（議案第55〜57号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190071&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-56": {
    plain: [
      "人権擁護委員として、元小学校長の阿久津正一さんを引き続き候補者に推薦することに議会の同意を求める議案です。",
    ],
    detailed: [
      "議案第56号の候補者は阿久津正一さんです。令和7年6月30日の任期満了に伴う再推薦です。副市長は、中学校教諭として勤務し金古小学校長・豊岡小学校長などを歴任して平成27年3月に退職した経歴、平成29年4月から2年間の高崎市教育センター適応指導教室での不登校の児童・生徒の相談、令和元年7月からの人権擁護委員の活動を紹介しました。",
    ],
    discussion: {
      plain: [
        "3月18日の本会議では質疑・討論の発言はなく、委員会での審査を省略して全会一致で同意しました。",
      ],
      detailed: [
        "副市長が議案第55〜57号を一括して提案説明しました。本会議に質疑・討論の発言はなく、委員会付託を省略。3議案を一括して採決し、異議なしとして全会一致で同意しました。",
      ],
    },
    sources: [
      {
        label: "3月18日本会議録（議案第55〜57号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190068&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（議案第55〜57号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190071&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-gian-57": {
    plain: [
      "人権擁護委員として、元幼稚園教諭の大久保康子さんを引き続き候補者に推薦することに議会の同意を求める議案です。",
    ],
    detailed: [
      "議案第57号の候補者は大久保康子さんです。令和7年6月30日の任期満了に伴う再推薦です。副市長は、幼稚園教諭として高崎幼稚園教頭・吉井幼稚園教頭などを歴任して平成28年3月に退職した経歴、その後5年間の高崎市こども発達支援センターでの勤務、令和4年7月からの人権擁護委員の活動を紹介しました。",
    ],
    discussion: {
      plain: [
        "3月18日の本会議では質疑・討論の発言はなく、委員会での審査を省略して全会一致で同意しました。",
      ],
      detailed: [
        "副市長が議案第55〜57号を一括して提案説明しました。本会議に質疑・討論の発言はなく、委員会付託を省略。3議案を一括して採決し、異議なしとして全会一致で同意しました。",
      ],
    },
    sources: [
      {
        label: "3月18日本会議録（議案第55〜57号の提案説明）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190068&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（議案第55〜57号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190071&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-seigan-1": {
    plain: [
      "結婚した夫婦が、同じ名字にするか、それぞれ結婚前の名字のままにするかを選べる「選択的夫婦別姓制度」をすぐに導入するよう国会で審議することを求める意見書を、国に出してほしいという請願です。",
      "新日本婦人の会高崎支部から出されました。市民経済委員会で審査され、本会議では賛成少数で不採択となりました。",
    ],
    detailed: [
      "請願者は新日本婦人の会高崎支部代表者の戸川節子さん、紹介議員は伊藤敦博・金子和幸の両議員で、令和7年2月13日に受理されました。要旨では、婚姻の際96％が夫の姓になっていること、通称使用では法的根拠がなく根本的解決にならないこと、国連の女性差別撤廃委員会が民法第750条の改正を繰り返し勧告していること、2024年6月に日本経済団体連合会が導入を求める提言を発表したことなどを挙げ、地方自治法第99条に基づく意見書の提出を求めています。",
      "2月20日に市民経済常任委員会へ付託され、3月11日の審査で「願意の趣旨に沿いかねる」として起立採決の結果、賛成少数で不採択とすべきものと決しました。",
    ],
    discussion: {
      plain: [
        "委員会では、経済界も導入を求め、国連も勧告しているという賛成の意見と、子どもへの影響が十分議論されていない、今の国会の議論の結果を見てからでもよいという反対の意見がありました。",
        "本会議では紹介議員の伊藤敦博議員が賛成討論、新倉哲郎議員が反対討論を行い、起立採決で賛成少数となり不採択になりました。",
      ],
      detailed: [
        "3月18日の市民経済常任委員長報告は、採択に賛成する意見として、経団連が2024年6月に制度の早期実現を求める提言を出したこと、ジェンダーギャップ指数で日本が146か国中118位であること、国連の女性差別撤廃委員会が最重要項目の一つとして導入を求めていることを紹介。反対の意見として、最も影響を受ける子どもの視点がほとんど議論されていない、家族の在り方は長年育んできた歴史的な形で大事にすべきだという意見、政府与党でも話合いが始まっており今国会の議論の結果を見てからの検討でよいという意見を紹介しています。報告中の意見は発言者名を特定していません。",
        "本会議では伊藤敦博議員が、別姓は強制ではなく選択の自由を認める制度であり、同姓を強いられて不利益を受けているのはほとんどが女性だとして賛成討論を行いました。新倉哲郎議員は、子どもの姓をめぐる争いや心理的影響、旧姓の通称使用が広く認められていること、海外の実情、夫婦同姓と日本の歴史・文化の4点を挙げ、委員長報告に賛成し請願に反対する討論を行いました。両議員とも会派を代表するとの発言はありません。",
        "委員長報告が不採択のため原案（採択）について起立採決を行い、起立少数で不採択と決しました。",
      ],
    },
    submittedBy: ["新日本婦人の会 高崎支部 代表者 戸川節子"],
    introductionMembers: ["伊藤敦博", "金子和幸"],
    sources: [
      {
        label: "2月20日本会議録（請願第1号の付託・請願文書表）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2050&HUID=187935&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（請願第1号の市民経済常任委員長報告）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190047&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（伊藤敦博議員の賛成討論）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190049&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（新倉哲郎議員の反対討論）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190051&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（請願第1号の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190053&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-giinteishutsu-1": {
    plain: [
      "本会議の開き方や議事の進め方など、議会の会議のルールを定めた「高崎市議会会議規則」を改正する、議員が提出した議案です。",
    ],
    detailed: [
      "議員提出第1号議案は高崎市議会会議規則の一部改正です。同じ日に委員会条例（第2号）と議会の個人情報保護条例（第3号）の改正もあわせて提出されました。本会議では提出者の説明が省略されたため、会議録からは具体的な改正内容と提出者を確認できません。",
    ],
    discussion: {
      plain: [
        "3月18日の本会議では、提出者の説明と委員会での審査を省略しました。質疑・討論の発言はなく、反対の声はなく原案のとおり可決されました。",
      ],
      detailed: [
        "3月18日の本会議で議員提出第1〜3号議案を一括して議題とし、会議規則第36条第3項により提出者の説明と委員会付託を省略することに異議はありませんでした。議長が質疑・討論を募りましたが発言は記録されていません。3議案を一括して採決し、原案のとおり決することに異議なしとして可決されました。会議録には改正内容の説明がなく、この本会議で改正の中身や理由は語られていません。",
      ],
    },
    sources: [
      {
        label: "3月18日本会議録（議員提出第1〜3号議案の議題・質疑・討論）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190089&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（議員提出第1〜3号議案の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190091&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-giinteishutsu-2": {
    plain: [
      "議会の常任委員会や特別委員会などの仕組みを定めた「高崎市議会委員会条例」を改正する、議員が提出した議案です。",
    ],
    detailed: [
      "議員提出第2号議案は高崎市議会委員会条例の一部改正です。第1号（会議規則）・第3号（個人情報保護条例）とともに一括で審議されました。本会議では提出者の説明が省略されたため、会議録からは具体的な改正内容と提出者を確認できません。",
    ],
    discussion: {
      plain: [
        "3月18日の本会議では、提出者の説明と委員会での審査を省略しました。質疑・討論の発言はなく、反対の声はなく原案のとおり可決されました。",
      ],
      detailed: [
        "3月18日の本会議で議員提出第1〜3号議案を一括して議題とし、会議規則第36条第3項により提出者の説明と委員会付託を省略することに異議はありませんでした。議長が質疑・討論を募りましたが発言は記録されていません。3議案を一括して採決し、原案のとおり決することに異議なしとして可決されました。会議録には改正内容の説明がなく、この本会議で改正の中身や理由は語られていません。",
      ],
    },
    sources: [
      {
        label: "3月18日本会議録（議員提出第1〜3号議案の議題・質疑・討論）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190089&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（議員提出第1〜3号議案の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190091&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
  "r7-1-giinteishutsu-3": {
    plain: [
      "市議会が持っている個人の情報の扱い方を定めた「高崎市議会個人情報保護条例」を改正する、議員が提出した議案です。",
    ],
    detailed: [
      "議員提出第3号議案は高崎市議会個人情報保護条例の一部改正です。第1号（会議規則）・第2号（委員会条例）とともに一括で審議されました。本会議では提出者の説明が省略されたため、会議録からは具体的な改正内容と提出者を確認できません。",
    ],
    discussion: {
      plain: [
        "3月18日の本会議では、提出者の説明と委員会での審査を省略しました。質疑・討論の発言はなく、反対の声はなく原案のとおり可決されました。",
      ],
      detailed: [
        "3月18日の本会議で議員提出第1〜3号議案を一括して議題とし、会議規則第36条第3項により提出者の説明と委員会付託を省略することに異議はありませんでした。議長が質疑・討論を募りましたが発言は記録されていません。3議案を一括して採決し、原案のとおり決することに異議なしとして可決されました。会議録には改正内容の説明がなく、この本会議で改正の中身や理由は語られていません。",
      ],
    },
    sources: [
      {
        label: "3月18日本会議録（議員提出第1〜3号議案の議題・質疑・討論）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190089&HATSUGENMODE=1",
      },
      {
        label: "3月18日本会議録（議員提出第1〜3号議案の採決）",
        url: "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190091&HATSUGENMODE=1",
      },
      {
        label: "令和7年第1回定例会 議案等審議結果一覧（高崎市）",
        url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
      },
    ],
  },
};
