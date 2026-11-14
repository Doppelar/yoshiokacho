const { assessPullRequest } = require("./site-publish-policy.js");
module.exports = async ({
  github,
  context,
  core,
  now = Date.now,
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
}) => {
  const { owner, repo } = context.repo;
  const pull_number = context.payload.pull_request.number;
  const originalSha = context.payload.pull_request.head.sha;
  const deadline = now() + 25 * 60 * 1000;
  while (now() < deadline) {
    const { data: pr } = await github.rest.pulls.get({
      owner,
      repo,
      pull_number,
    });
    if (pr.head.sha !== originalSha)
      return core.notice("The PR changed; the new run must validate it.");
    const files = await github.paginate(github.rest.pulls.listFiles, {
      owner,
      repo,
      pull_number,
      per_page: 100,
    });
    const policy = assessPullRequest(pr, files, owner, `${owner}/${repo}`);
    if (!policy.allowed) return core.setFailed(policy.reason);
    if (pr.mergeable === false)
      return core.setFailed("Merge conflict; automatic publication stopped.");
    const { data: base } = await github.rest.repos.getBranch({
      owner,
      repo,
      branch: "production",
    });
    const { data: verified } = await github.rest.actions.listWorkflowRuns({
      owner,
      repo,
      workflow_id: "verify-production.yml",
      branch: "production",
      per_page: 30,
    });
    const previousVerification = verified.workflow_runs.find(
      (run) => run.head_sha === base.commit.sha
    );
    if (
      !previousVerification ||
      previousVerification.status !== "completed" ||
      previousVerification.conclusion !== "success"
    ) {
      return core.setFailed(
        "The current production commit has no successful live-URL verification. Automatic publication stopped."
      );
    }
    const reviewData = await github.graphql(
      `query($owner: String!, $repo: String!, $number: Int!) {
        repository(owner: $owner, name: $repo) {
          pullRequest(number: $number) {
            reviewDecision
            reviewThreads(first: 100) {
              pageInfo { hasNextPage }
              nodes { isResolved }
            }
          }
        }
      }`,
      { owner, repo, number: pull_number }
    );
    const review = reviewData.repository.pullRequest;
    if (
      review.reviewDecision === "CHANGES_REQUESTED" ||
      review.reviewThreads.pageInfo.hasNextPage ||
      review.reviewThreads.nodes.some((thread) => !thread.isResolved)
    ) {
      return core.setFailed(
        "Unresolved review feedback requires manual handling."
      );
    }
    let checksReady = true;
    for (const workflow_id of ["code_check.yml", "integration_test.yml"]) {
      const { data } = await github.rest.actions.listWorkflowRuns({
        owner,
        repo,
        workflow_id,
        event: "pull_request",
        head_sha: originalSha,
        per_page: 50,
      });
      const run = data.workflow_runs.find(
        (item) =>
          item.head_sha === originalSha &&
          item.pull_requests.some((pull) => pull.number === pull_number)
      );
      if (run?.status === "completed" && run.conclusion !== "success")
        return core.setFailed(`${workflow_id} failed; publication stopped.`);
      checksReady =
        checksReady &&
        run?.status === "completed" &&
        run.conclusion === "success";
    }
    const { data: combined } = await github.rest.repos.getCombinedStatusForRef({
      owner,
      repo,
      ref: originalSha,
    });
    const web = combined.statuses.find(
      (status) =>
        status.context === "Vercel – web" &&
        status.creator?.login === "vercel[bot]"
    );
    if (web && ["failure", "error"].includes(web.state))
      return core.setFailed("The web Preview failed; publication stopped.");
    if (checksReady && web?.state === "success" && pr.mergeable === true) {
      const { data: latestBase } = await github.rest.repos.getBranch({
        owner,
        repo,
        branch: "production",
      });
      if (latestBase.commit.sha !== base.commit.sha)
        return core.setFailed(
          "Production advanced during validation; wait for live verification before retrying."
        );
      const { data: merged } = await github.rest.pulls.merge({
        owner,
        repo,
        pull_number,
        sha: originalSha,
        merge_method: "squash",
      });
      if (!merged.merged) return core.setFailed("GitHub refused the merge.");
      // GITHUB_TOKEN merges do not trigger other push workflows.
      // An explicit workflow_dispatch starts the live verification instead.
      await github.rest.actions.createWorkflowDispatch({
        owner,
        repo,
        workflow_id: "verify-production.yml",
        ref: "production",
        inputs: { expected_sha: merged.sha },
      });
      core.summary
        .addHeading("Site update merged")
        .addRaw(`Commit: ${merged.sha}`)
        .addRaw("\nLive-URL verification was dispatched.")
        .write();
      return;
    }
    await sleep(20000);
  }
  core.setFailed(
    "Timed out waiting for checks. No merge or deployment was requested."
  );
};
