# Faz 1.3 - Animasyon İlkeleri

Bu dosya, sitenin hareket dilini, mikro etkileşimlerini, dekoratif animasyon kurallarını, performans bütçesini ve hareket azaltma davranışını tanımlar.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 1.1 Marka Temeli](faz-1-1-marka-temeli.md)
- [Faz 1.2 Arayüz Haritası](faz-1-2-arayuz-haritasi.md)

## Faz Durumu

- [x] Ana sayfa giriş animasyonu planlandı.
- [x] Ürün kartı hover ve dokunma animasyonları planlandı.
- [x] Sepete ekleme ve favoriye alma mikro etkileşimleri planlandı.
- [x] Çiçek süzülmesi, parıltı patlaması, yumuşak sticker zıplaması ve koleksiyon geçişleri için animasyon listesi hazırlandı.
- [x] Hangi animasyonların sadece masaüstünde, hangilerinin mobilde de çalışacağı belirlendi.
- [x] Animasyon süreleri, gecikmeleri ve tekrar sınırları için performans bütçesi belirlendi.
- [x] Ağır görsel efektlerden kaçınmak için transform ve opacity temelli hareket standardı yazıldı.
- [x] Admin panelinde sade ve dikkat dağıtmayan geçişler belirlendi.
- [x] Hareket azaltma tercihi için alternatif davranış tanımlandı.

## Hareket Dili

Genel his:

- [x] Tatlı.
- [x] Neşeli.
- [x] Hafif zıplayan.
- [x] Çiçekli ve parıltılı.
- [x] Kısa süreli.
- [x] Ürünü gölgelemeyen.
- [x] Mobilde daha sakin.

Temel kural:

- [x] Animasyonlar arayüzü canlı hissettirecek, ancak ürün inceleme, fiyat okuma, varyant seçme, form doldurma ve sipariş talebi akışını yavaşlatmayacaktır.

## Teknik Hareket Standardı

Öncelikli animasyon özellikleri:

- [x] `transform: translate`
- [x] `transform: scale`
- [x] `transform: rotate`
- [x] `opacity`
- [x] Kısa `box-shadow` geçişleri

Kaçınılacak özellikler:

- [x] Sürekli layout değiştiren `width`, `height`, `top`, `left` animasyonları.
- [x] Ağır blur ve filtre animasyonları.
- [x] Tam ekran sürekli video arka planlar.
- [x] Ürün kartlarında yüksek maliyetli parallax.
- [x] Çok sayıda aynı anda çalışan sonsuz döngü.

Easing kararları:

- [x] Standart giriş: `cubic-bezier(0.22, 1, 0.36, 1)`
- [x] Tatlı zıplama: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- [x] Hızlı UI geçişi: `ease-out`
- [x] Admin paneli geçişleri: `ease-out`, zıplamasız.

## Süre ve Gecikme Bütçesi

Temel süreler:

- [x] Buton hover: 120-180ms.
- [x] Ürün kartı hover: 180-240ms.
- [x] Sayfa bölüm girişleri: 280-420ms.
- [x] Modal açılış/kapanış: 160-240ms.
- [x] Toast bildirimi giriş/çıkış: 180-260ms.
- [x] Dekoratif çiçek süzülmesi: 6-12s, çok düşük yoğunlukta.
- [x] Parıltı patlaması: 300-600ms.
- [x] Sticker zıplaması: 220-360ms.

Gecikme sınırları:

- [x] Liste elemanı stagger gecikmesi en fazla 40ms.
- [x] Sayfa ilk yüklemede toplam görünür giriş gecikmesi 500ms üstüne çıkmayacak.
- [x] Kullanıcı tıklaması sonrası geri bildirim 100ms içinde başlayacak.

Tekrar sınırları:

- [x] Sürekli dekoratif hareketler aynı ekranda en fazla 2-3 öğede çalışacak.
- [x] Parıltı ve zıplama gibi dikkat çeken hareketler yalnızca kullanıcı eylemiyle tetiklenecek.
- [x] Başarı ve hata geri bildirimleri tek döngü oynayacak.

## Ana Sayfa Animasyonları

Hero giriş:

- [x] Marka adı hafif yukarıdan gelir ve opaklaşır.
- [x] Kısa açıklama 80-120ms gecikmeyle görünür.
- [x] Ana butonlar kısa zıplama hissiyle gelir.
- [x] Dekoratif çiçekler düşük hızla süzülür.
- [x] Ürün koleksiyonu görselleri hafif scale ve opacity geçişiyle görünür.

Ana sayfa bölümleri:

- [x] Öne çıkan koleksiyonlar scroll sırasında sade giriş yapar.
- [x] Yeni ürün kartları kısa stagger ile gelir.
- [x] Özel sipariş alanında sticker etiketi kısa zıplama yapar.
- [x] El yapımı üretim alanında dekoratif çizgi veya parıltı tek seferlik görünür.

