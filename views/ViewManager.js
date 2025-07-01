// ViewManager - HTML bileşenlerini yükler
class ViewManager {
    constructor() {
        this.app = document.getElementById('app');
        this.componentsPath = 'views/html/';
        this.components = [
            'header.html',
            'hero.html',
            'about.html',
            'skills.html',
            'projects.html',
            'contact.html',
            'footer.html'
        ];
    }

    // Tüm bileşenleri sırayla yükle
    async loadAllComponents() {
        try {
            for (const component of this.components) {
                await this.loadComponent(component);
            }
            console.log('Tüm bileşenler başarıyla yüklendi');
            
            // Bileşenler yüklendikten sonra uygulamayı başlat
            this.initializeApp();
        } catch (error) {
            console.error('Bileşenler yüklenirken hata oluştu:', error);
        }
    }

    // Tek bir bileşeni yükle
    async loadComponent(componentName) {
        try {
            const response = await fetch(`${this.componentsPath}${componentName}`);
            if (!response.ok) {
                throw new Error(`${componentName} yüklenirken hata: ${response.status}`);
            }
            const html = await response.text();
            this.app.innerHTML += html;
            return true;
        } catch (error) {
            console.error(`${componentName} yüklenirken hata:`, error);
            return false;
        }
    }

    // Uygulama bileşenlerini başlat
    initializeApp() {
        // Import ve Initialize ViewModels
        import('../viewmodels/ProjectsViewModel.js').then(module => {
            const ProjectsViewModel = module.default;
            const projectsViewModel = new ProjectsViewModel();
            
            // Import ve Initialize Views
            import('../views/NavigationView.js').then(module => {
                const NavigationView = module.default;
                new NavigationView();
            });
            
            import('../views/ProjectsView.js').then(module => {
                const ProjectsView = module.default;
                new ProjectsView(projectsViewModel);
            });
            
            import('../viewmodels/SkillsViewModel.js').then(module => {
                const SkillsViewModel = module.default;
                const skillsViewModel = new SkillsViewModel();
                
                import('../views/SkillsView.js').then(module => {
                    const SkillsView = module.default;
                    new SkillsView(skillsViewModel);
                });
            });
            
            import('../viewmodels/ContactViewModel.js').then(module => {
                const ContactViewModel = module.default;
                const contactViewModel = new ContactViewModel();
                
                import('../views/ContactView.js').then(module => {
                    const ContactView = module.default;
                    new ContactView(contactViewModel);
                });
            });
            
            import('../views/AppView.js').then(module => {
                const AppView = module.default;
                new AppView();
            });
        });
    }
}

export default ViewManager;
