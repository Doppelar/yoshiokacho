import type { Metadata } from "next";
import { MIYAGI_MUNICIPALITIES } from "@/features/miyagi-map/shared/municipalities";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";

export const metadata: Metadata = {
  title: "宮城県の市町村 | みらい議会",
  description: "宮城県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="宮城県"
      prefectureCode="04"
      imageSrc="/img/miyagi-municipality-map.svg"
      municipalities={MIYAGI_MUNICIPALITIES}
    />
  );
}
