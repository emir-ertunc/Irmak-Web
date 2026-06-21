# Faz 4.1 - Ana Sayfa

Bu dosya, ana sayfanın ilk ekran görsel düzeni ve performanslı dekoratif giriş hareketlerini takip eder.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 3.4 Faz Kapanışı ve GitHub](faz-3-4-faz-kapanisi-github.md)
- [Faz 1.3 Animasyon İlkeleri](faz-1-3-animasyon-ilkeleri.md)

## Faz Durumu

- [x] İlk ekran pembe, çiçekli, cıvıl cıvıl ve bol hareketli görsel düzenle uygulandı.
- [x] İlk ekranda performanslı çiçek süzülmesi ve dekoratif giriş hareketi eklendi.
- [x] Öne çıkan koleksiyon alanı eklendi.
- [x] Yeni ürünler alanı eklendi.
- [ ] En sevilen ürünler veya önerilenler alanı sonraki ana sayfa adımında ele alınacak.
- [ ] El yapımı hissini anlatan kısa içerik alanı sonraki ana sayfa adımında ele alınacak.

## Uygulama Notları

- [x] Ana sayfa ilk ekranı pembe ağırlıklı, çiçekli ve canlı bir hero düzenine çevrildi.
- [x] Dekoratif çiçekler `transform` ve `opacity` temelli animasyonlarla hareketlendirildi.
- [x] Çiçek süzülmeleri ayrı süre ve yön değerleriyle daha doğal hale getirildi.
- [x] Dekoratif hareket katmanı `contain`, `will-change` ve GPU dostu transform kurallarıyla izole edildi.
- [x] Mobilde dekoratif çiçek yoğunluğu azaltılarak performans ve okunurluk korundu.
- [x] Giriş animasyonları metin, görsel önizleme ve ürün şeridi için ayrı katmanlara ayrıldı.
- [x] İlk ekranda ürün kartlarından bir kısmı görünür bırakılarak vitrine geçiş hissi korundu.
- [x] Görsel önizleme alanında figür, küpe ve hediye hissini veren neşeli parçalar kullanıldı.
- [x] Öne çıkan koleksiyon alanı üç canlı koleksiyon bağlantısıyla eklendi.
- [x] Koleksiyon kartları katalog rotasına yönlenecek şekilde hazırlandı.
- [x] Yeni ürünler alanı ürün detay sayfalarına giden üç kartla eklendi.
- [x] Yeni ürün kartları canlı renk geçişleri ve hafif hover hareketiyle hazırlandı.
- [x] Hareket azaltma tercihi mevcut global kuralla desteklenmeye devam eder.

## Değişen Dosyalar

- [x] `src/app/(shop)/page.tsx`
- [x] `src/app/globals.css`
- [x] `docs/gelistirme-plani.md`
- [x] `docs/faz-4-1-ana-sayfa.md`

## Kontroller

- [x] `pnpm format:check`
- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`
- [x] Ana sayfa yerelde masaüstü ve mobil genişlikte kontrol edildi.

## Faz 4.1 Sonraki Adımlar

- [x] Öne çıkan koleksiyon alanı eklendi.
- [x] Yeni ürünler alanı eklendi.
- [ ] En sevilen ürünler veya önerilenler alanı eklenecek.
- [ ] El yapımı hissini anlatan kısa içerik alanı eklenecek.
