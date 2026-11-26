import { AICHI_MUNICIPALITIES } from "@/features/aichi-map/shared/municipalities";
import { AOMORI_MUNICIPALITIES } from "@/features/aomori-map/shared/municipalities";
import { CHIBA_MUNICIPALITIES } from "@/features/chiba-map/shared/municipalities";
import { EHIME_MUNICIPALITIES } from "@/features/ehime-map/shared/municipalities";
import { FUKUOKA_MUNICIPALITIES } from "@/features/fukuoka-map/shared/municipalities";
import { FUKUSHIMA_MUNICIPALITIES } from "@/features/fukushima-map/shared/municipalities";
import { GUNMA_MUNICIPALITIES } from "@/features/gunma-map/shared/municipalities";
import { HIROSHIMA_MUNICIPALITIES } from "@/features/hiroshima-map/shared/municipalities";
import { ISHIKAWA_MUNICIPALITIES } from "@/features/ishikawa-map/shared/municipalities";
import { KANAGAWA_MUNICIPALITIES } from "@/features/kanagawa-map/shared/municipalities";
import { KYOTO_MUNICIPALITIES } from "@/features/kyoto-map/shared/municipalities";
import { MIE_MUNICIPALITIES } from "@/features/mie-map/shared/municipalities";
import { MIYAGI_MUNICIPALITIES } from "@/features/miyagi-map/shared/municipalities";
import { NAGANO_MUNICIPALITIES } from "@/features/nagano-map/shared/municipalities";
import { NARA_MUNICIPALITIES } from "@/features/nara-map/shared/municipalities";
import { OITA_MUNICIPALITIES } from "@/features/oita-map/shared/municipalities";
import { OKAYAMA_MUNICIPALITIES } from "@/features/okayama-map/shared/municipalities";
import { OKINAWA_MUNICIPALITIES } from "@/features/okinawa-map/shared/municipalities";
import { OSAKA_MUNICIPALITIES } from "@/features/osaka-map/shared/municipalities";
import { SAGA_MUNICIPALITIES } from "@/features/saga-map/shared/municipalities";
import { SAITAMA_MUNICIPALITIES } from "@/features/saitama-map/shared/municipalities";
import { SHIGA_MUNICIPALITIES } from "@/features/shiga-map/shared/municipalities";
import { SHIMANE_MUNICIPALITIES } from "@/features/shimane-map/shared/municipalities";
import { SHIZUOKA_MUNICIPALITIES } from "@/features/shizuoka-map/shared/municipalities";
import { TOCHIGI_MUNICIPALITIES } from "@/features/tochigi-map/shared/municipalities";
import { TOKYO_MUNICIPALITIES } from "@/features/tokyo-map/shared/municipalities";
import { TOTTORI_MUNICIPALITIES } from "@/features/tottori-map/shared/municipalities";
import { YAMAGUCHI_MUNICIPALITIES } from "@/features/yamaguchi-map/shared/municipalities";
import { PREFECTURES } from "./prefectures";
import type { CoverageRegion } from "./utils/calculate-municipality-coverage";

// 宝塚市は既存の全国地図から直接公開しており、市町村データをまだ持たない。
const takarazuka = PREFECTURES.find((prefecture) => prefecture.id === "hyogo");

/** 市町村と東京23区が対象。都道府県議会や政令指定都市の行政区は含めない。 */
export const MUNICIPALITY_COVERAGE_REGIONS: readonly CoverageRegion[] = [
  { prefectureId: "ehime", municipalities: EHIME_MUNICIPALITIES },
  { prefectureId: "osaka", municipalities: OSAKA_MUNICIPALITIES },
  { prefectureId: "mie", municipalities: MIE_MUNICIPALITIES },
  { prefectureId: "saga", municipalities: SAGA_MUNICIPALITIES },
  { prefectureId: "aichi", municipalities: AICHI_MUNICIPALITIES },
  { prefectureId: "aomori", municipalities: AOMORI_MUNICIPALITIES },
  { prefectureId: "chiba", municipalities: CHIBA_MUNICIPALITIES },
  { prefectureId: "fukuoka", municipalities: FUKUOKA_MUNICIPALITIES },
  { prefectureId: "fukushima", municipalities: FUKUSHIMA_MUNICIPALITIES },
  { prefectureId: "miyagi", municipalities: MIYAGI_MUNICIPALITIES },
  { prefectureId: "gunma", municipalities: GUNMA_MUNICIPALITIES },
  { prefectureId: "hiroshima", municipalities: HIROSHIMA_MUNICIPALITIES },
  { prefectureId: "ishikawa", municipalities: ISHIKAWA_MUNICIPALITIES },
  { prefectureId: "kanagawa", municipalities: KANAGAWA_MUNICIPALITIES },
  { prefectureId: "kyoto", municipalities: KYOTO_MUNICIPALITIES },
  { prefectureId: "nagano", municipalities: NAGANO_MUNICIPALITIES },
  { prefectureId: "nara", municipalities: NARA_MUNICIPALITIES },
  { prefectureId: "oita", municipalities: OITA_MUNICIPALITIES },
  { prefectureId: "okayama", municipalities: OKAYAMA_MUNICIPALITIES },
  { prefectureId: "okinawa", municipalities: OKINAWA_MUNICIPALITIES },
  { prefectureId: "saitama", municipalities: SAITAMA_MUNICIPALITIES },
  { prefectureId: "shiga", municipalities: SHIGA_MUNICIPALITIES },
  { prefectureId: "shimane", municipalities: SHIMANE_MUNICIPALITIES },
  { prefectureId: "shizuoka", municipalities: SHIZUOKA_MUNICIPALITIES },
  { prefectureId: "tochigi", municipalities: TOCHIGI_MUNICIPALITIES },
  { prefectureId: "tokyo", municipalities: TOKYO_MUNICIPALITIES },
  { prefectureId: "tottori", municipalities: TOTTORI_MUNICIPALITIES },
  { prefectureId: "yamaguchi", municipalities: YAMAGUCHI_MUNICIPALITIES },
  {
    prefectureId: "hyogo",
    municipalities: [
      {
        name: "宝塚市",
        status: takarazuka?.status ?? "upcoming",
        href: takarazuka?.external ? takarazuka.href : undefined,
      },
    ],
  },
];
