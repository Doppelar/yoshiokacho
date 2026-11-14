// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
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
      "https://muse.ai/s/mirai-gikai-nagi-xtq6sqxakgwxvxp/q2nMcOrMbt6FUGCkTYThe4ns35jGA4XZC67zhdeO7Yk"
    );
    expect(nagi.getAttribute("target")).toBe("_blank");
    expect(nagi.getAttribute("rel")).toBe("noopener noreferrer");
  });

  it("準備中の市町村を選ぶと県内に留まって案内を表示する", () => {
    render(<OkayamaMunicipalityMap />);
    fireEvent.click(screen.getByRole("button", { name: "岡山市（準備中）" }));
    expect(
      screen.getByText(
        "岡山市のみらい議会は準備中です。現在は奈義町を開けます。"
      )
    ).toBeTruthy();
  });
});
