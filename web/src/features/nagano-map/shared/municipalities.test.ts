import { describe, expect, it } from "vitest";
import { PREFECTURES } from "@/features/japan-map/shared/prefectures";
import { routes } from "@/lib/routes";
import { NAGANO_MUNICIPALITIES } from "./municipalities";

describe("長野県の公開市町村への導線", () => {
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
  });
  it.each([
    [
      "20541",
      "https://muse.ai/s/mirai-gikai-obuse-machi-xkxk6pxnxuxrxeuxg0/ntYZDMaITL_1Nuzw2iGuDJX41HCthfyOmoQGhVvLug8",
    ],
    [
      "20543",
      "https://muse.ai/s/mirai-gikai-takayama-mura-nagano-kr6pxnxuxwxcc1xa/zye4TxV7LVYOFGzVZoDgcHc3gvmwm5DusrAgq-98tGU",
    ],
    [
      "20561",
      "https://muse.ai/s/mirai-gikai-yamanouchi-machi-xzc6pxnxvanmj9/4JsK-cBAggN0vzxy5B8kRFYHbrQv7ZuT72zOIA5XJOQ",
    ],
    [
      "20562",
      "https://muse.ai/s/mirai-gikai-kijimadaira-mura-nd6pxnxuxkxexuxxv/A6LnWokazXc5d0k6BTUXSUGI9FNQuipxOlYA_YmfPRM",
    ],
    [
      "20563",
      "https://muse.ai/s/mirai-gikai-nozawaonsen-mura-wr6pxnxuxouxgxzxu/ANKhHJoFBOJn9iUL71JZtYvvERXX4Rl9_oPpdvnP_3c",
    ],
    [
      "20413",
      "https://muse.ai/s/mirai-gikai-tenryu-mura-hc6oxmxnxn0xvbxb/wZ_cjrn3T7F_j5QJPJAO905w2dIby50djaoYZ4szW_g",
    ],
    [
      "20414",
      "https://muse.ai/s/mirai-gikai-yasuoka-mura-xoxj6oxmxnxnexul2/F1HOR6jPU8UYtHJDSLnu6cw20p0F-Aom6ntErqpSJAc",
    ],
  ])("%sの公開リンクを選べる", (id, href) => {
    expect(NAGANO_MUNICIPALITIES.find((item) => item.id === id)).toMatchObject({
      status: "live",
      href,
      external: true,
    });
  });
});
