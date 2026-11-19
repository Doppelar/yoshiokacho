import type { Metadata } from "next";
import { IryoForumPage } from "@/features/iryo-forum/server/components/iryo-forum-page";
import { IRYO_FORUM } from "@/features/iryo-forum/shared/forum";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `${IRYO_FORUM.title} ― ${IRYO_FORUM.subtitle} | みらい議会 全国版`,
  description: `${IRYO_FORUM.question}${IRYO_FORUM.description}`,
};

export default function Page() {
  return <IryoForumPage />;
}
