// Projects View - Proje bölümünü yönetir
class ProjectsView {
    constructor(projectsViewModel) {
        this.projectsViewModel = projectsViewModel;
        this.projectsGrid = document.querySelector('.projects-grid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.init();
    }

    init() {
        // Projeleri yükle
        this.renderProjects('all');
        
        // Filtre butonlarına olay dinleyicileri ekle
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const filter = e.target.getAttribute('data-filter');
                this.setActiveFilter(e.target);
                this.renderProjects(filter);
            });
        });
    }

    // Aktif filtre butonunu ayarlar
    setActiveFilter(clickedButton) {
        this.filterButtons.forEach(button => button.classList.remove('active'));
        clickedButton.classList.add('active');
    }

    // Projeleri filtreler ve HTML olarak oluşturur
    renderProjects(category) {
        const filteredProjects = this.projectsViewModel.getProjectsByCategory(category);
        this.projectsGrid.innerHTML = '';
        
        filteredProjects.forEach(project => {
            const projectElement = this.createProjectElement(project);
            this.projectsGrid.appendChild(projectElement);
        });
        
        // Projeleri gösterirken animasyon ekle
        setTimeout(() => {
            document.querySelectorAll('.project-card').forEach(card => {
                card.classList.add('show');
            });
        }, 100);
    }

    // Proje kartı HTML elemanını oluşturur
    createProjectElement(project) {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubLink}" class="btn small-btn">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        `;
        
        return projectCard;
    }
}

export default ProjectsView;
