import type { Metadata } from "next";
import { HOKKAIDO_MUNICIPALITIES } from "@/features/hokkaido-map/shared/municipalities";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";

export const metadata: Metadata = {
  title: "北海道の市町村 | みらい議会",
  description: "北海道の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="北海道"
      prefectureCode="01"
      imageSrc="/img/hokkaido-municipality-map.svg"
      municipalities={HOKKAIDO_MUNICIPALITIES}
    />
  );
}
