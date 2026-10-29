"use client";

import { useRouter } from "next/navigation";
import {
  type FormEvent,
  type ReactNode,
  useId,
  useState,
  useTransition,
} from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { submitBillPublicOpinion } from "../../server/actions/submit-bill-public-opinion";
import {
  COMMENTER_TYPE_LABELS,
  COMMENTER_TYPES,
  OPINION_BODY_MAX_LENGTH,
  RESIDENCE_LABELS,
  RESIDENCES,
  STANCE_LABELS,
  STANCES,
} from "../../shared/utils/opinion-input";

export function OpinionForm({ billId }: { billId: string }) {
  const router = useRouter();
  const bodyId = useId();
  const [bodyLength, setBodyLength] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [pending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const read = (name: string) => String(formData.get(name) ?? "");

    startTransition(async () => {
      const result = await submitBillPublicOpinion({
        billId,
        commenterType: read("commenterType"),
        stance: read("stance"),
        residence: read("residence"),
        body: read("body"),
      });
      if (!result.ok) {
        setSubmitted(false);
        setError(result.error);
        return;
      }
      setError(null);
      setSubmitted(true);
      setBodyLength(0);
      form.reset();
      router.refresh();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <ChoiceGroup
        legend="あなたの立場"
        name="commenterType"
        options={COMMENTER_TYPES.map((value) => ({
          value,
          label: COMMENTER_TYPE_LABELS[value],
        }))}
        disabled={pending}
      />
      <ChoiceGroup
        legend="この議案に"
        name="stance"
        options={STANCES.map((value) => ({
          value,
          label: STANCE_LABELS[value],
        }))}
        disabled={pending}
      />
      <ChoiceGroup
        legend="お住まい"
        name="residence"
        options={RESIDENCES.map((value) => ({
          value,
          label: RESIDENCE_LABELS[value],
        }))}
        disabled={pending}
      />

      <div className="space-y-1.5">
        <label htmlFor={bodyId} className="text-sm font-semibold">
          意見
        </label>
        <Textarea
          id={bodyId}
          name="body"
          required
          rows={5}
          maxLength={OPINION_BODY_MAX_LENGTH}
          disabled={pending}
          onChange={(event) => setBodyLength(event.target.value.length)}
          placeholder="この議案についての意見や、その理由を書いてください。"
        />
        <p className="text-right text-xs text-muted-foreground">
          {bodyLength}/{OPINION_BODY_MAX_LENGTH}
        </p>
        <p className="text-xs text-muted-foreground">
          投稿した意見はすぐにこのページで公開されます。名前・住所・電話番号などの個人情報や、他の人を傷つける内容は書かないでください。不適切な投稿は非表示にすることがあります。
        </p>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
      {submitted ? (
        <p role="status" className="text-sm font-bold text-primary-accent">
          意見を投稿しました。ありがとうございます。
        </p>
      ) : null}

      <Button type="submit" disabled={pending}>
        {pending ? "送信中..." : "意見を投稿する"}
      </Button>
    </form>
  );
}

function ChoiceGroup({
  legend,
  name,
  options,
  disabled,
}: {
  legend: ReactNode;
  name: string;
  options: { value: string; label: string }[];
  disabled: boolean;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="mb-2 text-sm font-semibold">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "cursor-pointer rounded-full border border-black bg-white px-4 py-2 text-sm font-bold transition-colors",
              "has-[:checked]:bg-mirai-gradient has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/40",
              disabled && "cursor-not-allowed opacity-50"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              required
              disabled={disabled}
              className="sr-only"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
