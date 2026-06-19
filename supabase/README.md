# Supabase Veri Katmanı

Bu klasör, veritabanı migration ve geliştirme seed dosyalarını tutar.

## Dosyalar

- `migrations/202606190001_initial_data_model.sql`: Başlangıç veri modeli.
- `migrations/202606190002_enable_rls_policies.sql`: RLS ve temel erişim politikaları.
- `seed.sql`: Yerel geliştirme için örnek kategori, koleksiyon, ürün, görsel ve varyant kayıtları.
- `policies/`: Ek veya daha özel policy dosyaları gerektiğinde burada tutulur.

## Çalıştırma Notları

- Supabase CLI kurulumu proje makinesinde ayrıca yapılmalıdır.
- Yerel geliştirme veritabanı hazırlandıktan sonra migration dosyaları Supabase CLI üzerinden uygulanır.
- `seed.sql` tekrar çalıştırılabilir yapıdadır; kayıtlar sabit id ve `on conflict` kurallarıyla güncellenir.
- Gerçek gizli değerler repoya eklenmez; gerekli değişkenler `.env.example` üzerinden takip edilir.
