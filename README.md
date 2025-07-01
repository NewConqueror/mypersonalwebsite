# Modern Yazılımcı Portfolyo Sitesi - VMVM Mimarisi ile

Bu proje, yazılım geliştiriciler için tasarlanmış modern, şık ve sade bir portfolyo web sitesidir. VMVM (View-Model-ViewModel) mimari desenini kullanarak modüler ve bakımı kolay bir yapıda oluşturulmuştur.

## VMVM Mimari Yapısı

VMVM, web uygulamalarında kod organizasyonunu ve bakımını kolaylaştırmak için kullanılan bir mimari desendir. Bu mimari, uygulamayı şu katmanlara ayırır:

### 1. Model (Veri Katmanı)
- `models/` dizininde bulunur
- Verilerin yapısını ve temel veri işlemlerini tanımlar
- Uygulama verilerinin nasıl temsil edileceğini belirler

### 2. ViewModel (Veri İşleme Katmanı)
- `viewmodels/` dizininde bulunur
- Model verilerini View'lerin kullanabileceği şekilde hazırlar
- Veri manipülasyonu, dönüşümü ve iş mantığını içerir

### 3. View (Görünüm Katmanı)
- `views/` dizininde bulunur
- Kullanıcı arayüzünü oluşturur ve kullanıcı etkileşimlerini yönetir
- ViewModels üzerinden verilere erişir ve görüntüler

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

## Proje Yapısı

```
website/
├── index.html                # Ana HTML sayfası
├── README.md                 # Proje dokümantasyonu
├── dosyalar/                 # Dosyalar (CV, vb.)
├── images/                   # Görseller
├── js/
│   └── script.js             # Ana JavaScript dosyası (modül import/export'ları içerir)
├── styles/
│   └── style.css             # CSS stil dosyası
├── models/                   # Veri modelleri
│   ├── ProjectModel.js
│   ├── SkillModel.js
│   └── ContactModel.js
├── viewmodels/               # Veri işleme katmanı
│   ├── ProjectsViewModel.js
│   ├── SkillsViewModel.js
│   └── ContactViewModel.js
└── views/                    # Görünüm katmanı
    ├── NavigationView.js
    ├── ProjectsView.js
    ├── SkillsView.js
    ├── ContactView.js
    └── AppView.js
```

## Teknolojiler

- HTML5
- CSS3 (Saf CSS, framework kullanılmadan)
- JavaScript (ES6 Modules)
- VMVM Mimarisi
- Font Awesome ikonları
- Google Fonts

## Nasıl Kullanılır

1. Repo'yu yerel bilgisayarınıza klonlayın veya dosyaları indirin
2. **Önemli**: JavaScript modüllerinin çalışması için projeyi bir web sunucusu üzerinden çalıştırın (yerel dosya sisteminde çalıştırıldığında CORS kısıtlamaları nedeniyle modüller yüklenemeyebilir)
3. `images` klasörüne kendi proje görselleri ve profil fotoğrafınızı ekleyin
4. Veri değişiklikleri için `models/` ve `viewmodels/` klasörlerindeki dosyaları düzenleyin
5. Görünüm ve davranış değişiklikleri için `views/` klasöründeki dosyaları düzenleyin

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

VMVM mimarisi sayesinde yeni özellikler eklemek veya mevcut özellikleri değiştirmek çok daha modüler hale gelmiştir:

1. Yeni bir veri modeli gerekiyorsa, `models/` dizininde oluşturun
2. Veri işleme mantığı için `viewmodels/` dizininde ilgili ViewModel'i güncelleyin
3. Kullanıcı arayüzü değişiklikleri için `views/` dizininde ilgili View'ı düzenleyin

Bu projede yapabilecek bazı geliştirmeler:

1. Dark mode/Light mode geçişi eklenebilir
2. Daha fazla animasyon ve etkileşim eklenebilir
3. Blog bölümü eklenebilir
4. Dil seçeneği eklenebilir
5. Projeler için detay sayfaları oluşturulabilir
6. İletişim formuna backend bağlantısı eklenebilir

## Lisans

Bu proje MIT lisansı altında dağıtılmaktadır. Daha fazla bilgi için `LICENSE` dosyasına bakınız.
