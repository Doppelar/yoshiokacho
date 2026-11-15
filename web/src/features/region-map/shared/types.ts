export type RegionMunicipality = {
  id: string;
  name: string;
  type: "市" | "町" | "村";
  mapX: number;
  mapY: number;
  status: "live" | "upcoming";
  href?: string;
  external?: boolean;
};

export type RegionMapConfig = {
  prefectureName: string;
  portalHref?: string;
  prefectureCode: string;
  imageSrc: string;
  municipalities: readonly RegionMunicipality[];
};
