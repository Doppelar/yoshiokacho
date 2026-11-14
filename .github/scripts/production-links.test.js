const test = require("node:test");
const assert = require("node:assert/strict");
const { extractExpectedLinks } = require("./production-links.js");
test("uses all literal public links from the deployed municipality data", () => {
  const source =
    'const data = [{ href: "https://one.example/" }, { href: "https://two.example/share-id" }];';
  assert.deepEqual(extractExpectedLinks(source), [
    "https://one.example/",
    "https://two.example/share-id",
  ]);
});
test("does not execute internal routes or other source expressions", () => {
  const source =
    'const data = [{ href: routes.okayamaMap() }, { title: "https://not-a-link.example/" }];';
  assert.deepEqual(extractExpectedLinks(source), []);
});
test("deduplicates links and leaves exact share identifiers unchanged", () => {
  const source =
    'href: "https://muse.ai/s/example/Ab_C-D"; href: "https://muse.ai/s/example/Ab_C-D"';
  assert.deepEqual(extractExpectedLinks(source), [
    "https://muse.ai/s/example/Ab_C-D",
  ]);
});
