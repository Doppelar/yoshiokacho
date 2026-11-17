import type { Metadata } from "next";
import { ISHIKAWA_MUNICIPALITIES } from "@/features/ishikawa-map/shared/municipalities";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";

export const metadata: Metadata = {
  title: "石川県の市町村 | みらい議会",
  description: "石川県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      prefectureName="石川県"
      prefectureCode="17"
      imageSrc="/img/ishikawa-municipality-map.svg"
      municipalities={ISHIKAWA_MUNICIPALITIES}
    />
  );
}
