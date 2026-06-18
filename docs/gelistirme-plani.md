# Geliştirme Planı

Bu dosya, projenin adım adım uygulanacak ana takip listesidir. Her çalışma oturumunda yalnızca tek bir alt aşama hedeflenir.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Proje Kuralları](proje-kurallari.md)

## Kullanım Kuralları

- [ ] İşe başlamadan önce [Proje Kuralları](proje-kurallari.md) okunur.
- [ ] O oturumda yapılacak tek alt aşama seçilir.
- [ ] Seçilen alt aşama tamamlanmadan başka alt aşamaya geçilmez.
- [ ] Tamamlanan maddeler bu dosyada `[x]` olarak işaretlenir.
- [ ] Ana faz kapanışında test, build, doküman güncelleme, commit ve push adımları yapılır.

## Faz 0 - Keşif, Kapsam ve Proje Hazırlığı

### 0.1 Kapsam Netleştirme

Çıktı: [Faz 0.1 Kapsam Netleştirme](faz-0-1-kapsam-netlestirme.md)

- [x] Satılacak ilk ürün türleri listelenir: figür, küpe, kolye ucu, anahtarlık veya özel üretim.
- [x] Her ürün türü için gerekli alanlar belirlenir: ad, açıklama, fiyat, stok, üretim süresi, bakım bilgisi.
- [x] Ürünlerde varyant gerekip gerekmediği belirlenir: renk, ölçü, aparat, paketleme, kişiselleştirme.
- [x] Malzeme içeriği için ürün bazlı güncellenebilir alan planlanır.
- [x] İlk sürümde canlı ödeme mi yoksa sipariş talebi mi kullanılacağı kararlaştırılır.

### 0.2 Rakip ve İlham Analizi

Çıktı: [Faz 0.2 Rakip ve İlham Analizi](faz-0-2-rakip-ilham-analizi.md)

- [x] El yapımı aksesuar ve figür sitelerinden görsel düzen örnekleri toplanır.
- [x] Ürün kartı, ürün detay ve sepet akışında iyi örnekler not edilir.
- [x] Fazla karmaşık, yavaş veya okunması zor örneklerden kaçınılacak noktalar çıkarılır.
- [x] Site tonunu belirleyecek 5-8 anahtar kelime seçilir.

### 0.3 Proje Yapısı Kararı

Çıktı: [Faz 0.3 Proje Yapısı Kararı](faz-0-3-proje-yapisi-karari.md)

- [x] Kullanılacak frontend framework ve paket yöneticisi seçilir.
- [x] Kullanılacak veritabanı, görsel saklama ve kimlik doğrulama yaklaşımı seçilir.
- [x] Admin paneli rota yapısı belirlenir.
- [x] Ortam değişkenleri, örnek yapılandırma ve gizli bilgi yönetimi planlanır.
- [x] İlk teknik risk listesi çıkarılır.

### 0.4 Faz Kapanışı ve GitHub

Çıktı: [Faz 0.4 Faz Kapanışı ve GitHub](faz-0-4-faz-kapanisi-github.md)

- [x] Kapsam kararları dokümana işlenir.
- [x] `git status` ile değişiklikler kontrol edilir.
- [x] Gerekli dosyalar stage edilir.
- [x] Açıklayıcı commit mesajı ile commit alınır.
- [x] Çalışılan branch GitHub'a push edilir.

## Faz 1 - Marka Dili, Tasarım Sistemi ve Animasyon Yönü

### 1.1 Marka Temeli

- [ ] Site adı, kısa açıklama ve ana sayfa tonu belirlenir.
- [ ] Pembe ana renk ailesi ve destek renkleri seçilir.
- [ ] Çiçekli, cıvıl cıvıl, tatlı ve neşeli feminen atmosfer için moodboard kararları yazılır.
- [ ] Çiçek, kalp, parıltı, kurdele, sticker ve el yapımı hissi veren dekoratif motif listesi belirlenir.
- [ ] Yazı tipi, başlık ölçekleri ve metin ağırlıkları belirlenir.
- [ ] Buton, form, kart, rozet ve bildirim stilleri tasarlanır.
- [ ] Canlı ama tek renge sıkışmayan renk dengesi için pembe dışı destek renklerin kullanım yerleri belirlenir.
- [ ] Ürün fotoğrafı kullanım kuralları belirlenir.

### 1.2 Arayüz Haritası

- [ ] Müşteri tarafı sayfa haritası çıkarılır.
- [ ] Admin paneli sayfa haritası çıkarılır.
- [ ] Mobil, tablet ve masaüstü kırılım noktaları belirlenir.
- [ ] Ana navigasyon, kategori menüsü ve alt navigasyon planlanır.
- [ ] Boş durum, yükleniyor durumu ve hata durumu tasarlanır.

