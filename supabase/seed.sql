insert into public.categories (
  id,
  slug,
  name,
  description,
  sort_order,
  status
) values
  (
    '11111111-1111-4111-8111-111111111111',
    'kupeler',
    'Küpeler',
    'El yapımı neşeli küpe modelleri.',
    10,
    'published'
  ),
  (
    '22222222-2222-4222-8222-222222222222',
    'figurler',
    'Figürler',
    'Minik masa üstü ve hediye figürleri.',
    20,
    'published'
  ),
  (
    '33333333-3333-4333-8333-333333333333',
    'aksesuarlar',
    'Aksesuarlar',
    'Çanta, anahtarlık ve küçük tamamlayıcılar.',
    30,
    'published'
  )
on conflict (id) do update set
  description = excluded.description,
  name = excluded.name,
  sort_order = excluded.sort_order,
  status = excluded.status,
  updated_at = now();

insert into public.collections (
  id,
  slug,
  name,
  description,
  sort_order,
  status
) values
  (
    '44444444-4444-4444-8444-444444444444',
    'cicekli-vitrin',
    'Çiçekli Vitrin',
    'Pembe ve çiçekli ilk vitrin ürünleri.',
    10,
    'published'
  )
on conflict (id) do update set
  description = excluded.description,
  name = excluded.name,
  sort_order = excluded.sort_order,
  status = excluded.status,
  updated_at = now();

insert into public.products (
  id,
  slug,
  name,
  description,
  short_description,
  material_notes,
  care_instructions,
  base_price_cents,
  status,
  featured,
  made_to_order,
  production_days_min,
  production_days_max,
  category_id
) values
  (
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
    'pembe-kalp-kupe',
    'Pembe Kalp Küpe',
    'Pastel pembe tonlu, minik kalp detaylı neşeli bir küpe taslağı.',
    'Pembe kalp detaylı tatlı küpe.',
    'Malzeme bilgisi ürün netleştiğinde güncellenecek.',
    'Nemden uzak tutulması önerilir.',
    0,
    'published',
    true,
    true,
    3,
    7,
    '11111111-1111-4111-8111-111111111111'
  ),
  (
    'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
    'minik-cilek-figur',
    'Minik Çilek Figür',
    'Çilek formundan ilham alan, masa üstü veya hediye kutusu için minik figür.',
    'Çilek formunda minik figür.',
    'Malzeme bilgisi ürün netleştiğinde güncellenecek.',
    'Doğrudan güneş altında uzun süre bırakılmamalıdır.',
    0,
    'published',
    true,
    true,
    4,
    8,
    '22222222-2222-4222-8222-222222222222'
  ),
  (
    'cccccccc-cccc-4ccc-8ccc-cccccccccccc',
    'papatya-anahtarlik',
    'Papatya Anahtarlık',
    'Papatya hissi veren, çantaya veya anahtarlığa takılabilecek canlı aksesuar.',
    'Papatya detaylı canlı aksesuar.',
    'Malzeme bilgisi ürün netleştiğinde güncellenecek.',
    'Sert darbelerden korunmalıdır.',
    0,
    'published',
    false,
    true,
    3,
    6,
    '33333333-3333-4333-8333-333333333333'
  )
on conflict (id) do update set
  base_price_cents = excluded.base_price_cents,
  care_instructions = excluded.care_instructions,
  category_id = excluded.category_id,
  description = excluded.description,
  featured = excluded.featured,
  made_to_order = excluded.made_to_order,
  material_notes = excluded.material_notes,
  name = excluded.name,
  production_days_max = excluded.production_days_max,
  production_days_min = excluded.production_days_min,
  short_description = excluded.short_description,
  status = excluded.status,
  updated_at = now();

insert into public.product_collections (product_id, collection_id) values
  ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', '44444444-4444-4444-8444-444444444444'),
  ('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', '44444444-4444-4444-8444-444444444444'),
  ('cccccccc-cccc-4ccc-8ccc-cccccccccccc', '44444444-4444-4444-8444-444444444444')
on conflict (product_id, collection_id) do nothing;

insert into public.product_images (
  id,
  product_id,
  storage_path,
  alt_text,
  sort_order,
  is_cover
) values
  (
    'dddddddd-dddd-4ddd-8ddd-dddddddddddd',
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
    'products/pembe-kalp-kupe/cover.jpg',
    'Pembe kalp küpe kapak görseli',
    0,
    true
  ),
  (
    'eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee',
    'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
    'products/minik-cilek-figur/cover.jpg',
    'Minik çilek figür kapak görseli',
    0,
    true
  ),
  (
    'ffffffff-ffff-4fff-8fff-ffffffffffff',
    'cccccccc-cccc-4ccc-8ccc-cccccccccccc',
    'products/papatya-anahtarlik/cover.jpg',
    'Papatya anahtarlık kapak görseli',
    0,
    true
  )
on conflict (id) do update set
  alt_text = excluded.alt_text,
  is_cover = excluded.is_cover,
  sort_order = excluded.sort_order,
  storage_path = excluded.storage_path;

insert into public.product_variants (
  id,
  product_id,
  name,
  sku,
  color_name,
  option_label,
  price_delta_cents,
  stock_quantity,
  status
) values
  (
    '99999999-9999-4999-8999-999999999991',
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
    'Standart',
    'PKK-STD',
    'Pembe',
    'Standart çift',
    0,
    3,
    'published'
  ),
  (
    '99999999-9999-4999-8999-999999999992',
    'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
    'Standart',
    'MCF-STD',
    'Kırmızı',
    'Minik boy',
    0,
    2,
    'published'
  ),
  (
    '99999999-9999-4999-8999-999999999993',
    'cccccccc-cccc-4ccc-8ccc-cccccccccccc',
    'Standart',
    'PAN-STD',
    'Sarı',
    'Anahtarlık aparatı',
    0,
    4,
    'published'
  )
on conflict (id) do update set
  color_name = excluded.color_name,
  name = excluded.name,
  option_label = excluded.option_label,
  price_delta_cents = excluded.price_delta_cents,
  sku = excluded.sku,
  status = excluded.status,
  stock_quantity = excluded.stock_quantity,
  updated_at = now();
