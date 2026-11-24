import { describe, expect, it } from "vitest";
import { TAKASAKI_SESSIONS } from "../sessions";
import { groupTakasakiSessionsByYear } from "./group-sessions";

describe("groupTakasakiSessionsByYear", () => {
  it("年ごとにまとめ、年の中は回数と種類だけを表示する", () => {
    expect(
      groupTakasakiSessionsByYear([
        { id: "r8-2", name: "令和8年第2回定例会" },
        { id: "r8-1", name: "令和8年第1回臨時会" },
        { id: "r7-5", name: "令和7年第5回定例会" },
      ])
    ).toEqual([
      {
        label: "令和8年",
        sessions: [
          { id: "r8-2", label: "第2回" },
          { id: "r8-1", label: "第1回臨時" },
        ],
      },
      { label: "令和7年", sessions: [{ id: "r7-5", label: "第5回" }] },
    ]);
  });

  it("掲載中の会期はすべて「令和◯年」のどれかにまとまる", () => {
    const groups = groupTakasakiSessionsByYear(TAKASAKI_SESSIONS);
    expect(groups.every((g) => /^令和\d+年$/.test(g.label))).toBe(true);
    expect(groups.flatMap((g) => g.sessions)).toHaveLength(
      TAKASAKI_SESSIONS.length
    );
  });
});
