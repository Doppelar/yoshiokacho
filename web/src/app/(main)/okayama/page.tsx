import type { Metadata } from "next";
import { OkayamaMapPage } from "@/features/okayama-map/server/components/okayama-map-page";

export const metadata: Metadata = {
  title: "岡山県の市町村 | みらい議会",
  description:
    "岡山県の市町村地図から各自治体のみらい議会を選べます。現在は奈義町を開けます。",
};

export default function Page() {
  return <OkayamaMapPage />;
}
