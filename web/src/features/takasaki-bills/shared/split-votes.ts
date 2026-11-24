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
  "r5-3": {
    chair: "時田裕之",
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
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "新倉哲郎",
        faction: "無所属",
      },
      {
        name: "角倉邦良",
        faction: "無所属",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第290号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/1874.pdf",
    },
  },
  "r5-4": {
    chair: "時田裕之",
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
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "新倉哲郎",
        faction: "無所属",
      },
      {
        name: "角倉邦良",
        faction: "無所属",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第291号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/1866.pdf",
    },
  },
  "r5-5": {
    chair: "時田裕之",
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
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "新倉哲郎",
        faction: "無所属",
      },
      {
        name: "角倉邦良",
        faction: "無所属",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第292号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/15679.pdf",
    },
  },
  "r6-1": {
    chair: "時田裕之",
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
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "新倉哲郎",
        faction: "無所属",
      },
      {
        name: "角倉邦良",
        faction: "無所属",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第293号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/18343.pdf",
    },
  },
  "r6-3": {
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
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "新倉哲郎",
        faction: "無所属",
      },
      {
        name: "角倉邦良",
        faction: "無所属",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第295号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/21981.pdf",
    },
  },
  "r6-4": {
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
        name: "金子和幸",
        faction: "日本共産党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "新倉哲郎",
        faction: "無所属",
      },
      {
        name: "角倉邦良",
        faction: "無所属",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第296号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/24984.pdf",
    },
  },
  "r6-5": {
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
      label:
        "たかさき市議会だより第297号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/26701.pdf",
    },
  },
  "r2-1": {
    chair: "松本賢一",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
      {
        name: "三島久美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第273号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7912.pdf",
    },
  },
  "r2-2": {
    chair: "渡辺幹治",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
      {
        name: "三島久美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第274号 4ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7976.pdf",
    },
  },
  "r2-4": {
    chair: "渡辺幹治",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
      {
        name: "三島久美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第276号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7964.pdf",
    },
  },
  "r2-5": {
    chair: "渡辺幹治",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
      {
        name: "三島久美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第277号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7956.pdf",
    },
  },
  "r3-1": {
    chair: "渡辺幹治",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
      {
        name: "三島久美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第278号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7948.pdf",
    },
  },
  "r3-4": {
    chair: "渡辺幹治",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
      {
        name: "三島久美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第281号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8000.pdf",
    },
  },
  "r3-5": {
    chair: "渡辺幹治",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
      {
        name: "三島久美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第282号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7992.pdf",
    },
  },
  "r4-1": {
    chair: "渡辺幹治",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "三島久美子",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第283号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7984.pdf",
    },
  },
  "r4-2": {
    chair: "根岸赴夫",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "三島久美子",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第284号 4ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8048.pdf",
    },
  },
  "r4-4": {
    chair: "根岸赴夫",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "三島久美子",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第286号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8036.pdf",
    },
  },
  "r4-5": {
    chair: "根岸赴夫",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "三島久美子",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第287号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8028.pdf",
    },
  },
  "r5-1": {
    chair: "根岸赴夫",
    members: [
      {
        name: "大河原吉明",
        faction: "新風会",
      },
      {
        name: "青木和也",
        faction: "新風会",
      },
      {
        name: "丸山芳典",
        faction: "新風会",
      },
      {
        name: "樋口哲郎",
        faction: "新風会",
      },
      {
        name: "清水明夫",
        faction: "新風会",
      },
      {
        name: "後藤彰",
        faction: "新風会",
      },
      {
        name: "片貝喜一郎",
        faction: "新風会",
      },
      {
        name: "時田裕之",
        faction: "新風会",
      },
      {
        name: "大竹隆一",
        faction: "新風会",
      },
      {
        name: "根岸赴夫",
        faction: "新風会",
      },
      {
        name: "飯塚邦広",
        faction: "新風会",
      },
      {
        name: "渡辺幹治",
        faction: "新風会",
      },
      {
        name: "長壁真樹",
        faction: "新風会",
      },
      {
        name: "白石隆夫",
        faction: "新風会",
      },
      {
        name: "柄沢高男",
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
        name: "後閑太一",
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
        name: "柴田正夫",
        faction: "新風会",
      },
      {
        name: "柴田和正",
        faction: "新風会",
      },
      {
        name: "田中治男",
        faction: "新風会",
      },
      {
        name: "荒木征二",
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
        name: "三島久美子",
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
        name: "逆瀬川義久",
        faction: "公明党",
      },
      {
        name: "丸山覚",
        faction: "公明党",
      },
      {
        name: "伊藤敦博",
        faction: "日本共産党",
      },
      {
        name: "依田好明",
        faction: "日本共産党",
      },
      {
        name: "谷川留美子",
        faction: "無所属",
      },
    ],
    source: {
      label:
        "たかさき市議会だより第288号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8020.pdf",
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
  "r5-3-gian-65": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第290号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/1874.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "国の森林環境税（市民1人あたり年1,000円）を市が徴収するための改正です。森林整備には異論はないとしつつ、物価高の中で均等割として市民に広く負担を求めること、県の「ぐんま緑の県民税」と合わせて年1,700円の負担になること、使い道について市民の合意がないことを理由に反対しました。環境保全の財源は大企業などに応分の負担を求めるべきだと述べました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=882&FINO=1913&HUID=175902&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r5-3-seigan-3": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "青柳隆",
        "根岸赴夫",
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
        "角倉邦良",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第290号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/1874.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "インボイス制度が始まると、売上げ1,000万円以下の免税業者に税と事務の負担がかかり、登録しなければ取引から外されるおそれもあると述べました。個人商店や下請、フリーランスなど影響は幅広いとして、中小業者の営業を守るため実施延期を求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=882&FINO=1913&HUID=175911&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。市民経済常任委員長の報告では、委員会で「公平な税負担や不公平な商慣習の是正の面から必要な制度」「消費税が適正に国庫に納められるために必要」「すでに準備を進めている事業者もあり、計画どおり進めるほうが混乱を招かない」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r5-3-giinteishutsu-1": {
    question: "原案のとおり可決することに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博", "新倉哲郎", "角倉邦良"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第290号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/1874.pdf",
    },
    reasons: [],
    reasonsNote:
      "提出者の説明と委員会付託は省略され、本会議では質疑・討論がありませんでした。",
  },
  "r5-4-seigan-4": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "青柳隆",
        "根岸赴夫",
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
      label:
        "たかさき市議会だより第291号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/1866.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "ロシアの核使用の威嚇や北朝鮮の核開発を見れば、核の抑止力で戦争は防げないと述べました。唯一の被爆国として日本政府が核兵器禁止条約に賛同し、締約国会議にオブザーバー参加することなどを求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=898&FINO=1933&HUID=178208&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。総務常任委員長の報告では、委員会で「核兵器禁止条約に参加すれば、米国による核抑止力の正当性を損なうことになる」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r5-4-seigan-5": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "青柳隆",
        "根岸赴夫",
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
      label:
        "たかさき市議会だより第291号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/1866.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "林恒徳",
        faction: "市民クラブ",
        summary:
          "国は35人学級へ段階的に移行しているが、早く実現するための財源の裏づけが必要だと述べました。加配教員が毎年の児童生徒数で増減し、学校運営にゆとりがないという現場の実情を国に伝えるため、教職員定数の改善を求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=898&FINO=1933&HUID=178210&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「政府予算に関する意見書を、県を通り越して国に出すのは難しい」「教職員定数は国から県、県から市町村に配分されるので、市ではなく県から意見すべき」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r5-4-seigan-6": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "青柳隆",
        "根岸赴夫",
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
      label:
        "たかさき市議会だより第291号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/1866.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "林恒徳",
        faction: "市民クラブ",
        summary:
          "教職員給与の国の負担は三位一体の改革で2分の1から3分の1に下がったと述べました。地方交付税での補填はその年の国の税収で変わり、安定した財源ではないとして、国庫負担を2分の1に戻して教職員を確保するよう求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=898&FINO=1933&HUID=178210&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「物価高騰対策や子育て・少子化対策への支援の増額などを考えると、国が国庫負担率を引き上げるのは現実的に無理だろう」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r5-5-gian-128": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["宮原田綾香", "荒木征二", "三島久美子"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第292号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/15679.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "荒木征二",
        faction: "たかさき未来",
        summary:
          "吉井福祉センターの指定管理者となる高崎市社会福祉協議会が、学童やグループホームなどの事業を縮小しつつあることを懸念すると述べました。指定の手続は公正だと認めたうえで、地域福祉の担い手である社会福祉協議会の現状に警鐘を鳴らすため反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=911&FINO=1951&HUID=179628&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r5-5-gian-141": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第292号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/15679.pdf",
    },
    reasons: [],
    reasonsNote:
      "本会議では討論がなく、総務常任委員会でも反対の理由を述べた発言はありませんでした。",
  },
  "r5-5-seigan-7": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "青柳隆",
        "根岸赴夫",
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
      label:
        "たかさき市議会だより第292号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/15679.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "物価高騰が子育て世代を直撃する中、県内35市町村のうち給食費の補助がないのは高崎市だけになったと述べました。一部補助や段階的な補助からでも無料化を進め、地場産や有機の食材を増やすよう求めて賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=911&FINO=1951&HUID=179639&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「食材費以外は市が負担し、経済的に大変な家庭には就学援助で負担を軽くしている」「限られた予算の中で、保護者に食材費を負担してもらうのはしかたない部分もある」「財政面の課題があり、さらに検討が必要」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r5-5-seigan-8": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "青柳隆",
        "根岸赴夫",
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
        "角倉邦良",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第292号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/15679.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "加齢性難聴は認知症の大きなリスク要因で、早めに補聴器を使い始めることが大切だと述べました。補聴器は高価で、障害者総合支援法による支給は高度の難聴に限られるため、軽度・中等度の人への公費助成と聴力検査を求めて賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=911&FINO=1951&HUID=179639&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「法律に基づいて議論されるべき問題」「健康診断に難聴検査を入れることには賛成だが、補聴器には身体障害者などへの補装具費の支援制度があり、難聴の人だけの独自の助成は難しい」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r5-5-seigan-9": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "青柳隆",
        "根岸赴夫",
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
        "宮原田綾香",
        "荒木征二",
        "三島久美子",
        "新倉哲郎",
        "角倉邦良",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第292号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/15679.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "医療機関や介護施設は国が決める公定価格で運営しているため、物価が上がっても賃上げできず人手不足が深刻だと述べました。全てのケア労働者の賃上げにつながる診療報酬・介護報酬などの引上げと施設への支援を国に求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=911&FINO=1951&HUID=179639&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「国も対策を講じており、11月に成立した国の補正予算で職員の処遇改善などに予算がついている」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r6-1-gian-44": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第293号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/18343.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "介護保険料の改定で約4割の人は減額になる一方、6割近くの人が増額になると述べました。介護保険基金は毎年約25億円残っており、基金の繰入れで値上げは避けられるとして、物価高騰で年金生活者の暮らしが苦しい中での保険料の引上げに反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=922&FINO=1973&HUID=182125&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "賛成の立場では、新風会・市民クラブ・公明党・たかさき未来が令和6年度予算をはじめ議案全体に賛成する討論を行いました（議案第49号のページに掲載）。この議案だけを取り上げた賛成討論はありませんでした。",
  },
  "r6-1-gian-49": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第293号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/18343.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "おとしよりぐるりんタクシーの増設や体育館・給食室の空調設置など評価できる点も多いとしつつ、県内のほとんどの市町村が支援している学校給食の無料化がまったく進んでいないと述べました。子育て世代の切実な声に応えていないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=922&FINO=1973&HUID=182125&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "樋口哲郎",
        faction: "新風会",
        summary:
          "物価高騰が続く中、独自のビジネス施策で地元経済を活性化して税収基盤を強め、高齢者福祉・教育・子育て支援を充実させる予算だと評価しました。豊岡新駅の整備や中心市街地のにぎわいづくりに期待するとして、提案された全ての議案に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=922&FINO=1973&HUID=182127&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "堀口順",
        faction: "市民クラブ",
        summary:
          "市税収入が実質的に増える見込みで、市債残高も約24億円減る見込みであるなど、本市の実態に合わせた予算編成だと評価しました。災害に備えた基金の確保や再開発への補助金の適正な扱いなどを求めつつ、予算関連議案に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=922&FINO=1973&HUID=182129&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "小野聡子",
        faction: "公明党",
        summary:
          "中小企業の賃上げを後押しする奨励事業や出産入院費用の支援などの物価高騰対策、能登半島地震を踏まえた災害対策の強化、不登校対策など教育環境の充実を評価しました。会派が要望してきた帯状疱疹ワクチンの助成なども盛り込まれたとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=922&FINO=1973&HUID=182131&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "荒木征二",
        faction: "たかさき未来",
        summary:
          "財政調整基金からの繰入額の大きさに懸念を示しつつ、おおむね健全な市政運営だと評価しました。会派が要望した公立保育所の緊急修繕や、給食室の空調の予算の増額などが盛り込まれたとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=922&FINO=1973&HUID=182133&HATSUGENMODE=1",
      },
    ],
  },
  "r6-1-gian-51": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第293号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/18343.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "介護保険料の改定で6割近くの人が増額になると述べました。介護保険基金は毎年約25億円残っており、基金の繰入れで値上げは避けられるとして、物価高騰で年金生活者の暮らしが苦しい中で保険料を引き上げる予算に反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=922&FINO=1973&HUID=182125&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "賛成の立場では、新風会・市民クラブ・公明党・たかさき未来が令和6年度予算をはじめ議案全体に賛成する討論を行いました（議案第49号のページに掲載）。この議案だけを取り上げた賛成討論はありませんでした。",
  },
  "r6-1-seigan-1": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "渡辺隆宏",
        "高橋淳",
        "樋口哲郎",
        "大河原吉明",
        "青木和也",
        "後藤彰",
        "青柳隆",
        "根岸赴夫",
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
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第293号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/18343.pdf",
    },
    reasons: [],
    reasonsNote:
      "本会議では討論がありませんでした。教育福祉常任委員長の報告では、委員会で採択に賛成の立場から「以前は地場農産物の使用率が47.4％と50％近くあったので、またその水準を目標に掲げるのはよい」との意見が、賛成でない立場から「農家の高齢化や天候による安定供給の問題などがあり、まずは落ち込んだ使用率を40％以上に戻すための柔軟な目標設定と理解している」「令和6年度の目標を一概に50％にするのは少し無理がある」との意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r6-3-gian-86": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["金子和幸", "伊藤敦博"],
      absent: ["角倉邦良"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第295号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/21981.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "この補正予算は、健康保険証の廃止に向けてマイナ保険証の利用を促すためのものだと指摘しました。マイナ保険証をめぐるトラブルや個人情報の安全への不安が解消されておらず、任意のはずのマイナンバーを保険証の廃止で事実上押しつけるやり方は問題だとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=945&FINO=2004&HUID=184078&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r6-4-seigan-2": {
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
        "宮原田綾香",
        "荒木征二",
        "三島久美子",
        "新倉哲郎",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第296号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/24984.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "高崎市は1986年に全会派一致で核兵器廃絶平和都市宣言を可決していると述べました。唯一の被爆国である日本が核兵器禁止条約に署名・批准してこそ核保有国と非保有国の橋渡しができるとして、締約国会議へのオブザーバー参加も求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=957&FINO=2024&HUID=186248&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。総務常任委員長の報告では、委員会で「条約の批准はデリケートな問題で、現段階ではできないということだと思う」「まずはオブザーバー参加を求めていく立場」「今の世界情勢で日本にとって何が正しいかを見極めるのは非常に難しい」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r6-5-seigan-3": {
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
        "宮原田綾香",
        "荒木征二",
        "三島久美子",
        "新倉哲郎",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第297号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/26701.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "来年度から第2子以降の給食費の無償化などが決まったことを歓迎しつつ、県内の6割の市町村がすでに完全無償化していると述べました。市の財政だけで難しければ国や県に働きかけてでも完全無償化を急ぐよう求め、地元の有機食材の活用とあわせて賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=971&FINO=2043&HUID=187627&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「令和7年度から第1子の10％軽減と第2子以降の無償化に向けて財源を検討している段階で、完全無償化は時期尚早」「すでに国や県に財源措置を要望している」「学校教育でほかにもやるべきことがあり、予算のバランスを考えて結論を出したい」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r6-5-seigan-4": {
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
        "宮原田綾香",
        "荒木征二",
        "三島久美子",
        "新倉哲郎",
        "角倉邦良",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第297号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/26701.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "金子和幸",
        faction: "日本共産党",
        summary:
          "看護師や介護職などのケア労働者は低賃金で人手不足が進み、県内の介護職員は今後大幅に足りなくなると予想されていると述べました。賃上げと配置基準の見直しによる増員、診療報酬・介護報酬などの国の責任での引上げを求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=971&FINO=2043&HUID=187627&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「人手不足の中で配置基準を見直すのは現実的ではなく、まずは人員確保の支援策を求めるべき」「国も処遇改善を行っており、その効果を見定めてから判断したい」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r6-5-seigan-5": {
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
        "宮原田綾香",
        "荒木征二",
        "三島久美子",
        "新倉哲郎",
        "角倉邦良",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第297号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/26701.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "令和の米騒動や食料品の高騰を挙げ、食料の6割以上を輸入に頼る日本の自給率38％は先進国で最低だと述べました。国の政策を促すためにも、多彩な農業を持つ高崎市が率先して自給率向上を宣言することに意義があるとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2024&TYY=2024&KGNO=971&FINO=2043&HUID=187629&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。市民経済常任委員長の報告では、委員会で「市はすでに自給率向上につながる施策を行っており、あえて宣言する必要はない」「食料自給率は国が目標を定めて国全体で目指すもので、市町村の宣言はなじまない」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r2-1-seigan-1": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "渡辺幹治",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
        "三島久美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第273号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7912.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "日米地位協定のもとで米軍は日本の航空法などが適用されず、事件・事故にも日本の警察が直接手を出せないと述べました。全国知事会も抜本的見直しを提言しているとして、市民の命と生活を守るため、協定の改定を国に求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2020&TYY=2020&KGNO=683&FINO=1616&HUID=153302&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。総務常任委員長の報告では、委員会で「日米地位協定が果たしてきた役割や、国の専管事項であることを踏まえると意見書を出す必要はない」「締結から60年たち状況が変わったことには賛同できるが、オスプレイ等に触れた部分は理解に苦しむ」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r2-1-seigan-2": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "渡辺幹治",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
        "三島久美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第273号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7912.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "65歳以上の約半数が難聴でコミュニケーションに困難を抱え、孤立や認知症の要因にもなっていると述べました。補聴器は高価で、障害者認定で補助を受けられるのはごく一部だとして、自治体独自の購入助成と健診への聴力検査の追加を求める請願に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2020&TYY=2020&KGNO=683&FINO=1616&HUID=153302&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「新たに助成制度を作るより、障害者認定など今ある制度の周知が先」「補聴器購入費を医療費控除の対象にする制度がすでにある」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r2-1-seigan-3": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "渡辺幹治",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
        "三島久美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第273号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7912.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "国保税はほかの医療保険より高く、滞納で資格証明書になると窓口で全額を払えず受診を控えてしまうと述べました。約48億円ある国保の基金を使えば、18歳以下の子どもの均等割（1人3万2,400円）を減免できるとして、請願に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2020&TYY=2020&KGNO=683&FINO=1616&HUID=153304&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。市民経済常任委員長の報告では、委員会で「資格証明書の世帯でも高校生以下の子どもには保険証が交付されており、受診抑制にはつながらない」「18歳以下の均等割減免は国が制度として考えることで、自治体が財政負担するのはいかがなものか」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r2-2-shonin-5": {
    question: "専決処分を承認することに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第274号 4ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7976.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "国保税の課税限度額を医療分で2万円、介護分で1万円引き上げる専決処分です。低所得者の軽減の拡充は約760万円と少なすぎ、加入者の負担を増やし続けるのは限界だと述べました。約48億円の基金を使い、コロナ禍の今こそ国保税を引き下げるべきだとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2020&TYY=2020&KGNO=694&FINO=1623&HUID=153714&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "承認に賛成の立場からの討論はありませんでした。",
  },
  "r2-4-gian-98": {
    question: "委員長の報告のとおり認定することに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第276号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7964.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "大型開発が優先され、福祉や生活道路、市営住宅の改修などが後回しになっていると述べました。東邦亜鉛の有害スラグ問題で市が措置命令を出すよう求め、国保の資格証明書の発行や、約48億円の基金があるのに国保税を引き下げないことにも同意できないとして、決算の認定に反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2020&TYY=2020&KGNO=716&FINO=1662&HUID=157098&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "飯塚邦広",
        faction: "新風会",
        summary:
          "市税収入が前年より1%増え、30億円を財政調整基金に積み立てた健全な財政運営を評価しました。英語教育の充実や学校トイレの洋式化、子育て・介護SOSサービス、高崎芸術劇場の開館、台風19号からの迅速な復旧などを挙げ、認定に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2020&TYY=2020&KGNO=716&FINO=1662&HUID=157100&HATSUGENMODE=1",
      },
    ],
  },
  "r2-4-seigan-4": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第276号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7964.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "核兵器禁止条約は批准国が46か国に達し、まもなく発効すると述べました。唯一の戦争被爆国の日本政府は後ろ向きだが、地方議会が安全保障に口を出すべきでないという考えは住民の命を守る責任の放棄だとして、核兵器廃絶平和都市宣言をした市の議会として採択するよう求めました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2020&TYY=2020&KGNO=716&FINO=1662&HUID=157109&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。総務常任委員長の報告では、委員会で「地方議員には安全保障や外交の権限がなく、国会の慎重な審議に委ねるべき。安易な意見書は国会議員の判断に足かせをはめる」「核兵器禁止条約よりも核兵器不拡散条約を推進していくことが大切」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r2-5-seigan-5": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
        "三島久美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第277号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7956.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "国も自治体が給食費を全額補助することは認めているとし、子育て世帯の約7割が生活が苦しいと答えている中で、県内35市町村のうち11市町村がすでに無料化していると述べました。年18億円かかることは理解するとしつつ、中学3年生からの段階的実施や県への支援要請も含めて前向きな検討を求めました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2020&TYY=2020&KGNO=731&FINO=1682&HUID=158263&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「約18億円の食材費を市が負担すると、教育全体の質の低下が懸念される」「学校給食法で食材費は保護者負担とされており、各家庭の負担が原則」「市の子育て支援を総合的に見ると、無料化は時期尚早」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r3-1-gian-45": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
      absent: ["堀口順"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第278号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7948.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "来年度の介護保険料を据え置く改正です。保険料は制度開始から20年で倍以上になったと述べ、約20億円の基金の一部を使えば、前橋市や伊勢崎市のように月800円程度の引き下げができるとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160471&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "松本賢一",
        faction: "新風会",
        summary:
          "コロナ対応のなかでも市独自の経済対策で税収基盤を強め、福祉や教育、子育て支援を充実させてきたと述べ、新規事業が多く盛り込まれた令和3年度予算と関連議案のすべてに賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160473&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "三井暢秀",
        faction: "市民クラブ",
        summary:
          "国の地方財政計画が前年度比1.0%減となるなか、一般会計を0.4%減にとどめた引き締まった予算だと評価し、関連議案を含めて速やかに可決することが市民福祉の向上につながるとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160475&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "新保克佳",
        faction: "公明党",
        summary:
          "安心・安全で豊かな市民生活と、新型コロナの克服を目指す予算だと受け止め、関連議案のすべてを速やかに可決して執行することが難局を乗り越える市の役割だとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160477&HATSUGENMODE=1",
      },
    ],
  },
  "r3-1-gian-50": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
      absent: ["堀口順"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第278号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7948.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "国保税を来年度も据え置く予算です。約48億円の国保の基金があり、コロナで最も影響を受けている自営業や非正規の加入者のために引き下げるべきだと述べました。せめて子どもの均等割を減額してほしいという要望も筋が通っているとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160471&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "松本賢一",
        faction: "新風会",
        summary:
          "コロナ対応のなかでも市独自の経済対策で税収基盤を強め、福祉や教育、子育て支援を充実させてきたと述べ、新規事業が多く盛り込まれた令和3年度予算と関連議案のすべてに賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160473&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "三井暢秀",
        faction: "市民クラブ",
        summary:
          "国の地方財政計画が前年度比1.0%減となるなか、一般会計を0.4%減にとどめた引き締まった予算だと評価し、関連議案を含めて速やかに可決することが市民福祉の向上につながるとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160475&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "新保克佳",
        faction: "公明党",
        summary:
          "安心・安全で豊かな市民生活と、新型コロナの克服を目指す予算だと受け止め、関連議案のすべてを速やかに可決して執行することが難局を乗り越える市の役割だとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160477&HATSUGENMODE=1",
      },
    ],
  },
  "r3-1-gian-51": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
      absent: ["堀口順"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第278号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7948.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "介護保険料を据え置く介護保険特別会計の予算です。高すぎる保険料を据え置くのは市民の生活に寄り添った施策とは言えず、ため込んだ基金を使って引き下げるべきだとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160471&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "松本賢一",
        faction: "新風会",
        summary:
          "コロナ対応のなかでも市独自の経済対策で税収基盤を強め、福祉や教育、子育て支援を充実させてきたと述べ、新規事業が多く盛り込まれた令和3年度予算と関連議案のすべてに賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160473&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "三井暢秀",
        faction: "市民クラブ",
        summary:
          "国の地方財政計画が前年度比1.0%減となるなか、一般会計を0.4%減にとどめた引き締まった予算だと評価し、関連議案を含めて速やかに可決することが市民福祉の向上につながるとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160475&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "新保克佳",
        faction: "公明党",
        summary:
          "安心・安全で豊かな市民生活と、新型コロナの克服を目指す予算だと受け止め、関連議案のすべてを速やかに可決して執行することが難局を乗り越える市の役割だとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160477&HATSUGENMODE=1",
      },
    ],
  },
  "r3-1-seigan-1": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
        "三島久美子",
      ],
      absent: ["堀口順"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第278号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7948.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "WHOは41デシベルから補聴器を勧めているが、日本では70デシベルを超えないと補助が受けられず、市内の65歳以上で補助を受けたのは令和元年に161人だけだと述べました。難聴は認知症などの引き金になるとして、補聴器購入の助成と健診への聴力検査の追加を求めました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160490&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「趣旨は理解できるが、国の基準で行っている健診などの現行制度で最善を尽くすことが優先」「聴力検査を入れるには防音室や機器、検査技師の養成など課題があり現実的でない」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r3-1-seigan-2": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
        "三島久美子",
      ],
      absent: ["堀口順"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第278号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7948.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "資格証明書の世帯の多くは経済的に困窮しており、受診をためらって重症化するケースがあると述べました。子どもの均等割の減免は約1億5,800万円で、約48億円の基金で十分にできるとして、国の未就学児の軽減を待たずに18歳未満まで軽減するよう求めました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160490&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。市民経済常任委員長の報告では、委員会で「資格証明書は滞納世帯との相談の機会を確保するもので、短期被保険者証など柔軟な対応もしている」「資格証明書を交付しないのは納税の公平性に欠ける」「均等割の減免は国が制度として確立すべきで、国の未就学児の軽減の動向を注視したほうがよい」「基金は恒久財源ではない」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r3-1-seigan-3": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
        "三島久美子",
      ],
      absent: ["堀口順"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第278号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7948.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "コロナ禍で医療崩壊の危機が叫ばれる背景には、社会保障費の抑制で病床や公的病院、保健所が減らされてきたことがあると述べました。医療・介護の財源確保や医師・看護師・介護職員の増員、保健所の拡充などを国に求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=743&FINO=1703&HUID=160490&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「財源の裏づけがないまま、医療・介護職の増員と国民負担の軽減を求めるのは矛盾している」「国や県の動向を注視すべき内容もある」「市はコロナ禍で独自の支援も含めて医療機関と連携している」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r3-4-seigan-4": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第281号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8000.pdf",
    },
    reasons: [],
    reasonsNote:
      "本会議では討論がありませんでした。総務常任委員長の報告では、委員会で「請願の趣旨に賛成」という意見がある一方、「核保有国を対話のテーブルに着けなければ現実的に核はなくならず、そのアプローチを考えると願意に沿えない」「北朝鮮の脅威に対する最大の抑止力は日米安全保障条約で、国の専管事項。核兵器不拡散条約を推進するほうが重要」といった意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r3-5-gian-125": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第282号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7992.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "重度心身障害者の医療費助成に令和5年8月から所得制限を入れる改正です。市の試算で約290人が対象から外れ、1人あたり年間約14万8,000円の窓口負担が生じると述べました。公平性を言うなら富裕層や大企業に負担を求めるべきで、弱者を狙った福祉医療の切り捨ては許せないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=794&FINO=1772&HUID=165347&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r3-5-seigan-5": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
        "三島久美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第282号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7992.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "文部科学省も自治体の判断で給食費を無料にできるとしており、県内の8割の市町村がすでに完全または一部無料化していると述べました。就学援助は申請しにくく行き渡っていないとして、県と費用を分担する形も含め、一部からでも無料化に踏み出すよう求めました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=794&FINO=1772&HUID=165357&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「憲法は給食費の無償までは定めておらず、年約18億円の財源をどこから出すかが大きな問題」「将来の無償化も考えられなくはないが、保護者の自覚も含めて食材費は負担してほしい」「低所得者には就学援助や生活保護の給食費相当額がある」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r3-5-seigan-6": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
        "三島久美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第282号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7992.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "コロナの感染拡大で入院できずに亡くなる人が出たのは、長年保健所や病床を減らし、医師・看護師不足を放置してきた結果だと述べました。医療・介護職員の大幅な増員、公立・公的病院の再編統合の見直し、75歳以上の窓口負担2割化の中止などを国に求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=794&FINO=1772&HUID=165357&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「市内では民間病院もコロナ患者を受け入れ、県は確保目標を上回る病床を確保するなど対応できている」「世代間の公平を考えると、後期高齢者に2割の自己負担をお願いするのは適当」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r3-5-seigan-7": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "飯塚邦広",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
        "三島久美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第282号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7992.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "土地利用規制法は十分な審議なしに成立し、何が阻害行為に当たるかを政府が決められると述べました。市内の自衛隊駐屯地や高崎駅周辺が対象になれば、不動産価値の下落や私権の制限が起こりうるとして、注視区域の指定で地元自治体の意見を聴くよう国に求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2021&TYY=2021&KGNO=794&FINO=1772&HUID=165359&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。建設水道常任委員長の報告では、委員会で「法律の附帯決議で、注視区域の指定の際は地方公共団体の意見を聴くと基本方針に定めることになっており、改めて意見書を出す必要はない」「まずは国会の附帯決議が誠実に実行されることが大事」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r4-1-seigan-1": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "三島久美子",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
      ],
      absent: ["飯塚邦広"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第283号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7984.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "70デシベル未満の中程度の難聴には国の補助がなく、補聴器は両耳で30万円ほどかかり年金生活者には大きな負担だと述べました。全国35以上の市町村が独自に助成しており、認知症の予防や医療・介護費の抑制にもつながるとして、健診への聴力検査の追加と市独自の助成を求めました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=805&FINO=1793&HUID=167335&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「補聴器の補助の基準は国の制度で定められており、国で議論されるべき事項」「市は国の基準に基づいてできる限り対応しており、請願は市の状況にそぐわない」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r4-1-seigan-2": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "根岸赴夫",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "三島久美子",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
      ],
      absent: ["飯塚邦広"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第283号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/7984.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "群馬県の最低賃金は865円で、8時間働いても手取り12万〜14万円にしかならず、県境を越えると時給が100円違うと述べました。地域間格差が人口流出を招いているとして、全国一律の最低賃金制度と、賃上げのための中小企業への助成・融資の拡充を求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=805&FINO=1793&HUID=167337&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。市民経済常任委員長の報告では、委員会で「時給1,500円という試算は現実とかけ離れている」「中小企業への支援は、国が業務改善助成金や事業再構築補助金などですでに取り組んでいる」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r4-2-gian-46": {
    question: "原案のとおり可決することに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第284号 4ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8048.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "人事院勧告に基づいて職員の期末手当（ボーナス）を引き下げる改正で、職員1人あたり平均約10万6,000円の減収になります。物価高や円安で国民生活が厳しいなかでの賞与のカットは、保育士や学童クラブ指導員の給与を通じて地域経済にも悪影響を与えると述べました。コロナ対応で奮闘する職員の働きにも報いていないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=816&FINO=1800&HUID=167668&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r4-2-gian-48": {
    question: "原案のとおり可決することに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第284号 4ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8048.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "議案第46号の期末手当の引き下げに合わせて人件費を減らす補正予算です。物価高や円安で国民生活が厳しいなかでの賞与のカットは、保育士や学童クラブ指導員の給与を通じて地域経済にも悪影響を与えると述べました。コロナ対応で奮闘する職員の働きにも報いていないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=816&FINO=1800&HUID=167668&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r4-2-gian-49": {
    question: "原案のとおり可決することに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第284号 4ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8048.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "議案第46号の期末手当の引き下げに合わせて人件費を減らす補正予算です。物価高や円安で国民生活が厳しいなかでの賞与のカットは、保育士や学童クラブ指導員の給与を通じて地域経済にも悪影響を与えると述べました。コロナ対応で奮闘する職員の働きにも報いていないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=816&FINO=1800&HUID=167668&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r4-2-gian-50": {
    question: "原案のとおり可決することに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第284号 4ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8048.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "議案第46号の期末手当の引き下げに合わせて人件費を減らす補正予算です。物価高や円安で国民生活が厳しいなかでの賞与のカットは、保育士や学童クラブ指導員の給与を通じて地域経済にも悪影響を与えると述べました。コロナ対応で奮闘する職員の働きにも報いていないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=816&FINO=1800&HUID=167668&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r4-2-gian-51": {
    question: "原案のとおり可決することに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第284号 4ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8048.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "議案第46号の期末手当の引き下げに合わせて人件費を減らす補正予算です。物価高や円安で国民生活が厳しいなかでの賞与のカットは、保育士や学童クラブ指導員の給与を通じて地域経済にも悪影響を与えると述べました。コロナ対応で奮闘する職員の働きにも報いていないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=816&FINO=1800&HUID=167668&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r4-2-gian-52": {
    question: "原案のとおり可決することに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第284号 4ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8048.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "議案第46号の期末手当の引き下げに合わせて人件費を減らす補正予算です。物価高や円安で国民生活が厳しいなかでの賞与のカットは、保育士や学童クラブ指導員の給与を通じて地域経済にも悪影響を与えると述べました。コロナ対応で奮闘する職員の働きにも報いていないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=816&FINO=1800&HUID=167668&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r4-2-gian-53": {
    question: "原案のとおり可決することに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第284号 4ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8048.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "議案第46号の期末手当の引き下げに合わせて人件費を減らす補正予算です。物価高や円安で国民生活が厳しいなかでの賞与のカットは、保育士や学童クラブ指導員の給与を通じて地域経済にも悪影響を与えると述べました。コロナ対応で奮闘する職員の働きにも報いていないとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=816&FINO=1800&HUID=167668&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r4-4-seigan-3": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "飯塚邦広",
        "渡辺幹治",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "三島久美子",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第286号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8036.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "核兵器禁止条約は2021年に発効し66か国が批准した一方、NPT再検討会議は2回続けて決裂したと述べました。ロシアが核の使用をちらつかせる今こそ、唯一の戦争被爆国としてせめて締約国会議にオブザーバー参加すべきで、県内でも21自治体が同じ意見書を出しているとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=838&FINO=1840&HUID=170978&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。総務常任委員長の報告では、委員会で「核兵器廃絶には共感するが、安全保障環境が厳しさを増す中では米国と歩調を合わせ、核兵器不拡散条約で成果を得ることが重要」「国民を守る手段や優先順位は国の専管事項で、国会の慎重な審議に委ねるべき」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r4-4-seigan-4": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "飯塚邦広",
        "渡辺幹治",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "三島久美子",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
      ],
    },
    voteSource: {
      label:
        "たかさき市議会だより第286号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8036.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "インボイス制度が始まると売上げ1,000万円以下の免税業者に事務と税の負担がかかり、登録しなければ仕事を失うおそれがあると述べました。対象はフリーランスやシルバー人材センターで働く高齢者まで約1,000万人に及び、日本商工会議所なども慎重な検討を求めているとして、実施中止を求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=838&FINO=1840&HUID=170980&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。市民経済常任委員長の報告では、委員会で「益税の解消や、消費税分を価格転嫁できない下請取引の慣習の見直しなどのメリットがある」「消費税分が益税として事業者に残る不公平感もあり、導入は仕方がない」「導入の意義は認めざるを得ないが、実施時期やサポート体制の議論はまだ必要」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r4-5-gian-103": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
      absent: ["長壁真樹", "白石隆夫", "高橋美奈雄"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第287号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8028.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "国の個人情報保護法の改正に合わせ、市の個人情報保護条例を国のルールに一元化する条例です。自治体が独自に積み上げてきた保護の仕組みを取り崩し、地方自治を侵害すると述べました。個人情報が本人の同意なく企業の利益のために使われ、プライバシーが侵害されるおそれがあるとして反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=853&FINO=1861&HUID=172305&HATSUGENMODE=1",
      },
    ],
    reasonsNote: "賛成の立場からの討論はありませんでした。",
  },
  "r4-5-seigan-5": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "飯塚邦広",
        "渡辺幹治",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "三島久美子",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
      ],
      absent: ["長壁真樹", "白石隆夫", "高橋美奈雄"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第287号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8028.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "給食費の無料化は5年で全国224自治体に広がり、県内で何の補助もしていないのは高崎市を含む4市町村だけになったと述べました。いきなりの無料化が難しくても、一部補助や学年ごとの段階的な実施、国や県への支援要請から進めるよう求めました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=853&FINO=1861&HUID=172314&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「保護者負担の軽減には賛成だが、無料化には約17億円かかる」「支払いが難しい家庭には就学援助があり、安全・安心な自校方式の給食を続けるためにも食材費は負担してほしい」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r4-5-seigan-6": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "飯塚邦広",
        "渡辺幹治",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田正夫",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "三島久美子",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
      ],
      absent: ["長壁真樹", "白石隆夫", "高橋美奈雄"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第287号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8028.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "1病床あたりの医師・看護師の数は欧米より大幅に少なく、長時間労働と低い賃金が続いていると述べました。防衛費を5年で43兆円に増やすより看護師を増やすべきだとして、医療・介護職員の配置基準の見直しと大幅な増員、処遇改善を国に求める意見書に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2022&TYY=2022&KGNO=853&FINO=1861&HUID=172314&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「少子高齢化が急速に進む中、利用者に所得に応じた負担をしてもらうのは必要」「処遇改善はすでに国が実施している」「現場の中から少しずつ変えていくしかない」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r5-1-gian-37": {
    question: "委員長の報告のとおり原案可決とすることに賛成",
    rollCall: {
      against: ["伊藤敦博", "依田好明"],
      absent: ["柴田正夫"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第288号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8020.pdf",
    },
    reasons: [
      {
        side: "反対",
        member: "依田好明",
        faction: "日本共産党",
        summary:
          "高校生世代までの医療費無料化などは評価しつつ、給食費の無料化に前向きでないこと、利用者が少なく渋滞の原因にもなっているアリーナシャトルの運行継続、中学2年生全員への民間の英語4技能テスト、デマンド交通を否定していることに反対しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=866&FINO=1883&HUID=174106&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "時田裕之",
        faction: "新風会",
        summary:
          "コロナ後の社会経済の正常化が期待される一方、物価高で市民生活は厳しいと述べ、「新しい高崎」の実現に向けて提案された全ての議案に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=866&FINO=1883&HUID=174108&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "林恒徳",
        faction: "市民クラブ",
        summary:
          "市税収入を過去の実績に基づいて見込んだ、背伸びをしない予算づくりを評価し、令和5年度予算と関連議案に賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=866&FINO=1883&HUID=174110&HATSUGENMODE=1",
      },
      {
        side: "賛成",
        member: "丸山覚",
        faction: "公明党",
        summary:
          "経費を削減して債務残高を圧縮しつつ、成長につながる事業に財源を重点配分する財政運営を評価し、道路の穴ぼこ補修などの生活環境の改善策も挙げて賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=866&FINO=1883&HUID=174112&HATSUGENMODE=1",
      },
    ],
  },
  "r5-1-seigan-1": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "飯塚邦広",
        "渡辺幹治",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田和正",
        "田中治男",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
      ],
      absent: ["柴田正夫"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第288号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8020.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "保育現場の事故や虐待の背景には慢性的な人手不足があり、4・5歳児30人を保育士1人がみる今の配置基準は70年以上前のものだと述べました。国が子育て支援を打ち出した今こそ自治体から声を上げるべきで、国の動向を見守るのは地方議員の責任放棄だとして賛成しました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=866&FINO=1883&HUID=174121&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「保育士の配置基準や処遇改善はすでに国が異次元の少子化対策の一環として検討を始めており、まずは経過を見守るべき」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。採決では市民クラブの7人も採択に賛成しました。",
  },
  "r5-1-seigan-2": {
    question: "請願を採択することに賛成",
    rollCall: {
      against: [
        "大河原吉明",
        "青木和也",
        "丸山芳典",
        "樋口哲郎",
        "清水明夫",
        "後藤彰",
        "片貝喜一郎",
        "時田裕之",
        "大竹隆一",
        "飯塚邦広",
        "渡辺幹治",
        "長壁真樹",
        "白石隆夫",
        "柄沢高男",
        "松本賢一",
        "石川徹",
        "後閑太一",
        "後閑賢二",
        "丸山和久",
        "柴田和正",
        "田中治男",
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "三島久美子",
        "高橋美奈雄",
        "中村さと美",
        "小野聡子",
        "新保克佳",
        "逆瀬川義久",
        "丸山覚",
        "谷川留美子",
      ],
      absent: ["柴田正夫"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第288号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8020.pdf",
    },
    reasons: [
      {
        side: "賛成",
        member: "伊藤敦博",
        faction: "日本共産党",
        summary:
          "加齢性難聴の人は全国で1,400万人以上いるのに、補聴器を持つ人は14.4%にとどまり、最大の理由は値段の高さだと述べました。全国約120の自治体が補助しており、認知症の予防や医療費の抑制にもつながるとして、補聴器購入の公的な助成を求めました。",
        minutesUrl:
          "https://takasaki.gijiroku.com/voices/cgi/voiweb.exe?ACT=203&KENSAKU=0&SORT=0&KTYP=0,1,2,3&KGTP=1,2,3&FYY=2023&TYY=2023&KGNO=866&FINO=1883&HUID=174121&HATSUGENMODE=1",
      },
    ],
    reasonsNote:
      "本会議で採択に反対の立場からの討論はありませんでした。教育福祉常任委員長の報告では、委員会で「市は国の基準に基づいてできる限り対応しており、国で議論されるべき内容」「難聴による障害者には補聴器購入の助成制度がすでにある」といった採択に賛成でない意見があったと報告されています（発言した委員名は報告されていません）。",
  },
  "r5-1-ikensho-1": {
    question: "原案のとおり可決することに賛成",
    rollCall: {
      against: [
        "荒木征二",
        "三井暢秀",
        "中島輝男",
        "林恒徳",
        "堀口順",
        "三島久美子",
        "高橋美奈雄",
        "伊藤敦博",
        "依田好明",
      ],
      absent: ["柴田正夫"],
    },
    voteSource: {
      label:
        "たかさき市議会だより第288号 12ページ（議案等審議結果・賛否一覧表）",
      url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/8020.pdf",
    },
    reasons: [],
    reasonsNote:
      "提出者の説明と委員会付託は省略され、本会議では質疑・討論がありませんでした。",
  },
};
