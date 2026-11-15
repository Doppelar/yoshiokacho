import "server-only";
import {
  FEEDBACK_PAGE_SIZE,
  formatFeedbackDate,
  parseFeedbackPage,
} from "@mirai-gikai/shared/local-edition-feedback/feedback";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { FeedbackForm } from "../../client/components/feedback-form";
import { findPublicFeedback } from "../repositories/feedback-repository";

export async function FeedbackBoard({
  page: pageValue,
}: {
  page?: string | string[];
}) {
  const page = parseFeedbackPage(pageValue);
  const { available, posts, count } = await findPublicFeedback(page);
  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <Link
        href={routes.japanMap()}
        className="text-sm font-bold text-primary-accent underline underline-offset-2"
      >
        全国の一覧に戻る
      </Link>
      <h1 className="mt-4 text-3xl font-bold">全国みらい議会への意見掲示板</h1>
      <p className="mt-3 leading-7">
        全国一覧の掲載内容や使い方について、ご意見をお寄せください。ログイン不要で、投稿はすぐに公開されます。
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        地方版の連載をご希望の方は、
        <Link
          href={routes.localEditionApplications()}
          className="text-primary-accent underline underline-offset-2"
        >
          連載申請フォーム
        </Link>
        をご利用ください。
      </p>
      <section className="mt-8 rounded-2xl border bg-white p-5">
        <h2 className="mb-4 text-xl font-bold">意見を投稿する</h2>
        {!available && (
          <p role="status" className="mb-4 text-sm text-muted-foreground">
            掲示板はただいま準備中です。公開までしばらくお待ちください。
          </p>
        )}
        <FeedbackForm available={available} />
      </section>
      <section className="mt-10 space-y-4" aria-label="投稿されたご意見">
        <h2 className="text-xl font-bold">
          みなさんのご意見{" "}
          <span className="text-base text-muted-foreground">（{count}件）</span>
        </h2>
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            {page === 1
              ? "まだ投稿はありません。"
              : "このページには投稿がありません。"}
          </p>
        ) : (
          <ol className="space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="rounded-2xl border bg-white p-5">
                <article>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-bold">{post.display_name}</h3>
                    <time
                      dateTime={post.created_at}
                      className="text-xs text-muted-foreground"
                    >
                      {formatFeedbackDate(post.created_at)}
                    </time>
                  </div>
                  <p className="mt-3 whitespace-pre-wrap break-words leading-7">
                    {post.body}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        )}
        <nav
          aria-label="ご意見のページ切り替え"
          className="flex items-center justify-between gap-3"
        >
          {page > 1 ? (
            <Button asChild variant="outline">
              <Link href={routes.localEditionFeedback(page - 1)}>
                前のページ
              </Link>
            </Button>
          ) : (
            <span />
          )}
          <p className="text-sm text-muted-foreground">{page}ページ目</p>
          {page * FEEDBACK_PAGE_SIZE < count ? (
            <Button asChild variant="outline">
              <Link href={routes.localEditionFeedback(page + 1)}>
                次のページ
              </Link>
            </Button>
          ) : (
            <span />
          )}
        </nav>
      </section>
      <p className="mt-8 text-xs leading-6 text-muted-foreground">
        個人情報の記載や誹謗中傷、連続投稿はお控えください。運営上必要な場合、管理者が投稿を非表示にすることがあります。
      </p>
    </Container>
  );
}
