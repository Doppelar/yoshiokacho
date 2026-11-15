import { describe, expect, it } from "vitest";
import { PREFECTURES } from "@/features/japan-map/shared/prefectures";
import { routes } from "@/lib/routes";
import { NAGANO_MUNICIPALITIES } from "./municipalities";

describe("長野県から小諸市への導線", () => {
  it("全国地図の長野県は外部サイトへ直接遷移せず県内地図を開く", () => {
    const nagano = PREFECTURES.find((prefecture) => prefecture.id === "nagano");
    expect(nagano?.href).toBe(routes.naganoMap());
    expect(nagano?.external).not.toBe(true);
  });

  it("77市町村から小諸市の公開リンクを選べる", () => {
    expect(NAGANO_MUNICIPALITIES).toHaveLength(77);
    const komoro = NAGANO_MUNICIPALITIES.find((item) => item.id === "komoro");
    expect(komoro?.href).toBe("https://mirai-gikai-komoro-web.vercel.app/");
    expect(komoro?.external).toBe(true);
    expect(NAGANO_MUNICIPALITIES.filter((item) => item.href)).toHaveLength(36);
  });
});
