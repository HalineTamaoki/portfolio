import { Project, ProjectTags } from "../types/Project";
import project1 from "./../assets/project1.png"
import project2 from "./../assets/project2.png"
import project3 from "./../assets/project3.png"

export const projects: Project[] = [
    {
        imageSrc: project1,
        name:{
            en: "Testing Vehicle System",
            es: "Sistema de Teste de Vehículos",
            ptBr: "Sistema de Teste de Veículos"
        },
        tags: [ProjectTags.react, ProjectTags.springBoot, ProjectTags.qa],
        description: {
            en: "This was international project for a large automaker in Germany, whose purpose was to develop a system for testing components and vehicles.\nThe goal of the web development part was to migrate an old C# and .NET project to a Java + React project.",
            es: "This was international project for a large automaker in Germany, whose purpose was to develop a system for testing components and vehicles.\nThe goal of the web development part was to migrate an old C# and .NET project to a Java + React project.",
            ptBr: "This was international project for a large automaker in Germany, whose purpose was to develop a system for testing components and vehicles.\nThe goal of the web development part was to migrate an old C# and .NET project to a Java + React project."
        }
    },
    {
        imageSrc: project2,
        name:{
            en: "Moodle development",
            es: "Desarrollo Moodle",
            ptBr: "Desenvolvimento Moodle"
        },
        tags: [ProjectTags.moodle, ProjectTags.html, ProjectTags.css, ProjectTags.php],
        description: {
            en: "Moodle is an open-source Learning Management System (LMS). The goal was to implement the system for a NGO that helps immigrants and refugees in Brazil.\nThe system used HTML, CSS and PHP. The work based both administrative and programming solutions.",
            es: "Moodle is an open-source Learning Management System (LMS). The goal was to implement the system for a NGO that helps immigrants and refugees in Brazil.\nThe system used HTML, CSS and PHP. The work based both administrative and programming solutions.",
            ptBr: "Moodle is an open-source Learning Management System (LMS). The goal was to implement the system for a NGO that helps immigrants and refugees in Brazil.\nThe system used HTML, CSS and PHP. The work based both administrative and programming solutions.",
        },
        demoSrc: "tbd"
    },
    {
        imageSrc: project3,
        name:{
            en: "Internal marketplace",
            es: "Marketplace Interno",
            ptBr: "Marketplace Interno"
        },
        tags: [ProjectTags.angular, ProjectTags.springBoot],
        description: {
            en: "The project aimed to create a internal marketplace for a Brazilian company, where they could reward their employees or sell brand products.\nThe project was developed using Angular and Spring Boot. The backend was developed in microsservices and messaging with RabbitMQ.",
            es: "The project aimed to create a internal marketplace for a Brazilian company, where they could reward their employees or sell brand products.\nThe project was developed using Angular and Spring Boot. The backend was developed in microsservices and messaging with RabbitMQ.",
            ptBr: "The project aimed to create a internal marketplace for a Brazilian company, where they could reward their employees or sell brand products.\nThe project was developed using Angular and Spring Boot. The backend was developed in microsservices and messaging with RabbitMQ.",
        }
    }
]