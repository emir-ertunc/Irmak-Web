import { ArrowLeft, LogOut, PackageCheck } from "lucide-react";
import { redirect } from "next/navigation";
import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { Badge } from "@/components/ui/badge";
import { LinkButton, buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getAdminAuthState } from "@/lib/auth/admin";
import { signOutAdmin } from "@/server/actions/auth";

const dashboardItems = [
  "Ürünler",
  "Siparişler",
  "Kategoriler",
  "Vitrin içerikleri"
];

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const authState = await getAdminAuthState();

  if (
    authState.status === "unauthenticated" ||
    authState.status === "missing-config"
  ) {
    redirect("/admin/giris");
  }

  if (authState.status === "unauthorized") {
    redirect("/admin/yetkisiz");
  }

  if (authState.status !== "authorized") {
    redirect("/admin/giris");
  }

  return (
    <AdminPageShell
      actions={
        <div className="flex flex-wrap gap-3">
          <LinkButton
            href="/"
            icon={<ArrowLeft aria-hidden="true" size={17} />}
            variant="secondary"
          >
            Siteye Dön
          </LinkButton>
          <form action={signOutAdmin}>
            <button
              className={buttonClasses({ variant: "ghost" })}
              type="submit"
            >
              <LogOut aria-hidden="true" size={17} />
              <span>Çıkış</span>
            </button>
          </form>
        </div>
      }
      eyebrow="Yönetim paneli"
      title="Atölye kontrol merkezi"
    >
      <p className="mb-6 max-w-2xl text-base leading-7 text-[#5B3343]">
        {authState.adminUser.email} hesabı ile giriş yapıldı. Ürün, stok,
        sipariş ve vitrin yönetimi için ana panel rotası koruma altında.
      </p>
      <div className="grid gap-4 md:grid-cols-4">
        {dashboardItems.map((item) => (
          <Card className="p-5" key={item}>
            <Badge tone="mint">Hazır</Badge>
            <PackageCheck
              aria-hidden="true"
              className="mt-5 text-[#E85D8F]"
              size={24}
            />
            <h2 className="mt-3 text-xl font-bold text-[#3F1D2B]">{item}</h2>
            <p className="mt-2 text-sm leading-6 text-[#5B3343]">
              Bu bölüm sonraki aşamalarda işlevsel hale gelecek.
            </p>
          </Card>
        ))}
      </div>
    </AdminPageShell>
  );
}
