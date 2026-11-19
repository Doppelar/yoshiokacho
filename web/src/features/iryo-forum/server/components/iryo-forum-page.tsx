import "server-only";

import { formatFeedbackDate } from "@mirai-gikai/shared/local-edition-feedback/feedback";
import {
  Bot,
  ExternalLink,
  HeartPulse,
  ListChecks,
  MessageSquare,
  Users,
} from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { findCouncilItemInterviewBillId } from "@/features/council-item-interviews/server/repositories/council-item-interview-repository";
import { FeedbackForm } from "@/features/local-edition-feedback/client/components/feedback-form";
import { routes } from "@/lib/routes";
import { withFallback } from "@/lib/utils/with-fallback";
import {
  IRYO_FORUM,
  IRYO_THEME_DETAILS,
  IRYO_TOPIC_ID,
  NATIONAL_COUNCIL,
} from "../../shared/forum";
import { submitIryoPost } from "../actions/submit-iryo-post";
import {
  countIryoInterviewReports,
  findVisibleTopicPosts,
} from "../repositories/iryo-forum-repository";

/** 全国版「医療のこれからを考える会」のページ */
export async function IryoForumPage() {
  // インタビュー未登録・テーブル未作成の環境では「準備中」にする
  const [billId, reportCount, board] = await Promise.all([
    withFallback(
      findCouncilItemInterviewBillId(NATIONAL_COUNCIL, IRYO_TOPIC_ID),
      null,
      "iryo interview"
    ),
    withFallback(countIryoInterviewReports(), 0, "iryo interview count"),
    withFallback(
      findVisibleTopicPosts(IRYO_TOPIC_ID),
      { available: false, posts: [] },
      "iryo posts"
    ),
  ]);

  return (
    <Container className="pt-24 pb-16 md:pt-12">
      <section className="rounded-2xl bg-mirai-light-gradient px-5 py-6">
        <p className="flex items-center gap-1 text-sm font-bold text-primary-accent">
          <HeartPulse className="size-4" aria-hidden />
          みらい議会 全国版
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight">
          {IRYO_FORUM.title}
        </h1>
        <p className="mt-1 text-lg font-bold">― {IRYO_FORUM.subtitle}</p>
        <p className="mt-4 text-xl font-bold leading-relaxed">
          「{IRYO_FORUM.question}」
        </p>
        <p className="mt-4 text-[15px] leading-7 text-black">
          {IRYO_FORUM.description}
        </p>
        {IRYO_FORUM.welcome.map((line) => (
          <p key={line} className="mt-2 text-[15px] leading-7 text-black">
            {line}
          </p>
        ))}
      </section>

      <section
        aria-labelledby="iryo-themes-heading"
        className="mt-8 rounded-2xl border bg-white p-5"
      >
        <h2
          id="iryo-themes-heading"
          className="flex items-center gap-2 text-lg font-bold"
        >
          <ListChecks className="size-5" aria-hidden />
          テーマ詳細
        </h2>
        <p className="mt-2 text-[15px] leading-7">{IRYO_FORUM.themeIntro}</p>
        <p className="mt-3 text-sm font-bold">
          扱うテーマは、以下を想定しています。
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-7">
          {IRYO_THEME_DETAILS.map(({ detail }) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <p className="mt-3 text-[15px] leading-7">{IRYO_FORUM.themeOutro}</p>
      </section>

      <section
        aria-labelledby="iryo-interview-heading"
        className="mt-8 rounded-2xl border bg-white p-5"
      >
        <h2
          id="iryo-interview-heading"
          className="flex items-center gap-2 text-lg font-bold"
        >
          <Bot className="size-5" aria-hidden />
          AIインタビュー：上のテーマのどこに関心がありますか？
        </h2>
        <p className="mt-2 text-sm leading-6 text-mirai-text-secondary">
          AIの質問に答えながら、関心のあるテーマや身近で感じていることをお聞かせください（10分ほど）。公開を選んだご意見は、だれでも読めるようにこのサイトで公開します。病名や治療内容など、個人の健康に関わることは書かないでください。
        </p>
        {billId === null ? (
          <p className="mt-4 text-sm font-bold">
            AIインタビューは準備中です。もうしばらくお待ちください。
          </p>
        ) : (
          <>
            <p className="mt-4 text-sm">
              これまでに寄せられた声：
              <span className="text-lg font-bold">{reportCount}</span>件
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Button asChild>
                <Link href={routes.interviewLP(billId) as Route}>
                  AIインタビューを始める
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={routes.billOpinions(billId) as Route}>
                  公開された声を見る
                </Link>
              </Button>
            </div>
          </>
        )}
      </section>

      <section
        aria-labelledby="iryo-board-heading"
        className="mt-8 rounded-2xl border bg-white p-5"
      >
        <h2
          id="iryo-board-heading"
          className="flex items-center gap-2 text-lg font-bold"
        >
          <MessageSquare className="size-5" aria-hidden />
          掲示板
        </h2>
        <p className="mt-2 text-sm leading-6 text-mirai-text-secondary">
          医療のこれからについて、経験や疑問、ニュースの感想などを自由に書き込めます。ログイン不要で、投稿はすぐに公開されます。病名や治療内容など、個人の健康に関わることは書かないでください。
        </p>
        {!board.available && (
          <p role="status" className="mt-3 text-sm font-bold">
            掲示板は準備中です。もうしばらくお待ちください。
          </p>
        )}
        <div className="mt-4">
          <FeedbackForm
            available={board.available}
            submit={submitIryoPost}
            bodyLabel="投稿内容"
            bodyPlaceholder="例：地域の病院が減っていて心配です／医療AIのニュースを見て…"
          />
        </div>
        <h3 className="mt-8 font-bold">
          みなさんの投稿{" "}
          <span className="text-sm text-muted-foreground">
            （{board.posts.length}件）
          </span>
        </h3>
        {board.posts.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">
            まだ投稿はありません。最初の投稿をしてみませんか？
          </p>
        ) : (
          <ol className="mt-3 space-y-3">
            {board.posts.map((post) => (
              <li key={post.id} className="rounded-xl border p-4">
                <article>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-bold">{post.display_name}</h4>
                    <time
                      dateTime={post.created_at}
                      className="text-xs text-muted-foreground"
                    >
                      {formatFeedbackDate(post.created_at)}
                    </time>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap break-words leading-7">
                    {post.body}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section
        aria-labelledby="iryo-community-heading"
        className="mt-8 rounded-2xl border bg-white p-5"
      >
        <h2
          id="iryo-community-heading"
          className="flex items-center gap-2 text-lg font-bold"
        >
          <Users className="size-5" aria-hidden />
          意見交換のコミュニティに参加する
        </h2>
        <p className="mt-2 text-[15px] leading-7">{IRYO_FORUM.closing}</p>
        <div className="mt-4">
          <Button asChild>
            <a
              href={IRYO_FORUM.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LINEのオープンチャットに参加する
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </Button>
        </div>
      </section>

      <ul className="mt-6 space-y-1 text-sm text-mirai-text-secondary">
        {IRYO_FORUM.notes.map((note) => (
          <li key={note}>※{note}</li>
        ))}
      </ul>
    </Container>
  );
}
