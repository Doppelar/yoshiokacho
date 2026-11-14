function extractExpectedLinks(source) {
  return [
    ...new Set(
      [...source.matchAll(/\bhref:\s*"(https:\/\/[^"\\\r\n]+)"/g)].map(
        (match) => match[1]
      )
    ),
  ];
}
module.exports = { extractExpectedLinks };
