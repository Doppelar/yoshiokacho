import { describe, expect, it } from "vitest";
import { getSiteBrand } from "./site-brand";

describe("getSiteBrand", () => {
  it("トップや議案ページでは吉岡町版の名前とトップへのリンクを返す", () => {
    expect(getSiteBrand("/")).toEqual({
      name: "みらい議会＠吉岡町",
      href: "/",
    });
    expect(getSiteBrand("/bills/abc").name).toBe("みらい議会＠吉岡町");
  });

  it("全国地図と都道府県ページでは全国版の名前と全国地図へのリンクを返す", () => {
    expect(getSiteBrand("/japan")).toEqual({
      name: "みらい議会 全国版",
      href: "/japan",
    });
    expect(getSiteBrand("/gunma").name).toBe("みらい議会 全国版");
    expect(getSiteBrand("/tokyo").name).toBe("みらい議会 全国版");
  });
});
