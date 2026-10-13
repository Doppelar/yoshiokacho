"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MapChoiceChip,
  MapHotspot,
} from "@/features/region-map/client/map-hotspot";
import {
  SAITAMA_MUNICIPALITIES,
  type SaitamaMunicipality,
} from "../shared/municipalities";

export function SaitamaMunicipalityMap() {
  const [selectedId, setSelectedId] = useState("tokorozawa");
  const selected =
    SAITAMA_MUNICIPALITIES.find((item) => item.id === selectedId) ??
    SAITAMA_MUNICIPALITIES.find((item) => item.id === "tokorozawa");

  const cities = SAITAMA_MUNICIPALITIES.filter((item) => item.type === "市");
  const towns = SAITAMA_MUNICIPALITIES.filter((item) => item.type === "町");
  const villages = SAITAMA_MUNICIPALITIES.filter((item) => item.type === "村");

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border bg-[#6aa84f] p-2 sm:p-3">
        <div className="relative">
          <Image
            src="/img/saitama-municipality-map.gif"
            alt="埼玉県の市町村地図"
            width={480}
            height={320}
            className="h-auto w-full"
            priority
          />
          {SAITAMA_MUNICIPALITIES.map((item) => (
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
        <h2 className="mb-3 text-lg font-bold">市町村を選ぶ</h2>
        <MunicipalityGroup
          title="市"
          items={cities}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <MunicipalityGroup
          title="町"
          items={towns}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <MunicipalityGroup
          title="村"
          items={villages}
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
  items: readonly SaitamaMunicipality[];
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
  municipality: SaitamaMunicipality;
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
          {municipality.name}のみらい議会は準備中です。現在は所沢市を開けます。
        </p>
      )}
    </section>
  );
}
