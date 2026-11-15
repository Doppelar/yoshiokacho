import type {
  OtaBill,
  OtaLegacyBill,
  OtaOfficialSession,
} from "../types/ota-bill";

/** Update only obsolete voting statements; preserve the existing policy explanation. */
export function updateOtaDecisionText(text: string): string {
  const replacements = [
    [
      "9月7日に議会で質疑が行われましたが、まだ採決されていません。",
      "9月7日に議会で質疑が行われ、9月29日に可決されました。",
    ],
    [
      "9月29日に可決・否決が決まる予定です。",
      "公式の議決一覧では、賛成全員で可決されています。",
    ],
    [
      "9月7日に本会議で質疑が行われ、採決は9月29日の最終日まで持ち越されています。",
      "9月7日に本会議で質疑が行われ、9月29日に可決されました。",
    ],
    [
      "現時点では、可決・否決は決まっていません。",
      "公式の議決一覧では、賛成全員で可決されています。",
    ],
    [
      "補正予算はこの日に採決せず、最終日の9月29日まで持ち越す扱いとなっています。",
      "補正予算はこの日に採決せず、最終日の9月29日に可決されました。",
    ],
    ["2026年9月29日｜本会議予定", "2026年9月29日｜本会議"],
    [
      "持ち越された補正予算について、質疑・討論・採決が行われる予定です。",
      "持ち越された補正予算について採決が行われ、賛成全員で可決されました。",
    ],
    ["9月29日予定\n本会議で採決予定", "9月29日\n本会議で可決"],
    ["→ 最終日まで持ち越し", "→ 9月29日に可決"],
    ["採決予定日：2026年9月29日", "議決日：2026年9月29日"],
    ["賛成：未確定\n反対：未確定", "採決：賛成全員"],
    [
      "議員別の賛否は、採決後に公式資料で確認して掲載します。",
      "議決一覧には議員別の賛否・人数は掲載されていません。",
    ],
    ["審議中", "可決"],
  ] as const;
  return replacements.reduce(
    (body, [before, after]) => body.replaceAll(before, after),
    text
  );
}

export function buildOtaBills(
  sessions: readonly OtaOfficialSession[],
  legacyBills: readonly OtaLegacyBill[]
): OtaBill[] {
  return sessions.flatMap((session) =>
    session.items.map((item) => {
      const legacy = legacyBills.find(
        (bill) =>
          item.kind === "議案" &&
          bill.number === item.number &&
          session.id === (bill.number >= 84 ? "2026-09" : "2026-06")
      );
      const label = `${item.kind}第${item.number}号`;
      const officialBody = [
        item.title,
        session.name,
        `提出日：${item.submittedDate}`,
        `議決日：${item.decisionDate}`,
        `公式結果：${item.result}`,
        item.vote ? `採決：${item.vote}` : null,
      ]
        .filter((line) => line !== null)
        .join("\n\n");
      const enrich = (body: string | null | undefined) => {
        if (!body) return officialBody;
        const corrected =
          session.id === "2026-09" ? updateOtaDecisionText(body) : body;
        return `${officialBody}\n\n${corrected}`;
      };
      return {
        id:
          legacy?.id ??
          `${session.id}-${item.kind === "議案" ? "bill" : item.kind === "報告" ? "report" : "council"}-${item.number}`,
        number: item.number,
        name: label,
        officialName: item.title,
        status: item.result,
        sessionId: session.id,
        kind: item.kind,
        submittedDate: item.submittedDate,
        decisionDate: item.decisionDate,
        vote: item.vote,
        thumbnailUrl: legacy?.thumbnailUrl ?? null,
        normal: enrich(legacy?.normal),
        hard: enrich(legacy?.hard),
        sources: [...new Set([item.sourceUrl, ...(legacy?.sources ?? [])])],
      };
    })
  );
}
