import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { AuthGate } from "@/components/layouts/auth-gate";
import { Footer } from "@/components/layouts/footer/footer";
import { MainLayout } from "@/components/layouts/main-layout";
import { SiteBrandProvider } from "@/components/layouts/site-brand-provider";
import { getCouncilBills } from "@/features/council-item-interviews/server/loaders/get-council-bills";
import { env } from "@/lib/env";
import { RubyfulInitializer } from "@/lib/rubyful";

export default async function MainGroupLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const councilBills = await getCouncilBills();

  return (
    <>
      <SpeedInsights />
      <GoogleAnalytics gaId={env.analytics.gaTrackingId ?? ""} />
      <RubyfulInitializer />
      <AuthGate />

      <SiteBrandProvider councilBills={councilBills}>
        <MainLayout>
          <Header />
          <main className="min-h-dvh md:min-h-[calc(100dvh-96px)] bg-mirai-surface">
            {children}
          </main>
          <Footer />
        </MainLayout>
      </SiteBrandProvider>
    </>
  );
}