Kısıt:

- [x] Hero dekorları metin ve çağrı butonlarının üstünü kapatmayacak.
- [x] Ana sayfa ilk yüklemede dekoratif hareket ürün görsellerinden daha önce öncelik almayacak.

## Ürün Kartı Animasyonları

Masaüstü hover:

- [x] Kart 2-4px yukarı kalkar.
- [x] Gölge hafif artar.
- [x] Kapak görseli en fazla `scale(1.02)` olur.
- [x] Favori ikonu hafif görünür veya belirginleşir.
- [x] Mini çiçek/parıltı kısa süreli belirir.

Mobil dokunma:

- [x] Kart dokunma anında çok kısa scale geri bildirimi verir.
- [x] Hover'a bağlı kalıcı dekor kullanılmaz.
- [x] Favori ve sepete ekleme hareketleri kullanıcı eylemiyle tetiklenir.

Ürün kartı kısıtları:

- [x] Kart yüksekliği hover sırasında değişmeyecek.
- [x] Ürün adı, fiyat, stok rozeti ve hızlı işlem butonları hareketten etkilenmeyecek.
- [x] Aynı grid'de çok fazla kart aynı anda hareket etmeyecek.

## Favori Mikro Etkileşimi

Davranış:

- [x] Kalp ikonu seçildiğinde 180-240ms içinde dolu hale gelir.
- [x] Küçük parıltı veya iki mini kalp tek seferlik görünür.
- [x] Favoriden çıkarma daha sade olur; ikon yumuşakça boş hale döner.

Mobil:

- [x] Favori animasyonu kısa tutulur.
- [x] Dokunma hedefi sabit kalır.

Hata:

- [x] Favori işlemi başarısız olursa ikon eski durumuna döner ve kısa hata bildirimi gösterilir.

## Sepete Ekleme Mikro Etkileşimi

Davranış:

- [x] Sepete ekle butonu kısa yüklenme durumuna geçer.
- [x] Başarılı işlemde buton kısa süre "Sepette" durumuna döner.
- [x] Sepet ikonunda mini zıplama olur.
- [x] Ürün kartı veya detay ekranında kısa parıltı geri bildirimi gösterilir.
- [x] Toast bildirimi ürün adı ve kısa işlem sonucu verir.

Kısıt:

- [x] Sepete ekleme hareketi kullanıcıyı sayfadan koparmayacak.
- [x] Varyant seçimi eksikse zıplama yerine alan bazlı uyarı kullanılacak.
- [x] Stok hatasında neyin düzeltileceği açık yazılacak.

## Katalog ve Filtre Geçişleri

Davranış:

- [x] Kategori değişiminde ürün grid'i hızlı opacity geçişiyle yenilenir.
- [x] Filtre paneli mobilde alttan veya yandan yumuşak açılır.
- [x] Sıralama değişiminde liste yeniden akarken layout sıçraması yapılmaz.
- [x] Boş sonuç ekranı küçük dekoratif motifle görünür.

Kısıt:

- [x] Filtre paneli açılış animasyonu 240ms üstüne çıkmaz.
- [x] Ürün grid'i yüklenirken skeleton kartlar sabit boyutlu kalır.

## Modal, Menü ve Navigasyon Geçişleri

Mobil menü:

- [x] Menü kısa opacity ve slide geçişiyle açılır.
- [x] Menü açıkken arka plan scroll kilitlenir.
- [x] Menü kapatma hareketi açılıştan daha hızlı olur.

Modal:

- [x] Overlay opacity ile gelir.
- [x] Modal içerik hafif yukarıdan veya aşağıdan gelir.
- [x] Odak modal içine taşınır.
- [x] Kapanışta odak tetikleyen kontrole döner.

Alt navigasyon:

- [x] Aktif sekme renk ve küçük scale farkıyla gösterilir.
- [x] Alt navigasyon ürün detayında sepete ekleme alanını kapatmaz.

## Dekoratif Animasyon Listesi

Çiçek süzülmesi:

- [x] Kullanım: ana sayfa hero, koleksiyon başlığı, boş durumlar.
- [x] Platform: masaüstü ve tablet; mobilde azaltılmış.
- [x] Süre: 6-12s.
- [x] Tekrar: düşük yoğunluklu sonsuz döngü veya tek geçiş.

Parıltı patlaması:

- [x] Kullanım: favori, sepete ekleme, başarı bildirimi, yeni ürün rozeti.
- [x] Platform: mobil ve masaüstü.
- [x] Süre: 300-600ms.
- [x] Tekrar: kullanıcı eylemi başına bir kez.

Sticker zıplaması:

