"use client";

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
  GUNMA_MUNICIPALITIES,
  type Municipality,
} from "../shared/municipalities";

export function GunmaMunicipalityMap() {
  const [selectedId, setSelectedId] = useState<string>("yoshioka");
  const selected =
    GUNMA_MUNICIPALITIES.find((item) => item.id === selectedId) ??
    GUNMA_MUNICIPALITIES.find((item) => item.id === "yoshioka");

  const cities = GUNMA_MUNICIPALITIES.filter((item) => item.type === "市");
  const towns = GUNMA_MUNICIPALITIES.filter((item) => item.type !== "市");

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border bg-[#6aa84f] p-2 sm:p-3">
        <div className="relative">
          <Image
            src="/img/gunma-municipality-map.gif"
            alt="群馬県の市町村地図"
            width={480}
            height={514}
            className="h-auto w-full"
            priority
          />
          {GUNMA_MUNICIPALITIES.map((item) => (
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
        <p className="px-1 pt-2 text-right text-[10px] text-white/90">
          © ONECOMPATH
        </p>
      </div>

      {selected && <SelectedMunicipalityCard municipality={selected} />}

      <section>
        <h2 className="mb-3 text-lg font-bold">市町村を選ぶ</h2>
        <MunicipalityGroup
          title="市"
          items={cities}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <MunicipalityGroup
          title="町村"
          items={towns}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </section>
    </div>
  );
}

function MunicipalityGroup({
  title,
  items,
  selectedId,
  onSelect,
}: {
  title: string;
  items: readonly Municipality[];
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

function SelectedMunicipalityCard({
  municipality,
}: {
  municipality: Municipality;
}) {
  const live = municipality.status === "live";
  return (
    <section className="rounded-2xl border bg-white p-5">
      <p className="text-sm text-muted-foreground">選択中</p>
      <h2 className="mt-1 text-2xl font-bold">
        みらい議会＠{municipality.name}
      </h2>
      {live ? (
        <>
          <p className="mt-2 text-sm">
            {municipality.name}の議会ページを開きます。
          </p>
          <Button asChild className="mt-4">
            <Link href={(municipality.href ?? routes.home()) as Route}>
              みらい議会＠{municipality.name}を見る
            </Link>
          </Button>
        </>
      ) : (
        <p className="mt-2 text-sm text-muted-foreground">
          {municipality.name}
          のみらい議会は準備中です。現在は吉岡町と太田市を開けます。
        </p>
      )}
    </section>
  );
}
