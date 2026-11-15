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

const TOKYO_MAPS = [
  {
    caption: "多摩地域と23区",
    src: "/img/tokyo-mainland-map.svg",
    alt: "東京都の多摩地域と23区の地図",
    height: 425,
    includes: (item: TokyoMunicipality) =>
      item.group === "市" || item.group === "町村",
  },
  {
    caption: "23区（拡大図）",
    src: "/img/tokyo-23-wards-map.svg",
    alt: "東京23区の地図",
    height: 801,
    includes: (item: TokyoMunicipality) => item.group === "区",
  },
] as const;

export function TokyoMunicipalityMap() {
  const [selectedId, setSelectedId] = useState("chuo");
  const selected =
    TOKYO_MUNICIPALITIES.find((item) => item.id === selectedId) ??
    TOKYO_MUNICIPALITIES.find((item) => item.id === "chuo");

  return (
    <div className="space-y-6">
      <div className="space-y-3 rounded-2xl border border-mirai-border bg-muted p-2 sm:p-3">
        {TOKYO_MAPS.map((map) => (
          <figure key={map.src}>
            <figcaption className="mb-1 px-1 text-sm font-bold">
              {map.caption}
            </figcaption>
            <div className="relative">
              <Image
                src={map.src}
                alt={map.alt}
                width={800}
                height={map.height}
                className="h-auto w-full"
                priority
              />
              {TOKYO_MUNICIPALITIES.filter(map.includes).map((item) =>
                item.mapX === undefined || item.mapY === undefined ? null : (
                  <MapHotspot
                    key={item.id}
                    name={item.name}
                    mapX={item.mapX}
                    mapY={item.mapY}
                    selected={item.id === selectedId}
                    href={item.href}
                    external={item.external}
                    onSelect={() => setSelectedId(item.id)}
                    showLabel={false}
                  />
                )
              )}
            </div>
          </figure>
        ))}
        <p className="px-1 text-xs text-mirai-text-secondary">
          島しょ部の9町村は、下の一覧から選べます。地図：
          <a
            href="https://geoshape.ex.nii.ac.jp/city/choropleth/13_city_dc.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            『歴史的行政区域データセットβ版』（CODH作成）
          </a>
          を加工（CC BY 4.0）
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
          のみらい議会は準備中です。現在は中央区、新宿区、世田谷区、大田区、足立区、墨田区、立川市を開けます。
        </p>
      )}
    </section>
  );
}
