"use client";

import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MapHotspotProps = {
  name: string;
  mapX: number;
  mapY: number;
  selected: boolean;
  href?: string;
  external?: boolean;
  onSelect: () => void;
};

export function MapHotspot({
  name,
  mapX,
  mapY,
  selected,
  href,
  external,
  onSelect,
}: MapHotspotProps) {
  const live = Boolean(href);
  const style = { left: `${mapX}%`, top: `${mapY}%` };
  const wrapperClass = cn(
    "absolute -translate-x-1/2 -translate-y-1/2",
    live ? "z-20" : "z-10"
  );
  const dotClass = cn(
    "rounded-full border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
    live ? "h-5 w-5 sm:h-6 sm:w-6" : "h-3.5 w-3.5 sm:h-4 sm:w-4",
    selected
      ? "border-[#f4c430] bg-black"
      : live
        ? "border-white bg-black"
        : "border-white bg-[#8aa399]/80"
  );

  if (live && href) {
    const label = (
      <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black px-1.5 py-0.5 text-[10px] font-bold leading-none text-white shadow">
        {name}
      </span>
    );

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}のみらい議会`}
          className={wrapperClass}
          style={style}
        >
          <span className={cn(dotClass, "block")} />
          {label}
        </a>
      );
    }

    return (
      <Link
        href={href as Route}
        aria-label={`${name}のみらい議会`}
        className={wrapperClass}
        style={style}
      >
        <span className={cn(dotClass, "block")} />
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={name}
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(wrapperClass, dotClass)}
      style={style}
    />
  );
}

type MapChoiceChipProps = {
  name: string;
  selected: boolean;
  href?: string;
  external?: boolean;
  onSelect: () => void;
};

export function MapChoiceChip({
  name,
  selected,
  href,
  external,
  onSelect,
}: MapChoiceChipProps) {
  const live = Boolean(href);
  const className = cn(
    "rounded-full border px-3 py-1.5 text-sm font-medium",
    selected
      ? "border-black bg-black text-white"
      : live
        ? "border-black bg-white underline decoration-transparent hover:decoration-current"
        : "border-input bg-white text-muted-foreground"
  );

  if (live && href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {name}
        </a>
      );
    }

    return (
      <Link href={href as Route} className={className}>
        {name}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onSelect} className={className}>
      {name}
      （準備中）
    </button>
  );
}
