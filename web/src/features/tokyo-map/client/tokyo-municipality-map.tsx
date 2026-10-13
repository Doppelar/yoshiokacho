"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MapChoiceChip,
  MapHotspot,
} from "@/features/region-map/client/map-hotspot";
import {
  TOKYO_GROUPS,
  TOKYO_MUNICIPALITIES,
  type TokyoMunicipality,
} from "../shared/municipalities";

export function TokyoMunicipalityMap() {
  const [selectedId, setSelectedId] = useState("chuo");
  const selected =
    TOKYO_MUNICIPALITIES.find((item) => item.id === selectedId) ??
    TOKYO_MUNICIPALITIES.find((item) => item.id === "chuo");

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border bg-[#6aa84f] p-2 sm:p-3">
        <div className="relative">
          <Image
            src="/img/tokyo-municipality-map.gif"
            alt="東京都の区市町村地図"
            width={480}
            height={356}
            className="h-auto w-full"
            priority
          />
          {TOKYO_MUNICIPALITIES.map((item) => (
            <MapHotspot
              key={item.id}
              name={item.name}
              mapX={item.mapX}
              mapY={item.mapY}
              selected={item.id === selectedId}
              href={item.href}
              external={item.external}
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
        <h2 className="mb-3 text-lg font-bold">区市町村を選ぶ</h2>
        {TOKYO_GROUPS.map((group) => (
          <MunicipalityGroup
            key={group}
            title={group}
            items={TOKYO_MUNICIPALITIES.filter((item) => item.group === group)}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        ))}
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
  items: readonly TokyoMunicipality[];
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
            external={item.external}
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
  municipality: TokyoMunicipality;
}) {
  const live = municipality.status === "live" && municipality.href;
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
            <a
              href={municipality.href}
              target={municipality.external ? "_blank" : undefined}
              rel={municipality.external ? "noopener noreferrer" : undefined}
            >
              みらい議会＠{municipality.name}を見る
            </a>
          </Button>
        </>
      ) : (
        <p className="mt-2 text-sm text-muted-foreground">
          {municipality.name}
          のみらい議会は準備中です。現在は中央区、大田区、足立区を開けます。
        </p>
      )}
    </section>
  );
}
