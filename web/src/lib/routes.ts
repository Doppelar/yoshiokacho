/**
 * web アプリの内部ルート定義
 *
 * app/ ディレクトリの page.tsx と 1:1 対応する。
 * Link href や router.push には必ずこのファイルの関数を使うこと。
 * 新しいページを追加したらここにもルートを追加し、テストを通すこと。
 */

export const routes = {
  // ── 静的ルート ──────────────────────────────────────
  home: () => "/" as const,
  terms: () => "/terms" as const,
  privacy: () => "/privacy" as const,
  developers: () => "/developers" as const,
  developersOpenDataApi: () => "/developers/open-data-api" as const,
  interviewDataTerms: () => "/developers/interview-data-terms" as const,

  // ── 議案 ──────────────────────────────────────────
  billsList: () => "/bills" as const,
  billDetail: (billId: string) => `/bills/${billId}` as const,
  billOpinions: (billId: string) => `/bills/${billId}/opinions` as const,
  billTopics: (billId: string) => `/bills/${billId}/topics` as const,
  billTopicDetail: (billId: string, topicId: string, filter?: string) =>
    filter && filter !== "all"
      ? (`/bills/${billId}/topics/${topicId}?filter=${encodeURIComponent(filter)}` as const)
      : (`/bills/${billId}/topics/${topicId}` as const),

  // ── プレビュー（token 付き） ──────────────────────
  previewBillDetail: (billId: string, token: string) =>
    `/preview/bills/${billId}?token=${encodeURIComponent(token)}` as const,

  // ── レポート ──────────────────────────────────────
  publicReport: (reportId: string) => `/report/${reportId}` as const,
  reportComplete: (reportId: string) => `/report/${reportId}/complete` as const,
  legacyReportChatLog: (reportId: string) =>
    `/report/${reportId}/chat-log` as const,

  // ── 国会セッション ────────────────────────────────
  kokkaiSessionBills: (slug: string) => `/kokkai/${slug}/bills` as const,
} as const;
