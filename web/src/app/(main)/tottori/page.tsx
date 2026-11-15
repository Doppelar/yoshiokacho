import type { Metadata } from "next";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";
import { TOTTORI_MUNICIPALITIES } from "@/features/tottori-map/shared/municipalities";

export const metadata: Metadata = {
  title: "鳥取県の市町村 | みらい議会",
  description: "鳥取県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="鳥取県"
      prefectureCode="31"
      imageSrc="/img/tottori-municipality-map.svg"
      municipalities={TOTTORI_MUNICIPALITIES}
    />
  );
}
