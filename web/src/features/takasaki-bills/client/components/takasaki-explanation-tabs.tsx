"use client";

import {
  type KeyboardEvent,
  type ReactNode,
  useId,
  useRef,
  useState,
} from "react";
import { Button } from "@/components/ui/button";

const TABS = [
  { value: "plain", label: "簡単な要約" },
  { value: "detailed", label: "詳しい説明" },
] as const;

export function TakasakiExplanationTabs({
  plain,
  detailed,
}: {
  plain: ReactNode;
  detailed: ReactNode;
}) {
  const [selected, setSelected] = useState<"plain" | "detailed">("plain");
  const prefix = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    let next: number;
    switch (event.key) {
      case "ArrowRight":
        next = (index + 1) % TABS.length;
        break;
      case "ArrowLeft":
        next = (index + TABS.length - 1) % TABS.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = TABS.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setSelected(TABS[next].value);
    refs.current[next]?.focus();
  }

  return (
    <div className="space-y-5">
      <div
        role="tablist"
        aria-label="議案の説明の詳しさ"
        className="grid grid-cols-2 gap-1 rounded-2xl bg-muted p-1"
      >
        {TABS.map((tab, index) => (
          <Button
            key={tab.value}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${prefix}-tab-${tab.value}`}
            aria-selected={selected === tab.value}
            aria-controls={`${prefix}-panel-${tab.value}`}
            tabIndex={selected === tab.value ? 0 : -1}
            variant={selected === tab.value ? "default" : "ghost"}
            className="w-full rounded-xl"
            onClick={() => setSelected(tab.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {TABS.map((tab) => (
        <div
          key={tab.value}
          role="tabpanel"
          id={`${prefix}-panel-${tab.value}`}
          aria-labelledby={`${prefix}-tab-${tab.value}`}
          hidden={selected !== tab.value}
          // biome-ignore lint/a11y/noNoninteractiveTabindex: Text-only tab panels need a keyboard focus target.
          tabIndex={0}
          className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {tab.value === "plain" ? plain : detailed}
        </div>
      ))}
    </div>
  );
}
