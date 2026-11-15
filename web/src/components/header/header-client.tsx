"use client";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DifficultySelector } from "@/features/bill-difficulty/client/components/difficulty-selector";
import type { DifficultyLevelEnum } from "@/features/bill-difficulty/shared/types";
import { InterviewHeaderActions } from "@/features/interview-session/client/components/interview-header-actions";
import { sendDifficultyStateEvent } from "@/lib/analytics/preference-state-events";
import { useOnPageView } from "@/lib/analytics/use-on-page-view";
import { isInterviewPage, isMainPage } from "@/lib/page-layout-utils";
import { routes } from "@/lib/routes";
import { getSiteBrand } from "@/lib/site-brand";
import { HamburgerMenu } from "./hamburger-menu";

interface HeaderClientProps {
  difficultyLevel: DifficultyLevelEnum;
}

export function HeaderClient({ difficultyLevel }: HeaderClientProps) {
  const pathname = usePathname();
  const showDifficultySelector = isMainPage(pathname);
  const showInterviewActions = isInterviewPage(pathname);
  const brand = getSiteBrand(pathname);
  // 吉岡町版はロゴタイプ画像（サイト名入り）、全国版はテキストでサイト名を出す
  const showYoshiokaLogotype = brand.href === routes.home();

  // Headerは1ページに1つだけ常時マウントされるため、
  // ここで難易度設定をページ表示のたびにGAへ送る
  // (DifficultySelectorはmarkdown埋め込み等で複数箇所に
  //  同時マウントされ得るため、送信元には適さない)
  useOnPageView(() => sendDifficultyStateEvent(difficultyLevel));

  return (
    <header className="px-3 fixed top-4 left-0 right-0 z-40 max-w-[1440px] mx-auto">
      <div className="rounded-2xl bg-white shadow-sm mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Site Title */}
          <div className="flex items-center">
            <Link
              href={brand.href as Route}
              className="flex items-center space-x-2"
              aria-label={`${brand.name} トップ`}
            >
              <Image
                src="/img/logo.svg"
                alt={brand.name}
                width={42}
                height={36}
              />
              {showYoshiokaLogotype ? (
                <Image
                  src="/img/service-logo.svg"
                  alt={brand.name}
                  width={115}
                  height={21}
                />
              ) : (
                <span className="text-base font-bold tracking-wide text-mirai-text">
                  {brand.name}
                </span>
              )}
            </Link>
          </div>

          {/* Navigation */}
          <nav
            className="flex items-center space-x-2"
            aria-label="補助ナビゲーション"
          >
            {showDifficultySelector && (
              <DifficultySelector currentLevel={difficultyLevel} />
            )}
            {showInterviewActions && <InterviewHeaderActions />}
            <HamburgerMenu />
          </nav>
        </div>
      </div>
    </header>
  );
}
