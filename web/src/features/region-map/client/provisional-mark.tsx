import { Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

export const PROVISIONAL_LABEL = "暫定公開（運営者募集中）";

/** 暫定公開ページを示すマーク。名前の直後に置く。 */
export function ProvisionalMark({ className }: { className?: string }) {
  return (
    <>
      <Megaphone
        aria-hidden="true"
        className={cn("ml-1 inline h-3.5 w-3.5 align-[-2px]", className)}
      />
      <span className="sr-only">（{PROVISIONAL_LABEL}）</span>
    </>
  );
}

/** マークの意味の説明。暫定公開のページがある地図の下に表示する。 */
export function ProvisionalLegend({ className }: { className?: string }) {
  return (
    <p className={cn("text-sm text-mirai-text-secondary", className)}>
      <Megaphone
        aria-hidden="true"
        className="mr-1 inline h-3.5 w-3.5 align-[-2px]"
      />
      のマークは{PROVISIONAL_LABEL}
      です。有志の方が作成した暫定版へのリンクです。この一覧は各サイトを集めて紹介しており、掲載内容を保証するものではありません。継続的なメンテナンスや運営にご関心のある方は、全国ページの申請フォームからご連絡ください。
    </p>
  );
}
