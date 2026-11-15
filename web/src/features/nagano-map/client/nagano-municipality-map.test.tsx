// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { NaganoMunicipalityMap } from "./nagano-municipality-map";

afterEach(cleanup);

describe("NaganoMunicipalityMap", () => {
  it("県内地図を表示し、小諸市を別タブで開くリンクを提供する", () => {
    render(<NaganoMunicipalityMap />);
    expect(
      screen.getByRole("img", { name: "長野県の77市町村の地図" })
    ).toBeTruthy();
    const komoro = screen.getByRole("link", { name: "小諸市のみらい議会" });
    expect(komoro.getAttribute("href")).toBe(
      "https://mirai-gikai-komoro-web.vercel.app/"
    );
    expect(komoro.getAttribute("target")).toBe("_blank");
    expect(komoro.getAttribute("rel")).toBe("noopener noreferrer");
  });

  it("準備中の市町村を選ぶと県内に留まって案内を表示する", () => {
    render(<NaganoMunicipalityMap />);
    fireEvent.click(screen.getByRole("button", { name: "豊丘村（準備中）" }));
    expect(
      screen.getByText(
        "豊丘村のみらい議会は準備中です。公開済みの市町村は、地図または一覧から開けます。"
      )
    ).toBeTruthy();
  });
});
