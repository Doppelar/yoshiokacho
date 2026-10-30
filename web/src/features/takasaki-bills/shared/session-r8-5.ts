import type { TakasakiCouncilMember, TakasakiSession } from "./types";

/**
 * 令和8年第5回高崎市議会定例会（令和8年9月4日〜9月29日）
 *
 * 出典：高崎市議会「議案等の審議結果」
 * https://www.city.takasaki.gunma.jp/site/gikai/2436.html
 * 件名・付託委員会・議決結果・賛否は公式PDFの記載どおり。
 */

export const TAKASAKI_R8_5_SOURCE_URL =
  "https://www.city.takasaki.gunma.jp/uploaded/attachment/44015.pdf";

/** 賛否一覧表の会派・議員（表の並び順）。議長は採決に加わらない。 */
export const TAKASAKI_R8_5_MEMBERS: readonly TakasakiCouncilMember[] = [
  ...[
    "渡辺隆宏",
    "高橋淳",
    "樋口哲郎",
    "大河原吉明",
    "青木和也",
    "後藤彰",
    "時田裕之",
    "青柳隆",
    "根岸赴夫",
    "渡辺幹治",
    "白石隆夫",
    "長壁真樹",
    "大竹隆一",
    "松本賢一",
    "石川徹",
    "後閑賢二",
    "丸山和久",
    "柴田和正",
  ].map((name) => ({ name, faction: "新風会" })),
  ...["横田卓也", "三井暢秀", "中島輝男", "林恒徳", "堀口順", "高橋美奈雄"].map(
    (name) => ({ name, faction: "市民クラブ" })
  ),
  ...["中村さと美", "小野聡子", "新保克佳", "丸山覚", "逆瀬川義久"].map(
    (name) => ({ name, faction: "公明党" })
  ),
  ...["宮原田綾香", "荒木征二", "三島久美子"].map((name) => ({
    name,
    faction: "たかさき未来",
  })),
  ...["新倉哲郎", "角倉邦良", "谷川留美子"].map((name) => ({
    name,
    faction: "超党派の会",
  })),
  ...["金子和幸", "伊藤敦博"].map((name) => ({
    name,
    faction: "日本共産党",
  })),
  { name: "柄沢高男", faction: "無所属" },
];

export const TAKASAKI_R8_5_CHAIR = "長壁真樹";

const SHINPU_KAI_VOTERS = TAKASAKI_R8_5_MEMBERS.filter(
  (member) => member.faction === "新風会" && member.name !== TAKASAKI_R8_5_CHAIR
).map((member) => member.name);

