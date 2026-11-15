type CodhMapAttributionProps = {
  /** 都道府県コード（2桁）。CODH の該当ページへのリンクに使う。 */
  prefectureCode: string;
  /** 出典の前に添える補足。島しょ部の扱いなど。 */
  note?: string;
};

export function CodhMapAttribution({
  prefectureCode,
  note,
}: CodhMapAttributionProps) {
  return (
    <p className="mt-2 text-xs text-mirai-text-secondary">
      {note}
      地図：
      <a
        href={`https://geoshape.ex.nii.ac.jp/city/choropleth/${prefectureCode}_city_dc.html`}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        『歴史的行政区域データセットβ版』（CODH作成）
      </a>
      を加工（CC BY 4.0）
    </p>
  );
}
