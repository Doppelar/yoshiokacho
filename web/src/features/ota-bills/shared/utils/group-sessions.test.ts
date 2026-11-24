import { describe, expect, it } from "vitest";
import { OTA_SESSIONS } from "../bills";
import { groupOtaSessionsByFiscalYear } from "./group-sessions";

describe("groupOtaSessionsByFiscalYear", () => {
  it("4月〜翌年3月を同じ年度にまとめ、臨時会と定例会を区別する", () => {
    const groups = groupOtaSessionsByFiscalYear([
      { id: "2026-05", name: "令和8年5月太田市議会臨時会" },
      { id: "2026-03", name: "令和8年3月太田市議会定例会" },
      { id: "2025-12", name: "令和7年12月太田市議会定例会" },
      { id: "2025-05", name: "令和7年5月太田市議会臨時会" },
      { id: "2025-03", name: "令和7年3月太田市議会定例会" },
    ]);
    expect(groups).toEqual([
      {
        label: "令和8年度",
        sessions: [{ id: "2026-05", label: "5月臨時" }],
      },
      {
        label: "令和7年度",
        sessions: [
          { id: "2026-03", label: "3月" },
          { id: "2025-12", label: "12月" },
          { id: "2025-05", label: "5月臨時" },
        ],
      },
      {
        label: "令和6年度",
        sessions: [{ id: "2025-03", label: "3月" }],
      },
    ]);
  });

  it("掲載中の会期はすべて「令和◯年度」のどれかにまとまる", () => {
    const groups = groupOtaSessionsByFiscalYear(OTA_SESSIONS);
    const sessions = groups.flatMap((g) => g.sessions);
    expect(groups.every((g) => /^令和\d+年度$/.test(g.label))).toBe(true);
    expect(sessions.every((s) => /^\d+月(臨時)?$/.test(s.label))).toBe(true);
    expect(sessions).toHaveLength(OTA_SESSIONS.length);
  });
});
