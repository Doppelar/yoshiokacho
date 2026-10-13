import type { Route } from "next";
import Link from "next/link";
import { routes } from "@/lib/routes";

type CouncilSwitchBannerProps = {
  currentLabel: string;
};

export function CouncilSwitchBanner({
  currentLabel,
}: CouncilSwitchBannerProps) {
  return (
    <div className="mb-6 rounded-2xl border bg-white px-4 py-3 text-sm">
      <p className="font-bold">{currentLabel}</p>
      <p className="mt-1 text-mirai-text-secondary">
        日本地図から全国の都道府県を選び、各自治体のみらい議会を開けます。
      </p>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        <Link
          href={routes.japanMap() as Route}
          className="inline-flex font-bold underline underline-offset-2 hover:opacity-80"
        >
          日本地図を見る
        </Link>
        <Link
          href={routes.gunmaMap() as Route}
          className="inline-flex font-bold underline underline-offset-2 hover:opacity-80"
        >
          群馬県の市町村地図を見る
        </Link>
      </div>
    </div>
  );
}
