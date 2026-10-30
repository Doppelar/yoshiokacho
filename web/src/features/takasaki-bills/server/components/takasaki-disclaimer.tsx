import "server-only";

export function TakasakiDisclaimer({ sourceUrl }: { sourceUrl: string }) {
  return (
    <div className="space-y-3 pb-6">
      <h2 className="text-sm font-bold text-black">掲載コンテンツについて</h2>
      <p className="text-xs leading-relaxed text-mirai-text-note">
        件名・付託委員会・議決結果・賛否は、高崎市議会の公式資料「議案等審議結果一覧」の記載どおりです。議案の内容の解説は、公式資料で確認できたものから順次追加します。本サイトは高崎市・高崎市議会・チームみらいの公式サイトではありません。
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
      </p>
    </div>
  );
}
