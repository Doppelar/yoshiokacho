import assert from "node:assert/strict";
import test from "node:test";
import { getBuildDecision } from "./vercel-build-policy.mjs";

const metadata = {
  branch: "fix/site-update",
  owner: "Doppelar",
  repo: "yoshiokacho",
};
for (const branch of ["production", "main", "develop"]) {
  test(`${branch} builds without consulting open PRs`, async () => {
    const decision = await getBuildDecision({ ...metadata, branch }, () => {
      throw new Error("Deployment branches must not query PRs");
    });
    assert.equal(decision.skip, false);
    assert.match(decision.reason, /deployment branch/);
  });
}
test("a feature branch without an open PR is skipped", async () => {
  assert.equal(
    (
      await getBuildDecision(metadata, async () => ({
        ok: true,
        status: 200,
        pulls: [],
      }))
    ).skip,
    true
  );
});
test("a feature branch with an open PR builds", async () => {
  assert.equal(
    (
      await getBuildDecision(metadata, async () => ({
        ok: true,
        status: 200,
        pulls: [{ number: 10 }],
      }))
    ).skip,
    false
  );
});
test("missing metadata, errors and unexpected responses never silently skip", async () => {
  for (const getPulls of [
    async () => {
      throw new Error("offline");
    },
    async () => ({ ok: false, status: 403, pulls: [] }),
    async () => ({ ok: true, status: 200, pulls: { message: "unexpected" } }),
  ])
    assert.equal((await getBuildDecision(metadata, getPulls)).skip, false);
  assert.equal(
    (
      await getBuildDecision({ ...metadata, owner: "" }, () => {
        throw new Error("Must not query without metadata");
      })
    ).skip,
    false
  );
});
