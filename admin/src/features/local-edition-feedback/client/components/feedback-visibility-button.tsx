"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { setFeedbackVisibility } from "../../server/actions/set-feedback-visibility";
export function FeedbackVisibilityButton({
  id,
  hidden,
}: {
  id: string;
  hidden: boolean;
}) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  return (
    <div className="space-y-2">
      <Button
        variant="outline"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            setError(null);
            try {
              const result = await setFeedbackVisibility({
                id,
                hidden: !hidden,
              });
              if (!result.ok) {
                setError(result.error);
                return;
              }
              router.refresh();
            } catch {
              setError("通信に失敗しました。再度お試しください。");
            }
          })
        }
      >
        {pending ? "更新中..." : hidden ? "再公開する" : "非表示にする"}
      </Button>
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
