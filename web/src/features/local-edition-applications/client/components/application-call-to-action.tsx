import { ArrowRight, PenLine } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";

export function ApplicationCallToAction() {
  return (
    <section className="mb-8 rounded-2xl border-2 border-black bg-mirai-gradient p-6 shadow-md md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
            <PenLine className="size-4" aria-hidden="true" />
            連載申請 受付中
          </p>
          <h2 className="text-2xl font-bold leading-snug md:text-3xl">
            あなたの自治体でも、
            <br className="md:hidden" />
            みらい議会を始めませんか？
          </h2>
          <p className="text-[15px] leading-7 text-black">
            みらい議会地方版の連載申請を受け付けています。ログイン不要で、フォームから申請できます。
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          className="h-14 w-full px-8 text-base md:w-auto"
        >
          <Link href={routes.localEditionApplications() as Route}>
            連載を申請する
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
