export enum ProjectTags {
    angular = 'Angular',
    css = 'CSS',
    html = 'HTML',
    javascript = 'JavaScript',
    moodle = 'Moodle',
    php = 'PHP',
    qa = 'QA',
    react = 'React',
    springBoot = 'Spring Boot',
    wordpress = 'Wordpress'
}

interface Translated {
    [key: string]: string,
    en: string,
    es: string,
    ptBr: string
}

export interface Project {
    imageSrc: string,
    name: Translated
    tags: ProjectTags[],
    description: Translated,
    demoSrc?: string
}
