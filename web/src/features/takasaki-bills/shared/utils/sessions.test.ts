import { describe, expect, it } from "vitest";
import { TAKASAKI_SESSIONS } from "../sessions";
import { findTakasakiItem, findTakasakiSession } from "./sessions";
import { formatResult, tallyRollCall } from "./votes";

describe("高崎市の2025・2026年会期", () => {
  it("公式一覧の全10会期を公開し、詳細IDの衝突を防ぐ", () => {
    expect(TAKASAKI_SESSIONS).toHaveLength(10);
    expect(TAKASAKI_SESSIONS.map((s) => s.items.length)).toEqual([
      31, 46, 7, 49, 4, 52, 36, 22, 5, 64,
    ]);
    const ids = TAKASAKI_SESSIONS.flatMap((s) => s.items.map((i) => i.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(findTakasakiItem("gian-92")?.session.id).toBe("r8-5");
    expect(findTakasakiItem("r7-1-gian-1")?.item.title).toBe(
      "市の区域内の字の区域の廃止について"
    );
  });
  it("選択会期と既定会期を解決し、不明の議案は見つからない", () => {
    expect(findTakasakiSession("r7-5").id).toBe("r7-5");
    expect(findTakasakiSession("missing").id).toBe("r8-5");
    expect(findTakasakiSession().id).toBe("r8-5");
    expect(findTakasakiItem("missing")).toBeUndefined();
  });
  it("未転記の賛否を全会一致と推測しない", () => {
    const session = findTakasakiSession("r8-4");
    const item = session.items.find((i) => i.id === "r8-4-gian-59")!;
    expect(formatResult(session, item)).toBe("原案可決（賛成多数）");
    expect(tallyRollCall(session, item)).toBeNull();
    const unanimousUnknown = session.items.find(
      (i) => i.id === "r8-4-gian-53"
    )!;
    expect(formatResult(session, unanimousUnknown)).toBe("原案可決");
    const absentResult = findTakasakiItem("r7-5-seigan-6")!;
    expect(formatResult(absentResult.session, absentResult.item)).toBe(
      "資料に結果の記載なし"
    );
  });
});
