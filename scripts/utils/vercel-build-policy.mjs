const DEPLOYMENT_BRANCHES = new Set(["production", "main", "develop"]);

export async function getBuildDecision({ branch, owner, repo }, getPulls) {
  if (DEPLOYMENT_BRANCHES.has(branch)) {
    return { skip: false, reason: `deployment branch "${branch}"` };
  }
  if (!branch || !owner || !repo) {
    return {
      skip: false,
      reason: "missing VERCEL_GIT_* environment variables",
    };
  }
  try {
    const response = await getPulls();
    if (!response.ok || !Array.isArray(response.pulls)) {
      return {
        skip: false,
        reason: `unexpected GitHub API response (status ${response.status})`,
      };
    }
    return response.pulls.length > 0
      ? { skip: false, reason: `open PR found for branch "${branch}"` }
      : { skip: true, reason: `no open PR for branch "${branch}"` };
  } catch {
    return { skip: false, reason: "GitHub API request failed" };
  }
}
