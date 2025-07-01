// Projects ViewModel - Proje verilerini yönetir
import ProjectModel from '../models/ProjectModel.js';

class ProjectsViewModel {
    constructor() {
        this.projects = [];
        this.initializeProjects();
    }

    // Örnek projeler oluşturur
    initializeProjects() {
        this.projects = [
            new ProjectModel(
                1,
                'Web Siteleri',
                'HTML CSS JS kullanarak geliştirdiğim web sitesi projeleri ve çalışmalar.',
                'web',
                'images/web_site.jpg',
                ['HTML', 'CSS', 'JavaScript'],
                'https://github.com/NewConqueror/web_siteleri'
            ),
            new ProjectModel(
                2,
                'SQL',
                'SQL kullanarak geliştirdiğim veri tabanı projeleri ve çalışmalar.',
                'kod',
                'images/sql_foto.png',
                ['SQL', 'TSQL', 'Function & Trigger'],
                'https://github.com/NewConqueror/SQL'
            ),
            new ProjectModel(
                3,
                'Flutter Uygulamaları',
                'Flutter framework\'ü ile geliştirdiğim mobil uygulama projeleri ve çalışmalar.',
                'kod',
                'images/flutterlogo.png',
                ['Dart', 'Flutter', 'Mobil Uygulama'],
                'https://github.com/NewConqueror/BooksydeProject'
            ),
            new ProjectModel(
                4,
                'Machine Learning Projeleri',
                'Python ile geliştirdiğim makine öğrenmesi algoritmaları ve modelleri içeren projeler.',
                'veri',
                'images/ml_foto.png',
                ['Python', 'ML', 'Veri Bilimi'],
                'https://github.com/NewConqueror/ML'
            ),
            new ProjectModel(
                5,
                'Veri Bilimi Projeleri',
                'Veri bilimi alanında yaptığım çalışmalar ve analizler.',
                'veri',
                'images/veri_bilimi.jpg',
                ['Python', 'Veri Analizi', 'İstatistik'],
                'https://github.com/NewConqueror/VeriBilimi'
            )
        ];
    }

    // Tüm projeleri döndürür
    getAllProjects() {
        return this.projects;
    }

    // Belirli bir kategorideki projeleri filtreler
    getProjectsByCategory(category) {
        if (category === 'all') {
            return this.projects;
        }
        return this.projects.filter(project => project.category === category);
    }
}

export default ProjectsViewModel;
