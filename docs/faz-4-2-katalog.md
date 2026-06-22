# Faz 4.2 - Katalog

Bu dosya, ürün katalog ekranının listeleme, filtreleme ve sıralama adımlarını takip eder.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 4.1 Ana Sayfa](faz-4-1-ana-sayfa.md)

## Faz Durumu

- [x] Ürün listeleme ekranı yapıldı.
- [x] Kategori filtresi eklendi.
- [ ] Fiyat aralığı filtresi eklenecek.
- [ ] Stok durumu filtresi eklenecek.
- [ ] Sıralama seçenekleri eklenecek.
- [ ] Mobil filtre paneli eklenecek.

## Uygulama Notları

- [x] `/urunler` sayfası geçici katalog iskeletinden ürün listeleme ekranına çevrildi.
- [x] Katalog başlığı, kısa açıklama, ürün/kategori özeti ve sepet bağlantısı eklendi.
- [x] Kategori özet kartları eklendi ve ilgili kategori filtresine bağlandı.
- [x] Ürün grid'i mevcut ürün kartlarıyla ayrı bir listeleme bölümü olarak düzenlendi.
- [x] Çalışmayan kategori select'i kaldırıldı; filtreler ayrı adımlarda eklenecek.
- [x] Kategori filtresi URL parametresiyle çalışacak şekilde eklendi.
- [x] Filtre rozetleri ve kategori kartları aynı filtre davranışını kullanacak şekilde düzenlendi.
- [x] Kategoriye göre gösterilen ürün sayısı katalog özetinde ve liste başlığında görünür hale getirildi.
- [x] Geçersiz kategori parametresi tüm ürünlere dönecek şekilde güvenli hale getirildi.

## Değişen Dosyalar

- [x] `src/app/(shop)/urunler/page.tsx`
- [x] `docs/gelistirme-plani.md`
- [x] `docs/faz-4-2-katalog.md`

## Kontroller

- [x] `pnpm format:check`
- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`
- [x] Katalog sayfası yerelde masaüstü ve mobil genişlikte kontrol edildi.

## Faz 4.2 Sonraki Adımlar

- [x] Kategori filtresi eklendi.
- [ ] Fiyat aralığı filtresi eklenecek.
- [ ] Stok durumu filtresi eklenecek.
- [ ] Sıralama seçenekleri eklenecek.
- [ ] Mobil filtre paneli eklenecek.
