# Modern Yazılımcı Portfolyo Sitesi

Bu proje, yazılım geliştiriciler için tasarlanmış modern, şık ve sade bir portfolyo web sitesidir.

## Özellikler

- Tam responsive tasarım (tüm cihazlarda düzgün görünüm)
- Modern, şık ve sade UI/UX tasarımı
- Aşağıdaki bölümleri içerir:
  - Ana Sayfa (Hero)
  - Hakkımda
  - Yetenekler
  - Projeler (Kategori filtreli)
  - İletişim Formu
- İnteraktif animasyonlar ve geçişler
- Sosyal medya bağlantıları
- Scroll-to-top butonu
- Mobil-dostu navigasyon

## Teknolojiler

- HTML5
- CSS3 (Saf CSS, framework kullanılmadan)
- JavaScript (Vanilla JS, kütüphane kullanılmadan)
- Font Awesome ikonları
- Google Fonts

## Nasıl Kullanılır

1. Repo'yu yerel bilgisayarınıza klonlayın veya dosyaları indirin
2. `images` klasörüne kendi proje görselleri ve profil fotoğrafınızı ekleyin
3. `index.html` dosyasındaki metin içeriklerini kendinize göre düzenleyin
4. Sosyal medya bağlantılarını ve iletişim bilgilerinizi güncelleyin
5. Projeleri kendi projelerinizle değiştirin

## Görsel Ekleme

`images` klasöründeki README.md dosyasında belirtilen görsellerin eklenmesi gerekmektedir:
- profile.jpg - Profil fotoğrafınız
- project1.jpg, project2.jpg, project3.jpg, project4.jpg - Proje görselleri

## Kişiselleştirme

### Renkleri Değiştirme
`styles/style.css` dosyasındaki root değişkenlerini değiştirerek sitenin ana renklerini kolayca özelleştirebilirsiniz:

```css
:root {
    --primary-color: #4a63e7;     /* Ana renk */
    --secondary-color: #64ffda;   /* İkincil renk */
    --dark-color: #1a1a2e;        /* Koyu renk */
    --light-color: #ffffff;       /* Açık renk */
    --text-color: #333333;        /* Metin rengi */
    --gray-color: #6c757d;        /* Gri renk */
    --light-gray: #f8f9fa;        /* Açık gri */
}
```

### Yazı Tipini Değiştirme
`index.html` dosyasındaki Google Fonts bağlantısını ve `styles/style.css` dosyasındaki font-family özelliğini değiştirerek yazı tipini özelleştirebilirsiniz.

## Geliştirme

Bu projede yapabilecek bazı geliştirmeler:

1. Dark mode/Light mode geçişi eklenebilir
2. Daha fazla animasyon ve etkileşim eklenebilir
3. Blog bölümü eklenebilir
4. Dil seçeneği eklenebilir
5. Projeler için detay sayfaları oluşturulabilir
6. İletişim formuna backend bağlantısı eklenebilir

## Lisans

Bu proje MIT lisansı altında dağıtılmaktadır. Daha fazla bilgi için `LICENSE` dosyasına bakınız.
