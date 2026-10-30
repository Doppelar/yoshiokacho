import { describe, expect, it, vi } from "vitest";
import { withFallback } from "./with-fallback";

describe("withFallback", () => {
  it("成功したときは結果をそのまま返す", async () => {
    await expect(withFallback(Promise.resolve(3), 0, "count")).resolves.toBe(3);
  });

  it("失敗したときは代わりの値を返す", async () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    await expect(
      withFallback(Promise.reject(new Error("missing table")), null, "config")
    ).resolves.toBeNull();
    expect(spy).toHaveBeenCalledOnce();

    spy.mockRestore();
  });
});
