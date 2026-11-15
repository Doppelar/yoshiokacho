import type { Metadata } from "next";
import { LocalEditionUpdatesPage } from "@/features/local-edition-changelog/server/components/local-edition-updates-page";

export const metadata: Metadata = {
  title: "更新履歴 | みらい議会",
  description: "みらい議会地方版の公開・更新履歴を紹介します。",
};

export default function Page() {
  return <LocalEditionUpdatesPage />;
}
