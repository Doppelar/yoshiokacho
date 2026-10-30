"use client";

import {
  CONTACT_NAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  INTRODUCTION_MAX_LENGTH,
  MUNICIPALITY_NAME_MAX_LENGTH,
  SITE_URL_MAX_LENGTH,
} from "@mirai-gikai/shared/local-edition-application/parse-application";
import {
  type FormEvent,
  type ReactNode,
  useId,
  useState,
  useTransition,
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitLocalEditionApplication } from "../../server/actions/submit-local-edition-application";

export function ApplicationForm() {
  const municipalityId = useId();
  const contactId = useId();
  const emailId = useId();
  const siteUrlId = useId();
  const introductionId = useId();
  const [introductionLength, setIntroductionLength] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [pending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const read = (name: string) => String(formData.get(name) ?? "");

    startTransition(async () => {
      const result = await submitLocalEditionApplication({
        municipalityName: read("municipalityName"),
        contactName: read("contactName"),
        email: read("email"),
        siteUrl: read("siteUrl"),
        introduction: read("introduction"),
      });
      if (!result.ok) {
        setSubmitted(false);
        setError(result.error);
        return;
      }
      setError(null);
      setSubmitted(true);
      setIntroductionLength(0);
      form.reset();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="自治体名" htmlFor={municipalityId}>
        <Input
          id={municipalityId}
          name="municipalityName"
          required
          maxLength={MUNICIPALITY_NAME_MAX_LENGTH}
          disabled={pending}
          placeholder="吉岡町"
        />
      </Field>
      <Field label="担当者名" htmlFor={contactId}>
        <Input
          id={contactId}
          name="contactName"
          required
          maxLength={CONTACT_NAME_MAX_LENGTH}
          disabled={pending}
        />
      </Field>
      <Field label="メール" htmlFor={emailId}>
        <Input
          id={emailId}
          name="email"
          type="email"
          required
          maxLength={EMAIL_MAX_LENGTH}
          disabled={pending}
          autoComplete="email"
        />
        <p className="text-xs text-muted-foreground">
          審査の連絡に使います。公開一覧には出しません。
        </p>
      </Field>
      <Field label="サイトURL（任意）" htmlFor={siteUrlId}>
        <Input
          id={siteUrlId}
          name="siteUrl"
          type="url"
          maxLength={SITE_URL_MAX_LENGTH}
          disabled={pending}
          placeholder="https://"
        />
      </Field>
      <Field label="紹介文" htmlFor={introductionId}>
        <Textarea
          id={introductionId}
          name="introduction"
          required
          rows={5}
          maxLength={INTRODUCTION_MAX_LENGTH}
          disabled={pending}
          onChange={(event) => setIntroductionLength(event.target.value.length)}
          placeholder="自治体で始めたいみらい議会地方版の内容を書いてください。"
        />
        <p className="text-right text-xs text-muted-foreground">
          {introductionLength}/{INTRODUCTION_MAX_LENGTH}
        </p>
      </Field>

      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
      {submitted ? (
        <p role="status" className="text-sm font-bold text-primary-accent">
          申請を受け付けました。審査後、承認されたものだけをこのページに掲載します。
        </p>
      ) : null}

      <Button type="submit" disabled={pending}>
        {pending ? "送信中..." : "申請する"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}
