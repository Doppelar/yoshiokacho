// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { TakasakiExplanationTabs } from "./takasaki-explanation-tabs";

afterEach(cleanup);

function renderTabs() {
  render(
    <TakasakiExplanationTabs
      plain={<p>短い内容</p>}
      detailed={<p>詳しい議論の内容</p>}
    />
  );
  return {
    plainTab: screen.getByRole("tab", { name: "簡単な要約" }),
    detailedTab: screen.getByRole("tab", { name: "詳しい説明" }),
  };
}

describe("説明上部の2つのタブ", () => {
  it("初期状態は要約だけを表示し、クリックで詳細へ切り替え、要約へ戻せる", () => {
    const { plainTab, detailedTab } = renderTabs();
    expect(plainTab).toHaveAttribute("aria-selected", "true");
    expect(plainTab).toHaveAttribute("tabindex", "0");
    expect(detailedTab).toHaveAttribute("tabindex", "-1");
    expect(screen.getByText("短い内容")).toBeVisible();
    expect(screen.getByText("詳しい議論の内容")).not.toBeVisible();

    fireEvent.click(detailedTab);
    expect(detailedTab).toHaveAttribute("aria-selected", "true");
    expect(plainTab).toHaveAttribute("aria-selected", "false");
    expect(screen.getByText("短い内容")).not.toBeVisible();
    expect(screen.getByText("詳しい議論の内容")).toBeVisible();
    expect(screen.getByRole("tabpanel")).toHaveAttribute(
      "aria-labelledby",
      detailedTab.id
    );

    fireEvent.click(plainTab);
    expect(screen.getByText("短い内容")).toBeVisible();
    expect(screen.getByText("詳しい議論の内容")).not.toBeVisible();
  });

  it("左右矢印で選択とフォーカスを移し、端から反対側へ回る", () => {
    const { plainTab, detailedTab } = renderTabs();
    plainTab.focus();
    fireEvent.keyDown(plainTab, { key: "ArrowRight" });
    expect(detailedTab).toHaveFocus();
    expect(detailedTab).toHaveAttribute("aria-selected", "true");
    fireEvent.keyDown(detailedTab, { key: "ArrowRight" });
    expect(plainTab).toHaveFocus();
    fireEvent.keyDown(plainTab, { key: "ArrowLeft" });
    expect(detailedTab).toHaveFocus();
    expect(detailedTab).toHaveAttribute("tabindex", "0");
  });

  it("Home・Endで移動し、それ以外のキーでは選択を変えない", () => {
    const { plainTab, detailedTab } = renderTabs();
    plainTab.focus();
    fireEvent.keyDown(plainTab, { key: "End" });
    expect(detailedTab).toHaveFocus();
    fireEvent.keyDown(detailedTab, { key: "Home" });
    expect(plainTab).toHaveFocus();
    fireEvent.keyDown(plainTab, { key: "ArrowDown" });
    expect(plainTab).toHaveAttribute("aria-selected", "true");
  });

  it("同じ画面に複数ある場合も各タブとパネルのIDを分ける", () => {
    render(
      <>
        <TakasakiExplanationTabs plain="要約1" detailed="詳細1" />
        <TakasakiExplanationTabs plain="要約2" detailed="詳細2" />
      </>
    );
    const tabs = screen.getAllByRole("tab");
    expect(new Set(tabs.map((tab) => tab.id)).size).toBe(4);
    for (const tab of tabs) {
      const panel = document.getElementById(
        tab.getAttribute("aria-controls") ?? ""
      );
      expect(panel).toHaveAttribute("aria-labelledby", tab.id);
    }
  });
});
