import { describe, expect, it } from "vitest";
import {
  countProvisionalEditions,
  isProvisionalEdition,
} from "./provisional-edition";

const MUSE =
  "https://muse.ai/s/mirai-gikai-kanuma-shi-xsxx6xv4gxhxmyixy/oZl9bW";

describe("isProvisionalEdition", () => {
  it("対象県（鳥取・群馬・青森・京都など）の muse.ai ページは暫定公開", () => {
    expect(isProvisionalEdition("31", MUSE)).toBe(true);
    expect(isProvisionalEdition("10", MUSE)).toBe(true);
    expect(isProvisionalEdition("02", MUSE)).toBe(true);
    expect(isProvisionalEdition("26", MUSE)).toBe(true);
  });

  it("栃木など対象外の県の muse.ai ページは暫定公開ではない", () => {
    expect(isProvisionalEdition("09", MUSE)).toBe(false);
    expect(isProvisionalEdition("38", MUSE)).toBe(false);
  });

  it("対象県でも専用サイトやサイト内のページは暫定公開ではない", () => {
    expect(isProvisionalEdition("10", "/takasaki")).toBe(false);
    expect(isProvisionalEdition("10", "/")).toBe(false);
    expect(
      isProvisionalEdition("20", "https://mirai-gikai-komoro-web.vercel.app/")
    ).toBe(false);
  });

  it("リンクがない（準備中）場合は暫定公開ではない", () => {
    expect(isProvisionalEdition("31", undefined)).toBe(false);
    expect(isProvisionalEdition("31", "")).toBe(false);
  });

  it("muse.ai を含むだけの別ホストは対象にしない", () => {
    expect(isProvisionalEdition("31", "https://muse.ai.example.com/x")).toBe(
      false
    );
    expect(
      isProvisionalEdition("31", "https://example.com/?u=https://muse.ai/")
    ).toBe(false);
  });
});

describe("countProvisionalEditions", () => {
  it("対象県の暫定公開リンクだけを数える", () => {
    const items = [{ href: MUSE }, { href: MUSE }, { href: "/takasaki" }, {}];
    expect(countProvisionalEditions("10", items)).toBe(2);
    expect(countProvisionalEditions("09", items)).toBe(0);
  });
});
