import { createSupabaseServerClient } from "@/lib/supabase/server";
import { tableNames } from "@/lib/supabase/schema";
import { toDataQueryError } from "@/server/queries/errors";
import type {
  Category,
  Product,
  ProductImage,
  ProductVariant
} from "@/types/models";

type CategoryRow = {
  created_at: string;
  description: string | null;
  id: string;
  name: string;
  slug: string;
  sort_order: number;
  status: Category["status"];
  updated_at: string;
};

type ProductImageRow = {
  alt_text: string;
  created_at: string;
  id: string;
  is_cover: boolean;
  product_id: string;
  sort_order: number;
  storage_path: string;
};

type ProductVariantRow = {
  color_name: string | null;
  created_at: string;
  id: string;
  name: string;
  option_label: string | null;
  price_delta_cents: number;
  product_id: string;
  sku: string | null;
  status: ProductVariant["status"];
  stock_quantity: number;
  updated_at: string;
};

type ProductRow = {
  base_price_cents: number;
  care_instructions: string | null;
  category_id: string | null;
  categories: CategoryRow | CategoryRow[] | null;
  created_at: string;
  currency: Product["currency"];
  description: string;
  featured: boolean;
  id: string;
  made_to_order: boolean;
  material_notes: string | null;
  name: string;
  product_images: ProductImageRow[];
  product_variants: ProductVariantRow[];
  production_days_max: number | null;
  production_days_min: number | null;
  short_description: string | null;
  slug: string;
  status: Product["status"];
  updated_at: string;
};

export type ProductListItem = Product & {
  category: Category | null;
  coverImage: ProductImage | null;
  variants: ProductVariant[];
};

export type ProductDetail = ProductListItem & {
  images: ProductImage[];
};

const productSelect = `
  id,
  slug,
  name,
  description,
  short_description,
  material_notes,
  care_instructions,
  base_price_cents,
  currency,
  status,
  featured,
  made_to_order,
  production_days_min,
  production_days_max,
  category_id,
  created_at,
  updated_at,
  categories (
    id,
    slug,
    name,
    description,
    sort_order,
    status,
    created_at,
    updated_at
  ),
  product_images (
    id,
    product_id,
    storage_path,
    alt_text,
    sort_order,
    is_cover,
    created_at
  ),
  product_variants (
    id,
    product_id,
    name,
    sku,
    color_name,
    option_label,
    price_delta_cents,
    stock_quantity,
    status,
    created_at,
    updated_at
  )
`;

function mapCategory(row: CategoryRow | CategoryRow[] | null): Category | null {
  const category = Array.isArray(row) ? row[0] : row;

  if (!category) {
    return null;
  }

  return {
    createdAt: category.created_at,
    description: category.description,
    id: category.id,
    name: category.name,
    slug: category.slug,
    sortOrder: category.sort_order,
    status: category.status,
    updatedAt: category.updated_at
  };
}

function mapImage(row: ProductImageRow): ProductImage {
  return {
    altText: row.alt_text,
    createdAt: row.created_at,
    id: row.id,
    isCover: row.is_cover,
    productId: row.product_id,
    sortOrder: row.sort_order,
    storagePath: row.storage_path
  };
}

function mapVariant(row: ProductVariantRow): ProductVariant {
  return {
    colorName: row.color_name,
    createdAt: row.created_at,
    id: row.id,
    name: row.name,
    optionLabel: row.option_label,
    priceDeltaCents: row.price_delta_cents,
    productId: row.product_id,
    sku: row.sku,
    status: row.status,
    stockQuantity: row.stock_quantity,
    updatedAt: row.updated_at
  };
}

function mapProduct(row: ProductRow): ProductDetail {
  const images = [...row.product_images].sort(
    (first, second) => first.sort_order - second.sort_order
  );
  const variants = [...row.product_variants]
    .filter((variant) => variant.status === "published")
    .sort((first, second) => first.name.localeCompare(second.name, "tr"))
    .map(mapVariant);
  const mappedImages = images.map(mapImage);

  return {
    basePriceCents: row.base_price_cents,
    careInstructions: row.care_instructions,
    category: mapCategory(row.categories),
    categoryId: row.category_id,
    coverImage:
      mappedImages.find((image) => image.isCover) ?? mappedImages[0] ?? null,
    createdAt: row.created_at,
    currency: row.currency,
    description: row.description,
    featured: row.featured,
    id: row.id,
    images: mappedImages,
    madeToOrder: row.made_to_order,
    materialNotes: row.material_notes,
    name: row.name,
    productionDaysMax: row.production_days_max,
    productionDaysMin: row.production_days_min,
    shortDescription: row.short_description,
    slug: row.slug,
    status: row.status,
    updatedAt: row.updated_at,
    variants
  };
}

export async function listPublishedProducts(): Promise<ProductListItem[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from(tableNames.products)
    .select(productSelect)
    .eq("status", "published")
    .eq("product_variants.status", "published")
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    throw toDataQueryError("Yayınlanan ürünler okunamadı.", error);
  }

  return ((data ?? []) as unknown as ProductRow[]).map(mapProduct);
}

export async function getPublishedProductBySlug(
  slug: string
): Promise<ProductDetail | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from(tableNames.products)
    .select(productSelect)
    .eq("status", "published")
    .eq("product_variants.status", "published")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw toDataQueryError("Ürün detayı okunamadı.", error);
  }

  return data ? mapProduct(data as unknown as ProductRow) : null;
}
