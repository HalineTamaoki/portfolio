import { Project, ProjectTags } from "../types/Project";
import project1 from "./../assets/project1.png"
import project2 from "./../assets/project2.png"
import project3 from "./../assets/project3.png"
import project4 from "./../assets/project4.png"
import project5 from "./../assets/project5.png"
import project6 from "./../assets/project6.png"
import videoGoVideo from "./../assets/govideo-video.mp4"
import videoEsfOnline from "./../assets/video-esf.mp4"
import videoEsfSite from "./../assets/video-esf-site.mp4"

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
            es: "Este fue un proyecto internacional para una gran automotriz en Alemania, cuyo propósito era desarrollar un sistema para probar componentes y vehículos.\nEl objetivo de la parte de desarrollo web fue migrar un antiguo proyecto en C# y .NET a un proyecto en Java + React.",
            ptBr: "Este foi um projeto internacional para uma grande montadora na Alemanha, cujo objetivo era desenvolver um sistema para testar componentes e veículos.\nA meta da parte de desenvolvimento web foi migrar um antigo projeto em C# e .NET para um projeto em Java + React."        }
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
            ptBr: "O Moodle é um Sistema de Gestão de Aprendizagem (LMS). O objetivo foi implementar o sistema para uma ONG que auxilia imigrantes e refugiados no Brasil.\nO sistema utilizou HTML, CSS e PHP. O trabalho envolveu soluções tanto administrativas quanto de programação.",
            es: "Moodle es un Sistema de Gestión del Aprendizaje (LMS). El objetivo fue implementar el sistema para una ONG que apoya a inmigrantes y refugiados en Brasil.\nEl sistema utilizó HTML, CSS y PHP. El trabajo abarcó tanto soluciones administrativas como de programación."        },
        demoSrc: videoEsfOnline
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
            ptBr: "O projeto teve como objetivo criar um marketplace interno para uma empresa brasileira, onde seria possível recompensar os funcionários ou vender produtos da marca.\nO projeto foi desenvolvido com Angular e Spring Boot. O backend foi estruturado em microsserviços e comunicação via RabbitMQ.",
            es: "El proyecto tenía como objetivo crear un marketplace interno para una empresa brasileña, donde se pudiera recompensar a los empleados o vender productos de la marca.\nEl proyecto fue desarrollado con Angular y Spring Boot. El backend fue implementado en microservicios y mensajería con RabbitMQ."        }
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
            ptBr: "Desenvolvi novas funcionalidades como testes de nivelamento e formulário de inscrição. Essas funcionalidades foram integradas ao Google Workspace e ao Pipefy.\nFoi desenvolvido utilizando Wordpress, além de HTML, CSS, Javascript e PHP.",
            es: "Desarrollé nuevas funcionalidades como pruebas de nivel y formulario de inscripción. Estas funcionalidades fueron integradas con Google Workspace y Pipefy.\nFue desarrollado utilizando Wordpress, así como HTML, CSS, Javascript y PHP."        },
        demoSrc: videoEsfSite
    }
    ,
    {
        imageSrc: project5,
        name:{
            en: "Contract management system",
            ptBr: "Sistema de gestão de contratos",
            es: "Sistema de gestión de contratos"
        },
        tags: [ProjectTags.angular, ProjectTags.springBoot],
        description: {
            en: "The project was to develop a system to manage the contracts of the company. It would connect user’s input, pre registered data and other systems to generate and manage contracts.\nThe system was built with microsservices using Spring Boot. The frontend was made with Angular.",
            ptBr: "O projeto consistiu no desenvolvimento de um sistema para gerenciar os contratos da empresa. Ele integrava dados inseridos pelos usuários, dados pré-cadastrados e outros sistemas para gerar e administrar os contratos.\nO sistema foi construído com microsserviços utilizando Spring Boot. O frontend foi desenvolvido com Angular.",
            es: "El proyecto consistió en desarrollar un sistema para gestionar los contratos de la empresa. Conectaba datos ingresados por los usuarios, datos pre-registrados y otros sistemas para generar y administrar contratos.\nEl sistema fue construido con microservicios utilizando Spring Boot. El frontend fue desarrollado con Angular."        }
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
            ptBr: "Este foi um projeto de estudo realizado como trabalho de conclusão do curso de Desenvolvimento Full Stack. O objetivo era criar um site para gerenciar os equipamentos de produtores de vídeo.\nO projeto foi desenvolvido utilizando Spring Boot e Angular.",
            es: "Este fue un proyecto de estudio realizado como trabajo final del curso de Desarrollo Full Stack. El objetivo era crear un sitio web para gestionar los equipos de productores de video.\nEl proyecto fue desarrollado utilizando Spring Boot y Angular."        },
        demoSrc: videoGoVideo,
        githubUrl: "https://github.com/HalineTamaoki?tab=repositories&q=go+video&"
    }
]