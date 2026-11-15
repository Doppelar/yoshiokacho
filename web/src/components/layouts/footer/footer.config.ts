import { EXTERNAL_LINKS } from "@/config/external-links";
import { routes } from "@/lib/routes";

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryLinks: FooterLink[] = [
  {
    label: "TOP",
    href: routes.home(),
  },
  {
    label: "全国の都道府県",
    href: routes.japanMap(),
  },
  {
    label: "連載申請",
    href: routes.localEditionApplications(),
  },
  {
    label: "みらい議会とは",
    href: EXTERNAL_LINKS.ABOUT_NOTE,
    external: true,
  },
  {
    label: "本家「みらい議会」を見る",
    href: "https://gikai.team-mir.ai/",
    external: true,
  },
];
