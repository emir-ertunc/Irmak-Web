import { ShoppingBag } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Toast } from "@/components/ui/toast";

export default function CartPage() {
  return (
    <main className="px-6 py-10 sm:px-10">
      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_22rem]">
        <Card className="p-6">
          <p className="text-sm font-semibold uppercase text-[#E85D8F]">
            Sepet
          </p>
          <h1 className="mt-2 text-4xl font-bold text-[#3F1D2B]">
            Sipariş taslağı
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5B3343]">
            Sepet rotası hazır. Ürün seçimi, adet, varyant ve sipariş talebi
            akışı ilerleyen aşamalarda veri modeliyle birlikte canlanacak.
          </p>
          <div className="mt-8 rounded-lg border border-dashed border-[#F78FB3] bg-[#FFF8F2] p-6">
            <p className="font-bold text-[#3F1D2B]">Sepet şu an boş.</p>
            <p className="mt-2 text-sm leading-6 text-[#5B3343]">
              İlk ürünler katalogdan seçildiğinde bu alanda listelenecek.
            </p>
          </div>
        </Card>
        <aside className="rounded-lg border border-white/70 bg-[#FCE7F0] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#3F1D2B]">Sipariş özeti</h2>
          <dl className="mt-5 space-y-3 text-sm text-[#5B3343]">
            <div className="flex justify-between gap-4">
              <dt>Ara toplam</dt>
              <dd>Hazırlanıyor</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Kargo</dt>
              <dd>Netleşecek</dd>
            </div>
          </dl>
          <div className="mt-6">
            <LinkButton
              href="/urunler"
              icon={<ShoppingBag aria-hidden="true" size={17} />}
            >
              Ürünlere Dön
            </LinkButton>
          </div>
        </aside>
      </section>
      <div className="mx-auto mt-6 max-w-6xl">
        <Toast
          message="Sepete ekleme bildirimi bu yapı üzerinden gösterilecek."
          title="Bildirim alanı hazır"
          tone="success"
        />
      </div>
    </main>
  );
}
