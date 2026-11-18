import { afterAll, describe, expect, it } from "vitest";
import { adminClient, cleanupTestBill, createTestBill } from "./utils";

describe("bills.council（他の議会の議案）", () => {
  const billIds: string[] = [];

  afterAll(async () => {
    for (const billId of billIds) await cleanupTestBill(billId);
  });

  it("議会名で始まる slug を持つ議案を登録できる", async () => {
    const bill = await createTestBill({
      council: "takasaki",
      slug: `takasaki-test-${Date.now()}`,
    });
    billIds.push(bill.id);
    expect(bill.council).toBe("takasaki");
  });

  it("不正な議会名・slug の欠落・食い違いをDBで拒否する", async () => {
    const base = {
      name: "テスト議案",
      originating_house: "HR" as const,
      status: "introduced" as const,
      publish_status: "draft" as const,
    };
    for (const invalid of [
      { council: "Takasaki City", slug: `x-${Date.now()}` },
      { council: "takasaki" },
      { council: "takasaki", slug: `yoshioka-test-${Date.now()}` },
    ]) {
      const { error } = await adminClient
        .from("bills")
        .insert({ ...base, ...invalid });
      expect(error?.code).toBe("23514");
    }
  });
});
