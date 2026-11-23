import "server-only";

import { TAKASAKI_MINUTES_SEARCH_URL } from "../../shared/deliberations";

export function TakasakiDisclaimer({ sourceUrl }: { sourceUrl: string }) {
  return (
    <div className="space-y-3 pb-6">
      <h2 className="text-sm font-bold text-black">掲載コンテンツについて</h2>
      <p className="text-xs leading-relaxed text-mirai-text-note">
        件名・付託委員会・議決結果・賛否は、高崎市議会の公式資料「議案等審議結果一覧」の記載どおりです。一般質問の項目は「質問通告要旨」の記載どおりです（通告要旨を掲載していない会期は、本サイトが会議録から付けた項目名です）。質問と答弁、議案の解説、委員会での質疑の要旨、議論のまとめは、本サイトが会議録の本文を読んでまとめたものです。発言そのものではないため、正確な発言は会議録で確認してください。会議録が公開されていない会期は、公開後に追加します。議案ごとの意見欄に投稿された意見は投稿者個人のもので、本サイトの見解ではありません。本サイトは高崎市・高崎市議会・チームみらいの公式サイトではありません。
      </p>
      <p className="text-xs leading-relaxed text-mirai-text-note">
        出典：
        <a
          href={sourceUrl}
          className="underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          高崎市議会 議案等審議結果一覧（PDF）
        </a>
        、
        <a
          href={TAKASAKI_MINUTES_SEARCH_URL}
          className="underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          高崎市議会 会議録検索システム
        </a>
      </p>
    </div>
  );
}