### 1.3 Animasyon İlkeleri

- [ ] Ana sayfa giriş animasyonu planlanır.
- [ ] Ürün kartı hover ve dokunma animasyonları planlanır.
- [ ] Sepete ekleme ve favoriye alma mikro etkileşimleri planlanır.
- [ ] Çiçek süzülmesi, parıltı patlaması, yumuşak sticker zıplaması ve koleksiyon geçişleri için animasyon listesi hazırlanır.
- [ ] Hangi animasyonların sadece masaüstünde, hangilerinin mobilde de çalışacağı belirlenir.
- [ ] Animasyon süreleri, gecikmeleri ve tekrar sınırları için performans bütçesi belirlenir.
- [ ] Ağır görsel efektlerden kaçınmak için transform ve opacity temelli hareket standardı yazılır.
- [ ] Admin panelinde sade ve dikkat dağıtmayan geçişler belirlenir.
- [ ] Hareket azaltma tercihi için alternatif davranış tanımlanır.

### 1.4 Faz Kapanışı ve GitHub

- [ ] Tasarım kararları dokümana eklenir.
- [ ] Gerekirse statik tasarım notları veya örnek ekranlar eklenir.
- [ ] Kontrol komutları çalıştırılır.
- [ ] Commit alınır.
- [ ] Branch GitHub'a push edilir.

## Faz 2 - Teknik Altyapı ve Uygulama İskeleti

### 2.1 Proje Kurulumu

- [ ] Uygulama iskeleti oluşturulur.
- [ ] Paket yöneticisi ve scriptler düzenlenir.
- [ ] Lint, format ve temel kalite komutları eklenir.
- [ ] Ortam değişkenleri için örnek dosya hazırlanır.
- [ ] Klasör yapısı müşteri tarafı, admin tarafı, ortak bileşenler ve veri katmanı olarak ayrılır.

### 2.2 Temel Rotalar

- [ ] Ana sayfa rotası oluşturulur.
- [ ] Katalog rotası oluşturulur.
- [ ] Ürün detay rotası oluşturulur.
- [ ] Sepet rotası oluşturulur.
- [ ] Admin giriş ve admin ana panel rotaları oluşturulur.

### 2.3 Ortak Bileşenler

- [ ] Layout, header, footer ve mobil menü bileşenleri eklenir.
- [ ] Button, input, select, modal, card ve badge bileşenleri hazırlanır.
- [ ] Toast veya bildirim sistemi eklenir.
- [ ] Tema renkleri ve tasarım tokenları merkezi hale getirilir.
- [ ] Animasyon süreleri, easing değerleri, zıplama, süzülme ve giriş geçişleri için merkezi hareket tokenları eklenir.
- [ ] Çiçekli dekor, parıltı ve sticker benzeri tekrar kullanılabilir görsel bileşenler hazırlanır.
- [ ] Erişilebilir odak stilleri eklenir.

### 2.4 Faz Kapanışı ve GitHub

- [ ] Lint ve build komutları çalıştırılır.
- [ ] Temel rotalar tarayıcıda kontrol edilir.
- [ ] Proje kurulum notları güncellenir.
- [ ] Commit alınır.
- [ ] Branch GitHub'a push edilir.

## Faz 3 - Veri Modeli, Kimlik Doğrulama ve Temel Admin Girişi

### 3.1 Veri Modeli

- [ ] Ürün modeli hazırlanır.
- [ ] Kategori ve koleksiyon modeli hazırlanır.
- [ ] Ürün görseli ve varyant modeli hazırlanır.
- [ ] Sipariş, sipariş kalemi ve müşteri bilgisi modeli hazırlanır.
- [ ] Admin kullanıcı ve rol yapısı hazırlanır.

### 3.2 Veri Katmanı

- [ ] Veritabanı bağlantısı yapılandırılır.
- [ ] Migration veya şema yönetimi düzenlenir.
- [ ] Örnek geliştirme verileri hazırlanır.
- [ ] Ürün listeleme ve detay okuma servisleri eklenir.
- [ ] Hata yakalama ve loglama yaklaşımı belirlenir.

### 3.3 Admin Girişi

- [ ] Admin giriş ekranı yapılır.
- [ ] Oturum açma ve oturum kapatma akışı eklenir.
- [ ] Admin rotaları koruma altına alınır.
- [ ] Yetkisiz erişim ekranı veya yönlendirmesi eklenir.
- [ ] Temel güvenlik kontrolleri yapılır.

