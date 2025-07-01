// Skills View - Yetenekler bölümünü yönetir
class SkillsView {
    constructor(skillsViewModel) {
        this.skillsViewModel = skillsViewModel;
        this.skillsContent = document.querySelector('.skills-content');
        this.init();
    }

    init() {
        this.renderSkills();
        this.initializeProgressBars();
    }

    // Becerileri HTML olarak oluşturur
    renderSkills() {
        const groupedSkills = this.skillsViewModel.getSkillsByCategory();
        this.skillsContent.innerHTML = '';
        
        Object.keys(groupedSkills).forEach(category => {
            const skillsCategory = this.createSkillCategory(category, groupedSkills[category]);
            this.skillsContent.appendChild(skillsCategory);
        });
    }

    // Beceri kategorisi HTML elemanını oluşturur
    createSkillCategory(categoryName, skills) {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skills-category';
        
        categoryElement.innerHTML = `
            <h3>${categoryName}</h3>
            <div class="skills-grid">
                ${skills.map(skill => this.createSkillItem(skill)).join('')}
            </div>
        `;
        
        return categoryElement;
    }

    // Beceri öğesi HTML elemanını oluşturur
    createSkillItem(skill) {
        return `
            <div class="skill-item">
                <div class="skill-icon"><i class="${skill.icon}"></i></div>
                <h4>${skill.name}</h4>
                <div class="skill-progress">
                    <div class="progress-bar" data-width="${skill.percentage}"></div>
                </div>
            </div>
        `;
    }

    // İlerleme çubuklarını başlatır
    initializeProgressBars() {
        setTimeout(() => {
            document.querySelectorAll('.progress-bar').forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }, 300);
    }
}

export default SkillsView;
