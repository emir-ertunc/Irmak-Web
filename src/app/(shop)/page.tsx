import { ShoppingBag, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { FlowerAccent, SparkleAccent } from "@/components/ui/decor";
import { ProductCard } from "@/components/shop/product-card";
import { previewProducts } from "@/lib/catalog/preview-products";

export default function HomePage() {
  return (
    <main className="px-6 py-10 sm:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-6xl flex-col justify-center gap-8">
        <div className="relative max-w-3xl">
          <FlowerAccent className="absolute -right-3 -top-5 hidden sm:inline-flex" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#E85D8F]">
            El yapımı tatlı detaylar
          </p>
          <h1 className="text-4xl font-bold text-[#3F1D2B] sm:text-6xl">
            Irmak&apos;ın Minik Atölyesi
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5B3343]">
            Minik figürler, neşeli küpeler ve sana özel tatlı aksesuarlar için
            pembe, çiçekli ve cıvıl cıvıl bir atölye hazırlanıyor.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <LinkButton
            href="/urunler"
            icon={<Sparkles aria-hidden="true" size={17} />}
          >
            Ürünleri Keşfet
          </LinkButton>
          <LinkButton
            href="/sepet"
            icon={<ShoppingBag aria-hidden="true" size={17} />}
            variant="secondary"
          >
            Sepeti Aç
          </LinkButton>
        </div>
        <div className="grid gap-4 pt-8 md:grid-cols-3">
          {previewProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <SparkleAccent className="ml-auto hidden sm:inline-flex" />
      </section>
    </main>
  );
}
