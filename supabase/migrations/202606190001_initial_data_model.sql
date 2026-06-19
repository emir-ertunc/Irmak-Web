create extension if not exists "pgcrypto";

create type public.entity_status as enum ('draft', 'published', 'archived');
create type public.order_status as enum (
  'new',
  'confirmed',
  'preparing',
  'ready',
  'shipped',
  'completed',
  'cancelled'
);
create type public.admin_role as enum ('owner', 'manager', 'editor');

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  sort_order integer not null default 0 check (sort_order >= 0),
  status public.entity_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint categories_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$')
);

create table public.collections (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  sort_order integer not null default 0 check (sort_order >= 0),
  status public.entity_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint collections_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$')
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null,
  short_description text,
  material_notes text,
  care_instructions text,
  base_price_cents integer not null check (base_price_cents >= 0),
  currency char(3) not null default 'TRY' check (currency = 'TRY'),
  status public.entity_status not null default 'draft',
  featured boolean not null default false,
  made_to_order boolean not null default true,
  production_days_min integer check (production_days_min is null or production_days_min >= 0),
  production_days_max integer check (production_days_max is null or production_days_max >= 0),
  category_id uuid references public.categories(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint products_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  constraint products_production_days_order check (
    production_days_min is null
    or production_days_max is null
    or production_days_min <= production_days_max
  )
);

create table public.product_collections (
  product_id uuid not null references public.products(id) on delete cascade,
  collection_id uuid not null references public.collections(id) on delete cascade,
  primary key (product_id, collection_id)
);

create table public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  storage_path text not null,
  alt_text text not null,
  sort_order integer not null default 0 check (sort_order >= 0),
  is_cover boolean not null default false,
  created_at timestamptz not null default now()
);

create unique index product_images_single_cover
  on public.product_images(product_id)
  where is_cover;

create table public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  name text not null,
  sku text unique,
  color_name text,
  option_label text,
  price_delta_cents integer not null default 0,
  stock_quantity integer not null default 0 check (stock_quantity >= 0),
  status public.entity_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  status public.order_status not null default 'new',
  customer jsonb not null,
  customer_note text,
  admin_note text,
  subtotal_cents integer not null check (subtotal_cents >= 0),
  shipping_cents integer check (shipping_cents is null or shipping_cents >= 0),
  total_cents integer not null check (total_cents >= 0),
  currency char(3) not null default 'TRY' check (currency = 'TRY'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  variant_id uuid references public.product_variants(id) on delete set null,
  product_name text not null,
  variant_name text,
  quantity integer not null check (quantity > 0),
  unit_price_cents integer not null check (unit_price_cents >= 0),
  total_cents integer not null check (total_cents >= 0),
  personalization_note text,
  created_at timestamptz not null default now()
);

create table public.admin_users (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid not null unique references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  role public.admin_role not null default 'editor',
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index products_status_idx on public.products(status);
create index products_category_id_idx on public.products(category_id);
create index product_images_product_id_idx on public.product_images(product_id);
create index product_variants_product_id_idx on public.product_variants(product_id);
create index orders_status_created_at_idx on public.orders(status, created_at desc);
create index order_items_order_id_idx on public.order_items(order_id);
create index admin_users_auth_user_id_idx on public.admin_users(auth_user_id);
