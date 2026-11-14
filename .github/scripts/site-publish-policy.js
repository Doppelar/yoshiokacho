const ALLOWED = [
  /^web\/src\/features\/(?:[a-z-]+-map)\/(?:shared\/(?:municipalities|prefectures)\.ts|client\/[a-z-]+\.tsx)$/,
  /^web\/src\/features\/local-edition-changelog\/(?:shared\/changelog-entries\.ts|client\/components\/[a-z-]+\.tsx)$/,
  /^web\/src\/app\/\(main\)\/(?:japan|gunma|aichi|chiba|fukuoka|hiroshima|kanagawa|nara|oita|okinawa|saitama|shiga|shizuoka|tokyo)\/page\.tsx$/,
  /^web\/public\/(?:images|maps)\/[a-zA-Z0-9/_.-]+\.(?:png|jpg|jpeg|webp|avif)$/,
];
function assessPullRequest(pr, files, owner, repository) {
  if (pr.state !== "open" || pr.draft || pr.base.ref !== "production") {
    return {
      allowed: false,
      reason: "An open, ready production PR is required.",
    };
  }
  if (pr.user.login !== owner || pr.head.repo?.full_name !== repository) {
    return {
      allowed: false,
      reason: "Only repository-owner PRs from this repository are eligible.",
    };
  }
  if (!pr.labels.some((label) => label.name === "site-autopublish")) {
    return {
      allowed: false,
      reason: "The site-autopublish label is required.",
    };
  }
  if (
    pr.labels.some((label) =>
      ["db-change", "secrets", "destructive", "manual-review"].includes(
        label.name
      )
    )
  ) {
    return { allowed: false, reason: "This PR requires manual review." };
  }
  if (
    files.length === 0 ||
    files.length > 30 ||
    pr.changed_files !== files.length
  ) {
    return {
      allowed: false,
      reason: "The complete change must contain 1–30 files.",
    };
  }
  if (
    files.some(
      (file) =>
        !["added", "modified"].includes(file.status) ||
        !ALLOWED.some((pattern) => pattern.test(file.filename))
    )
  ) {
    return {
      allowed: false,
      reason:
        "A file is deleted, renamed, or outside the site-update allowlist.",
    };
  }
  return { allowed: true, reason: "Site-only update." };
}
module.exports = { assessPullRequest };
