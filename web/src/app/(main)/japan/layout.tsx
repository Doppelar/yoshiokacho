import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "みらい議会 地方版";
const description =
  "全国の市町村のみらい議会を紹介。日本地図から都道府県・市町村を選び、各地域の議会情報を開けます。";
const image = {
  url: "/img/local-edition-ogp.png",
  width: 1200,
  height: 630,
  alt: "みらい議会 地方版 — 全国の市町村のみらい議会",
};

export const metadata: Metadata = {
  // 共有カードの画像URLには、このフォークの公開先を使う。
  metadataBase: new URL("https://web-olive-ten-47.vercel.app"),
  title,
  description,
  keywords: ["みらい議会", "地方版", "地方議会", "市町村", "議案"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title,
    description,
    siteName: title,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: image.url, alt: image.alt }],
  },
};

export default function JapanLayout({ children }: { children: ReactNode }) {
  return children;
}
