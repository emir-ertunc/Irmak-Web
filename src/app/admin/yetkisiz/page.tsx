import { ShieldAlert } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function UnauthorizedAdminPage() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl flex-col justify-center">
        <Card className="p-6">
          <ShieldAlert
            aria-hidden="true"
            className="text-[#E85D8F]"
            size={32}
          />
          <p className="mt-5 text-sm font-semibold uppercase text-[#E85D8F]">
            Yetkisiz erişim
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#3F1D2B]">
            Admin yetkisi bulunamadı
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5B3343]">
            Bu hesap için aktif admin kaydı yok. Panel erişimi için kullanıcı
            kaydı `admin_users` tablosunda aktif olmalıdır.
          </p>
          <div className="mt-6">
            <LinkButton href="/admin/giris" variant="secondary">
              Girişe Dön
            </LinkButton>
          </div>
        </Card>
      </section>
    </main>
  );
}
