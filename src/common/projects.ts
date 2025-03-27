import { Project, ProjectTags } from "../types/Project";
import project1 from "./../assets/project1.png"
import project2 from "./../assets/project2.png"
import project3 from "./../assets/project3.png"
import project4 from "./../assets/project4.png"
import project5 from "./../assets/project5.png"
import project6 from "./../assets/project6.png"

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
    },
    {
        imageSrc: project4,
        name:{
            en: "Website - Educação Sem Fronteiras",
            es: "Website - Educação Sem Fronteiras",
            ptBr: "Website - Educação Sem Fronteiras"
        },
        tags: [ProjectTags.wordpress, ProjectTags.javascript],
        description: {
            en: "I’ve developed new features like placement tests and registration form. Those features were integrated with Google Workspace and Pipefy.\nIt was developed using Wordpress and HTML, CSS, Javascript and PHP.",
            es: "I’ve developed new features like placement tests and registration form. Those features were integrated with Google Workspace and Pipefy.\nIt was developed using Wordpress and HTML, CSS, Javascript and PHP.",
            ptBr: "I’ve developed new features like placement tests and registration form. Those features were integrated with Google Workspace and Pipefy.\nIt was developed using Wordpress and HTML, CSS, Javascript and PHP.",
        }
    }
    ,
    {
        imageSrc: project5,
        name:{
            en: "Contract management system",
            es: "Contract management system",
            ptBr: "Contract management system"
        },
        tags: [ProjectTags.angular, ProjectTags.springBoot],
        description: {
            en: "The project was to develop a system to manage the contracts of the company. It would connect user’s input, pre registered data and other systems to generate and manage contracts.\nThe system was built with microsservices using Spring Boot. The frontend was made with Angular.",
            es: "The project was to develop a system to manage the contracts of the company. It would connect user’s input, pre registered data and other systems to generate and manage contracts.\nThe system was built with microsservices using Spring Boot. The frontend was made with Angular.",
            ptBr: "The project was to develop a system to manage the contracts of the company. It would connect user’s input, pre registered data and other systems to generate and manage contracts.\nThe system was built with microsservices using Spring Boot. The frontend was made with Angular.",
        }
    },
    {
        imageSrc: project6,
        name:{
            en: "Go Video",
            es: "Go Video",
            ptBr: "Go Video"
        },
        tags: [ProjectTags.angular, ProjectTags.springBoot],
        description: {
            en: "This was a study project made as final paper of Full Stack Development course. The goal was to create an website to manage equipment of video producers.\nThe project was created using Spring Boot and Angular.",
            es: "This was a study project made as final paper of Full Stack Development course. The goal was to create an website to manage equipment of video producers.\nThe project was created using Spring Boot and Angular.",
            ptBr: "This was a study project made as final paper of Full Stack Development course. The goal was to create an website to manage equipment of video producers.\nThe project was created using Spring Boot and Angular.",
        },
        githubUrl: "https://github.com/HalineTamaoki/go-video_frontend"
    }
]