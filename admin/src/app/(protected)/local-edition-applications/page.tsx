import { PendingApplicationList } from "@/features/local-edition-applications/server/components/pending-application-list";
import { loadPendingLocalEditionApplications } from "@/features/local-edition-applications/server/loaders/load-pending-applications";

export default async function LocalEditionApplicationsPage() {
  const applications = await loadPendingLocalEditionApplications();

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-2 text-2xl font-bold">みらい議会地方版 連載申請</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        未審査の申請を確認し、承認または却下します。承認したものだけが公開ページに出ます。
      </p>
      <PendingApplicationList applications={applications} />
    </div>
  );
}
