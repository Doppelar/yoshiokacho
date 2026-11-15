import type { Metadata } from "next";
import { RegionMapPage } from "@/features/region-map/server/components/region-map-page";
import { SHIMANE_MUNICIPALITIES } from "@/features/shimane-map/shared/municipalities";

export const metadata: Metadata = {
  title: "島根県の市町村 | みらい議会",
  description: "島根県の市町村地図から各自治体のみらい議会を選べます。",
};

export default function Page() {
  return (
    <RegionMapPage
      portalHref="https://mirai-gikai-shimane.vercel.app/"
      prefectureName="島根県"
      prefectureCode="32"
      imageSrc="/img/shimane-municipality-map.svg"
      municipalities={SHIMANE_MUNICIPALITIES}
    />
  );
}
