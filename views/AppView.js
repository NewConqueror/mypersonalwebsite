// App View - Ana görünüm
class AppView {
    constructor() {
        this.scrollToTopBtn = document.querySelector('.scroll-to-top');
        this.typingElement = document.querySelector('.typing');
        this.typingTexts = ['Geliştirici', 'Veri Bilimci', 'Mühendis'];
        this.typingIndex = 0;
        this.init();
    }

    init() {
        // Sayfa yüklendiğinde
        window.addEventListener('load', () => {
            this.startTypingEffect();
        });
        
        // Sayfayı kaydırdığında
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
        
        // Yukarı çık butonu tıklandığında
        this.scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Scroll olayını yönetir
    handleScroll() {
        // Yukarı çık butonunu göster/gizle
        if (window.scrollY > 500) {
            this.scrollToTopBtn.classList.add('show');
        } else {
            this.scrollToTopBtn.classList.remove('show');
        }
        
        // Sayfa bölümlerinin animasyonları
        this.animateSections();
    }

    // Sayfa bölümlerinin animasyonlarını kontrol eder
    animateSections() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            // Bölüm görünür olduğunda
            if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
                section.classList.add('animate');
            }
        });
    }

    // Yazma efektini başlatır
    startTypingEffect() {
        let currentText = this.typingTexts[this.typingIndex];
        let letterIndex = 0;
        
        // Yazma
        const typing = setInterval(() => {
            if (letterIndex < currentText.length) {
                this.typingElement.textContent = currentText.substring(0, letterIndex + 1);
                letterIndex++;
            } else {
                // Yazma tamamlandı, silme işlemini başlat
                clearInterval(typing);
                setTimeout(() => {
                    const erasing = setInterval(() => {
                        if (letterIndex > 0) {
                            this.typingElement.textContent = currentText.substring(0, letterIndex - 1);
                            letterIndex--;
                        } else {
                            // Silme tamamlandı, sonraki metne geç
                            clearInterval(erasing);
                            this.typingIndex = (this.typingIndex + 1) % this.typingTexts.length;
                            setTimeout(() => {
                                this.startTypingEffect();
                            }, 500);
                        }
                    }, 50);
                }, 2000);
            }
        }, 100);
    }
}

export default AppView;
