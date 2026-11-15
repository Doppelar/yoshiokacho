import { describe, expect, it } from "vitest";

import {
  extractBillIdFromPath,
  isInterviewPage,
  isInterviewSection,
  isMainPage,
  isNationalEditionPage,
} from "./page-layout-utils";

describe("isNationalEditionPage", () => {
  it("全国地図とその配下のページは全国版", () => {
    expect(isNationalEditionPage("/japan")).toBe(true);
    expect(isNationalEditionPage("/japan/feedback")).toBe(true);
    expect(isNationalEditionPage("/japan/local-edition-applications")).toBe(
      true
    );
    expect(isNationalEditionPage("/updates")).toBe(true);
  });

  it("都道府県の地図ページは全国版", () => {
    expect(isNationalEditionPage("/gunma")).toBe(true);
    expect(isNationalEditionPage("/tokyo")).toBe(true);
    expect(isNationalEditionPage("/okinawa")).toBe(true);
  });

  it("吉岡町版のページや市のページは全国版ではない", () => {
    expect(isNationalEditionPage("/")).toBe(false);
    expect(isNationalEditionPage("/bills")).toBe(false);
    expect(isNationalEditionPage("/bills/abc-123")).toBe(false);
    expect(isNationalEditionPage("/takasaki")).toBe(false);
    expect(isNationalEditionPage("/ota")).toBe(false);
    expect(isNationalEditionPage("/japanese")).toBe(false);
  });
});

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

describe("isInterviewPage", () => {
  it("returns true for an interview chat page", () => {
    expect(isInterviewPage("/bills/abc-123/interview/chat")).toBe(true);
  });

  it("returns false for an interview page without /chat", () => {
    expect(isInterviewPage("/bills/abc-123/interview")).toBe(false);
  });

  it("returns false for a bill detail page", () => {
    expect(isInterviewPage("/bills/abc-123")).toBe(false);
  });

  it("returns false for the top page", () => {
    expect(isInterviewPage("/")).toBe(false);
  });
});

describe("isInterviewSection", () => {
  it("returns true for the interview LP page", () => {
    expect(isInterviewSection("/bills/abc-123/interview")).toBe(true);
  });

  it("returns true for the interview chat page", () => {
    expect(isInterviewSection("/bills/abc-123/interview/chat")).toBe(true);
  });

  it("returns false for a bill detail page", () => {
    expect(isInterviewSection("/bills/abc-123")).toBe(false);
  });

  it("returns false for the top page", () => {
    expect(isInterviewSection("/")).toBe(false);
  });

  it("returns false for unrelated paths", () => {
    expect(isInterviewSection("/about")).toBe(false);
  });
});

describe("extractBillIdFromPath", () => {
  it("extracts bill ID from a bill detail path", () => {
    expect(extractBillIdFromPath("/bills/abc-123")).toBe("abc-123");
  });

  it("extracts bill ID from a bill sub-path", () => {
    expect(extractBillIdFromPath("/bills/abc-123/interview/chat")).toBe(
      "abc-123"
    );
  });

  it("returns null when path does not contain /bills/", () => {
    expect(extractBillIdFromPath("/about")).toBeNull();
  });

  it("returns null for the top page", () => {
    expect(extractBillIdFromPath("/")).toBeNull();
  });
});
