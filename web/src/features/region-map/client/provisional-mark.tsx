import { cn } from "@/lib/utils";
import { MuseMark } from "../shared/components/muse-mark";

export const PROVISIONAL_LABEL = "暫定公開（運営者募集中）";

/** 暫定公開の状態を読み上げ向けに補足する。 */
export function ProvisionalStatus() {
  return <span className="sr-only">（{PROVISIONAL_LABEL}）</span>;
}

/** MUSEの表示と、暫定版の運営者募集について説明する。 */
export function ProvisionalLegend({ className }: { className?: string }) {
  return (
    <p className={cn("text-sm text-mirai-text-secondary", className)}>
      <MuseMark /> の表示は、MUSEで作成されたサイトへのリンクです。
      {PROVISIONAL_LABEL}
      のページは、有志の方が作成した暫定版です。この一覧は各サイトを集めて紹介しており、掲載内容を保証するものではありません。継続的なメンテナンスや運営にご関心のある方は、全国ページの申請フォームからご連絡ください。
    </p>
  );
}
