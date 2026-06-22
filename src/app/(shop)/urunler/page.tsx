import {
  ArrowRight,
  Flower2,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { LinkButton } from "@/components/ui/button";
import { previewProducts } from "@/lib/catalog/preview-products";

const catalogCategories = [
  {
    description: "Çiçekli, kalpli ve pembe tonlu minik küpe fikirleri.",
    slug: "kupe",
    title: "Küpe"
  },
  {
    description: "Hediye kutusu, masa üstü ve vitrin için tatlı figürler.",
    slug: "figur",
    title: "Figür"
  },
  {
    description: "Çanta, anahtar ve küçük hediyeler için neşeli aksesuarlar.",
    slug: "aksesuar",
    title: "Aksesuar"
  }
];

const categoryFilters = [
  { slug: "tum", title: "Tümü" },
  ...catalogCategories.map(({ slug, title }) => ({ slug, title }))
];

const priceFilters = [
  { max: undefined, min: undefined, slug: "tum", title: "Tüm fiyatlar" },
  { max: 249, min: 0, slug: "0-249", title: "₺0 - ₺249" },
  { max: 299, min: 250, slug: "250-299", title: "₺250 - ₺299" },
  { max: undefined, min: 300, slug: "300-plus", title: "₺300+" }
];

const stockFilters = [
  { slug: "tum", status: undefined, title: "Tüm stoklar" },
  { slug: "stokta", status: "in-stock", title: "Stokta" },
  { slug: "az-kaldi", status: "low-stock", title: "Az kaldı" },
  { slug: "hazirlaniyor", status: "made-to-order", title: "Hazırlanıyor" }
];

const sortOptions = [
  { slug: "vitrin", title: "Vitrin sırası" },
  { slug: "fiyat-artan", title: "Fiyat artan" },
  { slug: "fiyat-azalan", title: "Fiyat azalan" },
  { slug: "ad-a-z", title: "Ad A-Z" }
];

function buildCatalogHref({
  category,
  price,
  sort,
  stock
}: {
  category: string;
  price: string;
  sort: string;
  stock: string;
}) {
  const params = new URLSearchParams();

  if (category !== "tum") {
    params.set("kategori", category);
  }

  if (price !== "tum") {
    params.set("fiyat", price);
  }

  if (stock !== "tum") {
    params.set("stok", stock);
  }

  if (sort !== "vitrin") {
    params.set("sirala", sort);
  }

  const query = params.toString();

  return query ? `/urunler?${query}` : "/urunler";
}

function normalizeCategory(value?: string | string[]) {
  const category = Array.isArray(value) ? value[0] : value;

  if (!category) {
    return "tum";
  }

  return categoryFilters.some((filter) => filter.slug === category)
    ? category
    : "tum";
}

function normalizePrice(value?: string | string[]) {
  const price = Array.isArray(value) ? value[0] : value;

  if (!price) {
    return "tum";
  }

  return priceFilters.some((filter) => filter.slug === price) ? price : "tum";
}

function normalizeStock(value?: string | string[]) {
  const stock = Array.isArray(value) ? value[0] : value;

  if (!stock) {
    return "tum";
  }

  return stockFilters.some((filter) => filter.slug === stock) ? stock : "tum";
}

function normalizeSort(value?: string | string[]) {
  const sort = Array.isArray(value) ? value[0] : value;

  if (!sort) {
    return "vitrin";
  }

  return sortOptions.some((option) => option.slug === sort) ? sort : "vitrin";
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
    fiyat?: string | string[];
    kategori?: string | string[];
    sirala?: string | string[];
    stok?: string | string[];
  }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const activeCategory = normalizeCategory(params?.kategori);
  const activePrice = normalizePrice(params?.fiyat);
  const activeStock = normalizeStock(params?.stok);
  const activeSort = normalizeSort(params?.sirala);
  const activeCategoryLabel =
    categoryFilters.find((filter) => filter.slug === activeCategory)?.title ??
    "Tümü";
  const activePriceFilter =
    priceFilters.find((filter) => filter.slug === activePrice) ??
    priceFilters[0];
  const activePriceLabel = activePriceFilter.title;
  const activeStockFilter =
    stockFilters.find((filter) => filter.slug === activeStock) ??
    stockFilters[0];
  const activeStockLabel = activeStockFilter.title;
  const activeSortLabel =
    sortOptions.find((option) => option.slug === activeSort)?.title ??
    sortOptions[0].title;
  const visibleProducts = previewProducts
    .filter((product) => {
      const matchesCategory =
        activeCategory === "tum" ||
        normalizeProductCategory(product.category) === activeCategory;
      const matchesMin =
        activePriceFilter.min === undefined ||
        product.priceAmount >= activePriceFilter.min;
      const matchesMax =
        activePriceFilter.max === undefined ||
        product.priceAmount <= activePriceFilter.max;
      const matchesStock =
        activeStockFilter.status === undefined ||
        product.stockStatus === activeStockFilter.status;

      return matchesCategory && matchesMin && matchesMax && matchesStock;
    })
    .sort((firstProduct, secondProduct) => {
      if (activeSort === "fiyat-artan") {
        return firstProduct.priceAmount - secondProduct.priceAmount;
      }

      if (activeSort === "fiyat-azalan") {
        return secondProduct.priceAmount - firstProduct.priceAmount;
      }

      if (activeSort === "ad-a-z") {
        return firstProduct.name.localeCompare(secondProduct.name, "tr-TR");
      }

      return 0;
    });
  const catalogHighlights = [
    { label: "Gösterilen", value: visibleProducts.length.toString() },
    { label: "Kategori", value: activeCategoryLabel },
    { label: "Fiyat", value: activePriceLabel },
    { label: "Stok", value: activeStockLabel }
  ];
  const filterGroups = [
    {
      ariaLabel: "Kategori filtresi",
      itemClassName:
        "rounded-full border border-[#F78FB3]/40 bg-white/80 px-4 py-2 text-sm font-black text-[#5B3343] outline-none transition hover:-translate-y-0.5 hover:border-[#E85D8F] hover:text-[#E85D8F] focus-visible:ring-2 focus-visible:ring-[#E85D8F] aria-[current=page]:border-[#E85D8F] aria-[current=page]:bg-[#E85D8F] aria-[current=page]:text-white",
      links: categoryFilters.map((filter) => ({
        href: buildCatalogHref({
          category: filter.slug,
          price: activePrice,
          sort: activeSort,
          stock: activeStock
        }),
        isActive: activeCategory === filter.slug,
        slug: filter.slug,
        title: filter.title
      })),
      title: "Kategori"
    },
    {
      ariaLabel: "Fiyat aralığı filtresi",
      itemClassName:
        "rounded-full border border-[#C7B8FF]/55 bg-white/80 px-4 py-2 text-sm font-black text-[#5B3343] outline-none transition hover:-translate-y-0.5 hover:border-[#8B6FFF] hover:text-[#6F55DD] focus-visible:ring-2 focus-visible:ring-[#8B6FFF] aria-[current=page]:border-[#8B6FFF] aria-[current=page]:bg-[#8B6FFF] aria-[current=page]:text-white",
      links: priceFilters.map((filter) => ({
        href: buildCatalogHref({
          category: activeCategory,
          price: filter.slug,
          sort: activeSort,
          stock: activeStock
        }),
        isActive: activePrice === filter.slug,
        slug: filter.slug,
        title: filter.title
      })),
      title: "Fiyat"
    },
    {
      ariaLabel: "Stok durumu filtresi",
      itemClassName:
        "rounded-full border border-[#9BE7C0]/70 bg-white/80 px-4 py-2 text-sm font-black text-[#5B3343] outline-none transition hover:-translate-y-0.5 hover:border-[#3BCB85] hover:text-[#23895C] focus-visible:ring-2 focus-visible:ring-[#3BCB85] aria-[current=page]:border-[#3BCB85] aria-[current=page]:bg-[#3BCB85] aria-[current=page]:text-white",
      links: stockFilters.map((filter) => ({
        href: buildCatalogHref({
          category: activeCategory,
          price: activePrice,
          sort: activeSort,
          stock: filter.slug
        }),
        isActive: activeStock === filter.slug,
        slug: filter.slug,
        title: filter.title
      })),
      title: "Stok"
    },
    {
      ariaLabel: "Sıralama seçenekleri",
      itemClassName:
        "rounded-full border border-[#FFE66D]/80 bg-white/80 px-4 py-2 text-sm font-black text-[#5B3343] outline-none transition hover:-translate-y-0.5 hover:border-[#E0B400] hover:text-[#8A6500] focus-visible:ring-2 focus-visible:ring-[#E0B400] aria-[current=page]:border-[#E0B400] aria-[current=page]:bg-[#FFE66D] aria-[current=page]:text-[#3F1D2B]",
      links: sortOptions.map((option) => ({
        href: buildCatalogHref({
          category: activeCategory,
          price: activePrice,
          sort: option.slug,
          stock: activeStock
        }),
        isActive: activeSort === option.slug,
        slug: option.slug,
        title: option.title
      })),
      title: "Sıralama"
    }
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
                Kategori, fiyat aralığı, stok durumu ve sıralama seçenekleriyle
                vitrindeki parçalar hızlıca ayrılır; mobilde tüm seçimler tek
                panelde toplanır.
              </p>
            </div>

            <div className="w-full max-w-full min-w-0 overflow-hidden rounded-2xl border border-white/75 bg-white/75 p-5 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-2">
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
                href={buildCatalogHref({
                  category: category.slug,
                  price: activePrice,
                  sort: activeSort,
                  stock: activeStock
                })}
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
                ürün gösteriliyor. Fiyat aralığı: {activePriceLabel}. Stok
                durumu: {activeStockLabel}. Sıralama: {activeSortLabel}.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <details className="rounded-2xl border border-[#F78FB3]/35 bg-white/80 p-4 shadow-sm lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-black text-[#3F1D2B] outline-none marker:hidden focus-visible:ring-2 focus-visible:ring-[#E85D8F] [&::-webkit-details-marker]:hidden">
                  <span className="inline-flex items-center gap-2">
                    <SlidersHorizontal aria-hidden="true" size={17} />
                    Filtreler
                  </span>
                  <span className="rounded-full bg-[#FFD6E7] px-3 py-1 text-xs text-[#E85D8F]">
                    {visibleProducts.length} ürün
                  </span>
                </summary>
                <div className="mt-4 grid gap-4">
                  {filterGroups.map((group) => (
                    <div className="min-w-0" key={group.ariaLabel}>
                      <p className="mb-2 text-xs font-black uppercase text-[#E85D8F]">
                        {group.title}
                      </p>
                      <nav
                        aria-label={group.ariaLabel}
                        className="flex max-w-full flex-wrap gap-2"
                      >
                        {group.links.map((link) => (
                          <Link
                            aria-current={link.isActive ? "page" : undefined}
                            className={group.itemClassName}
                            href={link.href}
                            key={link.slug}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  ))}
                </div>
              </details>

              <div className="hidden flex-col gap-3 lg:flex lg:items-end">
                {filterGroups.map((group) => (
                  <nav
                    aria-label={group.ariaLabel}
                    className="flex max-w-full flex-wrap gap-2 lg:justify-end"
                    key={group.ariaLabel}
                  >
                    {group.links.map((link) => (
                      <Link
                        aria-current={link.isActive ? "page" : undefined}
                        className={group.itemClassName}
                        href={link.href}
                        key={link.slug}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </nav>
                ))}
              </div>

              <Link
                className="inline-flex items-center gap-2 text-sm font-black text-[#E85D8F] outline-none transition hover:translate-x-1 focus-visible:ring-2 focus-visible:ring-[#E85D8F] lg:self-end"
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
                Bu filtrelerle ürün yok.
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
