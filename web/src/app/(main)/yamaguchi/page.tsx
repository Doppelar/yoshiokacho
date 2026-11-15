import type { Metadata } from "next";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";
import { YAMAGUCHI_MUNICIPALITIES } from "@/features/yamaguchi-map/shared/municipalities";

export const metadata: Metadata = {
  title: "山口県の市町村 | みらい議会",
  description: "山口県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="山口県"
      prefectureCode="35"
      imageSrc="/img/yamaguchi-municipality-map.svg"
      municipalities={YAMAGUCHI_MUNICIPALITIES}
    />
  );
}
