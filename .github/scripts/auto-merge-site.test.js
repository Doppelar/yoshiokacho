const test = require("node:test");
const assert = require("node:assert/strict");
const run = require("./auto-merge-site.js");
const SHA = "a".repeat(40);
const BASE = "b".repeat(40);
function fixture() {
  const calls = [];
  const pr = {
    state: "open",
    draft: false,
    base: { ref: "production" },
    user: { login: "Doppelar" },
    head: { sha: SHA, repo: { full_name: "Doppelar/yoshiokacho" } },
    labels: [{ name: "site-autopublish" }],
    changed_files: 1,
    mergeable: true,
  };
  const context = {
    repo: { owner: "Doppelar", repo: "yoshiokacho" },
    payload: { pull_request: { number: 8, head: { sha: SHA } } },
  };
  const verified = {
    head_sha: BASE,
    status: "completed",
    conclusion: "success",
  };
  const ci = {
    head_sha: SHA,
    status: "completed",
    conclusion: "success",
    pull_requests: [{ number: 8 }],
  };
  const web = {
    context: "Vercel – web",
    target_url: "https://vercel.com/doppelars-projects/web/deployment",
    state: "success",
    creator: { login: "vercel[bot]" },
  };
  const statuses = [web];
  const summary = {
    addHeading() {
      return this;
    },
    addRaw() {
      return this;
    },
    async write() {},
  };
  const core = {
    notice: (message) => calls.push(["notice", message]),
    setFailed: (message) => calls.push(["failed", message]),
    summary,
  };
  const review = {
    reviewDecision: null,
    reviewThreads: { pageInfo: { hasNextPage: false }, nodes: [] },
  };
  const github = {
    graphql: async () => ({ repository: { pullRequest: review } }),
    paginate: async () => [
      {
        filename: "web/src/features/japan-map/shared/prefectures.ts",
        status: "modified",
      },
    ],
    rest: {
      pulls: {
        get: async () => ({ data: pr }),
        listFiles() {},
        merge: async (options) => {
          calls.push(["merge", options]);
          return { data: { merged: true, sha: "c".repeat(40) } };
        },
      },
      repos: {
        getBranch: async () => ({ data: { commit: { sha: BASE } } }),
        listCommitStatusesForRef: async () => ({ data: statuses }),
      },
      actions: {
        listWorkflowRuns: async ({ workflow_id }) => ({
          data: {
            workflow_runs: [
              workflow_id === "verify-production.yml" ? verified : ci,
            ],
          },
        }),
        createWorkflowDispatch: async (options) =>
          calls.push(["dispatch", options]),
      },
    },
  };
  let ticks = 0;
  return {
    github,
    context,
    core,
    pr,
    verified,
    review,
    ci,
    web,
    statuses,
    calls,
    now: () => (ticks++ === 0 ? 0 : 10000000),
    sleep: async () => {},
  };
}
test("merges only the verified PR SHA and dispatches verification of its squash SHA", async () => {
  const f = fixture();
  f.now = () => 0;
  await run(f);
  assert.equal(f.calls[0][0], "merge");
  assert.equal(f.calls[0][1].sha, SHA);
  assert.equal(f.calls[1][0], "dispatch");
  assert.equal(f.calls[1][1].inputs.expected_sha, "c".repeat(40));
});
test("never merges when current production is unverified", async () => {
  const f = fixture();
  f.now = () => 0;
  f.verified.conclusion = "failure";
  await run(f);
  assert.equal(
    f.calls.some(([kind]) => kind === "merge"),
    false
  );
  assert.equal(f.calls[0][0], "failed");
});
test("never merges a failed test run", async () => {
  const f = fixture();
  f.now = () => 0;
  f.ci.conclusion = "failure";
  await run(f);
  assert.equal(f.calls[0][0], "failed");
  assert.equal(
    f.calls.some(([kind]) => kind === "merge"),
    false
  );
});
test("does not merge a new unvalidated head", async () => {
  const f = fixture();
  f.now = () => 0;
  f.pr.head.sha = "d".repeat(40);
  await run(f);
  assert.equal(f.calls[0][0], "notice");
  assert.equal(f.calls.length, 1);
});
test("does not treat the wrong Vercel project or an untrusted status as a web success", async () => {
  for (const mutate of [
    (f) => {
      f.web.context = "Vercel – yoshiokacho";
    },
    (f) => {
      f.web.creator.login = "someone";
    },
  ]) {
    const f = fixture();
    let ticks = 0;
    f.now = () => (ticks++ < 2 ? 0 : 10000000);
    mutate(f);
    await run(f);
    assert.equal(
      f.calls.some(([kind]) => kind === "merge"),
      false
    );
    assert.equal(f.calls.at(-1)[0], "failed");
  }
});

test("does not merge when production advances during validation", async () => {
  const f = fixture();
  f.now = () => 0;
  let branchReads = 0;
  f.github.rest.repos.getBranch = async () => ({
    data: { commit: { sha: branchReads++ === 0 ? BASE : "d".repeat(40) } },
  });
  await run(f);
  assert.equal(
    f.calls.some(([kind]) => kind === "merge"),
    false
  );
  assert.equal(f.calls[0][0], "failed");
});
test("stops on conflicts and a failed web Preview", async () => {
  for (const mutate of [
    (f) => {
      f.pr.mergeable = false;
    },
    (f) => {
      f.web.state = "failure";
    },
    (f) => {
      f.web.state = "error";
    },
  ]) {
    const f = fixture();
    f.now = () => 0;
    mutate(f);
    await run(f);
    assert.equal(
      f.calls.some(([kind]) => kind === "merge"),
      false
    );
    assert.equal(f.calls[0][0], "failed");
  }
});
test("does not dispatch verification when GitHub refuses the merge", async () => {
  const f = fixture();
  f.now = () => 0;
  f.github.rest.pulls.merge = async () => ({ data: { merged: false } });
  await run(f);
  assert.equal(
    f.calls.some(([kind]) => kind === "dispatch"),
    false
  );
  assert.equal(f.calls[0][0], "failed");
});
test("waits for pending CI before merging", async () => {
  const f = fixture();
  f.now = () => 0;
  f.ci.status = "in_progress";
  f.ci.conclusion = null;
  f.sleep = async () => {
    f.ci.status = "completed";
    f.ci.conclusion = "success";
  };
  await run(f);
  assert.equal(f.calls.filter(([kind]) => kind === "merge").length, 1);
});

test("stops before merging unresolved review feedback", async () => {
  for (const mutate of [
    (f) => {
      f.review.reviewDecision = "CHANGES_REQUESTED";
    },
    (f) => {
      f.review.reviewThreads.nodes = [{ isResolved: false }];
    },
    (f) => {
      f.review.reviewThreads.pageInfo.hasNextPage = true;
    },
  ]) {
    const f = fixture();
    f.now = () => 0;
    mutate(f);
    await run(f);
    assert.equal(
      f.calls.some(([kind]) => kind === "merge"),
      false
    );
    assert.equal(f.calls[0][0], "failed");
  }
});


test("never falls back to an older success when the latest web status is unverifiable", async () => {
  const f = fixture();
  f.statuses.unshift({ ...f.web, state: "failure", target_url: null });
  await run(f);
  assert.equal(f.calls.some(([operation]) => operation === "merge"), false);
});