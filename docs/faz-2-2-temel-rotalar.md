# Faz 2.2 - Temel Rotalar

Bu dosya, müşteri tarafı ve admin tarafı için başlangıç rota iskeletini takip eder.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 2.1 Proje Kurulumu](faz-2-1-proje-kurulumu.md)

## Faz Durumu

- [x] Ana sayfa rotası genişletildi.
- [x] Katalog rotası oluşturuldu.
- [x] Ürün detay rotası oluşturuldu.
- [x] Sepet rotası oluşturuldu.
- [x] Admin giriş rotası oluşturuldu.
- [x] Admin ana panel rotası oluşturuldu.

## Oluşturulan Rotalar

- [x] `/`
- [x] `/urunler`
- [x] `/urunler/[slug]`
- [x] `/sepet`
- [x] `/admin/giris`
- [x] `/admin`

## Uygulama Notları

- [x] Rotalar Next.js App Router yapısında oluşturuldu.
- [x] Katalog ve ürün detay sayfaları geçici ürün önizleme verisini kullanır.
- [x] Sepet rotası boş durum ve sipariş özeti iskeletiyle hazırlandı.
- [x] Admin giriş ve ana panel rotaları veri bağlantısı olmadan arayüz iskeleti olarak hazırlandı.
- [x] Ana sayfadaki kırık sipariş bağlantısı sepet rotasına yönlendirildi.

## Kontroller

- [x] `pnpm format:check`
- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`
- [x] `/`, `/urunler`, `/urunler/pembe-kalp-kupe`, `/sepet`, `/admin/giris`, `/admin` rotaları yerelde kontrol edildi.

## Faz 2.3 İçin Notlar

- [x] Header, footer ve mobil menü ortak bileşenleri eklendi.
- [x] Button, input, card ve badge gibi tekrar kullanılabilir UI bileşenleri ayrıştırıldı.
- [x] Tema ve hareket tokenları merkezi hale getirildi.
