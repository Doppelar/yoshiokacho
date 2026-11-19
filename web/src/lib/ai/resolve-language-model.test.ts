import { generateText } from "ai";
import { describe, expect, it } from "vitest";
import {
  parseModelList,
  replaceGeminiModelInUrl,
  resolveLanguageModel,
} from "./resolve-language-model";

function geminiOk(text: string): Response {
  return new Response(
    JSON.stringify({
      candidates: [
        {
          content: { role: "model", parts: [{ text }] },
          finishReason: "STOP",
        },
      ],
      usageMetadata: { promptTokenCount: 1, candidatesTokenCount: 1 },
    }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}

function geminiError(status: number): Response {
  return new Response(
    JSON.stringify({ error: { code: status, message: "error" } }),
    { status, headers: { "content-type": "application/json" } }
  );
}

/** 呼ばれた URL・本文を記録し、モデル名ごとに決めた応答を返す偽の fetch */
function createFakeFetch(statusByModel: Record<string, number>) {
  const requests: { url: string; body: unknown }[] = [];
  const fakeFetch: typeof fetch = async (input, init) => {
    const url = String(input);
    requests.push({ url, body: JSON.parse(String(init?.body)) });
    const model = url.match(/\/models\/([^:]+):/)?.[1] ?? "";
    const status = statusByModel[model] ?? 200;
    return status === 200 ? geminiOk(`from ${model}`) : geminiError(status);
  };
  return { fakeFetch, requests };
}

describe("parseModelList", () => {
  it("カンマ区切りを前後の空白・空要素を除いて配列にする", () => {
    expect(parseModelList(" a , b,,c ")).toEqual(["a", "b", "c"]);
  });

  it("空文字なら空配列", () => {
    expect(parseModelList("")).toEqual([]);
  });
});

describe("replaceGeminiModelInUrl", () => {
  it("URL のモデル名だけを差し替える", () => {
    expect(
      replaceGeminiModelInUrl(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-a:streamGenerateContent?alt=sse",
        "gemini-b"
      )
    ).toBe(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-b:streamGenerateContent?alt=sse"
    );
  });
});

describe("resolveLanguageModel", () => {
  it("Google のキーがなければ AI Gateway のモデルをそのまま使う", () => {
    expect(
      resolveLanguageModel("anthropic/claude-haiku-4.5", {
        apiKey: undefined,
        model: "gemini-3.8-flash",
      })
    ).toBe("anthropic/claude-haiku-4.5");
  });

  it("Google のキーがあれば Gemini API の先頭のモデルを使う", () => {
    const model = resolveLanguageModel("anthropic/claude-haiku-4.5", {
      apiKey: "test-key",
      model: "gemini-a, gemini-b",
    });
    expect(model).toMatchObject({
      modelId: "gemini-a",
      provider: expect.stringContaining("google"),
    });
  });

  it("Gemini への送信時に思考レベルを low にする", async () => {
    const { fakeFetch, requests } = createFakeFetch({});
    const model = resolveLanguageModel("anthropic/claude-haiku-4.5", {
      apiKey: "test-key",
      model: "gemini-a",
      fetch: fakeFetch,
    });

    const result = await generateText({ model, prompt: "テスト" });

    expect(result.text).toBe("from gemini-a");
    expect(requests).toHaveLength(1);
    expect(requests[0].body).toMatchObject({
      generationConfig: { thinkingConfig: { thinkingLevel: "low" } },
    });
  });

  it("上限・混雑・未対応で失敗したら次のモデルで送り直す", async () => {
    const { fakeFetch, requests } = createFakeFetch({
      "gemini-a": 429,
      "gemini-b": 503,
      "gemini-c": 404,
    });
    const model = resolveLanguageModel("anthropic/claude-haiku-4.5", {
      apiKey: "test-key",
      model: "gemini-a,gemini-b,gemini-c,gemini-d",
      fetch: fakeFetch,
    });

    const result = await generateText({ model, prompt: "テスト" });

    expect(result.text).toBe("from gemini-d");
    expect(requests.map((r) => r.url.match(/models\/([^:]+)/)?.[1])).toEqual([
      "gemini-a",
      "gemini-b",
      "gemini-c",
      "gemini-d",
    ]);
  });

  it("成功したモデルより後ろのモデルは使わない", async () => {
    const { fakeFetch, requests } = createFakeFetch({ "gemini-a": 429 });
    const model = resolveLanguageModel("anthropic/claude-haiku-4.5", {
      apiKey: "test-key",
      model: "gemini-a,gemini-b,gemini-c",
      fetch: fakeFetch,
    });

    const result = await generateText({ model, prompt: "テスト" });

    expect(result.text).toBe("from gemini-b");
    expect(requests).toHaveLength(2);
  });

  it("すべてのモデルが失敗したらエラーになる", async () => {
    const { fakeFetch } = createFakeFetch({
      "gemini-a": 429,
      "gemini-b": 429,
    });
    const model = resolveLanguageModel("anthropic/claude-haiku-4.5", {
      apiKey: "test-key",
      model: "gemini-a,gemini-b",
      fetch: fakeFetch,
    });

    await expect(
      generateText({ model, prompt: "テスト", maxRetries: 0 })
    ).rejects.toThrow();
  });
});
