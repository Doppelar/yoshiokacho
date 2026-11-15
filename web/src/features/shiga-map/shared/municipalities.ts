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
    mapX: 24.2,
    mapY: 66.4,
    status: "upcoming",
  },
  {
    id: "hikone",
    name: "彦根市",
    type: "市",
    mapX: 62.6,
    mapY: 48.1,
    status: "upcoming",
  },
  {
    id: "nagahama",
    name: "長浜市",
    type: "市",
    mapX: 65.1,
    mapY: 23.9,
    status: "upcoming",
  },
  {
    id: "omihachiman",
    name: "近江八幡市",
    type: "市",
    mapX: 45.7,
    mapY: 58.4,
    status: "upcoming",
  },
  {
    id: "kusatsu",
    name: "草津市",
    type: "市",
    mapX: 27.6,
    mapY: 72.7,
    status: "live",
    href: "https://mirai-gikai-kusatsu.vercel.app",
    external: true,
  },
  {
    id: "moriyama",
    name: "守山市",
    type: "市",
    mapX: 31.7,
    mapY: 66.1,
    status: "upcoming",
  },
  {
    id: "ritto",
    name: "栗東市",
    type: "市",
    mapX: 37.5,
    mapY: 75.5,
    status: "upcoming",
  },
  {
    id: "koka",
    name: "甲賀市",
    type: "市",
    mapX: 59.2,
    mapY: 83.8,
    status: "upcoming",
  },
  {
    id: "yasu",
    name: "野洲市",
    type: "市",
    mapX: 38.3,
    mapY: 64.7,
    status: "upcoming",
  },
  {
    id: "konan",
    name: "湖南市",
    type: "市",
    mapX: 47.1,
    mapY: 75.4,
    status: "upcoming",
  },
  {
    id: "takashima",
    name: "高島市",
    type: "市",
    mapX: 33.9,
    mapY: 37.2,
    status: "upcoming",
  },
  {
    id: "higashiomi",
    name: "東近江市",
    type: "市",
    mapX: 73.3,
    mapY: 64.4,
    status: "upcoming",
  },
  {
    id: "maibara",
    name: "米原市",
    type: "市",
    mapX: 81.6,
    mapY: 35.9,
    status: "upcoming",
  },
  {
    id: "hino",
    name: "日野町",
    type: "町",
    mapX: 70.2,
    mapY: 74.1,
    status: "upcoming",
  },
  {
    id: "ryuo",
    name: "竜王町",
    type: "町",
    mapX: 50.5,
    mapY: 69.5,
    status: "upcoming",
  },
  {
    id: "aisho",
    name: "愛荘町",
    type: "町",
    mapX: 68.2,
    mapY: 58,
    status: "upcoming",
  },
  {
    id: "toyosato",
    name: "豊郷町",
    type: "町",
    mapX: 66,
    mapY: 55,
    status: "upcoming",
  },
  {
    id: "kora",
    name: "甲良町",
    type: "町",
    mapX: 70.4,
    mapY: 54.6,
    status: "upcoming",
  },
  {
    id: "taga",
    name: "多賀町",
    type: "町",
    mapX: 80.8,
    mapY: 53.7,
    status: "upcoming",
  },
];
