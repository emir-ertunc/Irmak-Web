# Faz 1.2 - Arayüz Haritası

Bu dosya, müşteri vitrini ve admin paneli için sayfa haritasını, responsive kırılım noktalarını, navigasyon yapısını ve temel durum ekranlarını tanımlar.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 0.3 Proje Yapısı Kararı](faz-0-3-proje-yapisi-karari.md)
- [Faz 1.1 Marka Temeli](faz-1-1-marka-temeli.md)

## Faz Durumu

- [x] Müşteri tarafı sayfa haritası çıkarıldı.
- [x] Admin paneli sayfa haritası çıkarıldı.
- [x] Mobil, tablet ve masaüstü kırılım noktaları belirlendi.
- [x] Ana navigasyon, kategori menüsü ve alt navigasyon planlandı.
- [x] Boş durum, yükleniyor durumu ve hata durumu tasarlandı.

## Arayüz İlkesi

- [x] Müşteri vitrini pembe, çiçekli, parıltılı, sıcak ve hareketli olacak.
- [x] Admin paneli aynı marka rengini taşıyacak ama daha sade, hızlı ve tablo/form odaklı olacak.
- [x] Müşteri tarafında keşif ve ürün görselleri öncelikli olacak.
- [x] Admin tarafında hızlı işlem, net veri, filtreleme ve form doğruluğu öncelikli olacak.
- [x] Her sayfa mobilde tek elle kullanılabilir şekilde planlanacak.

## Müşteri Tarafı Sayfa Haritası

### Ana Sayfa - `/`

Amaç:

- [x] Marka hissini ilk ekranda göstermek.
- [x] Ürün keşfine hızlı geçiş vermek.
- [x] Yeni ürünler, koleksiyonlar ve özel sipariş akışını öne çıkarmak.

Bölümler:

- [x] Hero alanı: marka adı, kısa mesaj, iki ana çağrı butonu.
- [x] Öne çıkan koleksiyonlar.
- [x] Yeni eklenen ürünler.
- [x] En sevilen veya önerilen ürünler.
- [x] Özel sipariş daveti.
- [x] El yapımı üretim hissini anlatan kısa bölüm.
- [x] Mini sık sorulan sorular bağlantısı.

### Ürünler - `/urunler`

Amaç:

- [x] Tüm yayındaki ürünleri taranabilir katalog düzeninde göstermek.
- [x] Kategori, koleksiyon, fiyat ve stok durumuna göre filtreleme sağlamak.

Bölümler:

- [x] Sayfa başlığı ve kısa açıklama.
- [x] Kategori sekmeleri veya yatay kategori menüsü.
- [x] Filtre paneli.
- [x] Sıralama kontrolü.
- [x] Ürün grid alanı.
- [x] Boş sonuç durumu.

### Ürün Detayı - `/urunler/[slug]`

Amaç:

- [x] Ürünü net inceletmek.
- [x] Varyant, kişiselleştirme ve sipariş talebi kararını kolaylaştırmak.

Bölümler:

- [x] Görsel galeri.
- [x] Ürün adı, fiyat, stok ve üretim süresi.
- [x] Varyant seçimi.
- [x] Kişiselleştirme notu.
- [x] Sepete ekleme.
- [x] Malzeme, bakım, ölçü ve uyarı blokları.
- [x] Benzer ürünler.

### Koleksiyon Detayı - `/koleksiyonlar/[slug]`

Amaç:

- [x] Belirli tema veya ürün grubunu tek sayfada sunmak.

Bölümler:

- [x] Koleksiyon başlığı ve açıklaması.
- [x] Koleksiyon kapak görseli veya dekoratif başlık alanı.
- [x] Koleksiyon ürün grid'i.
- [x] İlgili özel sipariş çağrısı.

### Sepet - `/sepet`

Amaç:

- [x] Ürünleri, varyantları ve kişiselleştirme notlarını kontrol ettirmek.
- [x] Sipariş talebi akışına geçiş sağlamak.

Bölümler:

- [x] Sepet satırları.
- [x] Varyant ve not özeti.
- [x] Adet güncelleme.
- [x] Ürün kaldırma.
- [x] Tahmini toplam.
- [x] Sipariş talebi butonu.
- [x] Boş sepet durumu.

### Favoriler - `/favoriler`

Amaç:

- [x] Beğenilen ürünleri geçici olarak saklamak.
- [x] Katalog ve ürün detayına geri dönüşü kolaylaştırmak.

Bölümler:

- [x] Favori ürün grid'i.
- [x] Favoriden çıkarma.
- [x] Sepete ekleme veya ürün detayına gitme.
- [x] Boş favori durumu.

### Sipariş Talebi - `/siparis-talebi`

Amaç:

- [x] Sepetteki ürünler için teslimat ve iletişim bilgisi almak.
- [x] Canlı ödeme yerine talep oluşturma dilini net tutmak.

Bölümler:

- [x] Sipariş özeti.
- [x] İletişim bilgileri formu.
- [x] Teslimat bilgileri formu.
- [x] Sipariş notu.
- [x] Talep oluşturma butonu.
- [x] Kargo ve ödeme bilgisinin sonra netleşeceğini anlatan kısa not.

