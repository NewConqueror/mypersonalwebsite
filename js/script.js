// VMVM Mimarisi - Ana Uygulama Dosyası
import ViewManager from '../views/ViewManager.js';

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // ViewManager oluştur ve bileşenleri yükle
    const viewManager = new ViewManager();
    viewManager.loadAllComponents();
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Toggle menu animation
    const bars = document.querySelectorAll('.bar');
    if (menuToggle.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Scroll events
window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Scroll to top button visibility
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }

    // Activate nav links based on scroll position
    activateNavOnScroll();

    // Animate skill bars when in viewport
    animateSkillBars();
});

// Scroll to top button
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Activate nav link based on scroll position
function activateNavOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Animate skill bars when in viewport
function animateSkillBars() {
    progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }
    });
}

// Project filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Show/hide projects based on filter
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (name && email && subject && message) {
            // Konsola form verilerini yazdır
            console.log('Form Verileri:');
            console.log('--------------');
            console.log('İsim:', name);
            console.log('E-posta:', email);
            console.log('Konu:', subject);
            console.log('Mesaj:', message);
            console.log('--------------');
            
            // Kullanıcıya bildirim göster
            alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
            contactForm.reset();
        } else {
            alert('Lütfen tüm alanları doldurun.');
        }
    });
}

// Typing animation for hero section
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing');
    const professions = ['Geliştirici', 'Veri Bilimci', 'Python Uzmanı', 'ML Uzmanı'];
    let professionIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let typeDelay = 200;

    function typeText() {
        const currentProfession = professions[professionIndex];
        
        if (isDeleting) {
            // Deleting characters
            typingElement.textContent = currentProfession.substring(0, characterIndex - 1);
            characterIndex--;
            typeDelay = 100;
        } else {
            // Typing characters
            typingElement.textContent = currentProfession.substring(0, characterIndex + 1);
            characterIndex++;
            typeDelay = 200;
        }
        
        // Check if word is complete
        if (!isDeleting && characterIndex === currentProfession.length) {
            // Pause at the end of the word
            isDeleting = true;
            typeDelay = 1000;
        } else if (isDeleting && characterIndex === 0) {
            // Move to the next word
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
            typeDelay = 500;
        }
        
        setTimeout(typeText, typeDelay);
    }
    
    // Start the typing animation
    setTimeout(typeText, 1000);
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-item, .project-card, .contact-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }
    });
};

// Initialize animations and features
window.addEventListener('DOMContentLoaded', () => {
    // Activate first nav link by default
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    
    // Animate elements when page loads
    animateSkillBars();
    animateOnScroll();
    
    // Add scroll event for animations
    window.addEventListener('scroll', animateOnScroll);
});
