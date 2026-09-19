"use client";

import type { ReactNode } from "react";
import type { DifficultyLevelEnum } from "@/features/bill-difficulty/shared/types";
import type { BillWithContent } from "../../../shared/types";

interface BillDetailClientProps {
  bill: BillWithContent;
  currentDifficulty: DifficultyLevelEnum;
  hasInterviewConfig: boolean;
  children: ReactNode;
}

/**
 * 議案詳細のクライアントサイド機能を管理するコンポーネント
 *
 * 実装背景:
 * - テキスト選択からのAIチャット連携機能を提供
 * - Server Componentである BillDetailLayout から切り出すことで
 *   SSRを保持しつつクライアントサイド機能を実装
 */
export function BillDetailClient({
  bill: _bill,
  currentDifficulty: _currentDifficulty,
  hasInterviewConfig: _hasInterviewConfig,
  children,
}: BillDetailClientProps) {
  return <>{children}</>;
}
