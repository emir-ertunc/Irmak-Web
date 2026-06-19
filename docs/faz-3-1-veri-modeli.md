# Faz 3.1 - Veri Modeli

Bu dosya, ürün, kategori, koleksiyon, görsel, varyant, sipariş ve admin kullanıcı veri modellerini takip eder.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 0.3 Proje Yapısı Kararı](faz-0-3-proje-yapisi-karari.md)
- [Faz 2.4 Faz Kapanışı ve GitHub](faz-2-4-faz-kapanisi-github.md)

## Faz Durumu

- [x] Ürün modeli hazırlandı.
- [x] Kategori ve koleksiyon modeli hazırlandı.
- [x] Ürün görseli ve varyant modeli hazırlandı.
- [x] Sipariş, sipariş kalemi ve müşteri bilgisi modeli hazırlandı.
- [x] Admin kullanıcı ve rol yapısı hazırlandı.

## Eklenen Dosyalar

- [x] `src/types/models.ts`
- [x] `src/lib/validation/models.ts`
- [x] `src/lib/supabase/schema.ts`
- [x] `supabase/migrations/202606190001_initial_data_model.sql`

## Model Kapsamı

- [x] `categories`
- [x] `collections`
- [x] `products`
- [x] `product_collections`
- [x] `product_images`
- [x] `product_variants`
- [x] `orders`
- [x] `order_items`
- [x] `admin_users`

## Uygulama Notları

- [x] Fiyat alanları kuruş bazlı integer olarak planlandı.
- [x] İlk para birimi `TRY` ile sınırlandı.
- [x] Ürün, kategori, koleksiyon ve varyant durumları `draft`, `published`, `archived` olarak tanımlandı.
- [x] Sipariş durumları `new`, `confirmed`, `preparing`, `ready`, `shipped`, `completed`, `cancelled` olarak tanımlandı.
- [x] Admin rolleri `owner`, `manager`, `editor` olarak tanımlandı.
- [x] Müşteri bilgisi sipariş içinde snapshot olarak tutulacak şekilde modellendi.
- [x] Ürün görsellerinde tek kapak görseli için veritabanı index'i planlandı.
- [x] Admin yetkisi auth kullanıcı kimliğiyle ilişkilendirilecek şekilde modellendi.

## Kontroller

- [x] `pnpm format:check`
- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`
- [x] Markdown bağlantıları kontrol edildi.
- [x] Conflict marker kontrolü yapıldı.
- [x] İstenmeyen atıf veya etiket ifadeleri kontrol edildi.

## Faz 3.2 İçin Notlar

- [x] Supabase bağlantı yardımcıları hazırlandı.
- [x] Migration çalıştırma akışı netleştirildi.
- [x] Örnek geliştirme verileri eklendi.
- [x] Ürün listeleme ve detay okuma sorguları yazıldı.
