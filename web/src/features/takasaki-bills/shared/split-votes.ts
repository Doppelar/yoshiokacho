import type { TakasakiSplitVoteRecord, TakasakiVoteRoster } from "./types";

/**
 * 議員別賛否を転記していない会期の、採決時点の議員名簿と会派
 * （市の公式「議案等審議結果一覧」の議員別賛否一覧表から）
 */
export const TAKASAKI_VOTE_ROSTERS: Readonly<
  Partial<Record<string, TakasakiVoteRoster>>
> = {
  "r7-1": {
    chair: "後閑賢二",
    members: [
      {
        name: "渡辺隆宏",
        faction: "新風会",
      },
      {
        name: "高橋淳",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "青柳隆",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "松本賢一",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
        faction: "新風会",
      },
      {
        name: "石川徹",
        faction: "新風会",
      },
      {
        name: "後閑賢二",
        faction: "新風会",
      },
      {
        name: "丸山和久",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "横田卓也",
        faction: "市民クラブ",
      },
      {
        name: "三井暢秀",
        faction: "市民クラブ",
      },
      {
        name: "中島輝男",
        faction: "市民クラブ",
      },
      {
        name: "林恒徳",
        faction: "市民クラブ",
      },
      {
        name: "堀口順",
        faction: "市民クラブ",
      },
      {
        name: "高橋美奈雄",
        faction: "市民クラブ",
      },
      {
        name: "中村さと美",
        faction: "公明党",
      },
      {
        name: "小野聡子",
        faction: "公明党",
      },
      {
        name: "新保克佳",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "宮原田綾香",
        faction: "たかさき未来",
      },
      {
        name: "荒木征二",
        faction: "たかさき未来",
      },
      {
        name: "三島久美子",
        faction: "たかさき未来",
      },
      {
        name: "新倉哲郎",
        faction: "超党派の会",
      },
      {
        name: "角倉邦良",
        faction: "超党派の会",
      },
      {
        name: "谷川留美子",
        faction: "超党派の会",
      },
      {
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
    ],
    source: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
    },
  },
  "r7-4": {
    chair: "根岸赴夫",
    members: [
      {
        name: "渡辺隆宏",
        faction: "新風会",
      },
      {
        name: "高橋淳",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "青柳隆",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "松本賢一",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
        faction: "新風会",
      },
      {
        name: "石川徹",
        faction: "新風会",
      },
      {
        name: "後閑賢二",
        faction: "新風会",
      },
      {
        name: "丸山和久",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "横田卓也",
        faction: "市民クラブ",
      },
      {
        name: "三井暢秀",
        faction: "市民クラブ",
      },
      {
        name: "中島輝男",
        faction: "市民クラブ",
      },
      {
        name: "林恒徳",
        faction: "市民クラブ",
      },
      {
        name: "堀口順",
        faction: "市民クラブ",
      },
      {
        name: "高橋美奈雄",
        faction: "市民クラブ",
      },
      {
        name: "中村さと美",
        faction: "公明党",
      },
      {
        name: "小野聡子",
        faction: "公明党",
      },
      {
        name: "新保克佳",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "宮原田綾香",
        faction: "たかさき未来",
      },
      {
        name: "荒木征二",
        faction: "たかさき未来",
      },
      {
        name: "三島久美子",
        faction: "たかさき未来",
      },
      {
        name: "新倉哲郎",
        faction: "超党派の会",
      },
      {
        name: "角倉邦良",
        faction: "超党派の会",
      },
      {
        name: "谷川留美子",
        faction: "超党派の会",
      },
      {
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
    ],
    source: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36514.pdf",
    },
  },
  "r7-5": {
    chair: "根岸赴夫",
    members: [
      {
        name: "渡辺隆宏",
        faction: "新風会",
      },
      {
        name: "高橋淳",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "青柳隆",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "松本賢一",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
        faction: "新風会",
      },
      {
        name: "石川徹",
        faction: "新風会",
      },
      {
        name: "後閑賢二",
        faction: "新風会",
      },
      {
        name: "丸山和久",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "横田卓也",
        faction: "市民クラブ",
      },
      {
        name: "三井暢秀",
        faction: "市民クラブ",
      },
      {
        name: "中島輝男",
        faction: "市民クラブ",
      },
      {
        name: "林恒徳",
        faction: "市民クラブ",
      },
      {
        name: "堀口順",
        faction: "市民クラブ",
      },
      {
        name: "高橋美奈雄",
        faction: "市民クラブ",
      },
      {
        name: "中村さと美",
        faction: "公明党",
      },
      {
        name: "小野聡子",
        faction: "公明党",
      },
      {
        name: "新保克佳",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "宮原田綾香",
        faction: "たかさき未来",
      },
      {
        name: "荒木征二",
        faction: "たかさき未来",
      },
      {
        name: "三島久美子",
        faction: "たかさき未来",
      },
      {
        name: "新倉哲郎",
        faction: "超党派の会",
      },
      {
        name: "角倉邦良",
        faction: "超党派の会",
      },
      {
        name: "谷川留美子",
        faction: "超党派の会",
      },
      {
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
    ],
    source: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
    },
  },
  "r8-2": {
    chair: "根岸赴夫",
    members: [
      {
        name: "渡辺隆宏",
        faction: "新風会",
      },
      {
        name: "高橋淳",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "青柳隆",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "松本賢一",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
        faction: "新風会",
      },
      {
        name: "石川徹",
        faction: "新風会",
      },
      {
        name: "後閑賢二",
        faction: "新風会",
      },
      {
        name: "丸山和久",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "横田卓也",
        faction: "市民クラブ",
      },
      {
        name: "三井暢秀",
        faction: "市民クラブ",
      },
      {
        name: "中島輝男",
        faction: "市民クラブ",
      },
      {
        name: "林恒徳",
        faction: "市民クラブ",
      },
      {
        name: "堀口順",
        faction: "市民クラブ",
      },
      {
        name: "高橋美奈雄",
        faction: "市民クラブ",
      },
      {
        name: "中村さと美",
        faction: "公明党",
      },
      {
        name: "小野聡子",
        faction: "公明党",
      },
      {
        name: "新保克佳",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "宮原田綾香",
        faction: "たかさき未来",
      },
      {
        name: "荒木征二",
        faction: "たかさき未来",
      },
      {
        name: "三島久美子",
        faction: "たかさき未来",
      },
      {
        name: "新倉哲郎",
        faction: "超党派の会",
      },
      {
        name: "角倉邦良",
        faction: "超党派の会",
      },
      {
        name: "谷川留美子",
        faction: "超党派の会",
      },
      {
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
    ],
    source: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/39050.pdf",
    },
  },
  "r8-3": {
    chair: "長壁真樹",
    members: [
      {
        name: "渡辺隆宏",
        faction: "新風会",
      },
      {
        name: "高橋淳",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "青柳隆",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "松本賢一",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
        faction: "新風会",
      },
      {
        name: "石川徹",
        faction: "新風会",
      },
      {
        name: "後閑賢二",
        faction: "新風会",
      },
      {
        name: "丸山和久",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "横田卓也",
        faction: "市民クラブ",
      },
      {
        name: "三井暢秀",
        faction: "市民クラブ",
      },
      {
        name: "中島輝男",
        faction: "市民クラブ",
      },
      {
        name: "林恒徳",
        faction: "市民クラブ",
      },
      {
        name: "堀口順",
        faction: "市民クラブ",
      },
      {
        name: "高橋美奈雄",
        faction: "市民クラブ",
      },
      {
        name: "中村さと美",
        faction: "公明党",
      },
      {
        name: "小野聡子",
        faction: "公明党",
      },
      {
        name: "新保克佳",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "宮原田綾香",
        faction: "たかさき未来",
      },
      {
        name: "荒木征二",
        faction: "たかさき未来",
      },
      {
        name: "三島久美子",
        faction: "たかさき未来",
      },
      {
        name: "新倉哲郎",
        faction: "超党派の会",
      },
      {
        name: "角倉邦良",
        faction: "超党派の会",
      },
      {
        name: "谷川留美子",
        faction: "超党派の会",
      },
      {
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
    ],
    source: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/40635.pdf",
    },
  },
  "r8-4": {
    chair: "長壁真樹",
    members: [
      {
        name: "渡辺隆宏",
        faction: "新風会",
      },
      {
        name: "高橋淳",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "青柳隆",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "松本賢一",
        faction: "新風会",
      },
      {
        name: "石川徹",
        faction: "新風会",
      },
      {
        name: "後閑賢二",
        faction: "新風会",
      },
      {
        name: "丸山和久",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "横田卓也",
        faction: "市民クラブ",
      },
      {
        name: "三井暢秀",
        faction: "市民クラブ",
      },
      {
        name: "中島輝男",
        faction: "市民クラブ",
      },
      {
        name: "林恒徳",
        faction: "市民クラブ",
      },
      {
        name: "堀口順",
        faction: "市民クラブ",
      },
      {
        name: "高橋美奈雄",
        faction: "市民クラブ",
      },
      {
        name: "中村さと美",
        faction: "公明党",
      },
      {
        name: "小野聡子",
        faction: "公明党",
      },
      {
        name: "新保克佳",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "宮原田綾香",
        faction: "たかさき未来",
      },
      {
        name: "荒木征二",
        faction: "たかさき未来",
      },
      {
        name: "三島久美子",
        faction: "たかさき未来",
      },
      {
        name: "新倉哲郎",
        faction: "超党派の会",
      },
      {
        name: "角倉邦良",
        faction: "超党派の会",
      },
      {
        name: "谷川留美子",
        faction: "超党派の会",
      },
      {
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "柄沢高男",
        faction: "無所属",
      },
    ],
    source: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/41797.pdf",
    },
  },
};

