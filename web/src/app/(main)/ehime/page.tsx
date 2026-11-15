import type { Metadata } from "next";
import { EHIME_MUNICIPALITIES } from "@/features/ehime-map/shared/municipalities";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";

export const metadata: Metadata = {
  title: "愛媛県の市町村 | みらい議会",
  description: "愛媛県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="愛媛県"
      prefectureCode="38"
      imageSrc="/img/ehime-municipality-map.svg"
      municipalities={EHIME_MUNICIPALITIES}
    />
  );
}
