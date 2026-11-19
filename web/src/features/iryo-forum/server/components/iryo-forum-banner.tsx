import { ArrowRight, HeartPulse } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { IRYO_FORUM } from "../../shared/forum";

/** 全国版トップの一番上に置く「医療のこれからを考える会」への入口 */
export function IryoForumBanner() {
  return (
    <Link
      href={routes.iryoForum() as Route}
      className="mb-8 block rounded-2xl border-2 border-primary bg-white p-5 transition-colors hover:bg-muted/50"
    >
      <p className="flex items-center gap-1 text-xs font-bold text-primary-accent">
        <HeartPulse className="size-4" aria-hidden />
        AIインタビュー受付中
      </p>
      <p className="mt-1 text-xl font-bold leading-snug">
        {IRYO_FORUM.title} ― {IRYO_FORUM.subtitle}
      </p>
      <p className="mt-2 text-sm leading-6">「{IRYO_FORUM.question}」</p>
      <p className="mt-3 inline-flex items-center gap-1 text-sm font-bold underline underline-offset-2">
        医療制度のどんなことに関心があるか、聞かせてください
        <ArrowRight className="size-4" aria-hidden />
      </p>
    </Link>
  );
}
