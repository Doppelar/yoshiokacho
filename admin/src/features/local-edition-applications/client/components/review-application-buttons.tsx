"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { reviewLocalEditionApplication } from "../../server/actions/review-local-edition-application";

export function ReviewApplicationButtons({ id }: { id: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function review(decision: "approved" | "rejected") {
    setError(null);
    startTransition(async () => {
      const result = await reviewLocalEditionApplication({ id, decision });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.refresh();
    });
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        type="button"
        disabled={pending}
        onClick={() => review("approved")}
      >
        承認
      </Button>
      <Button
        type="button"
        variant="outline"
        disabled={pending}
        onClick={() => review("rejected")}
      >
        却下
      </Button>
      {error ? (
        <p role="alert" className="w-full text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
