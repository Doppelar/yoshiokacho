import "server-only";

import { findApprovedLocalEditionApplications } from "../repositories/local-edition-application-repository";

export async function loadApprovedLocalEditionApplications() {
  return findApprovedLocalEditionApplications();
}
