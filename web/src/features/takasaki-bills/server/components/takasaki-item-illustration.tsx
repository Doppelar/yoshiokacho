import "server-only";

import Image from "next/image";
import { TAKASAKI_ITEM_ILLUSTRATIONS } from "../../shared/illustrations";

export function TakasakiItemIllustration({
  itemId,
  compact = false,
}: {
  itemId: string;
  compact?: boolean;
}) {
  const illustration = TAKASAKI_ITEM_ILLUSTRATIONS[itemId];
  if (!illustration) return null;

  return (
    <Image
      src={illustration.src}
      alt={compact ? "" : illustration.alt}
      width={1280}
      height={720}
      sizes={
        compact
          ? "(min-width: 1024px) 800px, 100vw"
          : "(min-width: 1024px) 832px, 100vw"
      }
      loading={compact ? "lazy" : "eager"}
      className={
        compact
          ? "mb-4 aspect-video w-full rounded-xl object-cover"
          : "mt-6 aspect-video w-full rounded-2xl object-cover"
      }
    />
  );
}
