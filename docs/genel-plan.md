# Genel Plan

Bu doküman, pembe, çiçekli, cıvıl cıvıl, bol animasyonlu ve yönetim panelli satış sitesinin ürün seviyesindeki yol haritasıdır.

Bağlantılar:

- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)
- [Faz 0.1 Kapsam Netleştirme](faz-0-1-kapsam-netlestirme.md)
- [Faz 0.2 Rakip ve İlham Analizi](faz-0-2-rakip-ilham-analizi.md)
- [Faz 0.3 Proje Yapısı Kararı](faz-0-3-proje-yapisi-karari.md)
- [Faz 0.4 Faz Kapanışı ve GitHub](faz-0-4-faz-kapanisi-github.md)
- [Faz 1.1 Marka Temeli](faz-1-1-marka-temeli.md)
- [Faz 1.2 Arayüz Haritası](faz-1-2-arayuz-haritasi.md)
- [Faz 1.3 Animasyon İlkeleri](faz-1-3-animasyon-ilkeleri.md)
- [Faz 1.4 Faz Kapanışı ve GitHub](faz-1-4-faz-kapanisi-github.md)

## Proje Hedefi

- [ ] El yapımı figür, küpe, aksesuar ve benzeri ürünlerin sergilenip satılabildiği bir vitrin oluşturmak.
- [ ] Site sahibinin ürün, görsel, stok, fiyat, sipariş ve içerik yönetimini admin panelinden yapabilmesini sağlamak.
- [ ] Pembe ağırlıklı, çiçekli, cıvıl cıvıl, kız neşesi hissi veren, bol hareketli ama hızlı ve erişilebilir bir kullanıcı deneyimi sunmak.
- [ ] Mobil öncelikli, güvenli, sürdürülebilir ve GitHub üzerinden düzenli takip edilebilir bir proje yapısı kurmak.

## Ürün Varsayımları

- [ ] Ürünler el yapımı olduğu için stok ve üretim süresi değişken olabilir.
- [ ] Bazı ürünlerde renk, model, boyut, aparat tipi veya kişiselleştirme seçeneği gerekebilir.
- [ ] Malzeme içeriği başlangıçta net olmayabilir; ürün sayfasında içerik ve bakım bilgisi sonradan güncellenebilir alanlar olarak tasarlanmalıdır.
- [ ] İlk sürüm Türkçe olacak şekilde planlanır.
- [ ] İlk sürümde sipariş talebi akışı kullanılacak; ödeme sağlayıcı ve kargo modeli proje sahibi tarafından netleştirildikten sonra canlı satış akışı tamamlanır.
- [ ] Detaylı ürün kapsamı [Faz 0.1 Kapsam Netleştirme](faz-0-1-kapsam-netlestirme.md) dosyasında takip edilir.
- [ ] Görsel ilham ve rakip analizi [Faz 0.2 Rakip ve İlham Analizi](faz-0-2-rakip-ilham-analizi.md) dosyasında takip edilir.
- [ ] Teknik yapı ve rota kararları [Faz 0.3 Proje Yapısı Kararı](faz-0-3-proje-yapisi-karari.md) dosyasında takip edilir.
- [ ] Faz 0 kapanış durumu [Faz 0.4 Faz Kapanışı ve GitHub](faz-0-4-faz-kapanisi-github.md) dosyasında takip edilir.
- [x] Marka temeli [Faz 1.1 Marka Temeli](faz-1-1-marka-temeli.md) dosyasında takip edilir.
- [x] Arayüz haritası [Faz 1.2 Arayüz Haritası](faz-1-2-arayuz-haritasi.md) dosyasında takip edilir.
- [x] Animasyon ilkeleri [Faz 1.3 Animasyon İlkeleri](faz-1-3-animasyon-ilkeleri.md) dosyasında takip edilir.
- [x] Faz 1 kapanış durumu [Faz 1.4 Faz Kapanışı ve GitHub](faz-1-4-faz-kapanisi-github.md) dosyasında takip edilir.

## Kullanıcı Deneyimi Yönü

- [ ] Ana ekran ilk bakışta marka hissini, ürün tarzını, pembe çiçekli atmosferi ve neşeli feminen enerjiyi göstermelidir.
- [ ] Ürünler kategori, koleksiyon, renk, fiyat ve stok durumuna göre gezilebilir olmalıdır.
- [ ] Ürün kartları görsel ağırlıklı, hızlı taranabilir ve mobilde rahat dokunulabilir olmalıdır.
- [ ] Sepet, favoriler ve ürün detay ekranları bol ama kısa, neşeli ve tepki veren mikro animasyonlarla desteklenmelidir.
- [ ] Çiçek, kalp, parıltı, yumuşak sticker formu ve pastel dekorlar arayüzün doğal parçası gibi kullanılmalıdır.
- [ ] Hareketli öğeler performansı düşürmemeli ve hareket azaltma tercihi olan kullanıcılara saygı göstermelidir.

## Admin Paneli Yönü

