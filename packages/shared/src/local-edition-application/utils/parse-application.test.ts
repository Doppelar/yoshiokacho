import { describe, expect, it } from "vitest";
import {
  canReviewApplication,
  formatApplicationDate,
  isApplicationId,
  mapApplicationRow,
  mapApprovedApplicationRow,
  parseLocalEditionApplicationInput,
  parseReviewDecision,
  toPublicSiteUrl,
  type LocalEditionApplicationInput,
} from "./parse-application";

const validInput: LocalEditionApplicationInput = {
  municipalityName: " 吉岡町 ",
  contactName: " 山田太郎 ",
  email: " Staff@Example.com ",
  siteUrl: "",
  introduction: " 地方版の連載を始めたいです。 ",
};

describe("parseLocalEditionApplicationInput", () => {
  it("前後の空白を除き、メールは小文字にする", () => {
    const parsed = parseLocalEditionApplicationInput(validInput);
    expect(parsed).toEqual({
      ok: true,
      value: {
        municipalityName: "吉岡町",
        contactName: "山田太郎",
        email: "staff@example.com",
        siteUrl: null,
        introduction: "地方版の連載を始めたいです。",
      },
    });
  });

  it("https のサイトURLを正規化する", () => {
    const parsed = parseLocalEditionApplicationInput({
      ...validInput,
      siteUrl: "https://example.com/mirai",
    });
    expect(parsed.ok && parsed.value.siteUrl).toBe(
      "https://example.com/mirai"
    );
  });

  it("空の自治体名は受け付けない", () => {
    const parsed = parseLocalEditionApplicationInput({
      ...validInput,
      municipalityName: "   ",
    });
    expect(parsed).toEqual({
      ok: false,
      error: "自治体名を入力してください。",
    });
  });

  it("長すぎる紹介文は受け付けない", () => {
    const parsed = parseLocalEditionApplicationInput({
      ...validInput,
      introduction: "あ".repeat(2001),
    });
    expect(parsed.ok).toBe(false);
  });

  it("形式の違うメールは受け付けない", () => {
    const parsed = parseLocalEditionApplicationInput({
      ...validInput,
      email: "not-an-email",
    });
    expect(parsed).toEqual({
      ok: false,
      error: "メールアドレスの形式が正しくありません。",
    });
  });

  it("http と https 以外のURLは受け付けない", () => {
    const parsed = parseLocalEditionApplicationInput({
      ...validInput,
      siteUrl: "javascript:alert(1)",
    });
    expect(parsed).toEqual({
      ok: false,
      error: "サイトURLはhttpまたはhttpsにしてください。",
    });
  });
});

describe("parseReviewDecision", () => {
  it("承認と却下だけを受け付ける", () => {
    expect(parseReviewDecision("approved")).toEqual({
      ok: true,
      value: "approved",
    });
    expect(parseReviewDecision("rejected")).toEqual({
      ok: true,
      value: "rejected",
    });
    expect(parseReviewDecision("pending").ok).toBe(false);
  });
});

describe("application row mapping", () => {
  const approvedRow = {
    id: "11111111-1111-4111-8111-111111111111",
    municipality_name: "吉岡町",
    contact_name: "山田太郎",
    site_url: "https://example.com",
    introduction: "紹介します",
    status: "approved",
    created_at: "2026-10-12T15:00:00.000Z",
  };

  it("承認済みだけを公開用にし、メールは含めない", () => {
    expect(mapApprovedApplicationRow(approvedRow)).toEqual({
      id: approvedRow.id,
      municipalityName: "吉岡町",
      contactName: "山田太郎",
      siteUrl: "https://example.com/",
      introduction: "紹介します",
      createdAt: approvedRow.created_at,
    });
    expect(mapApprovedApplicationRow({ ...approvedRow, status: "pending" })).toBe(
      null
    );
  });

  it("管理用の行はメールと状態を残す", () => {
    const mapped = mapApplicationRow({
      ...approvedRow,
      status: "pending",
      email: "staff@example.com",
      updated_at: approvedRow.created_at,
    });
    expect(mapped?.email).toBe("staff@example.com");
    expect(mapped?.status).toBe("pending");
  });

  it("未知の状態は管理用の行にしない", () => {
    expect(
      mapApplicationRow({
        ...approvedRow,
        status: "published",
        email: "staff@example.com",
        updated_at: approvedRow.created_at,
      })
    ).toBe(null);
  });
});

describe("review helpers", () => {
  it("未審査だけ審査できる", () => {
    expect(canReviewApplication("pending")).toBe(true);
    expect(canReviewApplication("approved")).toBe(false);
  });

  it("申請IDはUUIDだけを認める", () => {
    expect(isApplicationId("11111111-1111-4111-8111-111111111111")).toBe(true);
    expect(isApplicationId("not-an-id")).toBe(false);
  });

  it("公開URLは http と https だけ残す", () => {
    expect(toPublicSiteUrl("javascript:alert(1)")).toBe(null);
    expect(toPublicSiteUrl("https://example.com")).toBe("https://example.com/");
  });

  it("掲載日を日本時間の日付にする", () => {
    expect(formatApplicationDate("2026-10-12T15:00:00.000Z")).toBe(
      "2026年10月13日"
    );
    expect(formatApplicationDate("not-a-date")).toBe("");
  });
});
