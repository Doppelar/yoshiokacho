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

  it("高崎市のページでは高崎市版の名前と高崎市トップへのリンクを返す", () => {
    for (const pathname of ["/takasaki", "/takasaki/bills/r8-4-gian-54"]) {
      expect(getSiteBrand(pathname)).toEqual({
        name: "みらい議会＠高崎市",
        href: "/takasaki",
      });
    }
    expect(getSiteBrand("/takasakishi").name).toBe("みらい議会＠吉岡町");
  });
});
