"use client";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSiteBrand } from "@/components/layouts/site-brand-provider";
import { isInterviewPage } from "@/lib/page-layout-utils";
import type { SiteBrand } from "@/lib/site-brand";
import { primaryLinks } from "./footer.config";

export function Footer() {
  const pathname = usePathname();
  const brand = useSiteBrand();

  if (isInterviewPage(pathname)) {
    return null;
  }

  return (
    <footer className="bg-mirai-gradient text-slate-900">
      <div className="mx-auto flex w-full max-w-[500px] flex-col items-center px-6 py-14 pb-20 text-center">
        <FooterLogoSection brand={brand} />
        <FooterPrimaryLinks />
        <FooterCopyright brand={brand} />
      </div>
    </footer>
  );
}

function FooterLogoSection({ brand }: { brand: SiteBrand }) {
  return (
    <div className="flex flex-col items-center text-center mb-9">
      <Link
        href={brand.href as Route}
        aria-label={`${brand.name} トップページ`}
      >
        <Image
          src="/img/logo.svg"
          alt={brand.name}
          width={150}
          height={128}
          className="h-auto"
        />
      </Link>
    </div>
  );
}

function FooterPrimaryLinks() {
  return (
    <nav aria-label="主要リンク" className="w-full mb-5">
      <ul
        className="
      flex flex-col items-center gap-3 text-[14px] font-semibold text-slate-800
      md:flex-row md:justify-center md:gap-5
      "
      >
        {primaryLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href as Route}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="transition-colors hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterCopyright({ brand }: { brand: SiteBrand }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center text-sm font-medium text-slate-800">
      <p>これは政党チームみらいが運営しているものではありません</p>
      <p>© 2026 {brand.name} All rights Reserved</p>
    </div>
  );
}
