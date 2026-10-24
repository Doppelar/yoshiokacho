import { describe, expect, it } from "vitest";
import { PREFECTURES } from "../prefectures";
import {
  getPrefectureCouncilHref,
  getPrefectureCouncilName,
} from "./prefecture-council";

describe("getPrefectureCouncilHref", () => {
  it("都道府県IDに -pref を付けた全国版のURLを返す", () => {
    expect(getPrefectureCouncilHref("gunma")).toBe(
      "https://mirai-gikai-zenkoku.vercel.app/gunma-pref"
    );
    expect(getPrefectureCouncilHref("hokkaido")).toBe(
      "https://mirai-gikai-zenkoku.vercel.app/hokkaido-pref"
    );
  });

  it("47都道府県すべてで重複しないURLを返す", () => {
    const hrefs = PREFECTURES.map((item) => getPrefectureCouncilHref(item.id));

    expect(PREFECTURES).toHaveLength(47);
    expect(new Set(hrefs).size).toBe(47);
  });
});

describe("getPrefectureCouncilName", () => {
  it("都道府県名に議会を付ける", () => {
    expect(getPrefectureCouncilName("群馬県")).toBe("群馬県議会");
    expect(getPrefectureCouncilName("東京都")).toBe("東京都議会");
    expect(getPrefectureCouncilName("北海道")).toBe("北海道議会");
    expect(getPrefectureCouncilName("大阪府")).toBe("大阪府議会");
  });
});
