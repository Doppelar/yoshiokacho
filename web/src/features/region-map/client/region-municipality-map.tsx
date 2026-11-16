"use client";

import Image from "next/image";
import { useState } from "react";
import type { RegionMapConfig } from "../shared/types";
import {
  countProvisionalEditions,
  isProvisionalEdition,
} from "../shared/utils/provisional-edition";
import { CodhMapAttribution } from "./map-attribution";
import { MapChoiceChip, MapHotspot } from "./map-hotspot";
import { ProvisionalLegend } from "./provisional-mark";

export function RegionMunicipalityMap({
  prefectureName,
  prefectureCode,
  imageSrc,
  municipalities,
}: RegionMapConfig) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = municipalities.find((item) => item.id === selectedId);
  const listId = "municipality-list-" + prefectureCode;
  const hasProvisional =
    countProvisionalEditions(prefectureCode, municipalities) > 0;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-mirai-border bg-muted p-2 sm:p-3">
        <div className="relative">
          <Image
            src={imageSrc}
            alt={prefectureName + "の" + municipalities.length + "市町村の地図"}
            width={800}
            height={800}
            className="h-auto w-full"
            priority
          />
          {municipalities.map((item) => (
            <MapHotspot
              key={item.id}
              name={item.name}
              mapX={item.mapX}
              mapY={item.mapY}
              selected={item.id === selectedId}
              href={item.href}
              external={item.external}
              provisional={isProvisionalEdition(prefectureCode, item.href)}
              onSelect={() => setSelectedId(item.id)}
              showLabel={false}
            />
          ))}
        </div>
        <CodhMapAttribution prefectureCode={prefectureCode} />
      </div>
      <p className="text-sm text-mirai-text-secondary" aria-live="polite">
        {selected && !selected.href
          ? selected.name +
            "のみらい議会は準備中です。公開済みの市町村は、地図または一覧から開けます。"
          : "地図または一覧から市町村を選んでください。公開済みの市町村は、各リンクから開けます。"}
      </p>
      {hasProvisional && <ProvisionalLegend />}
      <section aria-labelledby={listId}>
        <h2 id={listId} className="mb-3 text-lg font-bold">
          市町村を選ぶ
        </h2>
        {(["市", "町", "村"] as const).map((type) => {
          const items = municipalities.filter((item) => item.type === type);
          if (items.length === 0) return null;
          return (
            <section key={type} className="mb-4">
              <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
                {type}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <MapChoiceChip
                    key={item.id}
                    name={item.name}
                    selected={selectedId === item.id}
                    href={item.href}
                    external={item.external}
                    provisional={isProvisionalEdition(
                      prefectureCode,
                      item.href
                    )}
                    onSelect={() => setSelectedId(item.id)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
}
