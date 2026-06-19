# Faz 3.3 - Admin Girişi

Bu dosya, admin oturum açma, oturum kapatma, admin yetki kontrolü ve yetkisiz erişim davranışını takip eder.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 3.1 Veri Modeli](faz-3-1-veri-modeli.md)
- [Faz 3.2 Veri Katmanı](faz-3-2-veri-katmani.md)

## Faz Durumu

- [x] Admin giriş ekranı yapıldı.
- [x] Oturum açma ve oturum kapatma akışı eklendi.
- [x] Admin rotaları koruma altına alındı.
- [x] Yetkisiz erişim ekranı ve yönlendirmesi eklendi.
- [x] Temel güvenlik kontrolleri yapıldı.

## Eklenen Dosyalar

- [x] `src/components/admin/admin-login-form.tsx`
- [x] `src/lib/auth/admin.ts`
- [x] `src/server/actions/auth.ts`
- [x] `src/app/admin/yetkisiz/page.tsx`

## Güncellenen Dosyalar

- [x] `src/app/admin/giris/page.tsx`
- [x] `src/app/admin/page.tsx`
- [x] `src/lib/supabase/server.ts`
- [x] `package.json`
- [x] `pnpm-lock.yaml`

## Güvenlik Notları

- [x] Admin giriş formu Supabase Auth `signInWithPassword` akışına bağlandı.
- [x] Oturum bilgisi cookie tabanlı server client ile okunur.
- [x] `/admin` rotası oturum ve aktif `admin_users` kaydı olmadan açılmaz.
- [x] Aktif admin kaydı bulunmayan kullanıcı `/admin/yetkisiz` rotasına yönlendirilir.
- [x] Supabase ortam değişkenleri eksikse giriş ekranında kontrollü uyarı gösterilir.
- [x] Admin ve login sayfaları statikleşmemesi için dynamic olarak işaretlendi.

## Kontroller

- [x] `pnpm format:check`
- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`
- [x] Markdown bağlantıları kontrol edildi.
- [x] Conflict marker kontrolü yapıldı.
- [x] İstenmeyen atıf veya etiket ifadeleri kontrol edildi.

## Faz 3.4 İçin Notlar

- [x] Migration ve seed çıktıları tekrar kontrol edildi.
- [x] Admin giriş akışı gerçek ortam değişkenleri olmadan yerel redirect ve uyarı davranışlarıyla kontrol edildi.
- [x] Faz 3 dokümanları güncellenip GitHub işlemleri tamamlandı.
