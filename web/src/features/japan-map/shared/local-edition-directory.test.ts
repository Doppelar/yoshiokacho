import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { EHIME_MUNICIPALITIES } from "@/features/ehime-map/shared/municipalities";
import { KANAGAWA_MUNICIPALITIES } from "@/features/kanagawa-map/shared/municipalities";
import { MIE_MUNICIPALITIES } from "@/features/mie-map/shared/municipalities";
import { OSAKA_MUNICIPALITIES } from "@/features/osaka-map/shared/municipalities";
import { SAGA_MUNICIPALITIES } from "@/features/saga-map/shared/municipalities";
import { routes } from "@/lib/routes";
import { MUNICIPALITY_COVERAGE_REGIONS } from "./municipality-coverage-regions";
import { PREFECTURES } from "./prefectures";

const regions = [
  {
    id: "ehime",
    code: "38",
    total: 20,
    municipalities: EHIME_MUNICIPALITIES,
    href: routes.ehimeMap(),
  },
  {
    id: "osaka",
    code: "27",
    total: 43,
    municipalities: OSAKA_MUNICIPALITIES,
    href: routes.osakaMap(),
  },
  {
    id: "mie",
    code: "24",
    total: 29,
    municipalities: MIE_MUNICIPALITIES,
    href: routes.mieMap(),
  },
  {
    id: "saga",
    code: "41",
    total: 20,
    municipalities: SAGA_MUNICIPALITIES,
    href: routes.sagaMap(),
  },
];

// 2026-11-15: 指定Notionリンク集の自治体行。作成者SNSは対象外。
// 福岡市は表示URLと実際のhrefが異なるため、既存の市版（表示URL）を維持する。
const directoryLinks = [
  {
    name: "埼玉県　所沢市",
    url: "https://mirai-gikai-tokorozawa.vercel.app/",
  },
  {
    name: "千葉県　君津市",
    url: "https://mirai-gikai-kimitsu-web.vercel.app/",
  },
  {
    name: "東京都　中央区",
    url: "https://mirai-gikai.yukihoz.tokyo/",
  },
  {
    name: "東京都　新宿区",
    url: "https://miraigikai-shinjuku-web.vercel.app/",
  },
  {
    name: "東京都　世田谷区",
    url: "https://civictech-setagaya.org/",
  },
  {
    name: "東京都　大田区",
    url: "https://ota.aix.tokyo/",
  },
  {
    name: "東京都　足立区",
    url: "https://mirai-gikai-adachi-web.vercel.app/",
  },
  {
    name: "東京都　墨田区",
    url: "https://mirai-gikai-sumida.gorisan.info/",
  },
  {
    name: "東京都　立川市",
    url: "https://mirai-gikai-tachikawa-web.vercel.app/",
  },
  {
    name: "神奈川県　川崎市",
    url: "https://mirai-gikai-kawasaki-web.vercel.app/",
  },
  {
    name: "神奈川県　相模原市",
    url: "https://miraigikai-sagamihara.vercel.app/",
  },
  {
    name: "神奈川県　相模原市（2）",
    url: "https://mirai-gikai-sagamihara.vercel.app/",
  },
  {
    name: "滋賀県　草津市",
    url: "https://mirai-gikai-kusatsu.vercel.app/",
  },
  {
    name: "大阪府 枚方市",
    url: "https://mirai-gikai-hirakata-city-web-three.vercel.app/",
  },
  {
    name: "静岡県　沼津市",
    url: "https://mirai-numazu.com/",
  },
  {
    name: "三重県 桑名市",
    url: "https://mirai-gikai-kuwana-web.vercel.app/",
  },
  {
    name: "愛知県　名古屋市",
    url: "https://mirai-gikai-nagoya.vercel.app/",
  },
  {
    name: "広島県　安芸高田市",
    url: "https://mirai-gikai-akitakata-city-web.vercel.app/",
  },
  {
    name: "福岡県　福岡市",
    url: "https://mirai-gikai-fukuoka-city-web-6wib.vercel.app/",
  },
  {
    name: "福岡県　田川市",
    url: "https://tagawa-gikai.jp/",
  },
  {
    name: "福岡県　福津市",
    url: "https://mirai-gikai-fukutsu.jp/",
  },
  {
    name: "佐賀県　唐津市",
    url: "https://civictech-karatsu.org/mirai-gikai",
  },
  {
    name: "大分県　大分市",
    url: "https://mirai-gikai-oitacity-web.vercel.app/",
  },
  {
    name: "沖縄県　石垣市",
    url: "https://ishigaki-gikai-app-web-coral.vercel.app/",
  },
  {
    name: "神奈川県三浦郡　葉山町",
    url: "https://hayama-gikai-web.vercel.app/",
  },
  {
    name: "福岡県八女郡　広川町",
    url: "https://mirai-gikai-web-ashen.vercel.app/",
  },
  {
    name: "福岡県　遠賀町",
    url: "https://miraigikai.onga-mirai-tech.com/",
  },
];

describe("全国ページと地方版リンク集の照合", () => {
  it("一覧の全自治体サイトを掲載し、同一市の別サイトも残す", () => {
    const links = new Set(
      MUNICIPALITY_COVERAGE_REGIONS.flatMap((region) =>
        region.municipalities
          .filter((item) => item.status === "live" && item.href)
          .map((item) => item.href)
      )
    );
    for (const municipality of KANAGAWA_MUNICIPALITIES) {
      for (const site of municipality.additionalSites ?? [])
        links.add(site.href);
    }
    for (const site of directoryLinks) {
      expect(
        [...links].map((link) => link?.replace(/\/$/, "")),
        site.name
      ).toContain(site.url.replace(/\/$/, ""));
    }
  });

  it.each(
    regions
  )("$idの全市町村を重複なく登録し、地図の範囲内に配置する", (region) => {
    expect(region.municipalities).toHaveLength(region.total);
    expect(new Set(region.municipalities.map((item) => item.id)).size).toBe(
      region.total
    );
    expect(new Set(region.municipalities.map((item) => item.name)).size).toBe(
      region.total
    );
    const svg = readFileSync(
      new URL(
        `../../../../public/img/${region.id}-municipality-map.svg`,
        import.meta.url
      ),
      "utf8"
    );
    for (const item of region.municipalities) {
      expect(item.id).toMatch(new RegExp(`^${region.code}\\d{3}$`));
      expect(item.mapX).toBeGreaterThan(0);
      expect(item.mapX).toBeLessThan(100);
      expect(item.mapY).toBeGreaterThan(0);
      expect(item.mapY).toBeLessThan(100);
      expect(svg).toContain(`<title>${item.name}</title>`);
    }
  });

  it.each(regions)("$idへは県ページを経由し、全国集計にも含める", (region) => {
    const prefecture = PREFECTURES.find((item) => item.id === region.id);
    expect(prefecture?.status).toBe("live");
    expect(prefecture?.href).toBe(region.href);
    expect(prefecture?.external).not.toBe(true);
    expect(
      MUNICIPALITY_COVERAGE_REGIONS.find(
        (item) => item.prefectureId === region.id
      )?.municipalities
    ).toBe(region.municipalities);
  });
});
