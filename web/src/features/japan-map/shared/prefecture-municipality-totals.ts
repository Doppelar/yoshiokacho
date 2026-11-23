// J-LIS 都道府県別市区町村数一覧。政令指定都市の行政区は含めない。
// https://www.j-lis.go.jp/spd/code-address/kenbetsu-inspection/cms_11914151.html
// 市町村データがある県を管理。東京都は特別区を含む。
export const PREFECTURE_MUNICIPALITY_TOTALS: Readonly<Record<string, number>> =
  {
    aichi: 54,
    aomori: 40,
    chiba: 54,
    ehime: 20,
    fukuoka: 60,
    fukushima: 59,
    gunma: 35,
    hiroshima: 23,
    hyogo: 41,
    ishikawa: 19,
    kanagawa: 33,
    kyoto: 26,
    mie: 29,
    nagano: 77,
    nara: 39,
    oita: 18,
    okayama: 27,
    osaka: 43,
    okinawa: 41,
    saga: 20,
    saitama: 63,
    shiga: 19,
    shimane: 19,
    shizuoka: 35,
    tochigi: 25,
    tokyo: 62,
    tottori: 19,
    yamaguchi: 19,
  };
