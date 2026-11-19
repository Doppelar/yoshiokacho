import type { Metadata } from "next";
import { IryoForumPage } from "@/features/iryo-forum/server/components/iryo-forum-page";
import { IRYO_FORUM } from "@/features/iryo-forum/shared/forum";

export const dynamic = "force-dynamic";

const title = `${IRYO_FORUM.title} ― ${IRYO_FORUM.subtitle}`;
const description = `${IRYO_FORUM.question}${IRYO_FORUM.description}`;

// 全国版（みらい議会 地方版）の共有カードを引き継がず、この会のページとして見せる
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title,
    description,
    siteName: IRYO_FORUM.title,
  },
  twitter: { card: "summary", title, description },
};

export default function Page() {
  return <IryoForumPage />;
}
