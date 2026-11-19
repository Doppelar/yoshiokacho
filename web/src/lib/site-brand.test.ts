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

  it("高崎市の議案のインタビュー・意見ページやレポートでは高崎市版にする", () => {
    const councilBills = { "bill-t": "takasaki" };
    for (const pathname of [
      "/bills/bill-t/interview",
      "/bills/bill-t/interview/chat",
      "/bills/bill-t/opinions",
      "/preview/bills/bill-t/interview",
    ]) {
      expect(getSiteBrand(pathname, councilBills).name).toBe(
        "みらい議会＠高崎市"
      );
    }
    expect(
      getSiteBrand("/report/r1/complete", councilBills, "bill-t").name
    ).toBe("みらい議会＠高崎市");
  });

  it("全国版のテーマのインタビュー・回答一覧では全国版にする", () => {
    const councilBills = { "bill-n": "national" };
    expect(getSiteBrand("/bills/bill-n/interview", councilBills).name).toBe(
      "みらい議会 全国版"
    );
    expect(getSiteBrand("/bills/bill-n/opinions", councilBills).name).toBe(
      "みらい議会 全国版"
    );
  });

  it("吉岡町の議案や未知の議会の議案は吉岡町版のままにする", () => {
    const councilBills = { "bill-x": "unknown" };
    expect(getSiteBrand("/bills/bill-y/interview", councilBills).name).toBe(
      "みらい議会＠吉岡町"
    );
    expect(getSiteBrand("/bills/bill-x/interview", councilBills).name).toBe(
      "みらい議会＠吉岡町"
    );
    expect(getSiteBrand("/report/r1", councilBills, "bill-y").name).toBe(
      "みらい議会＠吉岡町"
    );
  });
});
