"use client";

import { ExternalLink, Landmark } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MapChoiceChip,
  MapHotspot,
} from "@/features/region-map/client/map-hotspot";
import { routes } from "@/lib/routes";
import {
  PREFECTURE_REGIONS,
  PREFECTURES,
  type Prefecture,
} from "../shared/prefectures";
import {
  getPrefectureCouncilHref,
  getPrefectureCouncilName,
} from "../shared/utils/prefecture-council";

export function JapanPrefectureMap() {
  const [selectedId, setSelectedId] = useState("gunma");
  const selected =
    PREFECTURES.find((item) => item.id === selectedId) ??
    PREFECTURES.find((item) => item.id === "gunma");

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border bg-[#c5d6ea] p-2 sm:p-3">
        <div className="relative">
          <Image
            src="/img/japan-prefecture-map.gif"
            alt="日本の都道府県地図"
            width={480}
            height={365}
            className="h-auto w-full"
            priority
          />
          {PREFECTURES.map((item) => (
            <MapHotspot
              key={item.id}
              name={item.name}
              mapX={item.mapX}
              mapY={item.mapY}
              selected={item.id === selectedId}
              href={item.href}
              onSelect={() => setSelectedId(item.id)}
            />
          ))}
        </div>
        <p className="px-1 pt-2 text-right text-[10px] text-slate-700/80">
          © ONECOMPATH
        </p>
      </div>

      {selected && <SelectedPrefectureCard prefecture={selected} />}

      <section>
        <h2 className="mb-3 text-lg font-bold">都道府県を選ぶ</h2>
        {PREFECTURE_REGIONS.map((region) => (
          <PrefectureGroup
            key={region}
            title={region}
            items={PREFECTURES.filter((item) => item.region === region)}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </section>
    </div>
  );
}

function PrefectureGroup({
  title,
  items,
  selectedId,
  onSelect,
}: {
  title: string;
  items: readonly Prefecture[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="mb-4">
      <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <MapChoiceChip
            key={item.id}
            name={item.name}
            selected={selectedId === item.id}
            href={item.href}
            onSelect={() => onSelect(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

function SelectedPrefectureCard({ prefecture }: { prefecture: Prefecture }) {
  const live = prefecture.status === "live";
  const councilName = getPrefectureCouncilName(prefecture.name);
  return (
    <section className="rounded-2xl border bg-white p-5">
      <p className="text-sm text-muted-foreground">選択中</p>
      <h2 className="mt-1 text-2xl font-bold">{prefecture.name}</h2>
      {live ? (
        <p className="mt-2 text-sm">
          {prefecture.name}の市町村地図と、{councilName}
          のみらい議会を開けます。
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted-foreground">
          {prefecture.name}
          の市町村のみらい議会は準備中です。{councilName}
          のみらい議会は全国版で見られます。
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-3">
        {live && (
          <Button asChild>
            <Link href={(prefecture.href ?? routes.gunmaMap()) as Route}>
              {prefecture.name}の市町村を見る
            </Link>
          </Button>
        )}
        <Button asChild variant={live ? "outline" : "default"}>
          <a
            href={getPrefectureCouncilHref(prefecture.id)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Landmark aria-hidden="true" />
            みらい議会＠{councilName}を見る
            <ExternalLink aria-hidden="true" />
          </a>
        </Button>
      </div>
    </section>
  );
}