- [ ] Admin girişi güvenli kimlik doğrulama ile korunmalıdır.
- [ ] Ürün ekleme, düzenleme, yayına alma, arşivleme ve stok güncelleme akışları bulunmalıdır.
- [ ] Çoklu görsel yükleme, kapak görseli seçme ve ürün sıralama desteği olmalıdır.
- [ ] Kategori, koleksiyon, etiket ve varyant yönetimi yapılabilmelidir.
- [ ] Sipariş listesi, sipariş detayı, durum güncelleme ve müşteri notları yönetilebilmelidir.
- [ ] Ana sayfa vitrin alanları admin panelinden yönetilebilir olmalıdır.

## Görsel ve Marka Dili

- [x] Çalışma marka adı Irmak'ın Minik Atölyesi olarak belirlendi.
- [ ] Ana renk ailesi pembe olacak, ancak tüm arayüz tek renge sıkışmayacaktır.
- [ ] Destek renkleri olarak mercan, yumuşak sarı, açık yeşil, beyaz ve koyu metin tonları dengeli kullanılacaktır.
- [ ] Çiçek motifleri, yumuşak desenler, neşeli ikonlar ve küçük parıltı detayları marka dilinin ana parçaları olacaktır.
- [ ] Animasyonlar bol kullanılacak; dekoratif hareketler arayüz okunurluğunu, ürün incelemeyi ve alışveriş akışını bozmayacaktır.
- [ ] Ana hareketler transform, opacity ve kısa süreli geçişlerle tasarlanacak; sürekli ağır animasyonlardan kaçınılacaktır.
- [ ] Butonlar, durumlar, uyarılar ve formlar tutarlı bir tasarım sistemiyle ilerleyecektir.
- [ ] Ürün fotoğrafları veya görselleri gerçek ürünleri incelemeyi kolaylaştıracak netlikte kullanılacaktır.

## Animasyon ve Performans Yönü

- [ ] Site ilk izlenimde hareketli, tatlı, enerjik ve çiçekli görünmelidir.
- [ ] Ana sayfada kontrollü çiçek süzülmeleri, ürün giriş animasyonları, yumuşak parallax hissi ve neşeli geçişler planlanmalıdır.
- [ ] Ürün kartı, favori, sepete ekleme, form başarı durumu ve sayfa geçişleri hareketle geri bildirim vermelidir.
- [ ] Animasyonlar kısa, akıcı ve tekrarlandığında yormayan yapıda olmalıdır.
- [ ] Mobil cihazlarda pil ve performans etkisi dikkate alınmalı, düşük güçlü cihazlarda hareket yoğunluğu azaltılmalıdır.
- [ ] Hareket azaltma tercihi açık kullanıcılar için dekoratif animasyonlar kapatılmalı veya sadeleştirilmelidir.

## Teknik Yön

- [ ] Next.js App Router, TypeScript ve pnpm tabanlı modern frontend yapısı kurulacaktır.
- [ ] Admin paneli ve müşteri vitrini aynı proje içinde net ayrılmış rotalarla ilerleyecektir.
- [ ] Ürün, sipariş, admin ve içerik verileri Supabase Postgres üzerinde sürdürülebilir veri modeliyle hazırlanacaktır.
- [ ] Görsel yükleme ve güvenli dosya saklama Supabase Storage ile planlanacaktır.
- [ ] Admin girişi Supabase Auth ve veri katmanı yetki kontrolleriyle korunacaktır.
- [ ] Test, lint, build ve yayın kontrolleri faz kapanışlarının parçası olacaktır.

## Ana Fazlar

- [x] Faz 0 - Keşif, kapsam, kararlar ve proje hazırlığı
- [x] Faz 1 - Marka dili, tasarım sistemi ve animasyon yönü
- [ ] Faz 2 - Teknik altyapı, uygulama iskeleti ve geliştirme düzeni
- [ ] Faz 3 - Veri modeli, kimlik doğrulama ve temel admin girişi
- [ ] Faz 4 - Ürün kataloğu ve vitrin sayfaları
- [ ] Faz 5 - Ürün detayı, sepet, favoriler ve kişiselleştirme akışları
- [ ] Faz 6 - Sipariş, ödeme hazırlığı, kargo ve müşteri iletişimi
- [ ] Faz 7 - Admin paneli ürün, stok, sipariş ve içerik yönetimi
- [ ] Faz 8 - Animasyon, görsel kalite, mikro etkileşim ve içerik zenginleştirme
- [ ] Faz 9 - Güvenlik, performans, erişilebilirlik ve test kapsamı
- [ ] Faz 10 - Yayın, izleme, bakım ve operasyon süreci

## Başarı Kriterleri

- [ ] Kullanıcı mobil cihazdan ürünü bulup sepete ekleyebilir.
- [ ] Ürün detayında fiyat, stok, varyant, açıklama, bakım bilgisi ve görseller net görünür.
- [ ] Admin ürün ekleyip yayına alabilir.
- [ ] Admin siparişleri takip edip durum güncelleyebilir.
- [ ] Site çok animasyonlu görünürken hızlı yüklenir, temel erişilebilirlik kontrollerinden geçer ve mobilde taşma yapmaz.
- [ ] İlk bakışta pembe, çiçekli, cıvıl cıvıl ve neşeli kız enerjisi veren bir görsel kimlik oluşur.
- [ ] Her ana faz sonunda ilgili GitHub işlemleri yapılır ve ilerleme kutucukları güncellenir.
