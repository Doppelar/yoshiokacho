import type { Metadata } from "next";
import { TakasakiHome } from "@/features/takasaki-bills/server/components/takasaki-home";

export const metadata: Metadata = {
  title: "みらい議会＠高崎市",
  description:
    "高崎市議会でどんな議案が審議され、どう決まったかを、会派・議員ごとの賛否とあわせて伝えるページです。",
};

export default function TakasakiHomePage() {
  return <TakasakiHome />;
}
