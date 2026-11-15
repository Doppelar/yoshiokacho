export type OitaMunicipalityStatus = "live" | "upcoming";

export type OitaMunicipality = {
  id: string;
  name: string;
  type: "市" | "町" | "村";
  mapX: number;
  mapY: number;
  status: OitaMunicipalityStatus;
  href?: string;
  external?: boolean;
};

export const OITA_MUNICIPALITIES: readonly OitaMunicipality[] = [
  {
    id: "oita",
    name: "大分市",
    type: "市",
    mapX: 59.7,
    mapY: 54.4,
    status: "live",
    href: "https://mirai-gikai-oitacity-web.vercel.app/",
    external: true,
  },
  {
    id: "beppu",
    name: "別府市",
    type: "市",
    mapX: 46.7,
    mapY: 44.7,
    status: "upcoming",
  },
  {
    id: "nakatsu",
    name: "中津市",
    type: "市",
    mapX: 24,
    mapY: 28.4,
    status: "upcoming",
  },
  {
    id: "hita",
    name: "日田市",
    type: "市",
    mapX: 11.7,
    mapY: 48.4,
    status: "upcoming",
  },
  {
    id: "saiki",
    name: "佐伯市",
    type: "市",
    mapX: 69,
    mapY: 81.1,
    status: "upcoming",
  },
  {
    id: "usuki",
    name: "臼杵市",
    type: "市",
    mapX: 66.9,
    mapY: 64.1,
    status: "upcoming",
  },
  {
    id: "tsukumi",
    name: "津久見市",
    type: "市",
    mapX: 75.3,
    mapY: 64.4,
    status: "upcoming",
  },
  {
    id: "taketa",
    name: "竹田市",
    type: "市",
    mapX: 37.9,
    mapY: 70.9,
    status: "upcoming",
  },
  {
    id: "bungotakada",
    name: "豊後高田市",
    type: "市",
    mapX: 50.4,
    mapY: 18.3,
    status: "upcoming",
  },
  {
    id: "kitsuki",
    name: "杵築市",
    type: "市",
    mapX: 52.5,
    mapY: 30,
    status: "upcoming",
  },
  {
    id: "usa",
    name: "宇佐市",
    type: "市",
    mapX: 38.6,
    mapY: 29.7,
    status: "upcoming",
  },
  {
    id: "bungoono",
    name: "豊後大野市",
    type: "市",
    mapX: 50.8,
    mapY: 73.2,
    status: "upcoming",
  },
  {
    id: "yufu",
    name: "由布市",
    type: "市",
    mapX: 41.9,
    mapY: 51.7,
    status: "upcoming",
  },
  {
    id: "kunisaki",
    name: "国東市",
    type: "市",
    mapX: 60.4,
    mapY: 19.3,
    status: "upcoming",
  },
  {
    id: "hiji",
    name: "日出町",
    type: "町",
    mapX: 51.8,
    mapY: 36.4,
    status: "upcoming",
  },
  {
    id: "kokonoe",
    name: "九重町",
    type: "町",
    mapX: 30,
    mapY: 53.2,
    status: "upcoming",
  },
  {
    id: "kusu",
    name: "玖珠町",
    type: "町",
    mapX: 26.4,
    mapY: 43,
    status: "upcoming",
  },
  {
    id: "himeshima",
    name: "姫島村",
    type: "村",
    mapX: 61.3,
    mapY: 4.4,
    status: "upcoming",
  },
];