export const TAKASAKI_SESSION_R8_5: TakasakiSession = {
  id: "r8-5",
  name: "令和8年第5回定例会",
  period: "令和8年9月4日〜9月29日",
  sourceUrl: TAKASAKI_R8_5_SOURCE_URL,
  members: TAKASAKI_R8_5_MEMBERS,
  chair: TAKASAKI_R8_5_CHAIR,
  items: [
    {
      id: "hokoku-10",
      kind: "報告",
      number: 10,
      title: "専決処分の報告について",
      committee: null,
      result: null,
    },
    {
      id: "gian-92",
      kind: "議案",
      number: 92,
      title: "令和7年度高崎市一般会計及び特別会計歳入歳出決算認定について",
      committee: "4常任委員会（子育て支援・環境施設・都市集客）",
      result: "認定",
      rollCall: { against: ["金子和幸", "伊藤敦博"] },
    },
    {
      id: "gian-93",
      kind: "議案",
      number: 93,
      title:
        "令和7年度高崎市水道事業会計及び高崎市公共下水道事業会計利益の処分及び決算認定について",
      committee: "建設水道",
      result: "原案可決及び認定",
    },
    {
      id: "gian-94",
      kind: "議案",
      number: 94,
      title: "市道路線の認定について",
      committee: null,
      result: "原案可決",
    },
    {
      id: "gian-95",
      kind: "議案",
      number: 95,
      title:
        "請負契約締結について（高崎市総合保健センター・高崎市立中央図書館LED照明更新工事）",
      committee: "教育福祉",
      result: "原案可決",
    },
    {
      id: "gian-96",
      kind: "議案",
      number: 96,
      title: "土地取得について",
      committee: "環境施設",
      result: "原案可決",
    },
    {
      id: "gian-97",
      kind: "議案",
      number: 97,
      title: "財産の取得について（小型バス）",
      committee: "市民経済",
      result: "原案可決",
    },
    {
      id: "gian-98",
      kind: "議案",
      number: 98,
      title: "高崎市認可地縁団体印鑑条例の一部改正について",
      committee: "総務",
      result: "原案可決",
    },
    {
      id: "gian-99",
      kind: "議案",
      number: 99,
      title:
        "高崎市認定こども園の認定に関する要件を定める条例の一部改正について",
      committee: "教育福祉",
      result: "原案可決",
    },
    {
      id: "gian-100",
      kind: "議案",
      number: 100,
      title:
        "高崎市幼保連携型認定こども園の学級の編制、職員、設備及び運営に関する基準を定める条例の一部改正について",
      committee: "教育福祉",
      result: "原案可決",
    },
    {
      id: "gian-101",
      kind: "議案",
      number: 101,
      title:
        "高崎市家庭的保育事業等の設備及び運営に関する基準を定める条例の一部改正について",
      committee: "教育福祉",
      result: "原案可決",
    },
    {
      id: "gian-102",
      kind: "議案",
      number: 102,
      title:
        "高崎市乳児等通園支援事業の設備及び運営に関する基準を定める条例の一部改正について",
      committee: "教育福祉",
      result: "原案可決",
    },
    {
      id: "gian-103",
      kind: "議案",
      number: 103,
      title:
        "高崎市一時保護委託者の登録等に関する基準を定める条例の制定について",
      committee: "子育て支援",
      result: "原案可決",
    },
    {
      id: "gian-104",
      kind: "議案",
      number: 104,
      title:
        "高崎市児童福祉施設の設備及び運営に関する基準を定める条例の一部改正について",
      committee: "教育福祉",
      result: "原案可決",
    },
    {
      id: "gian-105",
      kind: "議案",
      number: 105,
      title:
        "高崎市指定通所支援の事業等の人員、設備及び運営に関する基準を定める条例の一部改正について",
      committee: "教育福祉",
      result: "原案可決",
    },
    {
      id: "gian-106",
      kind: "議案",
      number: 106,
      title:
        "高崎市指定障害児入所施設等の人員、設備及び運営に関する基準を定める条例の一部改正について",
      committee: "教育福祉",
      result: "原案可決",
    },
    {
      id: "gian-107",
      kind: "議案",
      number: 107,
      title:
        "高崎市廃棄物の処理及び清掃に関する条例及び高崎市ごみ処理施設及び一般廃棄物の最終処分場に係る生活環境影響調査結果の縦覧等の手続に関する条例の一部改正について",
      committee: "市民経済",
      result: "原案可決",
    },
    {
      id: "gian-108",
      kind: "議案",
      number: 108,
      title: "からすがわフルーツテラス設置及び管理に関する条例の制定について",
      committee: "市民経済",
      result: "原案可決",
      rollCall: { against: ["金子和幸", "伊藤敦博"] },
    },
    {
      id: "gian-109",
      kind: "議案",
      number: 109,
      title: "高崎市景観条例の一部改正について",
      committee: "建設水道",
      result: "原案可決",
    },
    {
      id: "gian-110",
      kind: "議案",
      number: 110,
      title:
        "高崎市水道事業、簡易水道事業及び公共下水道事業の設置等に関する条例の一部改正について",
      committee: "建設水道",
      result: "原案可決",
    },
    {
      id: "gian-111",
      kind: "議案",
      number: 111,
      title: "令和8年度高崎市一般会計補正予算（第4号）",
      committee: "4常任委員会",
      result: "原案可決",
    },
    {
      id: "gian-112",
      kind: "議案",
      number: 112,
      title: "令和8年度高崎市介護保険特別会計補正予算（第1号）",
      committee: "教育福祉",
      result: "原案可決",
    },
    {
      id: "gian-113",
      kind: "議案",
      number: 113,
      title: "令和8年度高崎市農業集落排水事業特別会計補正予算（第1号）",
      committee: "市民経済",
      result: "原案可決",
    },
    {
      id: "gian-114",
      kind: "議案",
      number: 114,
      title:
        "校外学習中の事故に係る損害賠償に関する和解及びその損害賠償の額を定めることについて",
      committee: null,
      result: "原案可決",
    },
    {
      id: "gian-115",
      kind: "議案",
      number: 115,
      title: "高崎市教育委員会委員の任命同意について",
      committee: null,
      result: "同意",
    },
    {
      id: "gian-116",
      kind: "議案",
      number: 116,
      title: "高崎市教育委員会委員の任命同意について",
      committee: null,
      result: "同意",
    },
    {
      id: "gian-117",
      kind: "議案",
      number: 117,
      title: "人権擁護委員候補者の推薦について",
      committee: null,
      result: "同意",
    },
    {
      id: "gian-118",
      kind: "議案",
      number: 118,
      title: "人権擁護委員候補者の推薦について",
      committee: null,
      result: "同意",
    },
    {
      id: "gian-119",
      kind: "議案",
      number: 119,
      title: "人権擁護委員候補者の推薦について",
      committee: null,
      result: "同意",
    },
    {
      id: "seigan-1",
      kind: "請願",
      number: 1,
      title:
        "日本政府に「核兵器禁止条約再検討会議」へのオブザーバー参加と非核三原則の堅持を求める意見書の採択について",
      committee: "総務",
      result: "不採択",
      rollCall: {
        against: [
          ...SHINPU_KAI_VOTERS,
          "横田卓也",
          "三井暢秀",
          "林恒徳",
          "堀口順",
          "高橋美奈雄",
          "中村さと美",
          "小野聡子",
          "新保克佳",
          "丸山覚",
          "逆瀬川義久",
          "新倉哲郎",
          "谷川留美子",
          "柄沢高男",
        ],
      },
    },
    {
      id: "ikensho-1",
      kind: "意見書案",
      number: 1,
      title: "核兵器禁止条約第1回再検討会議へのオブザーバー参加を求める意見書",
      committee: null,
      result: "原案可決",
      rollCall: { against: [...SHINPU_KAI_VOTERS, "柄沢高男"] },
    },
  ],
};
