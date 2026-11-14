import "server-only";

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    {
      sha: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
      projectId: process.env.VERCEL_PROJECT_ID ?? null,
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
