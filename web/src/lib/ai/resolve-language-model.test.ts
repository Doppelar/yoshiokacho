import { generateText } from "ai";
import { describe, expect, it } from "vitest";
import { resolveLanguageModel } from "./resolve-language-model";

describe("resolveLanguageModel", () => {
  it("Google のキーがなければ AI Gateway のモデルをそのまま使う", () => {
    expect(
      resolveLanguageModel("anthropic/claude-haiku-4.5", {
        apiKey: undefined,
        model: "gemini-3.8-flash",
      })
    ).toBe("anthropic/claude-haiku-4.5");
  });

  it("Google のキーがあれば Gemini API の指定モデルを使う", () => {
    const model = resolveLanguageModel("anthropic/claude-haiku-4.5", {
      apiKey: "test-key",
      model: "gemini-3.8-flash",
    });
    expect(typeof model).toBe("object");
    expect(model).toMatchObject({
      modelId: "gemini-3.8-flash",
      provider: expect.stringContaining("google"),
    });
  });

  it("Gemini への送信時に思考レベルを minimal にする", async () => {
    const requests: { url: string; body: unknown }[] = [];
    const fakeFetch: typeof fetch = async (input, init) => {
      requests.push({
        url: String(input),
        body: JSON.parse(String(init?.body)),
      });
      return new Response(
        JSON.stringify({
          candidates: [
            {
              content: { role: "model", parts: [{ text: "こんにちは" }] },
              finishReason: "STOP",
            },
          ],
          usageMetadata: { promptTokenCount: 1, candidatesTokenCount: 1 },
        }),
        { status: 200, headers: { "content-type": "application/json" } }
      );
    };
    const model = resolveLanguageModel("anthropic/claude-haiku-4.5", {
      apiKey: "test-key",
      model: "gemini-3.8-flash",
      fetch: fakeFetch,
    });

    const result = await generateText({ model, prompt: "テスト" });

    expect(result.text).toBe("こんにちは");
    expect(requests).toHaveLength(1);
    expect(requests[0].url).toContain("gemini-3.8-flash");
    expect(requests[0].body).toMatchObject({
      generationConfig: { thinkingConfig: { thinkingLevel: "minimal" } },
    });
  });
});
