import { ShoppingBag } from "lucide-react";
import { ProductCard } from "@/components/shop/product-card";
import { LinkButton } from "@/components/ui/button";
import { FieldLabel, Select } from "@/components/ui/form";
import { previewProducts } from "@/lib/catalog/preview-products";

export default function CatalogPage() {
  return (
    <main className="px-6 py-10 sm:px-10">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-[#E85D8F]">
              Katalog
            </p>
            <h1 className="mt-2 text-4xl font-bold text-[#3F1D2B]">
              Çiçekli vitrin
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5B3343]">
              Küpe, figür ve aksesuarlar için ilk rota hazır. Canlı ürün
              verileri ilerleyen aşamalarda buraya bağlanacak.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <FieldLabel className="min-w-48">
              Kategori
              <Select defaultValue="all">
                <option value="all">Tümü</option>
                <option value="kupe">Küpe</option>
                <option value="figur">Figür</option>
                <option value="aksesuar">Aksesuar</option>
              </Select>
            </FieldLabel>
            <LinkButton
              href="/sepet"
              icon={<ShoppingBag aria-hidden="true" size={17} />}
              variant="secondary"
            >
              Sepete Git
            </LinkButton>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {previewProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
