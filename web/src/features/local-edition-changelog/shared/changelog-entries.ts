export type LocalEditionChangelogEntry = {
  /** YYYY-MM-DD（JST） */
  date: string;
  title: string;
  href?: string;
};

/**
 * みらい議会地方版（連載）の更新履歴。新しい順に並べる。
 * 自治体の追加・公開などがあったら先頭に追記する。
 */
export const LOCAL_EDITION_CHANGELOG: readonly LocalEditionChangelogEntry[] = [
  {
    date: "2026-10-24",
    title: "全国47都道府県の県議会のみらい議会へのリンクを追加しました",
    href: "https://mirai-gikai-zenkoku.vercel.app/",
  },
  {
    date: "2026-10-24",
    title: "みらい議会＠遠賀町（福岡県）を追加しました",
    href: "https://miraigikai.onga-mirai-tech.com/",
  },
  {
    date: "2026-10-24",
    title: "みらい議会地方版の連載申請の受付を開始しました",
  },
  {
    date: "2026-09-23",
    title: "全国の都道府県から各地のみらい議会を開ける地図を公開しました",
  },
  {
    date: "2026-09-13",
    title: "みらい議会＠吉岡町を公開しました",
  },
];
