// Project Model - Veri modellerini tanımlar
class ProjectModel {
    constructor(id, title, description, category, image, tags, githubLink) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.image = image;
        this.tags = tags;
        this.githubLink = githubLink;
    }
}

export default ProjectModel;
