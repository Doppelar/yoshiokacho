import { FeedbackAdminPage } from "@/features/local-edition-feedback/server/components/feedback-admin-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page } = await searchParams;
  return <FeedbackAdminPage page={page} />;
}
