const test = require("node:test");
const assert = require("node:assert/strict");
const { assessPullRequest } = require("./site-publish-policy.js");
const repository = "Doppelar/yoshiokacho";
function fixture(path = "web/src/features/japan-map/shared/prefectures.ts") {
  return {
    pr: {
      state: "open",
      draft: false,
      base: { ref: "production" },
      user: { login: "Doppelar" },
      head: { repo: { full_name: repository } },
      labels: [{ name: "site-autopublish" }],
      changed_files: 1,
    },
    files: [{ filename: path, status: "modified" }],
  };
}
function assess({ pr, files }) {
  return assessPullRequest(pr, files, "Doppelar", repository).allowed;
}
test("allows the requested municipality-link update", () =>
  assert.equal(assess(fixture()), true));
for (const path of [
  "supabase/migrations/change.sql",
  ".github/workflows/deploy.yml",
  ".env",
  "web/.env.local",
  "web/package.json",
  "pnpm-lock.yaml",
  "web/src/features/auth/client/login.tsx",
  "web/src/features/japan-map/server/actions/delete.ts",
  "admin/src/app/page.tsx",
  "web/src/app/api/deployment/route.ts",
]) {
  test(`requires manual review: ${path}`, () =>
    assert.equal(assess(fixture(path)), false));
}
test("rejects missing opt-in, risky labels, forks, other authors and bases", () => {
  for (const mutate of [
    (f) => {
      f.pr.labels = [];
    },
    (f) => {
      f.pr.labels.push({ name: "db-change" });
    },
    (f) => {
      f.pr.head.repo.full_name = "elsewhere/fork";
    },
    (f) => {
      f.pr.head.repo = null;
    },
    (f) => {
      f.pr.user.login = "someone";
    },
    (f) => {
      f.pr.base.ref = "main";
    },
    (f) => {
      f.pr.draft = true;
    },
    (f) => {
      f.pr.state = "closed";
    },
  ]) {
    const f = fixture();
    mutate(f);
    assert.equal(assess(f), false);
  }
});
test("rejects deletes, renames and incomplete file lists", () => {
  for (const status of ["removed", "renamed"]) {
    const f = fixture();
    f.files[0].status = status;
    assert.equal(assess(f), false);
  }
  const f = fixture();
  f.pr.changed_files = 2;
  assert.equal(assess(f), false);
});
