"use client";
import {
  FEEDBACK_BODY_MAX_LENGTH,
  FEEDBACK_NAME_MAX_LENGTH,
} from "@mirai-gikai/shared/local-edition-feedback/feedback";
import { useRouter } from "next/navigation";
import { type FormEvent, useId, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitFeedback } from "../../server/actions/submit-feedback";

export function FeedbackForm({ available = true }: { available?: boolean }) {
  const id = useId();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setError(null);
    setSubmitted(false);
    startTransition(async () => {
      try {
        const result = await submitFeedback({
          displayName: String(data.get("displayName") ?? ""),
          body: String(data.get("body") ?? ""),
          website: String(data.get("website") ?? ""),
        });
        if (!result.ok) {
          setError(result.error);
          return;
        }
        form.reset();
        setSubmitted(true);
        router.refresh();
      } catch {
        setError("通信に失敗しました。時間をおいて再度お試しください。");
      }
    });
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor={`${id}-name`} className="text-sm font-semibold">
          名前・ニックネーム（任意）
        </label>
        <Input
          id={`${id}-name`}
          name="displayName"
          maxLength={FEEDBACK_NAME_MAX_LENGTH}
          disabled={pending || !available}
          placeholder="未入力の場合は「匿名」で公開します"
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor={`${id}-body`} className="text-sm font-semibold">
          全国一覧へのご意見
        </label>
        <Textarea
          id={`${id}-body`}
          name="body"
          required
          rows={6}
          maxLength={FEEDBACK_BODY_MAX_LENGTH}
          disabled={pending || !available}
          aria-describedby={`${id}-note`}
          placeholder="掲載内容の修正、使い方のご提案などをお寄せください。"
        />
        <p id={`${id}-note`} className="text-xs text-muted-foreground">
          2000文字以内。投稿するとすぐに公開されます。メールアドレスなどの個人情報は記載しないでください。
        </p>
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-website`}>ウェブサイト</label>
        <input
          id={`${id}-website`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
      {submitted && (
        <p role="status" className="text-sm font-bold text-primary-accent">
          ご意見を公開しました。
        </p>
      )}
      <Button type="submit" disabled={pending || !available}>
        {pending ? "投稿中..." : "意見を投稿する"}
      </Button>
    </form>
  );
}
