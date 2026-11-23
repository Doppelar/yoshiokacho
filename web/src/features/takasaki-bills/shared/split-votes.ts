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
};
