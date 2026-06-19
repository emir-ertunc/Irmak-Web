import { z } from "zod";

export const entityStatusSchema = z.enum(["draft", "published", "archived"]);

export const orderStatusSchema = z.enum([
  "new",
  "confirmed",
  "preparing",
  "ready",
  "shipped",
  "completed",
  "cancelled"
]);

export const adminRoleSchema = z.enum(["owner", "manager", "editor"]);

const slugSchema = z
  .string()
  .min(2)
  .max(120)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

const moneyCentsSchema = z.number().int().min(0);

export const categorySchema = z.object({
  slug: slugSchema,
  name: z.string().min(2).max(120),
  description: z.string().max(500).nullable().optional(),
  sortOrder: z.number().int().min(0).default(0),
  status: entityStatusSchema.default("draft")
});

export const collectionSchema = categorySchema;

export const productSchema = z
  .object({
    slug: slugSchema,
    name: z.string().min(2).max(160),
    description: z.string().min(10).max(4000),
    shortDescription: z.string().max(240).nullable().optional(),
    materialNotes: z.string().max(1000).nullable().optional(),
    careInstructions: z.string().max(1000).nullable().optional(),
    basePriceCents: moneyCentsSchema,
    currency: z.literal("TRY").default("TRY"),
    status: entityStatusSchema.default("draft"),
    featured: z.boolean().default(false),
    madeToOrder: z.boolean().default(true),
    productionDaysMin: z.number().int().min(0).nullable().optional(),
    productionDaysMax: z.number().int().min(0).nullable().optional(),
    categoryId: z.uuid().nullable().optional()
  })
  .refine(
    (value) =>
      value.productionDaysMin == null ||
      value.productionDaysMax == null ||
      value.productionDaysMin <= value.productionDaysMax,
    {
      message: "Minimum üretim süresi maksimum süreden büyük olamaz.",
      path: ["productionDaysMin"]
    }
  );

export const productImageSchema = z.object({
  productId: z.uuid(),
  storagePath: z.string().min(3).max(500),
  altText: z.string().min(2).max(180),
  sortOrder: z.number().int().min(0).default(0),
  isCover: z.boolean().default(false)
});

export const productVariantSchema = z.object({
  productId: z.uuid(),
  name: z.string().min(2).max(140),
  sku: z.string().max(80).nullable().optional(),
  colorName: z.string().max(80).nullable().optional(),
  optionLabel: z.string().max(120).nullable().optional(),
  priceDeltaCents: z.number().int().default(0),
  stockQuantity: z.number().int().min(0).default(0),
  status: entityStatusSchema.default("draft")
});

export const customerSnapshotSchema = z.object({
  fullName: z.string().min(2).max(160),
  email: z.email().nullable().optional(),
  phone: z.string().min(7).max(30),
  city: z.string().max(80).nullable().optional(),
  district: z.string().max(80).nullable().optional(),
  addressLine: z.string().max(500).nullable().optional()
});

export const orderSchema = z.object({
  status: orderStatusSchema.default("new"),
  customer: customerSnapshotSchema,
  customerNote: z.string().max(1000).nullable().optional(),
  adminNote: z.string().max(1000).nullable().optional(),
  subtotalCents: moneyCentsSchema,
  shippingCents: moneyCentsSchema.nullable().optional(),
  totalCents: moneyCentsSchema,
  currency: z.literal("TRY").default("TRY")
});

export const orderItemSchema = z.object({
  orderId: z.uuid(),
  productId: z.uuid().nullable().optional(),
  variantId: z.uuid().nullable().optional(),
  productName: z.string().min(2).max(160),
  variantName: z.string().max(140).nullable().optional(),
  quantity: z.number().int().min(1),
  unitPriceCents: moneyCentsSchema,
  totalCents: moneyCentsSchema,
  personalizationNote: z.string().max(1000).nullable().optional()
});

export const adminUserSchema = z.object({
  authUserId: z.uuid(),
  email: z.email(),
  fullName: z.string().max(160).nullable().optional(),
  role: adminRoleSchema.default("editor"),
  active: z.boolean().default(true)
});

export type ProductInput = z.infer<typeof productSchema>;
export type CategoryInput = z.infer<typeof categorySchema>;
export type CollectionInput = z.infer<typeof collectionSchema>;
export type ProductImageInput = z.infer<typeof productImageSchema>;
export type ProductVariantInput = z.infer<typeof productVariantSchema>;
export type OrderInput = z.infer<typeof orderSchema>;
export type OrderItemInput = z.infer<typeof orderItemSchema>;
export type AdminUserInput = z.infer<typeof adminUserSchema>;
