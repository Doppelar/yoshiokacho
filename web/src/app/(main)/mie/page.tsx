import type { Metadata } from "next";
import { MIE_MUNICIPALITIES } from "@/features/mie-map/shared/municipalities";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";

export const metadata: Metadata = {
  title: "三重県の市町村 | みらい議会",
  description: "三重県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="三重県"
      prefectureCode="24"
      imageSrc="/img/mie-municipality-map.svg"
      municipalities={MIE_MUNICIPALITIES}
    />
  );
}
