import { readFileSync, writeFileSync } from "node:fs";
import {
  buildOfficialImportSql,
  type OfficialYoshiokaSession,
} from "./official-import";
const [input, output, checkedAt] = process.argv.slice(2);
if (!input || !output || !checkedAt)
  throw new Error(
    "Usage: tsx prepare-official-import.ts input.json output.sql YYYY-MM-DD (SQL生成のみ。DB未実行)"
  );
const data = JSON.parse(readFileSync(input, "utf8")) as {
  sessions: OfficialYoshiokaSession[];
};
const sql = buildOfficialImportSql(data.sessions, checkedAt);
writeFileSync(output, sql, "utf8");
console.log(
  JSON.stringify({
    sessions: data.sessions.length,
    records: data.sessions.reduce((n, s) => n + s.items.length, 0),
    output,
    databaseWritten: false,
  })
);
