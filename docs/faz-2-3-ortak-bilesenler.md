# Faz 2.3 - Ortak Bileşenler

Bu dosya, uygulamanın müşteri ve admin tarafında tekrar kullanılacak temel arayüz bileşenlerini takip eder.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 2.2 Temel Rotalar](faz-2-2-temel-rotalar.md)

## Faz Durumu

- [x] Layout, header, footer ve mobil menü bileşenleri eklendi.
- [x] Button, input, select, modal, card ve badge bileşenleri hazırlandı.
- [x] Toast bildirim bileşeni eklendi.
- [x] Tema renkleri ve tasarım tokenları merkezi hale getirildi.
- [x] Animasyon süreleri, easing değerleri ve hareket tokenları eklendi.
- [x] Çiçekli dekor ve parıltı bileşenleri hazırlandı.
- [x] Erişilebilir odak stilleri eklendi.

## Eklenen Bileşenler

- [x] `src/components/shop/site-header.tsx`
- [x] `src/components/shop/site-footer.tsx`
- [x] `src/components/shop/site-shell.tsx`
- [x] `src/components/shop/product-card.tsx`
- [x] `src/components/admin/admin-page-shell.tsx`
- [x] `src/components/ui/button.tsx`
- [x] `src/components/ui/badge.tsx`
- [x] `src/components/ui/card.tsx`
- [x] `src/components/ui/form.tsx`
- [x] `src/components/ui/modal.tsx`
- [x] `src/components/ui/toast.tsx`
- [x] `src/components/ui/decor.tsx`
- [x] `src/styles/theme.ts`

## Uygulama Notları

- [x] Müşteri tarafı route grubu `src/app/(shop)/layout.tsx` ile ortak shell üzerinden çalışır.
- [x] Header masaüstü menü ve mobil açılır menü içerir.
- [x] Ürün kartları ortak `ProductCard` bileşenine taşındı.
- [x] Admin giriş ekranı ortak form ve card bileşenlerini kullanır.
- [x] Admin ana paneli ortak admin page shell, badge ve card bileşenlerini kullanır.
- [x] Global CSS içine tema, yüzey, hareket ve odak davranışı tokenları eklendi.

## Kontroller

- [x] `pnpm format:check`
- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`
- [x] `/`, `/urunler`, `/urunler/pembe-kalp-kupe`, `/sepet`, `/admin/giris`, `/admin` rotaları yerelde kontrol edildi.

## Faz 2.4 İçin Notlar

- [x] Faz 2 kapanışı öncesi lint, typecheck ve build tekrar çalıştırıldı.
- [x] Temel rotalar tarayıcıda son kez kontrol edildi.
- [x] Faz 2 dokümanları ve GitHub işlemleri tamamlandı.
