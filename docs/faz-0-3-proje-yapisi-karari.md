# Faz 0.3 - Proje Yapısı Kararı

Bu dosya, projenin teknik yönünü, rota yapısını, ortam değişkeni yaklaşımını ve ilk teknik risk listesini tutar.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 0.1 Kapsam Netleştirme](faz-0-1-kapsam-netlestirme.md)
- [Faz 0.2 Rakip ve İlham Analizi](faz-0-2-rakip-ilham-analizi.md)

## Faz Durumu

- [x] Kullanılacak frontend framework ve paket yöneticisi seçildi.
- [x] Kullanılacak veritabanı, görsel saklama ve kimlik doğrulama yaklaşımı seçildi.
- [x] Admin paneli rota yapısı belirlendi.
- [x] Ortam değişkenleri, örnek yapılandırma ve gizli bilgi yönetimi planlandı.
- [x] İlk teknik risk listesi çıkarıldı.

## Kontrol Edilen Resmi Kaynaklar

- [x] [Next.js Docs](https://nextjs.org/docs)
- [x] [Next.js App Router Docs](https://nextjs.org/docs/app)
- [x] [Supabase Docs](https://supabase.com/docs)
- [x] [Supabase Row Level Security Docs](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [x] [Vercel Environment Variables Docs](https://vercel.com/docs/environment-variables)
- [x] [Motion Docs](https://motion.dev/docs/react)
- [x] [Tailwind CSS Framework Guides](https://tailwindcss.com/docs/installation/framework-guides)
- [x] [React Hook Form Docs](https://react-hook-form.com/get-started)
- [x] [Zod Docs](https://zod.dev/)

## Ana Teknik Karar

İlk geliştirme yönü:

- [x] Frontend framework: Next.js App Router
- [x] Dil: TypeScript
- [x] Paket yöneticisi: pnpm
- [x] Stil sistemi: Tailwind CSS, CSS değişkenleri ve yerel UI bileşenleri
- [x] İkonlar: lucide-react
- [x] Animasyon: Motion ve CSS transition/keyframe kombinasyonu
- [x] Form yönetimi: React Hook Form
- [x] Veri doğrulama: Zod
- [x] Yayın hedefi: Vercel
- [x] Veritabanı: Supabase Postgres
- [x] Kimlik doğrulama: Supabase Auth
- [x] Görsel saklama: Supabase Storage

Bu seçimlerin nedeni:

- [x] Müşteri vitrini ve admin paneli aynı projede net rota ayrımıyla geliştirilebilir.
- [x] App Router yapısı layout, metadata, server-side veri okuma ve rota grupları için uygundur.
- [x] TypeScript ürün, varyant, sipariş ve admin formlarında hata riskini azaltır.
- [x] Tailwind CSS pembe, çiçekli, cıvıl cıvıl tasarım sistemini hızlı ve tutarlı kurmayı kolaylaştırır.
- [x] Motion, bol animasyon ihtiyacını kontrollü bileşen seviyesinde yönetmek için uygundur.
- [x] Supabase tek projede veritabanı, auth ve storage ihtiyaçlarını kapsar.
- [x] Vercel, Next.js projesi için yayın ve ortam değişkeni yönetimini sade tutar.

## Uygulama Katmanları

Müşteri vitrini:

- [x] Ana sayfa, katalog, ürün detay, sepet, favoriler ve sipariş talebi akışlarını içerir.
- [x] Ürün ve koleksiyon verilerini yalnızca yayındaki kayıtlar üzerinden okur.
- [x] Sepet ilk sürümde istemci tarafında tutulur, sipariş talebinde sunucuya aktarılır.
- [x] Animasyonlar ürün incelemeyi engellemeyecek şekilde kısa ve performanslı olur.

Admin paneli:

- [x] Admin girişi gerektirir.
- [x] Ürün, kategori, koleksiyon, stok, görsel, sipariş ve içerik yönetimini içerir.
- [x] Admin yetkisi sadece arayüzde değil, veri katmanında da kontrol edilir.
- [x] Admin ekranlarında sade, hızlı ve tablo/form odaklı düzen kullanılır.

Veri katmanı:

- [x] Ürün, varyant, görsel, kategori, koleksiyon, sipariş ve sipariş kalemi tabloları Supabase Postgres üzerinde planlanır.
- [x] Yayındaki ürünler herkese okunabilir olur.
- [x] Taslak, arşiv, sipariş ve müşteri verileri admin yetkisi dışında okunamaz.
- [x] RLS politikaları faz 3'te veri modelinin parçası olarak yazılır.

Görsel katmanı:

- [x] Ürün görselleri public read, admin write mantığıyla tutulur.
- [x] Özel sipariş referans görselleri private tutulur.
- [x] Görsel dosya boyutu ve formatı admin yükleme akışında sınırlandırılır.
- [x] Ürün görselleri için kapak, galeri ve sıralama bilgisi ayrı tutulur.

## Önerilen Klasör Yapısı

Faz 2'de kurulacak başlangıç yapısı:

```text
src/
  app/
    (shop)/
      page.tsx
      urunler/
      koleksiyonlar/
      sepet/
      favoriler/
      siparis-talebi/
      iletisim/
    admin/
      giris/
      page.tsx
      urunler/
      kategoriler/
      koleksiyonlar/
      siparisler/
      icerik/
      ayarlar/
  components/
    admin/
    shop/
    ui/
  lib/
    auth/
    cart/
    supabase/
    validation/
  server/
    actions/
    queries/
  styles/
  types/
supabase/
  migrations/
  policies/
public/
```

Klasör kuralları:

- [x] Müşteri vitrini ve admin bileşenleri ayrı tutulur.
- [x] Ortak buton, input, modal, rozet ve kart bileşenleri `components/ui` altında tutulur.
- [x] Veri okuma işlemleri `server/queries`, veri değiştirme işlemleri `server/actions` altında toplanır.
- [x] Supabase bağlantı yardımcıları `lib/supabase` altında tutulur.
- [x] Form şemaları `lib/validation` altında tutulur.

## Müşteri Rota Yapısı

Başlangıç müşteri rotaları:

- [x] `/`
- [x] `/urunler`
- [x] `/urunler/[slug]`
- [x] `/koleksiyonlar/[slug]`
- [x] `/sepet`
- [x] `/favoriler`
- [x] `/siparis-talebi`
- [x] `/siparis-talebi/basarili`
- [x] `/iletisim`

Sonraki sürüm adayları:

- [ ] `/sss`
- [ ] `/bakim-rehberi`
- [ ] `/ozel-siparis`
- [ ] `/siparis-sorgula`

## Admin Rota Yapısı

Başlangıç admin rotaları:

- [x] `/admin/giris`
- [x] `/admin`
- [x] `/admin/urunler`
- [x] `/admin/urunler/yeni`
- [x] `/admin/urunler/[id]`
- [x] `/admin/kategoriler`
- [x] `/admin/koleksiyonlar`
- [x] `/admin/siparisler`
- [x] `/admin/siparisler/[id]`
- [x] `/admin/icerik`
- [x] `/admin/ayarlar`

Admin koruma kuralları:

- [x] `/admin/giris` dışındaki tüm admin rotaları oturum ister.
- [x] Oturum açmış kullanıcı ayrıca admin yetki tablosunda bulunmalıdır.
- [x] Yetkisiz kullanıcı admin rotalarından çıkarılır.
- [x] Admin veri işlemleri yalnızca server action veya server route üzerinden yapılır.

## Kimlik Doğrulama ve Yetki Yaklaşımı

- [x] Admin girişi Supabase Auth ile yapılır.
- [x] İlk sürümde müşteri hesabı zorunlu değildir.
- [x] Admin kullanıcıları `admin_users` veya benzeri bir tabloda tutulur.
- [x] Admin yetkisi e-posta metnine güvenilerek değil, auth kullanıcı kimliği üzerinden kontrol edilir.
- [x] RLS politikaları public, authenticated ve admin erişimlerini ayrı ele alır.
- [x] Service role anahtarı yalnızca server tarafında, zorunlu durumlarda kullanılır.

## Ortam Değişkenleri

Planlanan örnek değişkenler:

- [x] `NEXT_PUBLIC_SITE_URL`
- [x] `NEXT_PUBLIC_SUPABASE_URL`
- [x] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [x] `SUPABASE_SERVICE_ROLE_KEY`
- [x] `SUPABASE_DB_URL`
- [x] `APP_ENV`
- [x] `UPLOAD_MAX_MB`
- [x] `ORDER_NOTIFICATION_ADDRESS`

Gizli bilgi kuralları:

- [x] Gerçek değerler repoya yazılmaz.
- [x] Faz 2'de yalnızca `.env.example` hazırlanır.
- [x] `.env.local` repoya eklenmez.
- [x] Public değişkenler yalnızca tarayıcıda görünmesi güvenli değerleri taşır.
- [x] Service role ve DB bağlantı değeri sadece server ortamında tutulur.
- [x] Üretim değerleri Vercel ortam değişkenleri üzerinden yönetilir.

## Veri ve Storage İlkeleri

Başlangıç tabloları:

- [x] `products`
- [x] `product_images`
- [x] `product_variants`
- [x] `categories`
- [x] `collections`
- [x] `orders`
- [x] `order_items`
- [x] `order_notes`
- [x] `admin_users`
- [x] `site_settings`

Başlangıç storage bucket planı:

- [x] `product-images`
- [x] `custom-order-references`
- [x] `site-content`

Erişim ilkeleri:

- [x] Yayındaki ürün görselleri public okunabilir.
- [x] Ürün görseli yükleme, silme ve sıralama admin yetkisi ister.
- [x] Özel sipariş referans görselleri public olmaz.
- [x] Sipariş ve müşteri bilgileri admin yetkisi dışında okunamaz.

## İlk Teknik Risk Listesi

- [x] Yoğun animasyon mobil cihazlarda performans düşürebilir.
  Çözüm: hareket tokenları, kısa süreler, transform/opacity önceliği, `prefers-reduced-motion` desteği.
- [x] RLS politikaları yanlış kurulursa veri görünürlüğü veya admin erişimi sorun yaratabilir.
  Çözüm: faz 3'te fail-closed politikalar, admin test kullanıcısı ve yetki testleri.
- [x] Görsel yükleme kontrolsüz kalırsa storage maliyeti ve yavaş sayfa yüklenmesi oluşabilir.
  Çözüm: dosya boyutu limiti, görsel optimizasyonu, lazy loading ve kapak görseli standardı.
- [x] Ürün varyant modeli erken sade kurulursa stok ve fiyat farkları sonradan zorlaşabilir.
  Çözüm: varyantları fiyat ve stok etkileyebilecek ayrı kayıtlar olarak planlamak.
- [x] İlk sürümde canlı ödeme olmaması müşteri beklentisini karıştırabilir.
  Çözüm: tüm sepet ve başarı ekranlarında "sipariş talebi" dilini açık kullanmak.
- [x] Admin yetkisi yalnızca frontend kontrolüne bırakılırsa güvenlik açığı oluşur.
  Çözüm: server action, RLS ve admin tablo kontrolünü birlikte kullanmak.
- [x] Ortam değişkeni hataları deploy sırasında sistemi bozabilir.
  Çözüm: `.env.example`, başlangıç doğrulaması ve Vercel ortamlarının ayrı yönetimi.
- [x] Ürün malzeme bilgisinin belirsiz olması yanlış açıklama riskine yol açabilir.
  Çözüm: malzeme, bakım ve uyarı alanlarını ürün bazında düzenlenebilir tutmak.

## Faz 2 İçin Uygulama Notları

- [ ] Next.js projesi App Router, TypeScript, Tailwind CSS ve pnpm ile kurulmalıdır.
- [ ] İlk klasör yapısı bu dosyadaki öneriye göre açılmalıdır.
- [ ] Animasyon tokenları ve tema değişkenleri merkezi dosyalarda tutulmalıdır.
- [ ] `.env.example` hazırlanmalı, gerçek değer içermemelidir.
- [ ] Admin ve müşteri layout ayrımı ilk kurulumda yapılmalıdır.

## Faz 3 İçin Uygulama Notları

- [ ] Supabase projesi ve yerel bağlantı akışı hazırlanmalıdır.
- [ ] Tablolar migration ile oluşturulmalıdır.
- [ ] RLS tüm hassas tablolarda varsayılan kapalı erişim mantığıyla yazılmalıdır.
- [ ] İlk admin kullanıcısı güvenli ve tekrarlanabilir şekilde tanımlanmalıdır.
- [ ] Storage bucket politikaları ürün ve özel sipariş görselleri için ayrı yazılmalıdır.
