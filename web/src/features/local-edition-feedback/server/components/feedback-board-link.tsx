import "server-only";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
export function FeedbackBoardLink() {
  return (
    <section className="mt-8 rounded-2xl border bg-white p-5">
      <h2 className="text-lg font-bold">
        全国一覧へのご意見をお聞かせください
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        掲載内容や使い方へのご意見を、掲示板で投稿・閲覧できます。連載申請とは別のページです。
      </p>
      <Button asChild variant="outline" className="mt-4">
        <Link href={routes.localEditionFeedback()}>
          <MessageSquare aria-hidden="true" />
          意見掲示板を開く
        </Link>
      </Button>
    </section>
  );
}
