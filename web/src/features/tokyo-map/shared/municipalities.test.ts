import { describe, expect, it } from "vitest";
import { TOKYO_MUNICIPALITIES } from "./municipalities";

describe("TOKYO_MUNICIPALITIES", () => {
  it("東京都の62区市町村を重複なく持つ", () => {
    expect(TOKYO_MUNICIPALITIES).toHaveLength(62);
    expect(new Set(TOKYO_MUNICIPALITIES.map((item) => item.id)).size).toBe(62);
  });

  it("島しょ部以外は地図内の位置を持ち、島しょ部は地図に置かない", () => {
    for (const item of TOKYO_MUNICIPALITIES) {
      if (item.group === "島しょ") {
        expect(item.mapX, item.name).toBeUndefined();
        expect(item.mapY, item.name).toBeUndefined();
        continue;
      }
      expect(item.mapX, item.name).toBeGreaterThan(0);
      expect(item.mapX, item.name).toBeLessThan(100);
      expect(item.mapY, item.name).toBeGreaterThan(0);
      expect(item.mapY, item.name).toBeLessThan(100);
    }
  });

  it("23区は23件、島しょ部は9件", () => {
    const count = (group: string) =>
      TOKYO_MUNICIPALITIES.filter((item) => item.group === group).length;
    expect(count("区")).toBe(23);
    expect(count("島しょ")).toBe(9);
  });
});
