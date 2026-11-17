/** MUSE上で公開されているサイトか判定する。 */
export function isMuseUrl(href?: string): boolean {
  if (!href) return false;
  try {
    const url = new URL(href);
    return (
      (url.protocol === "https:" || url.protocol === "http:") &&
      (url.hostname === "muse.ai" || url.hostname === "www.muse.ai")
    );
  } catch {
    return false;
  }
}