### 3.4 Faz Kapanışı ve GitHub

- [ ] Migration veya şema çıktıları kontrol edilir.
- [ ] Admin giriş akışı yerelde test edilir.
- [ ] Gerekli doküman ve örnek ayarlar güncellenir.
- [ ] Commit alınır.
- [ ] Branch GitHub'a push edilir.

## Faz 4 - Ürün Kataloğu ve Vitrin Sayfaları

### 4.1 Ana Sayfa

- [ ] İlk ekran pembe, çiçekli, cıvıl cıvıl ve bol hareketli görsel düzenle uygulanır.
- [ ] İlk ekranda performanslı çiçek süzülmesi veya neşeli dekoratif giriş hareketi eklenir.
- [ ] Öne çıkan koleksiyon alanı eklenir.
- [ ] Yeni ürünler alanı eklenir.
- [ ] En sevilen ürünler veya önerilenler alanı eklenir.
- [ ] Markanın el yapımı hissini anlatan kısa içerik alanı eklenir.

### 4.2 Katalog

- [ ] Ürün listeleme ekranı yapılır.
- [ ] Kategori filtresi eklenir.
- [ ] Fiyat aralığı filtresi eklenir.
- [ ] Stok durumu filtresi eklenir.
- [ ] Sıralama seçenekleri eklenir.
- [ ] Mobil filtre paneli eklenir.

### 4.3 Ürün Kartları

- [ ] Kapak görseli, ürün adı, fiyat ve kısa bilgi gösterilir.
- [ ] Stok az veya tükendi rozetleri eklenir.
- [ ] Favoriye alma kontrolü eklenir.
- [ ] Sepete hızlı ekleme davranışı planlanır.
- [ ] Hover ve dokunma animasyonları çiçekli, tatlı ve enerjik bir hisle uygulanır.
- [ ] Favori ve sepete ekleme durumlarında kısa parıltı veya mini çiçek geri bildirimi gösterilir.

### 4.4 Faz Kapanışı ve GitHub

- [ ] Ana sayfa ve katalog farklı ekran genişliklerinde kontrol edilir.
- [ ] Görsel yüklenme ve boş ürün durumları test edilir.
- [ ] Lint ve build çalıştırılır.
- [ ] Commit alınır.
- [ ] Branch GitHub'a push edilir.

## Faz 5 - Ürün Detayı, Sepet, Favoriler ve Kişiselleştirme

### 5.1 Ürün Detayı

- [ ] Ürün görsel galerisi yapılır.
- [ ] Fiyat, stok, açıklama, malzeme ve bakım alanları gösterilir.
- [ ] Varyant seçimi eklenir.
- [ ] Kişiselleştirme notu alanı eklenir.
- [ ] Benzer ürünler alanı eklenir.

### 5.2 Sepet

- [ ] Sepete ekleme akışı oluşturulur.
- [ ] Sepet satırı miktar güncelleme ve silme işlemleri eklenir.
- [ ] Ara toplam, kargo tahmini ve genel toplam alanları hazırlanır.
- [ ] Stok ve varyant doğrulamaları yapılır.
- [ ] Sepet boş durumu tasarlanır.

### 5.3 Favoriler

- [ ] Favoriye alma ve çıkarma akışı eklenir.
- [ ] Favoriler sayfası oluşturulur.
- [ ] Ürün kartlarında favori durumu gösterilir.
- [ ] Giriş gerektirmeyen geçici favori davranışı planlanır.

### 5.4 Faz Kapanışı ve GitHub

- [ ] Sepet ve favori akışları mobilde test edilir.
- [ ] Varyant ve stok uç durumları kontrol edilir.
- [ ] Lint, test ve build çalıştırılır.
- [ ] Commit alınır.
- [ ] Branch GitHub'a push edilir.

## Faz 6 - Sipariş, Ödeme Hazırlığı, Kargo ve İletişim

### 6.1 Sipariş Akışı

- [ ] Teslimat bilgisi formu hazırlanır.
- [ ] İletişim bilgisi formu hazırlanır.
- [ ] Sipariş özeti ekranı oluşturulur.
- [ ] Sipariş oluşturma servisi eklenir.
- [ ] Sipariş numarası üretimi planlanır.

### 6.2 Ödeme Hazırlığı

- [ ] Ödeme sağlayıcı seçimi için gereksinimler listelenir.
- [ ] Canlı ödeme öncesi test ortamı planlanır.
- [ ] Başarılı ödeme, başarısız ödeme ve iptal dönüşleri tasarlanır.
- [ ] Ödeme bekliyor durumuyla sipariş kaydı oluşturma akışı planlanır.
- [ ] Hassas ödeme verilerinin projede tutulmaması kuralı doğrulanır.

