// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { OkayamaMunicipalityMap } from "./okayama-municipality-map";

afterEach(cleanup);

describe("OkayamaMunicipalityMap", () => {
  it("県内地図を表示し、奈義町を別タブで開くリンクを提供する", () => {
    render(<OkayamaMunicipalityMap />);
    expect(
      screen.getByRole("img", { name: "岡山県の27市町村の地図" })
    ).toBeTruthy();
    const nagi = screen.getByRole("link", { name: "奈義町のみらい議会" });
    expect(nagi.getAttribute("href")).toBe(
      "https://mirai-gikai-nagi.vercel.app/"
    );
    expect(nagi.getAttribute("target")).toBe("_blank");
    expect(nagi.getAttribute("rel")).toBe("noopener noreferrer");
  });

  it("一覧から岡山市の公開リンクを選べる", () => {
    render(<OkayamaMunicipalityMap />);
    expect(
      screen.getByRole("link", { name: "岡山市" }).getAttribute("href")
    ).toBe("https://mirai-gikai-okayama.vercel.app/");
  });
});
