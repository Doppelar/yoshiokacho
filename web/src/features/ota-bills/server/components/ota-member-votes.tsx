import "server-only";

import { FactionVoteTable } from "@/components/council/faction-vote-table";
import type { OtaMemberVotes as OtaMemberVotesData } from "@/features/ota-bills/shared/types/ota-bill";

export function OtaMemberVotes({ tally, sourceUrl }: OtaMemberVotesData) {
  return (
    <FactionVoteTable
      forCount={tally.forCount}
      againstCount={tally.againstCount}
      byFaction={tally.byFaction}
    >
      <p className="text-xs leading-6 text-mirai-text-note">
        {tally.notVoting
          .map((group) => `${group.label}：${group.members.join("、")}。`)
          .join("")}
        {tally.blankMembers.length > 0 &&
          `白票（会議規則により反対とみなされます）：${tally.blankMembers.join("、")}。`}
        出典：
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          太田市議会「各議員の議案に対する賛否」
        </a>
      </p>
    </FactionVoteTable>
  );
}
