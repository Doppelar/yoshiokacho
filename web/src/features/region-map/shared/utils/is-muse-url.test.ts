import { describe, expect, it } from "vitest";
import { isMuseUrl } from "./is-muse-url";

describe("MUSEの公開サイト", () => {
  it.each([
    "https://muse.ai/s/example/id",
    "https://www.muse.ai/s/example",
    "https://MUSE.AI/s/example",
    "http://muse.ai/s/example",
  ])("%sをMUSEと判定する", (href) => {
    expect(isMuseUrl(href)).toBe(true);
  });
  it.each([
    undefined,
    "",
    "/japan",
    "not a url",
    "https://example.com/muse.ai",
    "https://muse.ai.example.com/s/example",
    "https://muse.ai@example.com/s/example",
    "javascript:alert(1)",
    "file://muse.ai/s/example",
  ])("%sをMUSEと誤認しない", (href) => {
    expect(isMuseUrl(href)).toBe(false);
  });
});
