import type { Metadata } from "next";
import { AOMORI_MUNICIPALITIES } from "@/features/aomori-map/shared/municipalities";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";

export const metadata: Metadata = {
  title: "青森県の市町村 | みらい議会",
  description: "青森県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="青森県"
      prefectureCode="02"
      imageSrc="/img/aomori-municipality-map.svg"
      municipalities={AOMORI_MUNICIPALITIES}
    />
  );
}
