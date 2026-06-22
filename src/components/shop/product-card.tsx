import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { PreviewProduct } from "@/lib/catalog/preview-products";

export function ProductCard({ product }: { product: PreviewProduct }) {
  return (
    <Link
      href={`/urunler/${product.slug}`}
      className="group overflow-hidden rounded-lg border border-white/70 bg-white/75 shadow-sm outline-none transition hover:-translate-y-1 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#E85D8F]"
    >
      <div className={`h-52 bg-gradient-to-br ${product.palette}`} />
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Badge>{product.category}</Badge>
          <span className="shrink-0 text-sm font-semibold text-[#5B3343]">
            {product.price}
          </span>
        </div>
        <h2 className="text-xl font-bold text-[#3F1D2B]">{product.name}</h2>
        <p className="mt-2 inline-flex rounded-full bg-[#ECFFF5] px-3 py-1 text-xs font-black text-[#23895C]">
          {product.stockLabel}
        </p>
        <p className="mt-2 text-sm leading-6 text-[#5B3343]">
          {product.description}
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#E85D8F] transition group-hover:translate-x-1">
          Detaya Bak
          <ArrowRight aria-hidden="true" size={16} />
        </p>
      </div>
    </Link>
  );
}
