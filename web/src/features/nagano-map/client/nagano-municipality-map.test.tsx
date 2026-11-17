// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
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

  it.each([
    [
      "小布施町",
      "https://muse.ai/s/mirai-gikai-obuse-machi-xkxk6pxnxuxrxeuxg0/ntYZDMaITL_1Nuzw2iGuDJX41HCthfyOmoQGhVvLug8",
    ],
    [
      "高山村",
      "https://muse.ai/s/mirai-gikai-takayama-mura-nagano-kr6pxnxuxwxcc1xa/zye4TxV7LVYOFGzVZoDgcHc3gvmwm5DusrAgq-98tGU",
    ],
    [
      "山ノ内町",
      "https://muse.ai/s/mirai-gikai-yamanouchi-machi-xzc6pxnxvanmj9/4JsK-cBAggN0vzxy5B8kRFYHbrQv7ZuT72zOIA5XJOQ",
    ],
    [
      "木島平村",
      "https://muse.ai/s/mirai-gikai-kijimadaira-mura-nd6pxnxuxkxexuxxv/A6LnWokazXc5d0k6BTUXSUGI9FNQuipxOlYA_YmfPRM",
    ],
    [
      "野沢温泉村",
      "https://muse.ai/s/mirai-gikai-nozawaonsen-mura-wr6pxnxuxouxgxzxu/ANKhHJoFBOJn9iUL71JZtYvvERXX4Rl9_oPpdvnP_3c",
    ],
  ])("%sを地図と一覧の両方から別タブで開ける", (name, href) => {
    render(<NaganoMunicipalityMap />);
    const links = screen.getAllByRole("link", { name: new RegExp(name) });
    expect(links).toHaveLength(2);
    for (const link of links) {
      expect(link.getAttribute("href")).toBe(href);
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    }
    expect(screen.queryByRole("button", { name: /準備中/ })).toBeNull();
  });
});
