# Faz 2.1 - Proje Kurulumu

Bu dosya, uygulama iskeleti, paket yöneticisi, kalite scriptleri, ortam değişkeni örneği ve başlangıç klasör yapısı kararlarını tutar.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 0.3 Proje Yapısı Kararı](faz-0-3-proje-yapisi-karari.md)
- [Faz 1.4 Faz Kapanışı ve GitHub](faz-1-4-faz-kapanisi-github.md)

## Faz Durumu

- [x] Uygulama iskeleti oluşturuldu.
- [x] Paket yöneticisi ve scriptler düzenlendi.
- [x] Lint, format ve temel kalite komutları eklendi.
- [x] Ortam değişkenleri için örnek dosya hazırlandı.
- [x] Klasör yapısı müşteri tarafı, admin tarafı, ortak bileşenler ve veri katmanı olarak ayrıldı.

## Kurulum Kararları

- [x] Framework: Next.js App Router.
- [x] Dil: TypeScript.
- [x] Paket yöneticisi: pnpm.
- [x] Stil altyapısı: Tailwind CSS.
- [x] Lint: ESLint.
- [x] Format: Prettier.
- [x] Build hedefi: Next.js production build.

## Eklenen Ana Dosyalar

- [x] `package.json`
- [x] `pnpm-lock.yaml`
- [x] `pnpm-workspace.yaml`
- [x] `next.config.ts`
- [x] `tsconfig.json`
- [x] `eslint.config.mjs`
- [x] `postcss.config.mjs`
- [x] `.prettierrc.json`
- [x] `.prettierignore`
- [x] `.gitignore`
- [x] `.env.example`

## Scriptler

- [x] `pnpm dev`
- [x] `pnpm build`
- [x] `pnpm start`
- [x] `pnpm lint`
- [x] `pnpm format`
- [x] `pnpm format:check`
- [x] `pnpm typecheck`

## Ortam Değişkenleri

`.env.example` içinde gerçek gizli değer olmadan aşağıdaki alanlar hazırlandı:

- [x] `NEXT_PUBLIC_SITE_URL`
- [x] `NEXT_PUBLIC_SUPABASE_URL`
- [x] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [x] `SUPABASE_SERVICE_ROLE_KEY`
- [x] `SUPABASE_DB_URL`
- [x] `APP_ENV`
- [x] `UPLOAD_MAX_MB`
- [x] `ORDER_NOTIFICATION_ADDRESS`

## Klasör Yapısı

Başlangıçta oluşturulan ana klasörler:

- [x] `src/app`
- [x] `src/app/(shop)`
- [x] `src/components/admin`
- [x] `src/components/shop`
- [x] `src/components/ui`
- [x] `src/lib/auth`
- [x] `src/lib/cart`
- [x] `src/lib/supabase`
- [x] `src/lib/validation`
- [x] `src/server/actions`
- [x] `src/server/queries`
- [x] `src/styles`
- [x] `src/types`
- [x] `supabase/migrations`
- [x] `supabase/policies`

Not:

- [x] Henüz gerçek içerik olmayan klasörlerde Git takibi için `.gitkeep` kullanıldı.

## Başlangıç Uygulama İskeleti

- [x] `src/app/layout.tsx` içinde Türkçe HTML dili, başlangıç metadata ve global CSS bağlantısı tanımlandı.
- [x] `src/app/(shop)/page.tsx` içinde geçici ana sayfa iskeleti oluşturuldu.
- [x] `src/app/globals.css` içinde marka renk değişkenleri, başlangıç arka planı ve hareket azaltma kuralı eklendi.

## Kurulum Sırasında Düzeltilenler

- [x] PowerShell script policy nedeniyle `npm.ps1` yerine `npm.cmd` ve `pnpm` kullanıldı.
- [x] Pnpm build script izinleri `pnpm-workspace.yaml` içinde açık boolean değerlerle netleştirildi.
- [x] ESLint 10 peer uyumsuzluğu nedeniyle ESLint 9 sürümüne çekildi.
- [x] Prettier kontrolünün eski dokümanları zorla yeniden formatlamaması için `docs` klasörü format kapsamı dışında bırakıldı.
- [x] JSX içindeki apostrof lint hatası düzeltildi.

## Kontroller

- [x] `pnpm install`
- [x] `pnpm peers check`
- [x] `pnpm format:check`
- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`

Kontrol sonucu:

- [x] Peer dependency sorunu yok.
- [x] Format kontrolü geçti.
- [x] Lint geçti.
- [x] Typecheck geçti.
- [x] Production build geçti.

## Faz 2.2 İçin Notlar

- [x] Ana sayfa rotası mevcut geçici iskelet üzerinden gerçek sayfa yapısına genişletildi.
- [x] Katalog, ürün detay, sepet, admin giriş ve admin ana panel rotaları Faz 2.2 kapsamında oluşturuldu.
- [x] Faz 2.2 sonunda temel rotalar tarayıcıda tekrar kontrol edildi.
