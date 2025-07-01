// Skills ViewModel - Beceri verilerini yönetir
import SkillModel from '../models/SkillModel.js';

class SkillsViewModel {
    constructor() {
        this.skills = [];
        this.initializeSkills();
    }

    // Örnek beceriler oluşturur
    initializeSkills() {
        // Programlama Dilleri
        this.skills.push(new SkillModel(1, 'Python', 'fab fa-python', 'Programlama Dilleri', '95%'));
        this.skills.push(new SkillModel(2, 'SQL', 'fas fa-database', 'Programlama Dilleri', '90%'));
        this.skills.push(new SkillModel(3, 'Flutter', 'fas fa-mobile-alt', 'Programlama Dilleri', '85%'));
        this.skills.push(new SkillModel(4, 'C/C++', 'fas fa-code', 'Programlama Dilleri', '80%'));
        this.skills.push(new SkillModel(5, 'HTML5', 'fab fa-html5', 'Programlama Dilleri', '75%'));

        // Uzmanlık Alanları
        this.skills.push(new SkillModel(6, 'Machine Learning', 'fas fa-brain', 'Uzmanlık Alanları', '85%'));
        this.skills.push(new SkillModel(7, 'Veri Bilimi', 'fas fa-chart-line', 'Uzmanlık Alanları', '90%'));
        this.skills.push(new SkillModel(8, 'Mobil uygulama geliştirme', 'fas fa-mobile-alt', 'Uzmanlık Alanları', '80%'));
        this.skills.push(new SkillModel(9, 'Veri Analizi', 'fas fa-database', 'Uzmanlık Alanları', '85%'));

        // Diğer Araçlar
        this.skills.push(new SkillModel(10, 'Git & GitHub', 'fab fa-git-alt', 'Diğer Araçlar', '85%'));
        this.skills.push(new SkillModel(11, 'Web Geliştirme', 'fas fa-laptop-code', 'Diğer Araçlar', '70%'));
        this.skills.push(new SkillModel(12, 'TSQL', 'fas fa-database', 'Diğer Araçlar', '80%'));
        this.skills.push(new SkillModel(13, 'Algoritma', 'fas fa-file-code', 'Diğer Araçlar', '75%'));
    }

    // Tüm becerileri döndürür
    getAllSkills() {
        return this.skills;
    }

    // Becerileri kategorilere göre gruplar
    getSkillsByCategory() {
        const categories = [...new Set(this.skills.map(skill => skill.category))];
        const groupedSkills = {};
        
        categories.forEach(category => {
            groupedSkills[category] = this.skills.filter(skill => skill.category === category);
        });
        
        return groupedSkills;
    }
}

export default SkillsViewModel;
