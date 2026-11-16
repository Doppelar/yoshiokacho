import { describe, expect, it } from "vitest";
import {
  countProvisionalEditions,
  isProvisionalEdition,
} from "./provisional-edition";

describe("isProvisionalEdition", () => {
  it("muse.ai 上のページは暫定公開とみなす", () => {
    expect(
      isProvisionalEdition(
        "https://muse.ai/s/mirai-gikai-kanuma-shi-xsxx6xv4gxhxmyixy/oZl9bWVqN"
      )
    ).toBe(true);
  });

  it("専用サイトやサイト内のページは暫定公開ではない", () => {
    expect(isProvisionalEdition("https://ota.aix.tokyo/")).toBe(false);
    expect(isProvisionalEdition("/takasaki")).toBe(false);
    expect(isProvisionalEdition("/")).toBe(false);
  });

  it("リンクがない（準備中）場合は暫定公開ではない", () => {
    expect(isProvisionalEdition(undefined)).toBe(false);
    expect(isProvisionalEdition("")).toBe(false);
  });

  it("muse.ai を含むだけの別ホストは対象にしない", () => {
    expect(isProvisionalEdition("https://muse.ai.example.com/x")).toBe(false);
    expect(
      isProvisionalEdition("https://example.com/?u=https://muse.ai/")
    ).toBe(false);
  });
});

describe("countProvisionalEditions", () => {
  it("暫定公開のリンクだけを数える", () => {
    expect(
      countProvisionalEditions([
        { href: "https://muse.ai/s/a/b" },
        { href: "https://muse.ai/s/c/d" },
        { href: "/takasaki" },
        {},
      ])
    ).toBe(2);
  });
});
