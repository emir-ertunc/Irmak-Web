import { ArrowLeft, ShoppingBag } from "lucide-react";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import {
  getPreviewProduct,
  previewProducts
} from "@/lib/catalog/preview-products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return previewProducts.map((product) => ({
    slug: product.slug
  }));
}

export default async function ProductDetailPage({
  params
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getPreviewProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="px-6 py-10 sm:px-10">
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div
          className={`min-h-[28rem] rounded-lg bg-gradient-to-br ${product.palette} shadow-sm`}
        />
        <div>
          <LinkButton
            href="/urunler"
            icon={<ArrowLeft aria-hidden="true" size={17} />}
            size="sm"
            variant="ghost"
          >
            Ürünlere Dön
          </LinkButton>
          <div className="mt-6">
            <Badge>{product.badge}</Badge>
          </div>
          <h1 className="mt-3 text-4xl font-bold text-[#3F1D2B] sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#5B3343]">
            {product.description} Malzeme, stok, fiyat ve varyant bilgileri veri
            modeli tamamlandıktan sonra yönetim panelinden güncellenecek.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton
              href="/sepet"
              icon={<ShoppingBag aria-hidden="true" size={17} />}
            >
              Sepete Ekle
            </LinkButton>
            <LinkButton href="/admin/giris" variant="secondary">
              Panel Girişi
            </LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
