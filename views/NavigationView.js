// Navigation View - Header ve navigasyon menüsünü yönetir
class NavigationView {
    constructor() {
        this.mobileMenuBtn = document.getElementById('mobile-menu');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        // Mobil menü açma-kapama işlevselliğini ekle
        this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        
        // Sayfalar arası geçişte aktif menü öğesini güncelle
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.setActiveNavLink(e.target);
                this.closeMobileMenu();
            });
        });

        // Sayfa kaydırma olayını dinle ve menü öğelerini güncelle
        window.addEventListener('scroll', () => this.updateActiveNavLinkOnScroll());
    }

    toggleMobileMenu() {
        this.mobileMenuBtn.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMobileMenu() {
        this.mobileMenuBtn.classList.remove('active');
        this.navMenu.classList.remove('active');
    }

    setActiveNavLink(clickedLink) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        clickedLink.classList.add('active');
    }

    updateActiveNavLinkOnScroll() {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

export default NavigationView;
