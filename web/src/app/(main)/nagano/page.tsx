import type { Metadata } from "next";
import { NaganoMapPage } from "@/features/nagano-map/server/components/nagano-map-page";

export const metadata: Metadata = {
  title: "長野県の市町村 | みらい議会",
  description:
    "長野県の市町村地図から各自治体のみらい議会を選べます。公開済みの市町村を開けます。",
};

export default function Page() {
  return <NaganoMapPage />;
}
