create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where auth_user_id = auth.uid()
      and active = true
  );
$$;

alter table public.categories enable row level security;
alter table public.collections enable row level security;
alter table public.products enable row level security;
alter table public.product_collections enable row level security;
alter table public.product_images enable row level security;
alter table public.product_variants enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.admin_users enable row level security;

create policy "Public can read published categories"
  on public.categories
  for select
  using (status = 'published');

create policy "Admins can manage categories"
  on public.categories
  for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public can read published collections"
  on public.collections
  for select
  using (status = 'published');

create policy "Admins can manage collections"
  on public.collections
  for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public can read published products"
  on public.products
  for select
  using (status = 'published');

create policy "Admins can manage products"
  on public.products
  for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public can read published product collections"
  on public.product_collections
  for select
  using (
    exists (
      select 1
      from public.products
      where products.id = product_collections.product_id
        and products.status = 'published'
    )
    and exists (
      select 1
      from public.collections
      where collections.id = product_collections.collection_id
        and collections.status = 'published'
    )
  );

create policy "Admins can manage product collections"
  on public.product_collections
  for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public can read images for published products"
  on public.product_images
  for select
  using (
    exists (
      select 1
      from public.products
      where products.id = product_images.product_id
        and products.status = 'published'
    )
  );

create policy "Admins can manage product images"
  on public.product_images
  for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public can read published variants for published products"
  on public.product_variants
  for select
  using (
    status = 'published'
    and exists (
      select 1
      from public.products
      where products.id = product_variants.product_id
        and products.status = 'published'
    )
  );

create policy "Admins can manage product variants"
  on public.product_variants
  for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can manage orders"
  on public.orders
  for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can manage order items"
  on public.order_items
  for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can read active admin users"
  on public.admin_users
  for select
  using (public.is_admin());

create policy "Admins can manage admin users"
  on public.admin_users
  for all
  using (public.is_admin())
  with check (public.is_admin());