### 6.3 Kargo ve Bildirim

- [ ] Kargo ücreti hesaplama yaklaşımı belirlenir.
- [ ] Üretim süresi ve tahmini teslimat metni eklenir.
- [ ] Sipariş onay e-postası veya mesaj şablonu hazırlanır.
- [ ] Admin sipariş notu alanı planlanır.

### 6.4 Faz Kapanışı ve GitHub

- [ ] Sipariş akışı uçtan uca yerelde test edilir.
- [ ] Ödeme sağlayıcı kararları dokümana işlenir.
- [ ] Lint, test ve build çalıştırılır.
- [ ] Commit alınır.
- [ ] Branch GitHub'a push edilir.

## Faz 7 - Admin Paneli Ürün, Stok, Sipariş ve İçerik Yönetimi

### 7.1 Admin Dashboard

- [ ] Güncel siparişler özeti eklenir.
- [ ] Stok uyarıları eklenir.
- [ ] Son eklenen ürünler alanı eklenir.
- [ ] Hızlı işlem bağlantıları eklenir.
- [ ] Admin paneli mobil ve masaüstü düzenleri kontrol edilir.

### 7.2 Ürün Yönetimi

- [ ] Ürün listeleme, arama ve filtreleme ekranı yapılır.
- [ ] Ürün oluşturma formu yapılır.
- [ ] Ürün düzenleme formu yapılır.
- [ ] Ürün arşivleme ve yayına alma işlemleri eklenir.
- [ ] Kapak görseli ve galeri yönetimi eklenir.
- [ ] Varyant ve stok yönetimi eklenir.

### 7.3 Sipariş Yönetimi

- [ ] Sipariş listesi yapılır.
- [ ] Sipariş detay ekranı yapılır.
- [ ] Sipariş durum güncelleme akışı eklenir.
- [ ] Müşteri notu ve admin notu alanları eklenir.
- [ ] İptal veya iade için temel durumlar planlanır.

### 7.4 İçerik Yönetimi

- [ ] Ana sayfa öne çıkan ürün seçimi eklenir.
- [ ] Koleksiyon yönetimi eklenir.
- [ ] Kategori sıralama eklenir.
- [ ] Duyuru veya kampanya bandı yönetimi eklenir.
- [ ] Site ayarları ekranı hazırlanır.

### 7.5 Faz Kapanışı ve GitHub

- [ ] Admin akışları yetkili ve yetkisiz kullanıcılarla test edilir.
- [ ] Form doğrulamaları ve hata mesajları kontrol edilir.
- [ ] Lint, test ve build çalıştırılır.
- [ ] Commit alınır.
- [ ] Branch GitHub'a push edilir.

## Faz 8 - Animasyon, Görsel Kalite ve İçerik Zenginleştirme

### 8.1 Müşteri Tarafı Hareketler

- [ ] Ana sayfa giriş geçişleri uygulanır.
- [ ] Ürün kartı mikro animasyonları uygulanır.
- [ ] Sepete ekleme geri bildirimi canlandırılır.
- [ ] Favori durum değişimi canlandırılır.
- [ ] Sayfa geçişleri sade ve hızlı olacak şekilde ayarlanır.
- [ ] Çiçek süzülmeleri, parıltı detayları ve sticker benzeri küçük zıplama hareketleri performanslı şekilde uygulanır.
- [ ] Katalog filtreleme, ürün sıralama ve modal açılış kapanışları yumuşak geçişlerle desteklenir.
- [ ] Animasyon yoğunluğu mobilde ve düşük performanslı cihazlarda azaltılır.
- [ ] Hareket azaltma tercihi açıkken dekoratif hareketlerin kapandığı doğrulanır.

### 8.2 Görsel Kalite

- [ ] Ürün görsel oranları sabitlenir.
- [ ] Görsel sıkıştırma ve öncelikli yükleme ayarları yapılır.
- [ ] Eksik görsel yedeği hazırlanır.
- [ ] Galeri taşma, kırpma ve mobil davranışları kontrol edilir.
- [ ] Ürün kartlarında görsel netlik kontrol edilir.
- [ ] Çiçekli arka plan, dekoratif desen ve parıltı görselleri ürün okunurluğunu bozmayacak yoğunlukta ayarlanır.
- [ ] Dekoratif görsellerin dosya boyutları ve tekrar kullanımı performans açısından kontrol edilir.

### 8.3 İçerik Zenginleştirme

