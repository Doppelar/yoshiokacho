import { ArrowRight, PenLine } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";

export function ApplicationCallToAction() {
  return (
    <section className="mb-8 rounded-2xl border-2 border-primary-accent bg-primary-accent/5 p-5 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Badge>
            <PenLine aria-hidden="true" />
            連載申請 受付中
          </Badge>
          <h2 className="text-xl font-bold leading-snug md:text-2xl">
            あなたの自治体でも、みらい議会を始めませんか？
          </h2>
          <p className="text-[15px] leading-7 text-black">
            みらい議会地方版の連載申請を受け付けています。ログイン不要で、フォームから申請できます。
          </p>
        </div>
        <Button asChild className="w-full md:w-auto">
          <Link href={routes.localEditionApplications() as Route}>
            連載を申請する
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
