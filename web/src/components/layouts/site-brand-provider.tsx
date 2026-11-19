"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  type CouncilBills,
  getSiteBrand,
  type SiteBrand,
} from "@/lib/site-brand";

type SiteBrandContextValue = {
  councilBills: CouncilBills;
  pageBillId: string | null;
  setPageBillId: (billId: string | null) => void;
};

const SiteBrandContext = createContext<SiteBrandContextValue>({
  councilBills: {},
  pageBillId: null,
  setPageBillId: () => {},
});

export function SiteBrandProvider({
  councilBills,
  children,
}: {
  councilBills: CouncilBills;
  children: ReactNode;
}) {
  const [pageBillId, setPageBillId] = useState<string | null>(null);
  return (
    <SiteBrandContext.Provider
      value={{ councilBills, pageBillId, setPageBillId }}
    >
      {children}
    </SiteBrandContext.Provider>
  );
}

/** 表示中のページのサイト名とロゴのリンク先（ヘッダー・フッター用） */
export function useSiteBrand(): SiteBrand {
  const pathname = usePathname();
  const { councilBills, pageBillId } = useContext(SiteBrandContext);
  return getSiteBrand(pathname, councilBills, pageBillId);
}

/**
 * URL に議案IDを含まないページ（インタビューレポートなど）で、
 * ヘッダー・フッターのサイト名をその議案の議会に合わせる。
 */
export function SiteBrandBill({ billId }: { billId: string }) {
  const { setPageBillId } = useContext(SiteBrandContext);
  useEffect(() => {
    setPageBillId(billId);
    return () => setPageBillId(null);
  }, [billId, setPageBillId]);
  return null;
}
