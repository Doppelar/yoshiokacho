import { describe, expect, it } from "vitest";

import { isMainPage } from "./page-layout-utils";

describe("isMainPage", () => {
  it("returns true for the top page", () => {
    expect(isMainPage("/")).toBe(true);
  });

  it("returns true for a bill detail page", () => {
    expect(isMainPage("/bills/abc-123")).toBe(true);
  });

  it("returns false for a bill sub-page", () => {
    expect(isMainPage("/bills/abc-123/interview")).toBe(false);
  });

  it("returns false for an unrelated path", () => {
    expect(isMainPage("/about")).toBe(false);
  });

  // 一覧でも難易度の切り替えとチャットのサイドバーを出す。
  it("returns true for the bills list page", () => {
    expect(isMainPage("/bills")).toBe(true);
  });

  // 末尾スラッシュは Next 側で正規化されるため、素の一致だけを見る。
  it("returns false for the bills list page with a trailing slash", () => {
    expect(isMainPage("/bills/")).toBe(false);
  });
});
