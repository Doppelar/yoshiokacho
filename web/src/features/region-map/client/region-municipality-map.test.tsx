// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { RegionMapConfig } from "../shared/types";
import { RegionMunicipalityMap } from "./region-municipality-map";

afterEach(cleanup);
const config: RegionMapConfig = {
  prefectureName: "鳥取県",
  prefectureCode: "31",
  imageSrc: "/img/tottori-municipality-map.svg",
  municipalities: [
    {
      id: "31201",
      name: "鳥取市",
      type: "市",
      mapX: 20,
      mapY: 20,
      status: "live",
      href: "https://example.com/tottori",
      external: true,
    },
    {
      id: "31302",
      name: "岩美町",
      type: "町",
      mapX: 50,
      mapY: 50,
      status: "upcoming",
    },
  ],
};

describe("RegionMunicipalityMap", () => {
  it("県の地図と公開自治体への安全な外部リンクを表示する", () => {
    render(<RegionMunicipalityMap {...config} />);
    expect(
      screen.getByRole("img", { name: "鳥取県の2市町村の地図" })
    ).toBeTruthy();
    const link = screen.getByRole("link", { name: "鳥取市のみらい議会" });
    expect(link.getAttribute("href")).toBe("https://example.com/tottori");
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  });
  it("準備中の自治体は移動せず案内し、空の村グループを作らない", () => {
    render(<RegionMunicipalityMap {...config} />);
    fireEvent.click(screen.getByRole("button", { name: "岩美町（準備中）" }));
    expect(
      screen.getByText(
        "岩美町のみらい議会は準備中です。公開済みの市町村は、地図または一覧から開けます。"
      )
    ).toBeTruthy();
    expect(screen.queryByRole("heading", { name: "村", level: 3 })).toBeNull();
  });
  it("専用サイトへのリンクには暫定公開の表示を出さない", () => {
    render(<RegionMunicipalityMap {...config} />);
    expect(screen.queryByText(/暫定公開（運営者募集中）/)).toBeNull();
  });
  it("muse.ai 上のページは暫定公開（運営者募集中）と示し、凡例を出す", () => {
    render(
      <RegionMunicipalityMap
        {...config}
        municipalities={[
          ...config.municipalities,
          {
            id: "31202",
            name: "米子市",
            type: "市",
            mapX: 60,
            mapY: 20,
            status: "live",
            href: "https://muse.ai/s/mirai-gikai-yonago-x/abc",
            external: true,
          },
        ]}
      />
    );
    expect(
      screen.getByRole("link", {
        name: "米子市のみらい議会（暫定公開（運営者募集中））（MUSEで作成）",
      })
    ).toBeTruthy();
    const chip = screen.getByRole("link", {
      name: "米子市（暫定公開（運営者募集中））（MUSEで作成）",
    });
    expect(chip.getAttribute("href")).toBe(
      "https://muse.ai/s/mirai-gikai-yonago-x/abc"
    );
    expect(
      screen.getByText(/のマークは暫定公開（運営者募集中）です/)
    ).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "鳥取市のみらい議会" })
    ).toBeTruthy();
  });
});
