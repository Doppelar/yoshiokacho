"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MapChoiceChip,
  MapHotspot,
} from "@/features/region-map/client/map-hotspot";
import { ProvisionalLegend } from "@/features/region-map/client/provisional-mark";
import {
  countProvisionalEditions,
  isProvisionalEdition,
} from "@/features/region-map/shared/utils/provisional-edition";
import { NAGANO_MUNICIPALITIES } from "../shared/municipalities";

export function NaganoMunicipalityMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = NAGANO_MUNICIPALITIES.find((item) => item.id === selectedId);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-mirai-border bg-muted p-2 sm:p-3">
        <div className="relative">
          <Image
            src="/img/nagano-municipality-map.svg"
            alt="長野県の77市町村の地図"
            width={800}
            height={800}
            className="h-auto w-full"
            priority
          />
          {NAGANO_MUNICIPALITIES.map((item) => (
            <MapHotspot
              key={item.id}
              name={item.name}
              mapX={item.mapX}
              mapY={item.mapY}
              selected={item.id === selectedId}
              href={item.href}
              external={item.external}
              provisional={isProvisionalEdition(item.href)}
              onSelect={() => setSelectedId(item.id)}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-mirai-text-secondary">
          地図：
          <a
            href="https://geoshape.ex.nii.ac.jp/city/choropleth/20_city_dc.html"
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
          ? `${selected.name}のみらい議会は準備中です。公開済みの市町村は、地図または一覧から開けます。`
          : "地図または一覧から市町村を選んでください。公開済みの市町村は公開ページを別タブで開きます。"}
      </p>
      {countProvisionalEditions(NAGANO_MUNICIPALITIES) > 0 && (
        <ProvisionalLegend />
      )}

      <section aria-labelledby="nagano-municipality-list">
        <h2 id="nagano-municipality-list" className="mb-3 text-lg font-bold">
          市町村を選ぶ
        </h2>
        {(["市", "町", "村"] as const).map((type) => (
          <section key={type} className="mb-4">
            <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
              {type}
            </h3>
            <div className="flex flex-wrap gap-2">
              {NAGANO_MUNICIPALITIES.filter((item) => item.type === type).map(
                (item) => (
                  <MapChoiceChip
                    key={item.id}
                    name={item.name}
                    selected={selectedId === item.id}
                    href={item.href}
                    external={item.external}
                    provisional={isProvisionalEdition(item.href)}
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
