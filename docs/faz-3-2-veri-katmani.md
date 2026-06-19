# Faz 3.2 - Veri Katmanı

Bu dosya, Supabase bağlantı yardımcıları, şema yönetimi, örnek geliştirme verileri ve ürün okuma sorgularını takip eder.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 3.1 Veri Modeli](faz-3-1-veri-modeli.md)

## Faz Durumu

- [x] Veritabanı bağlantısı yapılandırıldı.
- [x] Migration ve şema yönetimi düzenlendi.
- [x] Örnek geliştirme verileri hazırlandı.
- [x] Ürün listeleme ve detay okuma servisleri eklendi.
- [x] Hata yakalama ve loglama yaklaşımı belirlendi.

## Eklenen Dosyalar

- [x] `src/lib/env.ts`
- [x] `src/lib/supabase/client.ts`
- [x] `src/lib/supabase/server.ts`
- [x] `src/server/queries/errors.ts`
- [x] `src/server/queries/products.ts`
- [x] `supabase/README.md`
- [x] `supabase/seed.sql`

## Bağlantı Kararları

- [x] Public Supabase client `NEXT_PUBLIC_SUPABASE_URL` ve `NEXT_PUBLIC_SUPABASE_ANON_KEY` ile hazırlanır.
- [x] Server Supabase client aynı public anon key ile okuma sorguları için hazırlanır.
- [x] Service role client yalnızca server tarafında ve zorunlu yönetim işlemleri için ayrı yardımcıyla oluşturulur.
- [x] Ortam değişkenleri Zod şemasıyla doğrulanır ve eksik değerler kontrollü hata üretir.
- [x] Migration ve seed çalıştırma notları `supabase/README.md` içinde tutulur.

## Sorgu Kararları

- [x] Yayındaki ürünler `listPublishedProducts` ile okunur.
- [x] Ürün detayı `getPublishedProductBySlug` ile okunur.
- [x] Ürün, kategori, görsel ve varyant kayıtları camelCase domain tiplerine map edilir.
- [x] Veri okuma hataları `DataQueryError` ile sarmalanır.

## Geliştirme Verisi

- [x] Başlangıç kategori kayıtları eklendi.
- [x] Başlangıç koleksiyon kaydı eklendi.
- [x] Üç ürün, kapak görseli ve varyant örneği eklendi.
- [x] Seed dosyası tekrar çalıştırılabilir olacak şekilde `on conflict` kurallarıyla yazıldı.

## Kontroller

- [x] `pnpm format:check`
- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`
- [x] Markdown bağlantıları kontrol edildi.
- [x] Conflict marker kontrolü yapıldı.
- [x] İstenmeyen atıf veya etiket ifadeleri kontrol edildi.

## Faz 3.3 İçin Notlar

- [x] Admin giriş ekranı Supabase Auth akışına bağlandı.
- [x] Admin rotaları auth ve admin kullanıcı kontrolüyle korundu.
- [x] Yetkisiz erişim davranışı netleştirildi.
