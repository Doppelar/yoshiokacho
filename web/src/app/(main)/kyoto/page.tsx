import type { Metadata } from "next";
import { KYOTO_MUNICIPALITIES } from "@/features/kyoto-map/shared/municipalities";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";

export const metadata: Metadata = {
  title: "京都府の市町村 | みらい議会",
  description: "京都府の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="京都府"
      prefectureCode="26"
      imageSrc="/img/kyoto-municipality-map.svg"
      municipalities={KYOTO_MUNICIPALITIES}
    />
  );
}
