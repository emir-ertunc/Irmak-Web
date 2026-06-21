import { ArrowRight, Flower2, ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { LinkButton } from "@/components/ui/button";
import { previewProducts } from "@/lib/catalog/preview-products";

const catalogHighlights = [
  { label: "Ürün taslağı", value: previewProducts.length.toString() },
  { label: "Kategori", value: "3" },
  { label: "Hazırlık", value: "Vitrin" }
];

const catalogCategories = [
  {
    description: "Çiçekli, kalpli ve pembe tonlu minik küpe fikirleri.",
    title: "Küpe"
  },
  {
    description: "Hediye kutusu, masa üstü ve vitrin için tatlı figürler.",
    title: "Figür"
  },
  {
    description: "Çanta, anahtar ve küçük hediyeler için neşeli aksesuarlar.",
    title: "Aksesuar"
  }
];

export default function CatalogPage() {
  return (
    <main className="w-full max-w-full overflow-hidden">
      <section className="relative isolate px-6 py-10 sm:px-10 sm:py-14">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[#FFD6E7]/55" />
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div className="min-w-0">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-black text-[#E85D8F] shadow-sm">
                <Sparkles aria-hidden="true" size={16} />
                Katalog
              </p>
              <h1 className="max-w-3xl break-words text-4xl font-black leading-tight text-[#3F1D2B] sm:text-6xl">
                Çiçekli vitrindeki tüm tatlı parçalar
              </h1>
              <p className="mt-5 max-w-2xl break-words text-base leading-7 text-[#5B3343] sm:text-lg">
                Küpe, figür ve aksesuar taslakları tek yerde listelenir.
                Filtreleme ve sıralama kontrolleri sonraki 4.2 adımlarında bu
                ekranın üzerine eklenecek.
              </p>
            </div>

            <div className="min-w-0 rounded-2xl border border-white/75 bg-white/75 p-5 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-3">
                {catalogHighlights.map((item) => (
                  <div
                    className="min-w-0 rounded-xl bg-[#FFF8F2] p-3 text-center"
                    key={item.label}
                  >
                    <p className="whitespace-nowrap text-xl font-black text-[#E85D8F] xl:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 break-words text-xs font-bold text-[#5B3343]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <LinkButton
                className="mt-4 w-full"
                href="/sepet"
                icon={<ShoppingBag aria-hidden="true" size={17} />}
                variant="secondary"
              >
                Sepete Git
              </LinkButton>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {catalogCategories.map((category) => (
              <div
                className="rounded-2xl border border-white/75 bg-white/75 p-5 shadow-sm"
                key={category.title}
              >
                <span className="grid size-11 place-items-center rounded-full bg-[#FCE7F0] text-[#E85D8F]">
                  <Flower2 aria-hidden="true" size={20} />
                </span>
                <h2 className="mt-4 text-xl font-black text-[#3F1D2B]">
                  {category.title}
                </h2>
                <p className="mt-2 break-words text-sm leading-6 text-[#5B3343]">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 sm:px-10 sm:pb-16">
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black text-[#E85D8F]">
                Ürün listeleme
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#3F1D2B]">
                Vitrindeki ürünler
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-black text-[#E85D8F] outline-none transition hover:translate-x-1 focus-visible:ring-2 focus-visible:ring-[#E85D8F]"
              href="/"
            >
              Atölyeye Dön
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {previewProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
