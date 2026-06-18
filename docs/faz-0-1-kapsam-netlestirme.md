# Faz 0.1 - Kapsam Netleştirme

Bu dosya, ilk ürün kapsamı ve satış akışı için başlangıç kararlarını tutar.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)
- [Proje Kuralları](proje-kurallari.md)

## Faz Durumu

- [x] Satılacak ilk ürün türleri listelendi.
- [x] Her ürün türü için gerekli alanlar belirlendi.
- [x] Ürünlerde varyant gereksinimi belirlendi.
- [x] Malzeme içeriği için ürün bazlı güncellenebilir alan planlandı.
- [x] İlk sürümde sipariş talebi akışı kullanılmasına karar verildi.

## Başlangıç Ürün Kapsamı

İlk sürümde ürün kataloğu aşağıdaki ürün türlerini destekleyecek şekilde planlanır:

- [x] Figürler
- [x] Küpeler
- [x] Anahtarlıklar
- [x] Kolye uçları
- [x] Mini dekoratif objeler
- [x] Özel sipariş ürünler

Kapsam dışı bırakılanlar:

- [x] Dijital ürün satışı başlangıç kapsamı dışında bırakıldı.
- [x] Abonelik modeli başlangıç kapsamı dışında bırakıldı.
- [x] Çok satıcılı pazar yeri yapısı başlangıç kapsamı dışında bırakıldı.
- [x] Kullanıcıların kendi mağazasını açması başlangıç kapsamı dışında bırakıldı.

## Ürün Alanları

Tüm ürün türleri için ortak alanlar:

- [x] Ürün adı
- [x] Kısa açıklama
- [x] Detaylı açıklama
- [x] Kategori
- [x] Koleksiyon
- [x] Etiketler
- [x] Fiyat
- [x] İndirimli fiyat
- [x] Stok durumu
- [x] Stok adedi
- [x] Üretim süresi
- [x] Kapak görseli
- [x] Galeri görselleri
- [x] Malzeme bilgisi
- [x] Bakım bilgisi
- [x] Kullanım uyarısı
- [x] Yayın durumu
- [x] Ürün sıralaması

Figür ürünlerine özel alanlar:

- [x] Boyut
- [x] Tema
- [x] Renk paleti
- [x] Zemine oturma veya askı tipi
- [x] Kişiselleştirme notu

Küpe ürünlerine özel alanlar:

- [x] Küpe aparatı tipi
- [x] Çift veya tek adet bilgisi
- [x] Hafiflik notu
- [x] Alerji uyarısı alanı
- [x] Renk veya model varyantı

Anahtarlık ürünlerine özel alanlar:

- [x] Halka tipi
- [x] Ek aksesuar seçeneği
- [x] Boyut
- [x] Kişiselleştirme notu

Kolye ucu ürünlerine özel alanlar:

- [x] Zincir dahil mi bilgisi
- [x] Uç boyutu
- [x] Askı bağlantı tipi
- [x] Renk veya model varyantı

Özel sipariş ürünlerine özel alanlar:

- [x] Referans görsel isteği
- [x] İstenen renkler
- [x] İstenen tema
- [x] Tahmini üretim süresi
- [x] Ön onay gereksinimi

## Varyant Kararı

Varyantlar ürün bazlı açılıp kapatılabilir olmalıdır.

Desteklenecek başlangıç varyantları:

- [x] Renk
- [x] Model
- [x] Boyut
- [x] Aparat tipi
- [x] Paketleme
- [x] Kişiselleştirme notu

Varyant davranışı:

- [x] Her varyant stok ve fiyatı etkileyebilir.
- [x] Varyant seçimi zorunlu veya opsiyonel yapılabilir.
- [x] Varyantlar ürün detay sayfasında görsel olarak kolay seçilebilir olmalıdır.
- [x] Kişiselleştirme notu sepete ve siparişe taşınmalıdır.
- [x] Admin panelinde varyant ekleme, düzenleme ve silme yapılabilmelidir.

## Malzeme ve Bakım Bilgisi

Malzeme içeriği başlangıçta kesin olmayabileceği için ürün sayfasında esnek alanlar kullanılacaktır.

- [x] Malzeme bilgisi serbest metin alanı olacaktır.
- [x] Malzeme kesin değilse ürün açıklamasında kesin iddia yazılmayacaktır.
- [x] Bakım bilgisi ayrı alan olarak tutulacaktır.
- [x] Kullanım uyarısı ayrı alan olarak tutulacaktır.
- [x] Alerji veya hassasiyet notu özellikle küpe ürünlerinde ayrı gösterilecektir.
- [x] Admin paneli bu alanları ürün bazında güncelleyebilmelidir.

Örnek malzeme alanı yaklaşımı:

- Kesin malzeme: "Polimer kil, çelik aparat"
- Belirsiz malzeme: "El yapımı modelleme malzemesi; detaylı içerik bilgisi ürün sahibi tarafından güncellenecektir."

## İlk Sürüm Satış Akışı

İlk sürümde canlı ödeme entegrasyonu yerine sipariş talebi akışı kullanılacaktır.

Karar:

- [x] Kullanıcı ürünü sepete ekler.
- [x] Kullanıcı teslimat ve iletişim bilgilerini girer.
- [x] Sistem sipariş talebi oluşturur.
- [x] Admin panelinde sipariş "Yeni Talep" durumunda görünür.
- [x] Site sahibi müşteriyle iletişime geçerek ödeme ve kargo detayını netleştirir.
- [x] Canlı ödeme entegrasyonu sonraki fazlarda ödeme sağlayıcı seçimine bağlı olarak eklenir.

Bu kararın nedeni:

- [x] El yapımı ürünlerde stok, üretim süresi ve kişiselleştirme değişken olabilir.
- [x] İlk sürüm daha hızlı yayına alınabilir.
- [x] Ödeme sağlayıcı seçimi aceleye getirilmez.
- [x] Sipariş ön onayı özel üretim ürünlerde daha güvenli ilerler.

## Sipariş Durumları

Başlangıç sipariş durumları:

- [x] Yeni Talep
- [x] Müşteriyle Görüşülüyor
- [x] Ödeme Bekleniyor
- [x] Hazırlanıyor
- [x] Kargoya Verildi
- [x] Tamamlandı
- [x] İptal Edildi

## Açık Kararlar

Aşağıdaki kararlar bu alt aşamayı engellemez; sonraki fazlarda netleştirilecektir:

- [ ] Site adı ve marka metni
- [ ] Gerçek ürün fotoğraf seti
- [ ] Kargo firması ve ücret modeli
- [ ] Canlı ödeme sağlayıcısı
- [ ] İade ve değişim metni
- [ ] Ürünlerin kesin malzeme bilgileri

## Sonraki Aşamaya Notlar

- [x] Faz 0.2'de pembe, çiçekli, cıvıl cıvıl ve animasyonlu sitelerden ilham örnekleri toplandı.
- [x] Faz 0.3'te seçilen teknik yapı, ürün varyantlarını ve sipariş talebi akışını rahat taşıyacak şekilde planlandı.
- [ ] Faz 1.1'de ürünlerin el yapımı ve neşeli havasını taşıyan marka dili netleştirilmelidir.
