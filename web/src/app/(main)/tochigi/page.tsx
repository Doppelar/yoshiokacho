import type { Metadata } from "next";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";
import { TOCHIGI_MUNICIPALITIES } from "@/features/tochigi-map/shared/municipalities";

export const metadata: Metadata = {
  title: "栃木県の市町村 | みらい議会",
  description: "栃木県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="栃木県"
      prefectureCode="09"
      imageSrc="/img/tochigi-municipality-map.svg"
      municipalities={TOCHIGI_MUNICIPALITIES}
    />
  );
}