- [x] Kullanım: özel sipariş çağrısı, yeni koleksiyon, boş sepet yönlendirmesi.
- [x] Platform: mobil ve masaüstü.
- [x] Süre: 220-360ms.
- [x] Tekrar: girişte bir kez; hover'da sınırlı.

Koleksiyon geçişi:

- [x] Kullanım: ana sayfa koleksiyon kartları, koleksiyon detay başlığı.
- [x] Platform: mobil ve masaüstü.
- [x] Süre: 280-420ms.
- [x] Tekrar: sayfa veya bölüm görünürlüğünde bir kez.

## Masaüstü ve Mobil Ayrımı

Masaüstünde çalışabilecek animasyonlar:

- [x] Ürün kartı hover yükselmesi.
- [x] Hafif görsel scale.
- [x] Düşük yoğunluklu çiçek süzülmesi.
- [x] Koleksiyon kartı hover geçişi.
- [x] Tooltip ve menü geçişleri.

Mobilde çalışacak animasyonlar:

- [x] Dokunma geri bildirimi.
- [x] Favori ve sepete ekleme mikro etkileşimleri.
- [x] Menü ve filtre paneli geçişleri.
- [x] Kısa toast giriş/çıkışları.
- [x] Tek seferlik boş durum dekorları.

Mobilde azaltılacak veya kapatılacak animasyonlar:

- [x] Sürekli çiçek süzülmeleri.
- [x] Çoklu parallax hissi.
- [x] Çok sayıda ürün kartı stagger animasyonu.
- [x] Uzun süreli dekoratif döngüler.

## Admin Paneli Animasyonları

Kullanılacak hareketler:

- [x] Sayfa geçişlerinde kısa opacity.
- [x] Tablo satırı yüklenirken skeleton.
- [x] Form alanı hata durumunda net ama kısa vurgu.
- [x] Başarı toast bildirimi.
- [x] Modal veya drawer açılış/kapanış geçişi.

Kullanılmayacak hareketler:

- [x] Çiçek süzülmesi.
- [x] Parıltı patlaması.
- [x] Sticker zıplaması.
- [x] Sürekli dekoratif döngüler.
- [x] Hover sırasında tablo satırlarının boyut değiştirmesi.

Admin kuralı:

- [x] Admin paneli hızlı işlem ve net veri okumaya hizmet eder; müşteri vitrini kadar süslü olmaz.

## Hareket Azaltma Tercihi

`prefers-reduced-motion: reduce` açıkken:

- [x] Dekoratif çiçek süzülmesi kapatılır.
- [x] Parıltı ve sticker hareketleri opacity değişimine düşürülür.
- [x] Sayfa giriş animasyonları sade fade olur.
- [x] Stagger gecikmeleri kaldırılır.
- [x] Hover scale ve zıplama hareketleri kapatılır.
- [x] Menü, modal ve drawer geçişleri en kısa süreye düşürülür.

Korunacak geri bildirimler:

- [x] İşlem başarı/hata durumu yine görünür kalır.
- [x] Form hata mesajları animasyona bağlı olmadan okunur.
- [x] Sepete ekleme ve favori durum değişimi statik ikon/metin değişimiyle anlaşılır.

## Performans Kontrol Kuralları

- [x] Animasyonlar ilk render içeriğini geciktirmemelidir.
- [x] Ürün grid'i yüklenirken layout shift oluşmamalıdır.
- [x] Dekoratif öğeler pointer event almayacak şekilde planlanmalıdır.
- [x] Aynı anda çalışan dekoratif animasyon sayısı sınırlandırılmalıdır.
- [x] Animasyon tokenları merkezi tutulmalıdır.
- [x] Mobilde düşük yoğunluk varsayılan olmalıdır.
- [x] Ürün detay, sepet ve sipariş talebi ekranlarında dekoratif hareketler minimumda tutulmalıdır.

## Faz 2 İçin Uygulama Notları

- [ ] Hareket tokenları tema veya stil altyapısında merkezi tanımlanmalıdır.
- [ ] `prefers-reduced-motion` için global CSS kuralı eklenmelidir.
- [ ] Motion ve CSS animasyonları aynı ekranda çakışmayacak şekilde kullanılmalıdır.
- [ ] Sabit boyutlu skeleton ve kart alanları layout shift üretmeyecek şekilde hazırlanmalıdır.

## Faz 8 İçin Uygulama Notları

- [ ] Çiçek süzülmesi, parıltı ve sticker animasyonları görsel kalite fazında gerçek bileşenlere dönüştürülmelidir.
- [ ] Mobil ve masaüstü performans ölçümü animasyon eklenen ekranlarda yapılmalıdır.
- [ ] Hareket azaltma tercihi tarayıcıda doğrulanmalıdır.