- [ ] Ürün bakım bilgisi bölümü eklenir.
- [ ] El yapımı üretim süreci için kısa anlatım alanı eklenir.
- [ ] Sık sorulan sorular alanı eklenir.
- [ ] İletişim ve özel sipariş yönlendirmesi eklenir.
- [ ] Kampanya ve duyuru alanları düzenlenir.

### 8.4 Faz Kapanışı ve GitHub

- [ ] Animasyonlar masaüstü ve mobilde kontrol edilir.
- [ ] Hareket azaltma tercihi test edilir.
- [ ] Animasyonların sayfa kaydırma, tıklama, ürün inceleme ve form doldurma akışlarını yavaşlatmadığı doğrulanır.
- [ ] Performans ölçümleri alınır.
- [ ] Commit alınır.
- [ ] Branch GitHub'a push edilir.

## Faz 9 - Güvenlik, Performans, Erişilebilirlik ve Test Kapsamı

### 9.1 Güvenlik

- [ ] Admin rotaları ve veri işlemleri yetki kontrolünden geçirilir.
- [ ] Form girişleri doğrulanır.
- [ ] Dosya yükleme türü ve boyutu sınırlandırılır.
- [ ] Gizli bilgiler repoya eklenmediği kontrol edilir.
- [ ] Sipariş ve müşteri verisi erişim kuralları gözden geçirilir.

### 9.2 Performans

- [ ] Ana sayfa yüklenme performansı ölçülür.
- [ ] Katalog sayfası büyük ürün listesiyle test edilir.
- [ ] Görsel boyutları ve lazy loading ayarları kontrol edilir.
- [ ] Dekoratif animasyonların CPU, bellek ve pil etkisi kontrol edilir.
- [ ] Sürekli çalışan animasyonlar gereksiz repaint veya layout shift üretmeyecek şekilde incelenir.
- [ ] Gereksiz paketler temizlenir.
- [ ] Build çıktısı incelenir.

### 9.3 Erişilebilirlik

- [ ] Klavye ile temel akışlar test edilir.
- [ ] Form label ve hata ilişkileri kontrol edilir.
- [ ] Renk kontrastı kontrol edilir.
- [ ] Modal, menü ve filtre paneli odak yönetimi test edilir.
- [ ] Hareket azaltma tercihi tekrar doğrulanır.

### 9.4 Testler

- [ ] Ürün listeleme ve detay servisleri test edilir.
- [ ] Sepet işlemleri test edilir.
- [ ] Admin ürün formu test edilir.
- [ ] Sipariş oluşturma akışı test edilir.
- [ ] Kritik kullanıcı senaryoları uçtan uca test edilir.

### 9.5 Faz Kapanışı ve GitHub

- [ ] Tüm kalite komutları çalıştırılır.
- [ ] Test sonuçları gözden geçirilir.
- [ ] Eksik riskler dokümana işlenir.
- [ ] Commit alınır.
- [ ] Branch GitHub'a push edilir.

## Faz 10 - Yayın, İzleme, Bakım ve Operasyon

### 10.1 Yayın Hazırlığı

- [ ] Hosting ve alan adı ayarları hazırlanır.
- [ ] Ortam değişkenleri üretim ortamına girilir.
- [ ] Veritabanı üretim migration akışı kontrol edilir.
- [ ] Admin hesabı güvenli şekilde oluşturulur.
- [ ] Yayın öncesi kontrol listesi tamamlanır.

### 10.2 Yayın

- [ ] İlk üretim deploy alınır.
- [ ] Ana sayfa, katalog, ürün detayı, sepet, sipariş ve admin akışları kontrol edilir.
- [ ] Mobil ve masaüstü cihazlarda hızlı smoke test yapılır.
- [ ] Hata izleme ve loglama kontrol edilir.
- [ ] Geri alma planı hazır tutulur.

### 10.3 Bakım

- [ ] Ürün ekleme ve stok güncelleme rutini yazılır.
- [ ] Sipariş durum yönetimi rutini yazılır.
- [ ] Yedekleme ve veri saklama yaklaşımı belirlenir.
- [ ] Düzenli paket güncelleme takvimi belirlenir.
- [ ] Yeni özellik önerileri için ayrı backlog oluşturulur.

### 10.4 Faz Kapanışı ve GitHub

- [ ] Yayın notları hazırlanır.
- [ ] Son kalite komutları çalıştırılır.
- [ ] GitHub branch güncel hale getirilir.
- [ ] Commit alınır.
- [ ] Branch GitHub'a push edilir.
- [ ] Gerekirse pull request hazırlanır veya güncellenir.
