import { describe, expect, it } from "vitest";
import { routes } from "@/lib/routes";
import { primaryLinks } from "./footer.config";

describe("footer.config", () => {
  it("primaryLinks に全国ページと連載申請ページへのリンクが含まれる", () => {
    const hrefs = primaryLinks.map((link) => link.href);

    expect(hrefs).toContain(routes.japanMap());
    expect(hrefs).toContain(routes.localEditionApplications());
  });

  it("内部リンクには external フラグが付かない", () => {
    const internalHrefs = new Set<string>([
      routes.home(),
      routes.japanMap(),
      routes.localEditionApplications(),
    ]);

    for (const link of primaryLinks) {
      if (internalHrefs.has(link.href)) {
        expect(link.external).toBeUndefined();
      } else {
        expect(link.external).toBe(true);
      }
    }
  });
});
