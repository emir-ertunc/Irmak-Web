export type EntityStatus = "draft" | "published" | "archived";

export type OrderStatus =
  | "new"
  | "confirmed"
  | "preparing"
  | "ready"
  | "shipped"
  | "completed"
  | "cancelled";

export type AdminRole = "owner" | "manager" | "editor";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string | null;
  materialNotes: string | null;
  careInstructions: string | null;
  basePriceCents: number;
  currency: "TRY";
  status: EntityStatus;
  featured: boolean;
  madeToOrder: boolean;
  productionDaysMin: number | null;
  productionDaysMax: number | null;
  categoryId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  sortOrder: number;
  status: EntityStatus;
  createdAt: string;
  updatedAt: string;
};

export type Collection = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  sortOrder: number;
  status: EntityStatus;
  createdAt: string;
  updatedAt: string;
};

export type ProductImage = {
  id: string;
  productId: string;
  storagePath: string;
  altText: string;
  sortOrder: number;
  isCover: boolean;
  createdAt: string;
};

export type ProductVariant = {
  id: string;
  productId: string;
  name: string;
  sku: string | null;
  colorName: string | null;
  optionLabel: string | null;
  priceDeltaCents: number;
  stockQuantity: number;
  status: EntityStatus;
  createdAt: string;
  updatedAt: string;
};

export type ProductCollection = {
  productId: string;
  collectionId: string;
};

export type CustomerSnapshot = {
  fullName: string;
  email: string | null;
  phone: string;
  city: string | null;
  district: string | null;
  addressLine: string | null;
};

export type Order = {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  customer: CustomerSnapshot;
  customerNote: string | null;
  adminNote: string | null;
  subtotalCents: number;
  shippingCents: number | null;
  totalCents: number;
  currency: "TRY";
  createdAt: string;
  updatedAt: string;
};

export type OrderItem = {
  id: string;
  orderId: string;
  productId: string | null;
  variantId: string | null;
  productName: string;
  variantName: string | null;
  quantity: number;
  unitPriceCents: number;
  totalCents: number;
  personalizationNote: string | null;
  createdAt: string;
};

export type AdminUser = {
  id: string;
  authUserId: string;
  email: string;
  fullName: string | null;
  role: AdminRole;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};