/**
 * 議案ID → 賛否が分かれた議案の議員別賛否と、賛成・反対の理由。
 * 理由は高崎市議会の会議録（本会議の討論など）をもとに本サイトがまとめた要旨で、発言そのものではない。
 */
export const TAKASAKI_SPLIT_VOTES: Readonly<
  Partial<Record<string, TakasakiSplitVoteRecord>>
> = {
  "r7-1-seigan-1": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
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
        "柄沢高男",
        "石川徹",
        "丸山和久",
        "柴田和正",
        "横田卓也",
        "三井暢秀",
        "中島輝男",
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
      ],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36517.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "選択的夫婦別姓は別姓を強制する制度ではなく、選べる自由を認める制度です。同姓を強いられて不利益を受けているのは主に女性で、国連の女性差別撤廃委員会の勧告や経団連の提言もあり、次の世代の選択の自由を奪うべきではないとして採択に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190049&HATSUGENMODE=1",
      },
      {
        side: "反対",
        member: "新倉哲郎",
        faction: "超党派の会",
        summary:
          "親子で姓が異なることによる子どもの心理的負担や家庭内の対立が心配されること、旧姓の通称使用が広がり不便は解消できること、夫婦同姓は海外でも一般的で日本の歴史・文化に根付いていることを挙げ、不採択とする委員長報告に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=982&FINO=2065&HUID=190051&HATSUGENMODE=1",
      },
    ],
  },
  "r7-4-gian-87": {
    question: "原案に賛成",
    rollCall: {
      against: ["宮原田綾香", "荒木征二", "三島久美子", "金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36514.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "宮原田綾香",
        faction: "たかさき未来",
        summary:
          "板橋区が解体を決めていた榛名林間学園を、契約日を半年前倒ししてまで無償で譲り受ける必要性が示されていないと指摘しました。料金と運営費から大きな赤字が見込まれ、板橋区が20億円と示す修繕費について市の試算も出ず、将来世代に負担を残すとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1019&FINO=2117&HUID=194260&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "白石隆夫",
        faction: "新風会",
        summary:
          "見学した榛名湖ヴィレッジはまだ十分使える立派な施設で、有効に活用して榛名湖周辺の活性化に生かすべきだと述べました。市民サービスは個別の黒字化や費用対効果だけで判断すべきではないとして、原案に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1019&FINO=2117&HUID=194262&HATSUGENMODE=1",
      },
    ],
  },
  "r7-4-gian-88": {
    question: "原案に賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36514.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "侵入窃盗の発生地域で防犯パトロールをする地域への補助制度そのものは評価するものの、関東大震災時の朝鮮人虐殺に関わった歴史がある「自警団」という名称を行政が使うのは不適切で、名称を変えるべきだとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1019&FINO=2117&HUID=194264&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "白石隆夫",
        faction: "新風会",
        summary:
          "決算や補正予算を含む20議案すべてに新風会を代表して賛成しました。補正予算は急を要する事案に適宜適切に対応してきたと評価し、榛名湖ヴィレッジに関する議案や補正予算も原案のとおり賛成すべきだと述べました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1019&FINO=2117&HUID=194262&HATSUGENMODE=1",
      },
    ],
  },
  "r7-4-seigan-2": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "時田裕之",
        "青柳隆",
        "渡辺幹治",
        "白石隆夫",
        "長壁真樹",
        "大竹隆一",
        "松本賢一",
        "柄沢高男",
        "石川徹",
        "後閑賢二",
        "丸山和久",
        "柴田和正",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "丸山覚",
        "逆瀬川義久",
      ],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36514.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "林恒徳",
        faction: "市民クラブ",
        summary:
          "今の学習指導要領は土曜授業があった時代並みの授業時間で、小学1年生でも授業が長く英語も加わり、子どもの集中力の維持が難しいと現場から声が出ていると述べました。改訂にあたって内容を精査してもらうため、国への意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1019&FINO=2117&HUID=194277&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "本会議での反対討論はありませんでした。",
  },
  "r7-4-seigan-3": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "時田裕之",
        "青柳隆",
        "渡辺幹治",
        "白石隆夫",
        "長壁真樹",
        "大竹隆一",
        "松本賢一",
        "柄沢高男",
        "石川徹",
        "後閑賢二",
        "丸山和久",
        "柴田和正",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "丸山覚",
        "逆瀬川義久",
      ],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36514.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "林恒徳",
        faction: "市民クラブ",
        summary:
          "群馬県では中学校でも35人学級が実現していますが、本来学校の余裕となる加配教員を担任に充てて達成しているため現場に余裕がないと述べました。その実態を国に訴え、処遇の改善を求めるため賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1019&FINO=2117&HUID=194277&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "本会議での反対討論はありませんでした。",
  },
  "r7-4-seigan-4": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "時田裕之",
        "青柳隆",
        "渡辺幹治",
        "白石隆夫",
        "長壁真樹",
        "大竹隆一",
        "松本賢一",
        "柄沢高男",
        "石川徹",
        "後閑賢二",
        "丸山和久",
        "柴田和正",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "丸山覚",
        "逆瀬川義久",
      ],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36514.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "林恒徳",
        faction: "市民クラブ",
        summary:
          "義務教育費国庫負担の負担率は2006年に2分の1から3分の1に引き下げられ、市が国の補助制度や交付金を使って独自の教育施策を行う際の交付割合にも大きく影響していると述べました。都道府県だけでなく高崎市にも影響があるとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1019&FINO=2117&HUID=194277&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "本会議での反対討論はありませんでした。",
  },
  "r7-4-seigan-5": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "時田裕之",
        "青柳隆",
        "渡辺幹治",
        "白石隆夫",
        "長壁真樹",
        "大竹隆一",
        "松本賢一",
        "柄沢高男",
        "石川徹",
        "後閑賢二",
        "丸山和久",
        "柴田和正",
        "横田卓也",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "丸山覚",
        "逆瀬川義久",
        "宮原田綾香",
        "荒木征二",
        "三島久美子",
        "新倉哲郎",
        "谷川留美子",
      ],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36514.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "核兵器による威嚇を背景にした国際法違反が続く一方、核兵器禁止条約の署名・批准などをした国は99か国に広がり、日本被団協がノーベル平和賞を受賞したと述べました。今回は日本政府のオブザーバー参加を求める内容に絞っており、市の核兵器廃絶平和都市宣言の立場から賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2025&TYY=2025&KGNO=1019&FINO=2117&HUID=194279&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "本会議での反対討論はありませんでした。",
  },
  "r7-5-ikensho-1": {
    question: "原案に賛成",
    rollCall: {
      against: [
        "横田卓也",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "高橋美奈雄",
        "宮原田綾香",
        "荒木征二",
        "三島久美子",
        "新倉哲郎",
        "角倉邦良",
        "谷川留美子",
        "金子和幸",
        "伊藤敦博",
      ],
      absent: ["後閑賢二"],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/36513.pdf",
    },
    reasons: [],
    reasonsNote:
      "提出者の説明と委員会付託は省略され、本会議では討論がありませんでした。",
  },
  "r8-2-gian-19": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/39050.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "物価高騰が続く中で、モデルケースで12.6〜14.6％にもなる国民健康保険税の引上げは市民の生活を圧迫すると述べました。さらに、医療保険に子ども・子育て支援金を上乗せするのは公的医療保険の目的から外れており、国に撤回を求めるべきだとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1044&FINO=2160&HUID=198163&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "新保克佳",
        faction: "公明党",
        summary:
          "これまで基金を活用して税負担を抑えてきたが、医療の高度化などで国民健康保険・後期高齢者医療の収支のバランスが崩れるおそれがあると述べました。将来にわたり安定した運営を続けるために必要で適切な内容だとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1044&FINO=2160&HUID=198169&HATSUGENMODE=1",
      },
    ],
  },
  "r8-2-gian-28": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/39050.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "学校給食費の完全無償化は評価する一方、烏川かわまちづくりやスマートインターチェンジ周辺の集客施設などの開発に巨額の予算を使い、物価高に苦しむ市民への支援が手薄だと述べました。最大の理由として、市内全小学校の早朝開門は制度設計が不十分で子どもの安全が保障されず、反対する教職員の声も聞いていないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1044&FINO=2160&HUID=198167&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "長壁真樹",
        faction: "新風会",
        summary:
          "過去最大の予算規模でありながら、市債残高は中核市移行後最少の見込みで、健全な財政運営が保たれていると評価しました。中学校まで広げた学校給食費の完全無償化や、子どもの安全を確保する小学校の早朝開門などを挙げ、バランスの取れた未来への投資予算だとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1044&FINO=2160&HUID=198165&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "新保克佳",
        faction: "公明党",
        summary:
          "行政手続のデジタル化による市民の負担軽減や、地域の力で学力を引き上げる事業の拡充などを評価しました。早朝開門には様々な意見があることを承知しつつ、朝の居場所を求める保護者のニーズもあるとして、丁寧な運営を求めたうえで賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1044&FINO=2160&HUID=198169&HATSUGENMODE=1",
      },
    ],
  },
  "r8-2-gian-29": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/39050.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "物価高騰が続く中で、モデルケースで12.6〜14.6％にもなる国民健康保険税の引上げは市民の生活を圧迫すると述べました。さらに、医療保険に子ども・子育て支援金を上乗せするのは公的医療保険の目的から外れており、国に撤回を求めるべきだとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1044&FINO=2160&HUID=198163&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "新保克佳",
        faction: "公明党",
        summary:
          "これまで基金を活用して税負担を抑えてきたが、医療の高度化などで国民健康保険・後期高齢者医療の収支のバランスが崩れるおそれがあると述べました。将来にわたり安定した運営を続けるために必要で適切な内容だとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1044&FINO=2160&HUID=198169&HATSUGENMODE=1",
      },
    ],
  },
  "r8-2-gian-33": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/39050.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "急激な物価高騰の中での後期高齢者医療保険料の引上げと子ども・子育て支援金の上乗せには、国民健康保険税と同じ理由で同意できないと述べました。窓口負担や高額療養費の限度額の引上げなども検討される中で、さらなる負担増は市民に納得してもらえないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1044&FINO=2160&HUID=198163&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "新保克佳",
        faction: "公明党",
        summary:
          "これまで基金を活用して税負担を抑えてきたが、医療の高度化などで国民健康保険・後期高齢者医療の収支のバランスが崩れるおそれがあると述べました。将来にわたり安定した運営を続けるために必要で適切な内容だとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1044&FINO=2160&HUID=198169&HATSUGENMODE=1",
      },
    ],
  },
  "r8-3-gian-52": {
    question: "同意することに賛成",
    rollCall: {
      against: [
        "横田卓也",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "高橋美奈雄",
        "宮原田綾香",
        "荒木征二",
        "三島久美子",
        "新倉哲郎",
        "角倉邦良",
        "谷川留美子",
        "金子和幸",
        "伊藤敦博",
      ],
      absent: ["根岸赴夫"],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/40635.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "三井暢秀",
        faction: "市民クラブ",
        summary:
          "議会選出の監査委員はこれまで各派会長会議の協議で決めてきたのに、今回は各派代表者会議で特定の個人名を挙げて多数決で候補者を決めるという従来にない手続だったと述べました。執行部の提案自体に問題はないが、合意形成を重視すべき議会の意見形成の過程に問題があるとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1058&FINO=2168&HUID=198548&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "根岸赴夫議員は本人が監査委員の候補者のため除斥（退場）となり、採決に加わっていません。",
  },
  "r8-4-gian-59": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
      absent: ["青柳隆", "柄沢高男"],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/41797.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "改正に防衛特別所得税の新設が含まれており、当面税額は変わらないものの負担期間が延びて実質的に国民の負担が増えると述べました。軍事力の強化は国際緊張と国民負担を高めるとして、市が条例を否定するのは難しいと承知しつつも、税負担が増える事実を市民に知ってもらうため反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1067&FINO=2191&HUID=200215&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r8-4-gian-65": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
      absent: ["青柳隆", "柄沢高男"],
    },
    voteSource: {
      label: "議案等審議結果一覧（議員別賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/41797.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "生活保護費の補正は、最高裁で違法とされた引下げについて、デフレ調整の4.78％のうち約半分の2.49％分だけを追加支給するもので、判決の趣旨に反すると述べました。生活保護基準は最低賃金や就学援助など市民生活に広く影響する基準だとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1067&FINO=2191&HUID=200215&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "gian-92": {
    question: "委員長の報告のとおり認定することに賛成",
    voteSource: {
      label: "議案等審議結果一覧",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/44015.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "学校給食の無償化などは評価する一方、優良農地を潰す堤ヶ岡飛行場跡地のスマートシティ構想や、初期投資約20億円・運営管理費年3億円のスマートインター周辺の集客施設は市民の納得が得られるか疑問だと述べました。デマンド型タクシーや補聴器購入補助など身近な要望を優先すべきだとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1079&FINO=2203&HUID=201081&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "高橋淳",
        faction: "新風会",
        summary:
          "市税収入が過去最大となる一方、市債残高を大きく減らし財政調整基金にも積み立てるなど、健全な財政運営だったと評価しました。学校の空調整備や給食費の負担軽減、児童相談所の開設、道路の補修などを挙げ、将来の高崎の基盤への投資も進めた1年だったとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1079&FINO=2203&HUID=201083&HATSUGENMODE=1",
      },
    ],
  },
  "gian-108": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    voteSource: {
      label: "議案等審議結果一覧",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/44015.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "建設費は分かっているだけで11億円、年間委託料は3,000万円かかるのに、委員会で質問してもそれに見合う経済効果について明確な答弁がなかったと述べました。費用対効果が明らかでないまま事業に白紙委任はできないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1079&FINO=2203&HUID=201081&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "seigan-1": {
    question: "請願を採択することに賛成",
    voteSource: {
      label: "議案等審議結果一覧",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/44015.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "核兵器廃絶平和都市宣言から40年の節目に、被爆者の願いを受け止めて国に伝えることは地方議会の責務だと述べました。全国の42％、県内の58％の自治体が同様の意見書を採択しているとして、請願の採択に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2026&TYY=2026&KGNO=1079&FINO=2203&HUID=201094&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。総務常任委員長の報告では、委員会で「国防は国の専権事項で、政府の立場を踏まえ推移を見守るべき」「まずはオブザーバー参加をしてから段階的に進めるべき」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "ikensho-1": {
    question: "原案のとおり可決することに賛成",
    voteSource: {
      label: "議案等審議結果一覧",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/44015.pdf",
    },
    reasons: [],
    reasonsNote:
      "提出者の説明と委員会付託は省略され、本会議では討論がありませんでした。",
  },
};
