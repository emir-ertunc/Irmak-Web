import { ArrowLeft, PackageCheck } from "lucide-react";
import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const dashboardItems = [
  "Ürünler",
  "Siparişler",
  "Kategoriler",
  "Vitrin içerikleri"
];

export default function AdminDashboardPage() {
  return (
    <AdminPageShell
      actions={
        <LinkButton
          href="/"
          icon={<ArrowLeft aria-hidden="true" size={17} />}
          variant="secondary"
        >
          Siteye Dön
        </LinkButton>
      }
      eyebrow="Yönetim paneli"
      title="Atölye kontrol merkezi"
    >
      <p className="mb-6 max-w-2xl text-base leading-7 text-[#5B3343]">
        Ürün, stok, sipariş ve vitrin yönetimi için ana panel rotası hazır.
        Yetkilendirme ve gerçek veriler ilerleyen aşamalarda bağlanacak.
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
