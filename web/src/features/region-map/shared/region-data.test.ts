import { describe, expect, it } from "vitest";
import { AOMORI_MUNICIPALITIES } from "@/features/aomori-map/shared/municipalities";
import { FUKUSHIMA_MUNICIPALITIES } from "@/features/fukushima-map/shared/municipalities";
import { KYOTO_MUNICIPALITIES } from "@/features/kyoto-map/shared/municipalities";
import { MIYAGI_MUNICIPALITIES } from "@/features/miyagi-map/shared/municipalities";
import { SHIMANE_MUNICIPALITIES } from "@/features/shimane-map/shared/municipalities";
import { TOCHIGI_MUNICIPALITIES } from "@/features/tochigi-map/shared/municipalities";
import { TOTTORI_MUNICIPALITIES } from "@/features/tottori-map/shared/municipalities";
import { YAMAGUCHI_MUNICIPALITIES } from "@/features/yamaguchi-map/shared/municipalities";

describe("県別市町村地図データ", () => {
  for (const [name, data, expectedCount] of [
    ["青森県", AOMORI_MUNICIPALITIES, 40],
    ["山口県", YAMAGUCHI_MUNICIPALITIES, 19],
    ["鳥取県", TOTTORI_MUNICIPALITIES, 19],
    ["島根県", SHIMANE_MUNICIPALITIES, 19],
    ["栃木県", TOCHIGI_MUNICIPALITIES, 25],
    ["京都府", KYOTO_MUNICIPALITIES, 26],
    ["福島県", FUKUSHIMA_MUNICIPALITIES, 59],
    ["宮城県", MIYAGI_MUNICIPALITIES, 35],
  ] as const) {
    it(name + "の全自治体を重複せず保持し、地図上に配置する", () => {
      expect(data).toHaveLength(expectedCount);
      expect(new Set(data.map((item) => item.id)).size).toBe(expectedCount);
      expect(new Set(data.map((item) => item.name)).size).toBe(expectedCount);
      for (const item of data) {
        expect(item.mapX).toBeGreaterThanOrEqual(0);
        expect(item.mapX).toBeLessThanOrEqual(100);
        expect(item.mapY).toBeGreaterThanOrEqual(0);
        expect(item.mapY).toBeLessThanOrEqual(100);
        expect(["市", "町", "村"]).toContain(item.type);
        if (item.href) {
          expect(item.status).toBe("live");
          expect(item.external).toBe(true);
          expect(item.href.startsWith("https://")).toBe(true);
        } else {
          expect(item.status).toBe("upcoming");
        }
      }
    });
  }
});
