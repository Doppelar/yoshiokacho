const { setTimeout: delay } = require("node:timers/promises");
const ORIGIN = "https://web-olive-ten-47.vercel.app";
const PROJECT = "prj_aQn1ZLzoGDBbz3yELY4NqFc5w34h";
const EXPECTATIONS = [
  {
    path: "/japan",
    links: [
      "https://mirai-gikai-komoro-web.vercel.app/",
      "https://muse.ai/s/mirai-gikai-nagi-xtq6sqxakgwxvxp/q2nMcOrMbt6FUGCkTYThe4ns35jGA4XZC67zhdeO7Yk",
    ],
  },
  {
    path: "/gunma",
    links: [
      "https://muse.ai/s/mirai-gikai-tatebayashi-shi-xuxc6oxaxbxr3xw22/zDtxaeX2ZAIDDsQD_GQmKJWMiT0TpShYu6hA-TI7Lq4",
    ],
  },
];
async function read(path) {
  const url = new URL(path, ORIGIN);
  if (url.origin !== ORIGIN)
    throw new Error("Refusing to fetch another origin.");
  url.searchParams.set("deployment-check", Date.now().toString());
  const response = await fetch(url, {
    headers: { "Cache-Control": "no-cache" },
    signal: AbortSignal.timeout(15000),
    redirect: "error",
  });
  if (!response.ok) throw new Error(`${path} returned HTTP ${response.status}`);
  return response.text();
}
async function verify(sha, readPage = read) {
  const marker = JSON.parse(await readPage("/api/deployment"));
  if (marker.sha !== sha || marker.projectId !== PROJECT)
    throw new Error(
      "The live URL does not serve the expected commit from the web project."
    );
  await readPage("/");
  for (const page of EXPECTATIONS) {
    const html = await readPage(page.path);
    const missing = new Set(page.links.filter((link) => !html.includes(link)));
    if (missing.size) {
      for (const match of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
        const url = new URL(match[1], ORIGIN);
        if (url.origin !== ORIGIN || !url.pathname.startsWith("/_next/static/"))
          continue;
        const script = await readPage(url.pathname);
        for (const link of missing)
          if (script.includes(link)) missing.delete(link);
        if (!missing.size) break;
      }
    }
    if (missing.size)
      throw new Error(
        `${page.path} does not contain the expected municipality links.`
      );
  }
}
function validateRunSha(sha, workflowSha) {
  if (!/^[a-f0-9]{40}$/.test(sha ?? ""))
    throw new Error("A full expected commit SHA is required.");
  if (sha !== workflowSha)
    throw new Error("The expected SHA does not match the workflow commit.");
}
async function main() {
  const sha = process.env.EXPECTED_SHA;
  validateRunSha(sha, process.env.WORKFLOW_SHA);
  const deadline = Date.now() + 12 * 60 * 1000;
  while (true) {
    try {
      await verify(sha);
      console.log(
        `Verified the web project, commit and municipality links at ${ORIGIN}`
      );
      return;
    } catch (error) {
      if (Date.now() >= deadline) throw error;
      console.log(`Waiting for production: ${error.message}`);
      await delay(20000);
    }
  }
}
if (require.main === module)
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
module.exports = { verify, validateRunSha };
