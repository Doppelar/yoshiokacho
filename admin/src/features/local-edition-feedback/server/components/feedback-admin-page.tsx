import "server-only";
import {
  FEEDBACK_PAGE_SIZE,
  formatFeedbackDate,
  parseFeedbackPage,
} from "@mirai-gikai/shared/local-edition-feedback/feedback";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/features/auth/server/lib/auth-server";
import { routes } from "@/lib/routes";
import { FeedbackVisibilityButton } from "../../client/components/feedback-visibility-button";
import { findFeedbackForAdmin } from "../repositories/feedback-repository";
export async function FeedbackAdminPage({
  page: pageValue,
}: {
  page?: string | string[];
}) {
  const page = parseFeedbackPage(pageValue);
  await requireAdmin();
  const { available, posts, count } = await findFeedbackForAdmin(page);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold">全国一覧の意見掲示板</h1>
      <p className="mt-2 mb-8 text-sm text-muted-foreground">
        投稿は即時公開されます。過去の投稿もページを切り替えて確認できます。必要に応じて非表示・再公開できます。
      </p>
      {!available ? (
        <p>掲示板は準備中です。</p>
      ) : posts.length === 0 ? (
        <p>投稿はありません。</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="rounded-lg border bg-white p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-bold">{post.display_name}</h2>
                <span className="text-sm">
                  {post.is_hidden ? "非表示" : "公開中"}
                </span>
              </div>
              <time
                dateTime={post.created_at}
                className="text-xs text-muted-foreground"
              >
                {formatFeedbackDate(post.created_at)}
              </time>
              <p className="my-4 whitespace-pre-wrap break-words leading-7">
                {post.body}
              </p>
              <FeedbackVisibilityButton id={post.id} hidden={post.is_hidden} />
            </li>
          ))}
        </ul>
      )}
      <nav
        aria-label="投稿のページ切り替え"
        className="mt-6 flex items-center justify-between gap-3"
      >
        {page > 1 ? (
          <Button asChild variant="outline">
            <Link href={routes.localEditionFeedback(page - 1)}>前のページ</Link>
          </Button>
        ) : (
          <span />
        )}
        <p className="text-sm text-muted-foreground">
          {page}ページ目（全{count}件）
        </p>
        {page * FEEDBACK_PAGE_SIZE < count ? (
          <Button asChild variant="outline">
            <Link href={routes.localEditionFeedback(page + 1)}>次のページ</Link>
          </Button>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
