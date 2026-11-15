import { describe, expect, it } from "vitest";
import { PREFECTURES } from "@/features/japan-map/shared/prefectures";
import { routes } from "@/lib/routes";
import { OKAYAMA_MUNICIPALITIES } from "./municipalities";

describe("岡山県から奈義町への導線", () => {
  it("全国地図の岡山県は外部サイトへ直接遷移せず県内地図を開く", () => {
    const okayama = PREFECTURES.find(
      (prefecture) => prefecture.id === "okayama"
    );
    expect(okayama?.href).toBe(routes.okayamaMap());
    expect(okayama?.external).not.toBe(true);
  });

  it("27市町村から奈義町の公開リンクを選べる", () => {
    expect(OKAYAMA_MUNICIPALITIES).toHaveLength(27);
    const nagi = OKAYAMA_MUNICIPALITIES.find((item) => item.id === "nagi");
    expect(nagi?.href).toBe("https://mirai-gikai-nagi.vercel.app/");
    expect(nagi?.external).toBe(true);
    expect(OKAYAMA_MUNICIPALITIES.filter((item) => item.href)).toHaveLength(27);
  });
});
