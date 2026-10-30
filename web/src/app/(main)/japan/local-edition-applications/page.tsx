import type { Metadata } from "next";
import { LocalEditionApplicationBoard } from "@/features/local-edition-applications/server/components/local-edition-application-board";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "みらい議会地方版 連載申請 | みらい議会",
  description:
    "自治体からのみらい議会地方版の連載申請を受け付け、承認済みの申請を公開します。",
};

export default function LocalEditionApplicationsPage() {
  return <LocalEditionApplicationBoard />;
}
