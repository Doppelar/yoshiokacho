import { jsonResponse } from "@/lib/api/response";

export async function POST(_req: Request) {
  return jsonResponse({ error: "Chat feature has been removed" }, 410);
}
