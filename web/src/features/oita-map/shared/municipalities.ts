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
    mapX: 68,
    mapY: 54,
    status: "live",
    href: "https://script.google.com/macros/s/AKfycbyizAr2Ula1osVJZV3OIMJy8fPO7A1wNGwW5nLTjrzSMbe5pYmTlemvqDDMLsLu7AUD/exec",
    external: true,
  },
  {
    id: "beppu",
    name: "別府市",
    type: "市",
    mapX: 50,
    mapY: 40,
    status: "upcoming",
  },
  {
    id: "nakatsu",
    name: "中津市",
    type: "市",
    mapX: 20,
    mapY: 20,
    status: "upcoming",
  },
  {
    id: "hita",
    name: "日田市",
    type: "市",
    mapX: 14,
    mapY: 40,
    status: "upcoming",
  },
  {
    id: "saiki",
    name: "佐伯市",
    type: "市",
    mapX: 76,
    mapY: 78,
    status: "upcoming",
  },
  {
    id: "usuki",
    name: "臼杵市",
    type: "市",
    mapX: 68,
    mapY: 62,
    status: "upcoming",
  },
  {
    id: "tsukumi",
    name: "津久見市",
    type: "市",
    mapX: 74,
    mapY: 66,
    status: "upcoming",
  },
  {
    id: "taketa",
    name: "竹田市",
    type: "市",
    mapX: 34,
    mapY: 66,
    status: "upcoming",
  },
  {
    id: "bungotakada",
    name: "豊後高田市",
    type: "市",
    mapX: 42,
    mapY: 18,
    status: "upcoming",
  },
  {
    id: "kitsuki",
    name: "杵築市",
    type: "市",
    mapX: 54,
    mapY: 28,
    status: "upcoming",
  },
  {
    id: "usa",
    name: "宇佐市",
    type: "市",
    mapX: 32,
    mapY: 24,
    status: "upcoming",
  },
  {
    id: "bungoono",
    name: "豊後大野市",
    type: "市",
    mapX: 48,
    mapY: 68,
    status: "upcoming",
  },
  {
    id: "yufu",
    name: "由布市",
    type: "市",
    mapX: 42,
    mapY: 48,
    status: "upcoming",
  },
  {
    id: "kunisaki",
    name: "国東市",
    type: "市",
    mapX: 64,
    mapY: 16,
    status: "upcoming",
  },
  {
    id: "hiji",
    name: "日出町",
    type: "町",
    mapX: 56,
    mapY: 34,
    status: "upcoming",
  },
  {
    id: "kokonoe",
    name: "九重町",
    type: "町",
    mapX: 30,
    mapY: 48,
    status: "upcoming",
  },
  {
    id: "kusu",
    name: "玖珠町",
    type: "町",
    mapX: 26,
    mapY: 40,
    status: "upcoming",
  },
  {
    id: "himeshima",
    name: "姫島村",
    type: "村",
    mapX: 58,
    mapY: 6,
    status: "upcoming",
  },
];
