// Vercel: exit 0 skips a build; exit 1 proceeds.
// Production must build after a merge, even without an open PR.
// Unknown GitHub state also proceeds rather than silently skipping publication.
import { getBuildDecision } from "./utils/vercel-build-policy.mjs";

const branch = process.env.VERCEL_GIT_COMMIT_REF ?? "";
const owner = process.env.VERCEL_GIT_REPO_OWNER ?? "";
const repo = process.env.VERCEL_GIT_REPO_SLUG ?? "";

const decision = await getBuildDecision({ branch, owner, repo }, async () => {
  const url = new URL(`https://api.github.com/repos/${owner}/${repo}/pulls`);
  url.searchParams.set("state", "open");
  url.searchParams.set("per_page", "1");
  url.searchParams.set("head", `${owner}:${branch}`);
  const headers = { accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const response = await fetch(url, {
    headers,
    signal: AbortSignal.timeout(10000),
  });
  return {
    ok: response.ok,
    status: response.status,
    pulls: await response.json(),
  };
});

console.log(
  `${decision.skip ? "Skipping" : "Proceeding with"} build: ${decision.reason}`
);
process.exit(decision.skip ? 0 : 1);
