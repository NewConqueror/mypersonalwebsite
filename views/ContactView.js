// Contact View - İletişim formunu yönetir
class ContactView {
    constructor(contactViewModel) {
        this.contactViewModel = contactViewModel;
        this.contactForm = document.getElementById('contactForm');
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.subjectInput = document.getElementById('subject');
        this.messageInput = document.getElementById('message');
        this.init();
    }

    init() {
        // Form gönderme olayını dinle
        this.contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        
        // Form alanlarını değiştirme olaylarını dinle
        this.nameInput.addEventListener('input', () => this.updateViewModel());
        this.emailInput.addEventListener('input', () => this.updateViewModel());
        this.subjectInput.addEventListener('input', () => this.updateViewModel());
        this.messageInput.addEventListener('input', () => this.updateViewModel());
    }

    // Form gönderildiğinde çalışır
    async handleFormSubmit(event) {
        event.preventDefault();
        
        // Form verilerini güncelle
        this.updateViewModel();
        
        // Form doğrulaması
        if (!this.validateForm()) {
            this.showNotification('Lütfen tüm alanları doldurun.', 'error');
            return;
        }
        
        try {
            // Form verilerini gönder
            const response = await this.contactViewModel.sendContactForm();
            
            if (response.success) {
                this.showNotification(response.message, 'success');
                this.resetForm();
            } else {
                this.showNotification('Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
            }
        } catch (error) {
            this.showNotification('Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
        }
    }

    // ViewModel'i form verileriyle günceller
    updateViewModel() {
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const subject = this.subjectInput.value;
        const message = this.messageInput.value;
        
        this.contactViewModel.updateFormData(name, email, subject, message);
    }

    // Formun doğruluğunu kontrol eder
    validateForm() {
        const { name, email, subject, message } = this.contactViewModel.formData;
        return name.trim() !== '' && email.trim() !== '' && subject.trim() !== '' && message.trim() !== '';
    }

    // Form alanlarını temizler
    resetForm() {
        this.contactForm.reset();
        this.contactViewModel.resetForm();
    }

    // Kullanıcıya bildirim gösterir
    showNotification(message, type) {
        // Bildirim için basit bir sistem
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }, 100);
    }
}

export default ContactView;
