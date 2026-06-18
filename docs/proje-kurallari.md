# Proje Kuralları

Bu dosya, proje geliştirilirken her oturumda uyulacak zorunlu kuralları içerir.

Bağlantılar:

- [Genel Plan](genel-plan.md)
- [Geliştirme Planı](gelistirme-plani.md)

## Çalışma Akışı

- [ ] Her çalışma oturumunda [Geliştirme Planı](gelistirme-plani.md) içinden yalnızca tek bir alt aşama seçilir.
- [ ] Seçilen alt aşama tamamlanmadan başka alt aşamaya başlanmaz.
- [ ] Ana faz dışına taşan fikirler ayrı not edilir, aynı oturumda uygulanmaz.
- [ ] Tamamlanan her madde ilgili planda `[x]` olarak işaretlenir.
- [ ] Bir aşama yarım kaldıysa sebebi aynı dosyada kısa notla belirtilir.
- [ ] Kod değişikliği yapılmadan önce mevcut dosya yapısı ve ilgili yerel kalıplar incelenir.

## GitHub ve Versiyon Yönetimi

- [ ] Her ana faz sonunda `git status` kontrol edilir.
- [ ] Her ana faz sonunda gerekli test, lint veya build komutları çalıştırılır.
- [ ] Her ana faz sonunda yalnızca ilgili değişiklikler stage edilir.
- [ ] Commit mesajı kısa, açıklayıcı ve proje sahibinin diliyle yazılır.
- [ ] Her ana faz sonunda branch GitHub'a push edilir.
- [ ] Pull request kullanılacaksa açıklama yalnızca yapılan iş, testler ve kalan riskleri içerir.
- [ ] İlgisiz dosya, kişisel not, geçici çıktı veya gizli bilgi commit edilmez.

## Atıf ve Metin Kuralları

- [ ] Kaynak kod, yorum, dokümantasyon, README, changelog, paket metadata, commit, branch, pull request, issue ve release metinlerinde dış araç, otomasyon veya üretim etiketi atfı kullanılmaz.
- [ ] Yazar, contributor, co-author ve committer alanları proje sahibinin gerçek bilgisi dışında doldurulmaz.
- [ ] Proje çıktıları insan tarafından yazılmış doğal ürün diliyle hazırlanır.
- [ ] Teknik açıklamalar sade, doğrudan ve ürün odaklı yazılır.
- [ ] Gereksiz imza, slogan, kredi satırı veya üretim notu eklenmez.

## Kapsam Kontrolü

- [ ] Her değişiklik seçili alt aşamanın amacıyla doğrudan ilişkili olmalıdır.
- [ ] Geniş refactor yalnızca seçili aşamayı tamamlamak için zorunluysa yapılır.
- [ ] Yeni paket eklemeden önce mevcut bağımlılıklarla çözüm aranır.
- [ ] Yeni paket gerekiyorsa nedeni ve kullanım yeri açık olmalıdır.
- [ ] Veritabanı şeması değişiklikleri migration ve geri dönüş etkisiyle birlikte ele alınır.

## Güvenlik ve Gizlilik

- [ ] Şifre, token, API anahtarı, ödeme bilgisi veya kişisel veri repoya yazılmaz.
- [ ] Ortam değişkenleri için yalnızca örnek dosya tutulur.
- [ ] Admin rotaları yetki kontrolü olmadan yayına alınmaz.
- [ ] Dosya yükleme akışında tür, boyut ve yetki kontrolleri bulunur.
- [ ] Sipariş ve müşteri verileri yalnızca gerekli ekranlarda gösterilir.

## Tasarım ve Kullanıcı Deneyimi

- [ ] Arayüz pembe, çiçekli, cıvıl cıvıl, tatlı, neşeli ve feminen bir hava taşımalıdır.
- [ ] Site bol animasyonlu hissettirmelidir; okunurluk, hız, ürün inceleme ve alışveriş akışı bozulamaz.
- [ ] Çiçek, kalp, parıltı, kurdele, sticker ve el yapımı hissi veren dekorlar tutarlı bir görsel sistemle kullanılmalıdır.
- [ ] Animasyonlar kullanıcı eylemini desteklemeli; sürekli çalışan dekoratif hareketler kısa, hafif ve kontrollü olmalıdır.
- [ ] Hareketlerde öncelik transform ve opacity kullanımında olmalıdır; layout kaydıran veya cihazı yoran efektlerden kaçınılmalıdır.
- [ ] Hareket azaltma tercihi desteklenmelidir.
- [ ] Mobil cihazlarda animasyon yoğunluğu masaüstüne göre daha kontrollü tutulmalıdır.
- [ ] Mobil ekranlarda taşma, üst üste binme ve okunmayan metin bırakılmaz.
- [ ] Admin paneli marka dilini korur, ancak vitrin kadar süslü değil, hızlı ve iş odaklı olmalıdır.

## Kalite Kontrol

- [ ] Kritik kullanıcı akışları test edilmeden faz kapatılmaz.
- [ ] Lint, test veya build hatası varken commit alınmaz.
- [ ] Hata bilerek bırakılıyorsa nedeni ve etkisi açıkça not edilir.
- [ ] Ürün, sepet, sipariş ve admin işlemlerinde boş durum ve hata durumu kontrol edilir.
- [ ] Performans ve erişilebilirlik kontrolleri ana fazlarda tekrar edilir.
- [ ] Yoğun animasyon eklenen her aşamada masaüstü ve mobil performans kontrolü yapılır.
- [ ] Dekoratif hareketler ürün metni, fiyat, stok, buton veya form alanlarının üstünü kapatamaz.

## İçerik ve Görsel Kullanımı

- [ ] Ürün görselleri proje sahibinin kullanım hakkı olan kaynaklardan gelmelidir.
- [ ] Geçici görseller yayına çıkmadan önce gerçek ürün görselleriyle değiştirilmelidir.
- [ ] Ürün açıklamalarında kesin olmayan malzeme iddiası yazılmaz.
- [ ] Malzeme, bakım ve kullanım uyarıları ürün bazlı güncellenebilir tutulur.
- [ ] Görsel dosya adları düzenli, açıklayıcı ve proje diline uygun olmalıdır.
