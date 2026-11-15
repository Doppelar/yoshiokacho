import type { Metadata } from "next";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";
import { SAGA_MUNICIPALITIES } from "@/features/saga-map/shared/municipalities";

export const metadata: Metadata = {
  title: "佐賀県の市町村 | みらい議会",
  description: "佐賀県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="佐賀県"
      prefectureCode="41"
      imageSrc="/img/saga-municipality-map.svg"
      municipalities={SAGA_MUNICIPALITIES}
    />
  );
}
