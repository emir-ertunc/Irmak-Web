import { ArrowRight, Flower2, ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { LinkButton } from "@/components/ui/button";
import { previewProducts } from "@/lib/catalog/preview-products";

const catalogCategories = [
  {
    description: "Çiçekli, kalpli ve pembe tonlu minik küpe fikirleri.",
    href: "/urunler?kategori=kupe",
    slug: "kupe",
    title: "Küpe"
  },
  {
    description: "Hediye kutusu, masa üstü ve vitrin için tatlı figürler.",
    href: "/urunler?kategori=figur",
    slug: "figur",
    title: "Figür"
  },
  {
    description: "Çanta, anahtar ve küçük hediyeler için neşeli aksesuarlar.",
    href: "/urunler?kategori=aksesuar",
    slug: "aksesuar",
    title: "Aksesuar"
  }
];

const categoryFilters = [
  { href: "/urunler", slug: "tum", title: "Tümü" },
  ...catalogCategories.map(({ href, slug, title }) => ({ href, slug, title }))
];

function normalizeCategory(value?: string | string[]) {
  const category = Array.isArray(value) ? value[0] : value;

  if (!category) {
    return "tum";
  }

  return categoryFilters.some((filter) => filter.slug === category)
    ? category
    : "tum";
}

function normalizeProductCategory(category: string) {
  return category
    .toLocaleLowerCase("tr-TR")
    .replace("ü", "u")
    .replace("ğ", "g")
    .replace("ı", "i")
    .replace("ş", "s")
    .replace("ö", "o")
    .replace("ç", "c");
}

type CatalogPageProps = {
  searchParams?: Promise<{
    kategori?: string | string[];
  }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const activeCategory = normalizeCategory(params?.kategori);
  const activeCategoryLabel =
    categoryFilters.find((filter) => filter.slug === activeCategory)?.title ??
    "Tümü";
  const visibleProducts =
    activeCategory === "tum"
      ? previewProducts
      : previewProducts.filter(
          (product) =>
            normalizeProductCategory(product.category) === activeCategory
        );
  const catalogHighlights = [
    { label: "Gösterilen", value: visibleProducts.length.toString() },
    { label: "Kategori", value: activeCategoryLabel },
    { label: "Toplam", value: previewProducts.length.toString() }
  ];

  return (
    <main className="w-full max-w-full overflow-hidden">
      <section className="relative isolate px-6 py-10 sm:px-10 sm:py-14">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[#FFD6E7]/55" />
        <div className="mx-auto w-full max-w-[calc(100vw-3rem)] min-w-0 sm:max-w-6xl">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div className="min-w-0">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-black text-[#E85D8F] shadow-sm">
                <Sparkles aria-hidden="true" size={16} />
                Katalog
              </p>
              <h1 className="max-w-3xl break-words text-4xl font-black leading-tight text-[#3F1D2B] sm:text-6xl">
                Çiçekli vitrindeki tüm tatlı parçalar
              </h1>
              <p className="mt-5 w-full max-w-2xl break-words text-base leading-7 text-[#5B3343] sm:text-lg">
                Küpe, figür ve aksesuar taslakları tek yerde listelenir.
                Kategori filtresiyle vitrindeki parçalar hızlıca ayrılır;
                sıralama ve diğer filtreler sonraki 4.2 adımlarında eklenecek.
              </p>
            </div>

            <div className="w-full max-w-full min-w-0 overflow-hidden rounded-2xl border border-white/75 bg-white/75 p-5 shadow-sm">
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
              <Link
                aria-current={
                  activeCategory === category.slug ? "page" : undefined
                }
                className="group rounded-2xl border border-white/75 bg-white/75 p-5 shadow-sm outline-none transition hover:-translate-y-1 hover:border-[#F78FB3] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#E85D8F] aria-[current=page]:border-[#E85D8F] aria-[current=page]:bg-[#FFF8F2]"
                href={category.href}
                key={category.title}
              >
                <span className="grid size-11 place-items-center rounded-full bg-[#FCE7F0] text-[#E85D8F] transition group-hover:rotate-6 group-hover:scale-105">
                  <Flower2 aria-hidden="true" size={20} />
                </span>
                <h2 className="mt-4 text-xl font-black text-[#3F1D2B]">
                  {category.title}
                </h2>
                <p className="mt-2 break-words text-sm leading-6 text-[#5B3343]">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 sm:px-10 sm:pb-16">
        <div className="mx-auto w-full max-w-[calc(100vw-3rem)] min-w-0 sm:max-w-6xl">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black text-[#E85D8F]">
                Ürün listeleme
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#3F1D2B]">
                Vitrindeki ürünler
              </h2>
              <p className="mt-2 text-sm font-bold text-[#5B3343]">
                {activeCategoryLabel} kategorisinde {visibleProducts.length}{" "}
                ürün gösteriliyor.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <nav
                aria-label="Kategori filtresi"
                className="flex max-w-full flex-wrap gap-2"
              >
                {categoryFilters.map((filter) => (
                  <Link
                    aria-current={
                      activeCategory === filter.slug ? "page" : undefined
                    }
                    className="rounded-full border border-[#F78FB3]/40 bg-white/80 px-4 py-2 text-sm font-black text-[#5B3343] outline-none transition hover:-translate-y-0.5 hover:border-[#E85D8F] hover:text-[#E85D8F] focus-visible:ring-2 focus-visible:ring-[#E85D8F] aria-[current=page]:border-[#E85D8F] aria-[current=page]:bg-[#E85D8F] aria-[current=page]:text-white"
                    href={filter.href}
                    key={filter.slug}
                  >
                    {filter.title}
                  </Link>
                ))}
              </nav>
              <Link
                className="inline-flex items-center gap-2 text-sm font-black text-[#E85D8F] outline-none transition hover:translate-x-1 focus-visible:ring-2 focus-visible:ring-[#E85D8F]"
                href="/"
              >
                Atölyeye Dön
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#F78FB3] bg-white/75 p-8 text-center">
              <p className="text-lg font-black text-[#3F1D2B]">
                Bu kategoride ürün yok.
              </p>
              <p className="mt-2 text-sm font-bold text-[#5B3343]">
                Tüm ürünlere dönerek vitrine yeniden bakabilirsin.
              </p>
              <LinkButton className="mt-5" href="/urunler" variant="secondary">
                Tümünü Göster
              </LinkButton>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
