import { NATIONAL_COUNCIL } from "@/features/iryo-forum/shared/forum";

/** AIインタビューの案内ページの文言。議案と全国版のテーマで出し分ける */
export type InterviewCopy = {
  badge: string;
  heading: string;
  /** 「〇〇についてのご意見をお聞かせください」 */
  askOpinion: string;
  /** 概要の1文目（タイトルの前後） */
  overviewPrefix: string;
  overviewSuffix: string;
  detailLink: string;
  backLink: string;
};

const BILL_COPY: InterviewCopy = {
  badge: "当事者・有識者の方へ",
  heading: "法案についてのAIインタビュー",
  askOpinion: "議案についてのご意見をお聞かせください",
  overviewPrefix: "議会で審議されている",
  overviewSuffix:
    "について、AIがあなたの考えを深掘りするチャット型インタビューです",
  detailLink: "法案詳細はこちら",
  backLink: "法案詳細に戻る",
};

const NATIONAL_TOPIC_COPY: InterviewCopy = {
  badge: "どなたでも歓迎します",
  heading: "テーマについてのAIインタビュー",
  askOpinion: "関心のあることや考えをお聞かせください",
  overviewPrefix: "",
  overviewSuffix:
    "について、どんなことに関心があるかをAIがチャットでうかがうインタビューです",
  detailLink: "テーマの紹介ページへ",
  backLink: "テーマの紹介ページに戻る",
};

/** bills.council から、案内ページの文言を選ぶ */
export function getInterviewCopy(council: string | null): InterviewCopy {
  return council === NATIONAL_COUNCIL ? NATIONAL_TOPIC_COPY : BILL_COPY;
}
