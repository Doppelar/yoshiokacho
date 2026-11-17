import { describe, expect, it } from "vitest";
import { ISHIKAWA_MUNICIPALITIES } from "./municipalities";

describe("石川県の市町への公開リンク", () => {
  it("11市8町を登録し、公開済みは能美市とかほく市の2市にする", () => {
    expect(
      ISHIKAWA_MUNICIPALITIES.filter((item) => item.type === "市")
    ).toHaveLength(11);
    expect(
      ISHIKAWA_MUNICIPALITIES.filter((item) => item.type === "町")
    ).toHaveLength(8);
    expect(
      ISHIKAWA_MUNICIPALITIES.filter((item) => item.status === "live")
        .map((item) => item.name)
        .sort()
    ).toEqual(["かほく市", "能美市"]);
  });
  it.each([
    [
      "17211",
      "https://muse.ai/s/mirai-gikai-nomi-shi-xmc6pxnxv0dxysy/loNb94qMDcJt38Hp_o-Mrfe2KwzHvYO9H7DIO2iCm4I",
    ],
    [
      "17209",
      "https://muse.ai/s/mirai-gikai-kahoku-shi-xpc6pxnxuxyc65xd/vE0UIvUPytKk7ZzSO3gfCwftGFUqlNAoatBYArRlt5c",
    ],
  ])("%sを指定されたサイトへ案内する", (id, href) => {
    expect(
      ISHIKAWA_MUNICIPALITIES.find((item) => item.id === id)
    ).toMatchObject({ status: "live", href, external: true });
  });
});
