import type { CSSProperties } from "react";
import {
  ArrowRight,
  Flower2,
  Gift,
  Heart,
  ShoppingBag,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { LinkButton } from "@/components/ui/button";
import { previewProducts } from "@/lib/catalog/preview-products";

const petalLayer = [
  {
    className: "left-[8%] top-[14%]",
    delay: "0ms",
    duration: "6.4s",
    rotate: "9deg",
    size: "size-9",
    x: "10px",
    y: "-18px"
  },
  {
    className: "left-[18%] top-[68%]",
    delay: "650ms",
    duration: "7.1s",
    rotate: "-7deg",
    size: "size-6",
    x: "-8px",
    y: "-14px"
  },
  {
    className: "left-[42%] top-[10%]",
    delay: "1200ms",
    duration: "7.8s",
    rotate: "12deg",
    size: "size-7",
    x: "12px",
    y: "-20px"
  },
  {
    className: "left-[61%] top-[74%]",
    delay: "350ms",
    duration: "6.9s",
    rotate: "-10deg",
    size: "size-8",
    x: "-10px",
    y: "-16px"
  },
  {
    className: "left-[78%] top-[16%]",
    delay: "900ms",
    duration: "7.4s",
    rotate: "8deg",
    size: "size-6",
    x: "9px",
    y: "-15px"
  },
  {
    className: "left-[88%] top-[56%]",
    delay: "1450ms",
    duration: "8s",
    rotate: "-12deg",
    size: "size-9",
    x: "-12px",
    y: "-19px"
  }
];

const featuredCollections = [
  {
    accent: "bg-[#FFD6E7] text-[#E85D8F]",
    description: "Kalp, çiçek ve tatlı figür hissini taşıyan küpe taslakları.",
    href: "/urunler",
    icon: Heart,
    meta: "Küpe seçkisi",
    palette: "from-[#FFD6E7] via-[#FFF8F2] to-[#FFE66D]",
    title: "Pembe Neşe Küpeleri"
  },
  {
    accent: "bg-[#9BE7C0] text-[#3F1D2B]",
    description: "Masa üstü, paket süsü ve minik hediye için canlı parçalar.",
    href: "/urunler",
    icon: Flower2,
    meta: "Figür seçkisi",
    palette: "from-[#9BE7C0] via-[#FFF8F2] to-[#FFD6E7]",
    title: "Minik Figür Bahçesi"
  },
  {
    accent: "bg-[#C7B8FF] text-[#3F1D2B]",
    description: "Anahtarlık, kolye ucu ve hediye paketine yakışan detaylar.",
    href: "/urunler",
    icon: Gift,
    meta: "Aksesuar seçkisi",
    palette: "from-[#C7B8FF] via-[#FFF8F2] to-[#FF8A7A]",
    title: "Tatlı Hediye Köşesi"
  }
];

const newProductHighlights = previewProducts.map((product, index) => ({
  ...product,
  freshness: ["Yeni kalıp", "Yeni figür", "Yeni aksesuar"][index] ?? "Yeni"
}));

type PetalStyle = CSSProperties & {
  "--petal-rotate": string;
  "--petal-x": string;
  "--petal-y": string;
};

function FloatingPetals() {
  return (
    <div
      aria-hidden="true"
      className="home-motion-layer pointer-events-none absolute inset-0"
    >
      {petalLayer.map((petal, index) => (
        <span
          className={[
            "home-floating-petal absolute grid place-items-center rounded-full",
            petal.size,
            petal.className
          ].join(" ")}
          key={index}
          style={
            {
              "--petal-rotate": petal.rotate,
              "--petal-x": petal.x,
              "--petal-y": petal.y,
              animationDelay: petal.delay,
              animationDuration: petal.duration
            } as PetalStyle
          }
        >
          <Flower2 size={index % 2 === 0 ? 18 : 14} />
        </span>
      ))}
    </div>
  );
}

function CraftPreview() {
  return (
    <div
      aria-label="El yapımı pembe figür ve küpe önizlemesi"
      className="home-craft-scene relative mx-auto min-h-[24rem] w-full max-w-[21rem] overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 p-5 shadow-[0_24px_70px_rgba(232,93,143,0.18)] backdrop-blur sm:max-w-none"
    >
      <span aria-hidden="true" className="home-craft-ribbon" />
      <div className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-[#FFF4A8] text-[#E85D8F] shadow-sm">
        <Sparkles size={22} />
      </div>
      <div className="home-craft-flower absolute left-8 top-8 grid size-20 place-items-center rounded-full bg-[#FFD6E7] text-[#E85D8F]">
        <Flower2 size={34} />
      </div>
      <div className="home-craft-piece home-craft-piece-large absolute bottom-14 left-10">
        <span className="grid size-28 place-items-center rounded-full bg-[#F78FB3] text-white shadow-lg">
          <Heart size={42} />
        </span>
        <span className="mt-3 block text-center text-sm font-black text-[#3F1D2B]">
          Kalp figür
        </span>
      </div>
      <div className="home-craft-piece home-craft-piece-small absolute right-8 top-24">
        <span className="grid size-20 place-items-center rounded-full bg-[#9BE7C0] text-[#3F1D2B] shadow-lg">
          <Flower2 size={30} />
        </span>
        <span className="mt-3 block text-center text-sm font-black text-[#3F1D2B]">
          Çiçek küpe
        </span>
      </div>
      <div className="home-craft-piece home-craft-piece-tag absolute bottom-8 right-8 rounded-2xl bg-[#C7B8FF] px-5 py-4 text-sm font-black text-[#3F1D2B] shadow-lg">
        Minik hediye
      </div>
    </div>
  );
}

function FeaturedCollections() {
  return (
    <section className="px-6 py-14 sm:px-10 sm:py-16" id="koleksiyonlar">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-black text-[#E85D8F]">
              <Sparkles aria-hidden="true" size={16} />
              Öne çıkan koleksiyonlar
            </p>
            <h2 className="max-w-2xl text-3xl font-black leading-tight text-[#3F1D2B] sm:text-4xl">
              Atölyenin en tatlı rafları tek bakışta
            </h2>
          </div>
          <LinkButton
            href="/urunler"
            icon={<ArrowRight aria-hidden="true" size={17} />}
            variant="secondary"
          >
            Tümünü Gör
          </LinkButton>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredCollections.map((collection) => {
            const Icon = collection.icon;

            return (
              <Link
                className="home-collection-card group overflow-hidden rounded-2xl border border-white/75 bg-white/70 shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[#E85D8F]"
                href={collection.href}
                key={collection.title}
              >
                <div
                  className={`relative min-h-44 bg-gradient-to-br ${collection.palette}`}
                >
                  <span className="absolute left-5 top-5 rounded-full bg-white/75 px-3 py-1 text-xs font-black text-[#5B3343] shadow-sm">
                    {collection.meta}
                  </span>
                  <span
                    className={[
                      "absolute bottom-5 right-5 grid size-16 place-items-center rounded-full shadow-lg transition group-hover:-translate-y-1 group-hover:rotate-6",
                      collection.accent
                    ].join(" ")}
                  >
                    <Icon aria-hidden="true" size={28} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-black text-[#3F1D2B]">
                    {collection.title}
                  </h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-[#5B3343]">
                    {collection.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#E85D8F] transition group-hover:translate-x-1">
                    Koleksiyona Bak
                    <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NewProducts() {
  return (
    <section
      className="bg-[#FFF4A8]/35 px-6 py-14 sm:px-10 sm:py-16"
      id="yeni-urunler"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-black text-[#E85D8F]">
              <Flower2 aria-hidden="true" size={16} />
              Yeni ürünler
            </p>
            <h2 className="max-w-2xl text-3xl font-black leading-tight text-[#3F1D2B] sm:text-4xl">
              Tezgaha yeni gelen tatlı parçalar
            </h2>
          </div>
          <LinkButton
            href="/urunler"
            icon={<Sparkles aria-hidden="true" size={17} />}
            variant="secondary"
          >
            Yeni Gelenleri Gör
          </LinkButton>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {newProductHighlights.map((product) => (
            <Link
              className="home-new-product-card group overflow-hidden rounded-2xl border border-white/75 bg-white/80 shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[#E85D8F]"
              href={`/urunler/${product.slug}`}
              key={product.slug}
            >
              <div
                className={`relative min-h-48 bg-gradient-to-br ${product.palette}`}
              >
                <span className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-black text-[#E85D8F] shadow-sm">
                  {product.freshness}
                </span>
                <span className="home-new-product-spark absolute bottom-5 right-5 grid size-14 place-items-center rounded-full bg-white/80 text-[#E85D8F] shadow-lg transition group-hover:-translate-y-1 group-hover:rotate-6">
                  <Sparkles aria-hidden="true" size={24} />
                </span>
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-black uppercase text-[#E85D8F]">
                    {product.category}
                  </span>
                  <span className="text-sm font-bold text-[#5B3343]">
                    {product.price}
                  </span>
                </div>
                <h3 className="text-xl font-black text-[#3F1D2B]">
                  {product.name}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-[#5B3343]">
                  {product.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#E85D8F] transition group-hover:translate-x-1">
                  Detaya Bak
                  <ArrowRight aria-hidden="true" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="home-hero relative isolate min-h-[calc(100svh-4rem)] px-6 py-8 sm:px-10 lg:py-10">
        <FloatingPetals />
        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-10rem)] max-w-6xl min-w-0 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="home-copy-enter max-w-full sm:max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-black text-[#E85D8F] shadow-sm">
              <Flower2 aria-hidden="true" size={16} />
              El yapımı tatlı detaylar
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.07] text-[#3F1D2B] sm:text-6xl lg:text-7xl">
              <span className="block">Irmak&apos;ın</span>
              <span className="block">Minik</span>
              <span className="block">Atölyesi</span>
              <span className="mt-3 block text-[#E85D8F]">pembe</span>
              <span className="block text-[#E85D8F]">neşeyle</span>
              <span className="block text-[#E85D8F]">açılıyor</span>
            </h1>
            <p className="mt-6 max-w-[20rem] break-words text-lg leading-8 text-[#5B3343] sm:max-w-2xl sm:text-xl">
              Minik figürler, çiçekli küpeler ve sana özel tatlı aksesuarlar
              için canlı, hareketli ve içi enerji dolu bir vitrin hazırlanıyor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
          </div>
          <div className="home-visual-enter min-w-0">
            <CraftPreview />
          </div>
        </div>

        <div className="home-strip-enter relative z-10 mx-auto -mt-2 grid max-w-6xl gap-4 pb-6 md:grid-cols-3 lg:-mt-10">
          {previewProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <FeaturedCollections />
      <NewProducts />
    </main>
  );
}
