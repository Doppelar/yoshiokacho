import { readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { TAKASAKI_ITEM_ILLUSTRATIONS } from "./illustrations";
import { TAKASAKI_SESSION_R8_5 } from "./session-r8-5";

describe("高崎市の直近会期の挿絵", () => {
  it("対象会期の全31件に別々の画像を割り当てる", () => {
    const itemIds = TAKASAKI_SESSION_R8_5.items.map((item) => item.id);
    expect(Object.keys(TAKASAKI_ITEM_ILLUSTRATIONS).sort()).toEqual(
      [...itemIds].sort()
    );
    expect(itemIds).toHaveLength(31);
    expect(
      new Set(
        Object.values(TAKASAKI_ITEM_ILLUSTRATIONS).map((image) => image?.src)
      ).size
    ).toBe(31);
    expect(TAKASAKI_ITEM_ILLUSTRATIONS["r8-4-gian-53"]).toBeUndefined();
  });

  it("参照するWebP画像を軽量な実ファイルとして保持する", () => {
    for (const image of Object.values(TAKASAKI_ITEM_ILLUSTRATIONS)) {
      if (!image) throw new Error("画像の定義がありません");
      expect(image.alt).toMatch(/イメージ$/);
      expect(image.src).toMatch(/^\/illustrations\/takasaki\/[^/]+\.webp$/);
      const assetPath = fileURLToPath(
        new URL("../../../../public".concat(image.src), import.meta.url)
      );
      const bytes = readFileSync(assetPath);
      expect(bytes.toString("ascii", 0, 4)).toBe("RIFF");
      expect(bytes.toString("ascii", 8, 12)).toBe("WEBP");
      expect(statSync(assetPath).size).toBeLessThan(256 * 1024);
    }
  });
});
