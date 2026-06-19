import type { ReactNode } from "react";
import { SiteShell } from "@/components/shop/site-shell";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
