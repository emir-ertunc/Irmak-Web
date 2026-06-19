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
- [ ] Öne çıkan koleksiyon alanı sonraki ana sayfa adımında ele alınacak.
- [ ] Yeni ürünler alanı sonraki ana sayfa adımında ele alınacak.
- [ ] En sevilen ürünler veya önerilenler alanı sonraki ana sayfa adımında ele alınacak.
- [ ] El yapımı hissini anlatan kısa içerik alanı sonraki ana sayfa adımında ele alınacak.

## Uygulama Notları

- [x] Ana sayfa ilk ekranı pembe ağırlıklı, çiçekli ve canlı bir hero düzenine çevrildi.
- [x] Dekoratif çiçekler `transform` ve `opacity` temelli animasyonlarla hareketlendirildi.
- [x] Giriş animasyonları metin, görsel önizleme ve ürün şeridi için ayrı katmanlara ayrıldı.
- [x] İlk ekranda ürün kartlarından bir kısmı görünür bırakılarak vitrine geçiş hissi korundu.
- [x] Görsel önizleme alanında figür, küpe ve hediye hissini veren neşeli parçalar kullanıldı.
- [x] Hareket azaltma tercihi mevcut global kuralla desteklenmeye devam eder.

## Değişen Dosyalar

- [x] `src/app/(shop)/page.tsx`
- [x] `src/app/globals.css`
- [x] `docs/gelistirme-plani.md`

## Kontroller

- [x] `pnpm format:check`
- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`
- [x] Ana sayfa yerelde masaüstü ve mobil genişlikte kontrol edildi.

## Faz 4.1 Sonraki Adımlar

- [ ] Öne çıkan koleksiyon alanı eklenecek.
- [ ] Yeni ürünler alanı eklenecek.
- [ ] En sevilen ürünler veya önerilenler alanı eklenecek.
- [ ] El yapımı hissini anlatan kısa içerik alanı eklenecek.
