export type ShigaMunicipalityStatus = "live" | "upcoming";

export type ShigaMunicipality = {
  id: string;
  name: string;
  type: "市" | "町";
  mapX: number;
  mapY: number;
  status: ShigaMunicipalityStatus;
  href?: string;
  external?: boolean;
};

export const SHIGA_MUNICIPALITIES: readonly ShigaMunicipality[] = [
  {
    id: "otsu",
    name: "大津市",
    type: "市",
    mapX: 28,
    mapY: 58,
    status: "upcoming",
  },
  {
    id: "hikone",
    name: "彦根市",
    type: "市",
    mapX: 62,
    mapY: 36,
    status: "upcoming",
  },
  {
    id: "nagahama",
    name: "長浜市",
    type: "市",
    mapX: 52,
    mapY: 14,
    status: "upcoming",
  },
  {
    id: "omihachiman",
    name: "近江八幡市",
    type: "市",
    mapX: 42,
    mapY: 50,
    status: "upcoming",
  },
  {
    id: "kusatsu",
    name: "草津市",
    type: "市",
    mapX: 38,
    mapY: 62,
    status: "live",
    href: "https://mirai-gikai-kusatsu.vercel.app",
    external: true,
  },
  {
    id: "moriyama",
    name: "守山市",
    type: "市",
    mapX: 34,
    mapY: 56,
    status: "upcoming",
  },
  {
    id: "ritto",
    name: "栗東市",
    type: "市",
    mapX: 42,
    mapY: 64,
    status: "upcoming",
  },
  {
    id: "koka",
    name: "甲賀市",
    type: "市",
    mapX: 52,
    mapY: 76,
    status: "upcoming",
  },
  {
    id: "yasu",
    name: "野洲市",
    type: "市",
    mapX: 52,
    mapY: 52,
    status: "upcoming",
  },
  {
    id: "konan",
    name: "湖南市",
    type: "市",
    mapX: 48,
    mapY: 68,
    status: "upcoming",
  },
  {
    id: "takashima",
    name: "高島市",
    type: "市",
    mapX: 22,
    mapY: 28,
    status: "upcoming",
  },
  {
    id: "higashiomi",
    name: "東近江市",
    type: "市",
    mapX: 62,
    mapY: 58,
    status: "upcoming",
  },
  {
    id: "maibara",
    name: "米原市",
    type: "市",
    mapX: 68,
    mapY: 22,
    status: "upcoming",
  },
  {
    id: "hino",
    name: "日野町",
    type: "町",
    mapX: 62,
    mapY: 68,
    status: "upcoming",
  },
  {
    id: "ryuo",
    name: "竜王町",
    type: "町",
    mapX: 46,
    mapY: 62,
    status: "upcoming",
  },
  {
    id: "aisho",
    name: "愛荘町",
    type: "町",
    mapX: 64,
    mapY: 46,
    status: "upcoming",
  },
  {
    id: "toyosato",
    name: "豊郷町",
    type: "町",
    mapX: 68,
    mapY: 42,
    status: "upcoming",
  },
  {
    id: "kora",
    name: "甲良町",
    type: "町",
    mapX: 72,
    mapY: 40,
    status: "upcoming",
  },
  {
    id: "taga",
    name: "多賀町",
    type: "町",
    mapX: 78,
    mapY: 38,
    status: "upcoming",
  },
];
