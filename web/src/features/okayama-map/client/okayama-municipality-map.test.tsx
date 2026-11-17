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
    // 岡山県の公開ページは muse.ai 上の暫定公開なので、名前にその旨が付く
    const nagi = screen.getByRole("link", {
      name: "奈義町のみらい議会（暫定公開（運営者募集中））（MUSEで作成）",
    });
    expect(nagi.getAttribute("href")).toBe(
      "https://muse.ai/s/mirai-gikai-nagi-xtq6sqxakgwxvxp/q2nMcOrMbt6FUGCkTYThe4ns35jGA4XZC67zhdeO7Yk"
    );
    expect(nagi.getAttribute("target")).toBe("_blank");
    expect(nagi.getAttribute("rel")).toBe("noopener noreferrer");
  });

  it("一覧から岡山市の公開リンクを選べる", () => {
    render(<OkayamaMunicipalityMap />);
    expect(
      screen
        .getByRole("link", {
          name: "岡山市（暫定公開（運営者募集中））（MUSEで作成）",
        })
        .getAttribute("href")
    ).toBe(
      "https://muse.ai/s/mirai-gikai-okayama-kc6sxnxix0xuxdki/sYAmu03jJtZnCf-oEjpYjsjB5LpAN7dSphDcZJ-o_68"
    );
  });
});
