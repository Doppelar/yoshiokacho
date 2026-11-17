// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { routes } from "@/lib/routes";
import { MapChoiceChip, MapHotspot } from "./map-hotspot";

afterEach(cleanup);

const href = "https://muse.ai/s/mirai-gikai-example/id";

describe("自治体リンクのMUSEマーク", () => {
  it("MUSEのリンクに作成方法を表示し、リンク先を保持する", () => {
    render(
      <MapChoiceChip
        name="下野市"
        href={href}
        selected={false}
        external
        onSelect={() => undefined}
      />
    );
    const link = screen.getByRole("link", { name: /下野市.*MUSEで作成/ });
    expect(link.getAttribute("href")).toBe(href);
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    expect(screen.getByText("MUSE")).toBeTruthy();
  });
  it("MUSE以外のサイトに作成方法を推測して付けない", () => {
    render(
      <MapChoiceChip
        name="八潮市"
        href="https://example.vercel.app/"
        selected={false}
        external
        onSelect={() => undefined}
      />
    );
    expect(screen.getByRole("link", { name: "八潮市" })).toBeTruthy();
    expect(screen.queryByText("MUSE")).toBeNull();
    expect(screen.queryByText(/バイブコーディング/)).toBeNull();
  });
  it("このサイト内のページにもマークを付けない", () => {
    render(
      <MapChoiceChip
        name="吉岡町"
        href={routes.home()}
        selected={false}
        onSelect={() => undefined}
      />
    );
    expect(
      screen.getByRole("link", { name: "吉岡町" }).getAttribute("href")
    ).toBe(routes.home());
    expect(screen.queryByText("MUSE")).toBeNull();
  });
  it("地図のラベルが非表示でも、読み上げでMUSEのサイトと分かる", () => {
    render(
      <MapHotspot
        name="下野市"
        mapX={50}
        mapY={50}
        selected={false}
        href={href}
        external
        showLabel={false}
        onSelect={() => undefined}
      />
    );
    expect(
      screen
        .getByRole("link", { name: "下野市のみらい議会（MUSEで作成）" })
        .getAttribute("href")
    ).toBe(href);
  });
});
