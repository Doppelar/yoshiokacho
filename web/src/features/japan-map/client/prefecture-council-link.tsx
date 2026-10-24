import { ExternalLink, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZENKOKU_PREF_COUNCIL_HREF = "https://mirai-gikai-zenkoku.vercel.app/";

export function PrefectureCouncilLink() {
  return (
    <section className="mb-8 rounded-2xl border bg-white p-5">
      <p className="text-sm text-muted-foreground">都道府県議会</p>
      <h2 className="mt-1 text-2xl font-bold">みらい議会 全国版（県議会）</h2>
      <p className="mt-2 text-sm">
        全国47都道府県の県議会で審議されている議案は、全国版のサイトで見られます。別ページで開きます。
      </p>
      <Button asChild variant="outline" className="mt-4">
        <a
          href={ZENKOKU_PREF_COUNCIL_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Landmark aria-hidden="true" />
          県議会の全国版を見る
          <ExternalLink aria-hidden="true" />
        </a>
      </Button>
    </section>
  );
}
