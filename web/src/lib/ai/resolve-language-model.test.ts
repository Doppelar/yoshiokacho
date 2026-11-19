import { describe, expect, it } from "vitest";
import { resolveLanguageModel } from "./resolve-language-model";

describe("resolveLanguageModel", () => {
  it("Google のキーがなければ AI Gateway のモデルをそのまま使う", () => {
    expect(
      resolveLanguageModel("anthropic/claude-haiku-4.5", {
        apiKey: undefined,
        model: "gemini-2.5-flash",
      })
    ).toBe("anthropic/claude-haiku-4.5");
  });

  it("Google のキーがあれば Gemini API の指定モデルを使う", () => {
    const model = resolveLanguageModel("anthropic/claude-haiku-4.5", {
      apiKey: "test-key",
      model: "gemini-2.5-flash",
    });
    expect(typeof model).toBe("object");
    expect(model).toMatchObject({
      modelId: "gemini-2.5-flash",
      provider: expect.stringContaining("google"),
    });
  });
});
