"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MapChoiceChip,
  MapHotspot,
} from "@/features/region-map/client/map-hotspot";
import { OKAYAMA_MUNICIPALITIES } from "../shared/municipalities";

export function OkayamaMunicipalityMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = OKAYAMA_MUNICIPALITIES.find(
    (item) => item.id === selectedId
  );

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-mirai-border bg-muted p-2 sm:p-3">
        <div className="relative">
          <Image
            src="/img/okayama-municipality-map.svg"
            alt="岡山県の27市町村の地図"
            width={800}
            height={800}
            className="h-auto w-full"
            priority
          />
          {OKAYAMA_MUNICIPALITIES.map((item) => (
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
        <p className="mt-2 text-xs text-mirai-text-secondary">
          地図：
          <a
            href="https://geoshape.ex.nii.ac.jp/city/choropleth/33_city_dc.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            『歴史的行政区域データセットβ版』（CODH作成）
          </a>
          を加工（CC BY 4.0）
        </p>
      </div>

      <p className="text-sm text-mirai-text-secondary">
        {selected && !selected.href
          ? `${selected.name}のみらい議会は準備中です。27市町村の公開ページを開けます。`
          : "地図または一覧から市町村を選んでください。各市町村の公開ページを別タブで開きます。"}
      </p>

      <section aria-labelledby="okayama-municipality-list">
        <h2 id="okayama-municipality-list" className="mb-3 text-lg font-bold">
          市町村を選ぶ
        </h2>
        {(["市", "町", "村"] as const).map((type) => (
          <section key={type} className="mb-4">
            <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
              {type}
            </h3>
            <div className="flex flex-wrap gap-2">
              {OKAYAMA_MUNICIPALITIES.filter((item) => item.type === type).map(
                (item) => (
                  <MapChoiceChip
                    key={item.id}
                    name={item.name}
                    selected={selectedId === item.id}
                    href={item.href}
                    external={item.external}
                    onSelect={() => setSelectedId(item.id)}
                  />
                )
              )}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
