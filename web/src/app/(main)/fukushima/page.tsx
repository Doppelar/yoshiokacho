import type { Metadata } from "next";
import { FUKUSHIMA_MUNICIPALITIES } from "@/features/fukushima-map/shared/municipalities";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";

export const metadata: Metadata = {
  title: "福島県の市町村 | みらい議会",
  description: "福島県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="福島県"
      prefectureCode="07"
      imageSrc="/img/fukushima-municipality-map.svg"
      municipalities={FUKUSHIMA_MUNICIPALITIES}
    />
  );
}
