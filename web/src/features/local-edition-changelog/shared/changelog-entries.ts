import { routes } from "@/lib/routes";

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
    date: "2026-11-15",
    title: "山口県・鳥取県の全38自治体の公開URLを修正しました",
    href: routes.japanMap(),
  },
  {
    date: "2026-11-15",
    title: "全国地図の先頭に自治体掲載数と全国での掲載率を表示しました",
    href: routes.japanMap(),
  },
  {
    date: "2026-11-15",
    title: "青森県の市町村地図と三戸町を追加しました",
    href: routes.aomoriMap(),
  },
  {
    date: "2026-11-15",
    title: "長野県の33町村リンクを追加しました",
    href: routes.naganoMap(),
  },
  {
    date: "2026-11-15",
    title: "栃木県の市町村地図と宇都宮市・益子町を追加しました",
    href: routes.tochigiMap(),
  },
  {
    date: "2026-11-15",
    title: "岡山県の全27市町村リンクを公開しました",
    href: routes.okayamaMap(),
  },
  {
    date: "2026-11-15",
    title: "山口県の市町村地図と全19市町村を追加しました",
    href: routes.yamaguchiMap(),
  },
  {
    date: "2026-11-15",
    title: "鳥取県の市町村地図と全19市町村を追加しました",
    href: routes.tottoriMap(),
  },
  {
    date: "2026-11-15",
    title: "島根県の市町村地図と全19市町村を追加しました",
    href: routes.shimaneMap(),
  },
  {
    date: "2026-11-15",
    title: "吉岡町の2025・2026年の議案データを追加しました",
    href: routes.billsList(),
  },
  {
    date: "2026-11-15",
    title: "高崎市の2025・2026年の全10会期の議案・議決結果を掲載しました",
    href: routes.takasakiHome(),
  },
  {
    date: "2026-11-15",
    title: "太田市の2025・2026年の9会議の議案・議決結果を掲載しました",
    href: routes.otaHome(),
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠喬木村（長野県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-takagi-mura-dxe6oxmxtxexexsvxb/P5aWpRkliRhpo1FJMDpPJfGBfh_IKsW4q3sk5I02RhI",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠天龍村（長野県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-tenryu-mura-hc6oxmxnxn0xvbxb/wZ_cjrn3T7F_j5QJPJAO905w2dIby50djaoYZ4szW_g",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠泰阜村（長野県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-yasuoka-mura-xoxj6oxmxnxnexul2/F1HOR6jPU8UYtHJDSLnu6cw20p0F-Aom6ntErqpSJAc",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠中之条町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-nakanojo-machi-lq6oxmisgxgzd/c5_rZrHZhHjMh5ndrTSZhg3SU8cpAoVjo2RuHJhAM6I",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠長野原町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-naganohara-machi-axx6oxmixwgxrxo8/YCeECnjfRj2ov5Q7rwnDHbi6rnek8ngsjdwct6VKPYs",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠嬬恋村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-tsumagoi-mura-sq6oxmixwxixq70/e_C6qE6vM3Nk7JQrvCwaTc7-rgHyebWQRXZq81FZ6D8",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠草津町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-kusatsu-machi-xlxe6oxmixtxn18l/qzCev56-V92VjvRIhb578fWPiOtoi7784u8sanafdsg",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠高山村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-takayama-mura-xgxe6oxmixxaxopxs/QSha2mH-pwFrws05gRFnm_DhGL0o_5jqJuzpvraZGFU",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠東吾妻町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-higashiagatsuma-machi-exx6oxmixtz1xyxu/iQwgIjk73TpTH2lDf32exvhi2YbbEl65Ww4jOpAzEck",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠片品村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-katashina-mura-pq6oxmixyxkxitxv/PVfGe6kd6qS0-RYFLyIRA6zdgWD63CvEpIzu0flwjaw",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠川場村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-kawaba-mura-zq6oxmixrx07xuxr/Mwm900G_7k6CvRafLNVubPZDwsTvNCVZ8qiwPtqfIC4",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠昭和村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-showa-mura-ixx6oxmixqxrc9xg/GpXukd6Q36aV5ojxJBQmysTyriPOEHT7cMaQwThDHgA",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠みなかみ町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-minakami-machi-oxx6oxmjlx0j9xm/78yk8ekZc3N_FKbBIbB_Yc9cjNKrI6JRe3rR_V5a3M4",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠大泉町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-oizumi-machi-zp6oxmjot9xpz/J-1FOvVXMtWAeYuU4UQ4kTCCBfkYCl6dCtK8dLMFRE4",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠邑楽町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-ora-machi-rxx6oxmjjxxqxmxr/CVBsGdMgafUYIV3VL22z3LOZh1jmGBb4fpb0oPlHAYM",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠千代田町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-chiyoda-machi-xwxe6oxmjlxzkxqxu/t-7f9DyOgWJgJeZompcJtpKRA-KQPi4spet2DvPuLt4",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠明和町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-meiwa-machi-txx6oxmjixbvxsf/8pbi5F8TZehiPnTkbv0Ezqo4fT3Td2-nWPAAhJKLzQo",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠板倉町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-itakura-machi-kxx6oxmjoxh8x00/lCDNm3OjQUzV50RZhSSVTqmBvGgR-iOO3G3kpshIS9I",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠長野市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-nagano-shi-xip6oxmjinwxixo/S_ZGgztqfYyESl9_igQqxItDVfWkdKESaJZ_4Yx_UKo",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠松本市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-matsumoto-shi-sxx6oxmjjhtky/ouWE6QrgmwGG_wTzFON0acC-8OlSUaq3mHR-nTFrHaA",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠上田市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-ueda-shi-xcp6oxmjxvxd9cxa/2MqZiuoNHNN17782mK91N5Ak0Y23XqN0Wn9Qa0ywbyE",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠岡谷市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-okaya-shi-xoxd6oxmjxxr2q4/YBM05Hff1kXTubUEJdtVUc8GdgvTScVUeOlEIxHjtMI",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠飯田市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-iida-shi-xnxd6oxmjxy6x0xsn/q4PEJFqQMxK4kA8RzKaK5DSN8n35eowuhPKPHezOiqc",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠諏訪市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-suwa-shi-kxw6oxmjxvbaxtxi/KpzXmryIqp2E-yRHs16KEtPEePws1bDWv6uJyvQIlxo",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠須坂市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-suzaka-shi-xrxd6oxmjxvpa39/WFpyYLxtXZiYvPvHkn_XcdEn5mCRs3SPctkwcFuhb40",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠伊那市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-ina-shi-xuxd6oxmjxtnhxge/Tg3Lrxl2s0qg63gtlLLYAfvLw7oxgyqMihbgCe93lk8",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠駒ヶ根市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-komagane-shi-nxw6oxmjxt9iwxn/REP7b1Le6fY84Frh-4RFgV_dBWiuT5_ihnHDBZyblF8",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠中野市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-nakano-shi-xip6oxmjxrzosxk/eYR_ziGmewh5QGqh_AJG7UYBKrjm35bLskBL7i22NO4",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠大町市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-omachi-shi-gp6oxmkawffk/g4EEU7kteYoB9-YEtkdxa12B3ynrTendWGObbB3nujc",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠飯山市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-iiyama-shi-cp6oxmkde54y/lzc8Fma3SPJ-E0kvKZqy-vRAdkQj4xr5L3IN1wrQ6_g",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠茅野市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-chino-shi-oxd6oxmkf1xyi2/LX3WsuvueauNuu8PPs_S_aHvNPYX_tqDWvPVG2jRo_E",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠塩尻市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-shiojiri-shi-xnxw6oxmkaxkeoxl/i4TVofo1PyvQFREed8PnRrwTrKT8xSn8GxUSDJK7ZCs",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠佐久市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-saku-shi-txd6oxmkbxeb0v/mlzEQRDIvzvpPLwrJaA1FsAJJZU6kInGApd2luY3rkc",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠千曲市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-chikuma-shi-ap6oxmkezx0x0a/QL9Xe4mQUKJ_l3dRKJfTqZpYWb46EEI7ZdhvXtQB7Hs",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠東御市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-tomi-shi-mxd6oxmkgnxtcxe/l3c23vSFTBKCHEmTOuBuG43cdbz7Mk9BijGYxU7mG4o",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠安曇野市を追加しました",
    href: "https://muse.ai/s/mirai-gikai-azumino-shi-wxd6oxmk9xcixdxa/AjNMJckKsQqFKpW67v004kkThA2hYrA25qeU3b8lMHM",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠下諏訪町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-shimosuwa-machi-eo6oxmkximc4xe/XBoTvF7bKCxi4R47Ou7tlLTmEkt8eQWIy53UkaQlt4c",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠富士見町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-fujimi-machi-xqxv6oxmkxfcnxwy/TauSKpIop7s9Uz3HwpkdPrTV1T86D_ZR7f_T9-aaCTA",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠原村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-hara-mura-xnxv6oxmkxhegjt/LR_KaRZXinIIyxh6as6SZtevf201nwgqU5y166SVUD4",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠辰野町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-tatsuno-machi-xzxd6oxmkxi8cxvd/dDaj_OkEnmaclCSt2qsJ3B7tEUwinEeW886i4awc_BU",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠箕輪町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-minowa-machi-xuxv6oxmkxcuy7k/aaBdFHhXzAo-BF_iIoGPI1xZVVHtOL-cm2WbARBnH_Y",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠飯島町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-iijima-machi-lo6oxmkxdxctxsv/lLVE9OD-f-7OTLTTz7_lZE7zBaBwR9iE09OolmzauhU",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠南箕輪村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-minamiminowa-mura-io6oxmkxfxemfq/bFb4OUXN0GnMmeYdETnoGLrNA59T3HoeJSig0FulmM0",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠中川村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-nakagawa-mura-xhxd6oxmkxbmxcm9/-QhetC-_8aYFo2O8i8tHqmyIRdbnpL0kOFPsXuGBEcE",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠宮田村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-miyada-mura-xmxv6oxmlh65vxi/6yWuRuM646nZAdkvodYkiwF0HESs9S0gMIJZwI63kDA",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠松川町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-matsukawa-machi-xixv6oxmljxnxvkxw/PSS4Yd7caS2UT2SPLZ5f2YuwzovbPgU2JtB94njZhFk",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠高森町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-takamori-machi-bo6oxmljzxwbv/2M2InbBNB6DvLxgs1X37_kwGt0yljpfaEom6nsW3iMI",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠阿南町を追加しました",
    href: "https://muse.ai/s/mirai-gikai-anan-machi-xgxv6oxmll9xqfy/LLX4T7DdrAwUwfqGi19gzmvxus0VEYb1fQZWofusXE0",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠阿智村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-achi-mura-lxc6oxmlmxjxkjxb/3lryEmzeJrmONG2e6PyNoy22_pODX-Sa_-F9kCeSmc8",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠平谷村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-hiraya-mura-xvn6oxmlkxvxr67/iM8r_NYba0zM8fV8VCTsDChwWzOohU6ltvE6bq8Ld5g",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠根羽村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-neba-mura-txc6oxmlhk4xf9/kk9BJW65vm0hWCdF19EOP73IBY1o24nmgMQ632L7oHA",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠下條村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-shimojo-mura-do6oxmlie1gxt/B7_ADHUb-MFtOpQ_8O1bt1CV1WBleNovoGvYn4dbBMw",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠売木村を追加しました",
    href: "https://muse.ai/s/mirai-gikai-urugi-mura-jm6oxmmxqkc6p/yhmeqa1q6yIGDDfOvm6hv3jzqG35pC5Kob0o6zMMros",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠玉村町（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-tamamura-machi-xjxy6oxfexqxbkxwxh/rz4DZv-JUwAyKvGDcEJzXN3m6xAko3iiD0tTXOCDBCA",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠上野村（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-ueno-mura-ch6oxfpxl8klxi/CMtC4yI7SgXoZwvQEuH15ySt8nNS7LVBOhl0qjIkHXk",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠南牧村（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-nanmoku-mura-mxc6oxfxd728xrxw/RWOK9uxlFqlS8W-EVZ5e52xfi8oAVJb9roy0lK5RiwA",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠下仁田町（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-shimonita-machi-qxp6oxfx0goxtna/x2DwSIt6M2vzwL-4qErWr8wWO73GcIVLT9gWIhgW2yI",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠甘楽町（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-kanra-machi-nh6oxg01y2bb/Y_xxbkz6H_RCtuEzHtLJxCwWkNuMDtUVd9sRw5q1L-w",
  },
  {
    date: "2026-11-15",
    title: "長野県の市町村地図を公開しました",
    href: routes.naganoMap(),
  },
  {
    date: "2026-11-15",
    title: "全国版ポータルへのリンクを追加しました",
    href: "https://mirai-gikai-portal.vercel.app/",
  },
  {
    date: "2026-11-15",
    title: "岡山県の市町村地図を公開しました",
    href: routes.okayamaMap(),
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠榛東村（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-shinto-mura-cm6oxf0uxfhzxi/9ARbts_J3wHzQUWSj1DbvFtLw3vzqAMvGmY6TiA3HYg",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠安中市（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-annaka-shi-dg6oxew4x0xasv/qtAfuthZNIlWGmmbE3zPM8lwN6oFhm53OSXbLE9aMEk",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠みどり市（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-midori-shi-xrxt6oxexkoxtxlsz/o8DSmjeo8DXEgZp3OnyQrEhTdBMvHLjGvDvIB0KYIiQ",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠沼田市（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-numata-shi-wxj6oxdxkxm9mxtxm/oAOFO2A_fVAnXjd0MaaMdWQ_zxyyCKuPCBVCP9cMStI",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠渋川市（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-shibukawa-shi-x0xy6oxe4tflxg3/RAvzrb2s8Y_IZMCE7_slRG4LRPCCpSSs6gTWR202ViI",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠富岡市（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-tomioka-shi-jn6oxe8xvxoxafxx/3fWAWp6KIpMsiNANLgUdrBtbvd3cUhxP4DhvekE1Oko",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠伊勢崎市（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-isesaki-shi-xuxg6oxdtpxexcxfxe/1KTMitQELYirud_ViIgA-Rh6GFzuNlsecywXjBlITcs",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠桐生市（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-kiryu-shi-gu6oxdqn43rxa/X0vBZIvHWen-inurtgds-tIewZLRaMLevM9Ht3MdevI",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠藤岡市（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-fujioka-shi-dxk6oxdpw3gxgf/T8uk_GzLez9gTYvH74NfGh62uueKDSAIccT334cf-Eg",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠前橋市（群馬県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-maebashi-shi-xixn6oxd5kh9cxk/-YH3T0WZJ_7GYS7hQleRGRScO5wr2f5wo-B1GayEiW4",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠館林市のリンクを新しいサイトに変更しました",
    href: "https://muse.ai/s/mirai-gikai-tatebayashi-shi-xuxc6oxaxbxr3xw22/zDtxaeX2ZAIDDsQD_GQmKJWMiT0TpShYu6hA-TI7Lq4",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠奈義町（岡山県）を追加しました",
    href: "https://muse.ai/s/mirai-gikai-nagi-xtq6sqxakgwxvxp/q2nMcOrMbt6FUGCkTYThe4ns35jGA4XZC67zhdeO7Yk",
  },
  {
    date: "2026-11-15",
    title: "みらい議会＠小諸市（長野県）を追加しました",
    href: "https://mirai-gikai-komoro-web.vercel.app/",
  },
  {
    date: "2026-10-30",
    title: "みらい議会＠高崎市（群馬県）を追加しました",
  },
  {
    date: "2026-10-25",
    title: "みらい議会＠君津市（千葉県）を追加しました",
    href: "https://mirai-gikai-kimitsu-web.vercel.app/",
  },
  {
    date: "2026-10-25",
    title: "みらい議会＠大分市のリンクを新しいサイトに変更しました",
    href: "https://mirai-gikai-oitacity-web.vercel.app/",
  },
  {
    date: "2026-10-24",
    title: "県議会のみらい議会（全国版）へのリンクを追加しました",
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