### Sipariş Talebi Başarılı - `/siparis-talebi/basarili`

Amaç:

- [x] Kullanıcıya talebin alındığını net ve sıcak bir dille bildirmek.

Bölümler:

- [x] Başarı mesajı.
- [x] Talep numarası.
- [x] Sonraki adımlar.
- [x] Ürünlere dön veya ana sayfaya dön butonları.

### İletişim - `/iletisim`

Amaç:

- [x] Özel sipariş, ürün sorusu ve genel iletişim için yönlendirme yapmak.

Bölümler:

- [x] Kısa açıklama.
- [x] İletişim kanalları.
- [x] Özel sipariş yönlendirmesi.
- [x] Sık sorulan sorular bağlantısı.

## Admin Paneli Sayfa Haritası

### Admin Giriş - `/admin/giris`

Amaç:

- [x] Admin kullanıcısının güvenli şekilde oturum açmasını sağlamak.

Bölümler:

- [x] E-posta alanı.
- [x] Şifre alanı.
- [x] Giriş butonu.
- [x] Hata mesajı.

### Admin Ana Panel - `/admin`

Amaç:

- [x] Güncel iş durumunu hızlı özetlemek.

Bölümler:

- [x] Yeni sipariş talepleri.
- [x] Stok uyarıları.
- [x] Son eklenen ürünler.
- [x] Hızlı işlem bağlantıları.
- [x] Son admin notları.

### Ürün Yönetimi - `/admin/urunler`

Amaç:

- [x] Ürünleri aramak, filtrelemek, düzenlemek ve yayına almak.

Bölümler:

- [x] Ürün arama.
- [x] Kategori, durum ve stok filtreleri.
- [x] Ürün tablosu.
- [x] Yeni ürün butonu.
- [x] Toplu durum kontrolü.

### Ürün Oluşturma - `/admin/urunler/yeni`

Amaç:

- [x] Yeni ürün kaydı oluşturmak.

Bölümler:

- [x] Temel bilgiler.
- [x] Fiyat ve stok.
- [x] Kategori ve koleksiyon.
- [x] Varyantlar.
- [x] Görsel galeri.
- [x] Malzeme, bakım ve uyarılar.
- [x] Yayın durumu.

### Ürün Düzenleme - `/admin/urunler/[id]`

Amaç:

- [x] Var olan ürünü düzenlemek ve yayındaki görünümünü yönetmek.

Bölümler:

- [x] Ürün formu.
- [x] Görsel sıralama.
- [x] Stok ve varyant düzenleme.
- [x] Ön izleme bağlantısı.
- [x] Arşivle veya yayına al işlemleri.

### Kategoriler - `/admin/kategoriler`

Amaç:

- [x] Kategori oluşturmak, düzenlemek ve sıralamak.

Bölümler:

- [x] Kategori listesi.
- [x] Yeni kategori formu.
- [x] Sıralama kontrolü.
- [x] Yayın durumu.

### Koleksiyonlar - `/admin/koleksiyonlar`

Amaç:

- [x] Tema veya kampanya bazlı ürün gruplarını yönetmek.

Bölümler:

- [x] Koleksiyon listesi.
- [x] Kapak görseli.
- [x] Açıklama.
- [x] Ürün seçimi.
- [x] Sıralama.

### Siparişler - `/admin/siparisler`

Amaç:

- [x] Sipariş taleplerini takip etmek ve durumlarını güncellemek.

Bölümler:

- [x] Sipariş arama.
- [x] Durum filtreleri.
- [x] Tarih filtreleri.
- [x] Sipariş tablosu.
- [x] Yeni talep vurgusu.

### Sipariş Detayı - `/admin/siparisler/[id]`

Amaç:

- [x] Sipariş talebini, müşteri bilgilerini ve ürün detaylarını yönetmek.

Bölümler:

- [x] Müşteri bilgileri.
- [x] Teslimat bilgileri.
- [x] Sipariş kalemleri.
- [x] Varyant ve kişiselleştirme notları.
- [x] Durum güncelleme.
- [x] Admin notları.
- [x] Müşteriyle iletişim notu.

### İçerik Yönetimi - `/admin/icerik`

Amaç:

- [x] Ana sayfa vitrin alanlarını ve duyuruları yönetmek.

Bölümler:

- [x] Öne çıkan koleksiyonlar.
- [x] Yeni ürün alanı seçimi.
- [x] Duyuru bandı.
- [x] Özel sipariş çağrısı.
- [x] Ana sayfa kısa metinleri.

### Ayarlar - `/admin/ayarlar`

Amaç:

- [x] Site ayarlarını ve temel iletişim bilgilerini yönetmek.

Bölümler:

- [x] Site adı.
- [x] Kısa açıklama.
- [x] İletişim bilgileri.
- [x] Sipariş talebi bilgilendirme metni.
- [x] Kargo ve ödeme notları.

## Responsive Kırılım Noktaları

