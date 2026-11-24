import type { ReactNode } from "react";

export type FactionVoteRow = {
  faction: string;
  forMembers: readonly string[];
  againstMembers: readonly string[];
};

function MemberCell({ names }: { names: readonly string[] }) {
  return (
    <td className="p-3">
      {names.length > 0 && (
        <span className="font-bold">{names.length}人：</span>
      )}
      {names.join("、")}
    </td>
  );
}

/** 賛否が分かれた採決の、会派ごとの賛成・反対の議員の表。注記は children に渡す */
export function FactionVoteTable({
  forCount,
  againstCount,
  byFaction,
  children,
}: {
  forCount: number;
  againstCount: number;
  byFaction: readonly FactionVoteRow[];
  children?: ReactNode;
}) {
  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-xl font-bold">
        議員ごとの賛否（賛成{forCount}・反対{againstCount}）
      </h2>
      <div className="overflow-x-auto rounded-2xl border bg-white">
        <table className="w-full min-w-[480px] text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="p-3">会派</th>
              <th className="p-3">賛成</th>
              <th className="p-3">反対</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {byFaction.map((row) => (
              <tr key={row.faction} className="align-top">
                <th className="whitespace-nowrap p-3 text-left">
                  {row.faction}
                </th>
                <MemberCell names={row.forMembers} />
                <MemberCell names={row.againstMembers} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {children}
    </section>
  );
}
