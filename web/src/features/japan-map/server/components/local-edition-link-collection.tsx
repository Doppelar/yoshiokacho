import "server-only";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINK_COLLECTION_HREF =
  "https://ginger-andesaurus-f92.notion.site/9b7aaa9b88af4433a7788110674f08e6";

export function LocalEditionLinkCollection() {
  return (
    <section
      aria-label="地方版リンク集"
      className="mt-10 rounded-2xl border bg-white p-5"
    >
      <h2 className="text-lg font-bold">非公式 みらい議会リンク集</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        各地のみらい議会をまとめたリンク集もご覧いただけます。
      </p>
      <Button asChild variant="outline" className="mt-4">
        <a
          href={LINK_COLLECTION_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          リンク集を見る
          <ExternalLink aria-hidden="true" />
        </a>
      </Button>
    </section>
  );
}
