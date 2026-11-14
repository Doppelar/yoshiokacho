const test = require("node:test");
const assert = require("node:assert/strict");
const { verify } = require("./verify-production.js");
const SHA = "a".repeat(40);
const marker = { sha: SHA, projectId: "prj_aQn1ZLzoGDBbz3yELY4NqFc5w34h" };
const nagi =
  "https://muse.ai/s/mirai-gikai-nagi-xtq6sqxakgwxvxp/q2nMcOrMbt6FUGCkTYThe4ns35jGA4XZC67zhdeO7Yk";
const komoro = "https://mirai-gikai-komoro-web.vercel.app/";
const tatebayashi =
  "https://muse.ai/s/mirai-gikai-tatebayashi-shi-xuxc6oxaxbxr3xw22/zDtxaeX2ZAIDDsQD_GQmKJWMiT0TpShYu6hA-TI7Lq4";
function fixture(overrides = {}) {
  const pages = {
    "/api/deployment": JSON.stringify(marker),
    "/": "home",
    "/japan":
      '<script src="/_next/static/map.js"></script><script src="https://untrusted.example/track.js"></script>',
    "/_next/static/map.js": komoro + nagi,
    "/gunma": tatebayashi,
    ...overrides,
  };
  return async (path) => {
    assert.ok(path in pages, `unexpected fetch: ${path}`);
    return pages[path];
  };
}
test("verifies project, exact SHA and links in same-origin map assets", async () => {
  await verify(SHA, fixture());
});
test("rejects a stale SHA even when all links are present", async () => {
  await assert.rejects(
    verify(
      SHA,
      fixture({
        "/api/deployment": JSON.stringify({ ...marker, sha: "b".repeat(40) }),
      })
    ),
    /expected commit/
  );
});
test("rejects the wrong Vercel project", async () => {
  await assert.rejects(
    verify(
      SHA,
      fixture({
        "/api/deployment": JSON.stringify({
          ...marker,
          projectId: "wrong-project",
        }),
      })
    ),
    /web project/
  );
});
test("rejects a missing municipality link", async () => {
  await assert.rejects(
    verify(SHA, fixture({ "/_next/static/map.js": komoro })),
    /municipality links/
  );
});
test("does not fetch off-origin or non-static scripts", async () => {
  await assert.rejects(
    verify(
      SHA,
      fixture({
        "/japan":
          '<script src="https://untrusted.example/x.js"></script><script src="/api/mutate"></script>',
      })
    ),
    /municipality links/
  );
});

test("requires the expected SHA to match the workflow's actual checkout SHA", () => {
  const { validateRunSha } = require("./verify-production.js");
  assert.doesNotThrow(() => validateRunSha(SHA, SHA));
  assert.throws(() => validateRunSha(SHA, "b".repeat(40)), /workflow/);
  assert.throws(() => validateRunSha("short", SHA), /full/);
});
