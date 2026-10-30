import { PenLine } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/top/link-button";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/config/external-links";
import { routes } from "@/lib/routes";

/**
 * デスクトップメニュー: アクションボタン（サイドバー内）
 */
export function DesktopMenuActionButtons() {
  return (
    <div className="flex flex-col gap-3">
      <Button asChild className="h-auto w-fit px-6 py-3">
        <Link href={routes.localEditionApplications() as Route}>
          <PenLine aria-hidden="true" />
          <span className="text-[15px]">連載を申請する</span>
        </Link>
      </Button>
      <LinkButton
        href={EXTERNAL_LINKS.ABOUT_NOTE}
        icon={{
          src: "/icons/note-icon.png",
          alt: "note",
          width: 20,
          height: 20,
        }}
      >
        みらい議会とは
      </LinkButton>
    </div>
  );
}
