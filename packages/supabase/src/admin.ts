import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase.types";

function normalizeEnvValue(value: string | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim().replace(/^['"]|['"]$/g, "");
  return trimmed.length > 0 ? trimmed : null;
}

function asValidHttpUrl(raw: string): string | null {
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return null;
    }
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

function resolveSupabaseUrl(): string {
  const candidates = [
    {
      name: "SUPABASE_URL",
      value: normalizeEnvValue(process.env.SUPABASE_URL),
    },
    {
      name: "NEXT_PUBLIC_SUPABASE_URL",
      value: normalizeEnvValue(process.env.NEXT_PUBLIC_SUPABASE_URL),
    },
  ];

  const configured = candidates.filter(
    (candidate): candidate is { name: string; value: string } =>
      candidate.value !== null
  );

  if (configured.length === 0) {
    throw new Error(
      "Supabase URL is not configured. Set SUPABASE_URL (server) or NEXT_PUBLIC_SUPABASE_URL."
    );
  }

  for (const candidate of configured) {
    const valid = asValidHttpUrl(candidate.value);
    if (valid) {
      if (candidate.name === "NEXT_PUBLIC_SUPABASE_URL") {
        console.warn(
          "SUPABASE_URL is missing/invalid, falling back to NEXT_PUBLIC_SUPABASE_URL for server-side Supabase access."
        );
      }
      return valid;
    }
  }

  throw new Error(
    "Supabase URL is invalid. Check SUPABASE_URL / NEXT_PUBLIC_SUPABASE_URL format."
  );
}

function resolveSupabaseSecretKey(): string {
  const raw =
    normalizeEnvValue(process.env.SUPABASE_SECRET_KEY) ??
    normalizeEnvValue(process.env.SUPABASE_SERVICE_ROLE_KEY);

  if (!raw) {
    throw new Error(
      "Supabase secret key is not configured. Set SUPABASE_SECRET_KEY (or SUPABASE_SERVICE_ROLE_KEY)."
    );
  }

  return raw;
}

// Secret key client for server-side operations that bypass RLS
export function createAdminClient() {
  return createClient<Database>(resolveSupabaseUrl(), resolveSupabaseSecretKey(), {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
