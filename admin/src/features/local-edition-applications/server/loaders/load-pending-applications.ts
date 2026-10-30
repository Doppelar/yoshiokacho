import "server-only";

import { requireAdmin } from "@/features/auth/server/lib/auth-server";
import { findPendingLocalEditionApplications } from "../repositories/local-edition-application-repository";

export async function loadPendingLocalEditionApplications() {
  await requireAdmin();
  return findPendingLocalEditionApplications();
}
