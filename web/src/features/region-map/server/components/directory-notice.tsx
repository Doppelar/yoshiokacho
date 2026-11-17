import "server-only";

import { TriangleAlert } from "lucide-react";
import { MuseMark } from "../../shared/components/muse-mark";

export function DirectoryNotice() {
  return (
    <aside
      aria-labelledby="local-edition-directory-notice"
      className="mb-8 space-y-3 rounded-2xl border border-mirai-border bg-mirai-surface-grouped p-4 text-sm leading-6 text-mirai-text"
    >
      <h2
        id="local-edition-directory-notice"
        className="flex items-center gap-2 font-bold"
      >
        <TriangleAlert
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-primary-accent"
        />
        掲載情報と共有範囲について
      </h2>
      <p>
        この一覧は、各地のサイトを集めて紹介するものです。有志の方が作成した暫定版や、MUSE・バイブコーディングで作成されたサイトも含まれます。掲載内容の正確性・最新性は保証できません。不確かな情報や誤りが含まれる場合がありますので、自治体・議会の公式資料でご確認ください。
      </p>
      <p>
        共有は、みらいのサポーターとその知人程度の範囲にとどめ、SNSなどでの広い拡散はお控えください。検索サイトへの掲載を想定していません。
      </p>
      <p className="text-mirai-text-secondary">
        <MuseMark />{" "}
        はMUSEで作成されたサイトの目印です。マークの有無は、情報の正確性を示すものではありません。
      </p>
    </aside>
  );
}
