// Contact ViewModel - İletişim formunu yönetir
import ContactModel from '../models/ContactModel.js';

class ContactViewModel {
    constructor() {
        this.formData = new ContactModel('', '', '', '');
    }

    // Form verilerini günceller
    updateFormData(name, email, subject, message) {
        this.formData = new ContactModel(name, email, subject, message);
    }

    // Form verilerini gönderir (örnek bir fonksiyon)
    sendContactForm() {
        // Burada gerçek bir API çağrısı yapılabilir
        console.log('Form gönderiliyor:', this.formData);
        return new Promise((resolve) => {
            // API çağrısı simülasyonu
            setTimeout(() => {
                console.log('Form başarıyla gönderildi');
                resolve({ success: true, message: 'Mesajınız başarıyla gönderildi!' });
            }, 1000);
        });
    }

    // Form verilerini sıfırlar
    resetForm() {
        this.formData = new ContactModel('', '', '', '');
    }
}

export default ContactViewModel;
