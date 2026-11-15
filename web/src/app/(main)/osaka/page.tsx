import type { Metadata } from "next";
import { OSAKA_MUNICIPALITIES } from "@/features/osaka-map/shared/municipalities";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";

export const metadata: Metadata = {
  title: "大阪府の市町村 | みらい議会",
  description: "大阪府の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="大阪府"
      prefectureCode="27"
      imageSrc="/img/osaka-municipality-map.svg"
      municipalities={OSAKA_MUNICIPALITIES}
    />
  );
}
