# Supabase Veri Katmanı

Bu klasör, veritabanı migration ve geliştirme seed dosyalarını tutar.

## Dosyalar

- `migrations/202606190001_initial_data_model.sql`: Başlangıç veri modeli.
- `seed.sql`: Yerel geliştirme için örnek kategori, koleksiyon, ürün, görsel ve varyant kayıtları.
- `policies/`: RLS politikaları Faz 3.3 ve 3.4 kapsamında eklenecek.

## Çalıştırma Notları

- Supabase CLI kurulumu proje makinesinde ayrıca yapılmalıdır.
- Yerel geliştirme veritabanı hazırlandıktan sonra migration dosyaları Supabase CLI üzerinden uygulanır.
- `seed.sql` tekrar çalıştırılabilir yapıdadır; kayıtlar sabit id ve `on conflict` kurallarıyla güncellenir.
- Gerçek gizli değerler repoya eklenmez; gerekli değişkenler `.env.example` üzerinden takip edilir.