- [x] Mobil küçük: 360px ve üstü.
- [x] Mobil standart: 390px ve üstü.
- [x] Tablet: 768px ve üstü.
- [x] Küçük masaüstü: 1024px ve üstü.
- [x] Geniş masaüstü: 1280px ve üstü.
- [x] Çok geniş: 1536px ve üstü.

Davranış kararları:

- [x] Mobilde ana navigasyon alt veya hamburger menü ile sadeleşir.
- [x] Mobilde katalog filtreleri tam ekran veya alttan açılan panel olur.
- [x] Tablet ve masaüstünde filtreler yan panel olarak gösterilebilir.
- [x] Admin panelinde mobilde liste kart düzenine, masaüstünde tablo düzenine geçilir.
- [x] Sabit formatlı UI öğelerinde genişlik ve yükseklik responsive sınırlarla korunur.
- [x] Metinler buton ve kart içinde taşmayacak şekilde satır kırar.

## Ana Navigasyon

Müşteri üst navigasyon:

- [x] Logo veya marka adı.
- [x] Ürünler.
- [x] Koleksiyonlar.
- [x] Özel Sipariş.
- [x] İletişim.
- [x] Favoriler ikonu.
- [x] Sepet ikonu.

Mobil navigasyon:

- [x] Marka adı.
- [x] Menü butonu.
- [x] Sepet ikonu.
- [x] Açılır menüde ürünler, koleksiyonlar, özel sipariş, iletişim ve favoriler.

Admin navigasyon:

- [x] Dashboard.
- [x] Ürünler.
- [x] Kategoriler.
- [x] Koleksiyonlar.
- [x] Siparişler.
- [x] İçerik.
- [x] Ayarlar.
- [x] Çıkış.

## Kategori Menüsü

Müşteri katalog kategorileri:

- [x] Tümü.
- [x] Figürler.
- [x] Küpeler.
- [x] Anahtarlıklar.
- [x] Kolye Uçları.
- [x] Mini Objeler.
- [x] Özel Sipariş.

Kategori davranışı:

- [x] Mobilde yatay kaydırılabilir sekme veya filtre paneli içinde gösterilir.
- [x] Masaüstünde katalog üstünde sekme ve yan filtre birlikte kullanılabilir.
- [x] Aktif kategori güçlü ama sakin renkle vurgulanır.
- [x] Kategori değişiminde ürün grid'i yumuşak geçişle yenilenir.

## Alt Navigasyon ve Footer

Footer alanları:

- [x] Marka kısa açıklaması.
- [x] Ürün kategorileri.
- [x] Özel sipariş bağlantısı.
- [x] İletişim bağlantısı.
- [x] Bakım bilgisi veya sık sorulan sorular bağlantısı.
- [x] Sipariş talebi açıklaması.

Mobil alt hızlı erişim:

- [x] Ana Sayfa.
- [x] Ürünler.
- [x] Favoriler.
- [x] Sepet.

Kural:

- [x] Alt hızlı erişim ürün detayında sepete ekleme alanını kapatmayacak şekilde tasarlanmalıdır.

## Durum Ekranları

### Boş Durumlar

- [x] Boş katalog sonucu: filtreleri temizleme çağrısı gösterilir.
- [x] Boş sepet: ürünlere dön çağrısı gösterilir.
- [x] Boş favoriler: ürün keşfetme çağrısı gösterilir.
- [x] Admin boş ürün listesi: yeni ürün oluşturma çağrısı gösterilir.
- [x] Admin boş sipariş listesi: aktif filtreleri kaldırma veya bekleme mesajı gösterilir.

Görsel ton:

- [x] Müşteri tarafında küçük çiçek, parıltı veya sticker motifi kullanılabilir.
- [x] Admin tarafında sade ikon ve kısa açıklama kullanılır.

### Yükleniyor Durumları

- [x] Ürün grid'i skeleton kartlarla yüklenir.
- [x] Ürün detay galerisi sabit oranlı skeleton alanla yüklenir.
- [x] Sepet işlemleri satır bazlı yüklenme durumu gösterir.
- [x] Admin tablolarında satır skeleton kullanılır.
- [x] Form gönderimlerinde buton durumu kilitlenir ve kısa işlem metni gösterilir.

### Hata Durumları

- [x] Katalog veri hatası: tekrar dene ve ana sayfaya dön seçenekleri gösterilir.
- [x] Ürün bulunamadı: ürünlere dön ve benzer ürünleri gör çağrısı gösterilir.
- [x] Sepet doğrulama hatası: hangi ürün veya varyantta sorun olduğu açık gösterilir.
- [x] Sipariş talebi hatası: form verileri korunur, kullanıcı yeniden deneyebilir.
- [x] Admin yetkisiz erişim: giriş sayfasına yönlendirme veya yetki mesajı gösterilir.
- [x] Admin kayıt hatası: alan bazlı hata ve genel hata birlikte gösterilir.

## Faz 1.3 İçin Notlar

- [x] Ana sayfa, katalog, ürün kartı, favori, sepet ve modal geçişleri için animasyon kuralları belirlendi.
- [x] Mobilde animasyon yoğunluğu ve sabit navigasyon davranışı birlikte ele alındı.
- [x] Admin paneli için sadece iş akışını destekleyen sade geçişler seçildi.
