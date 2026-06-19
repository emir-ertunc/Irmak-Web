import type { CSSProperties } from "react";
import { Flower2, Heart, ShoppingBag, Sparkles } from "lucide-react";
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
    </main>
  );
}
