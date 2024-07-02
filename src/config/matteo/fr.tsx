import { IconBrandGithub, IconBrandLinkedin, IconBulb, IconHome, IconMail, IconRoute } from '@tabler/icons-react';
import React from 'react';
import WebsiteContent from '@/config/structure';
import technologies from '@/config/technologies';

import { HomePage } from '@/pages/Home.page';
import { CurriculumPage } from '@/pages/Curriculum.page';
import { ProjectPage } from '@/pages/Project.page';
import { ContactPage } from '@/pages/Contact.page';

import mcnLogo from '@/assets/experience/mcn-logo.jpg';
import mcnBg from '@/assets/experience/mcn-bg.jpg';
import fitLogo from '@/assets/experience/fit-logo.jpg';
import fitBg from '@/assets/experience/fit-bg.jpg';
import etsLogo from '@/assets/experience/ets-logo.png';
import etsBg from '@/assets/experience/ets-bg.png';
import polytechLogo from '@/assets/experience/polytech-logo.png';
import polytechBg from '@/assets/experience/polytech-bg.jpg';

const content: WebsiteContent = {

    URL_CV: 'https://docs.google.com/document/d/1D-tLcVnSyjpBRY2gj7bouo9WOf_YJR1eCTuDnF-UDBg/edit?usp=sharing',
    logo: '',
    notFoundPicture: '',

    routes: {
        home: {
            name: 'Bonjour',
            path: '/',
            element: <HomePage />,
            icon: <IconHome />,
        },
        curriculum: {
            name: 'Curriculum',
            path: '/curriculum',
            element: <CurriculumPage />,
            icon: <IconRoute />,
        },
        project: {
            name: 'Projets',
            path: '/projects',
            element: <ProjectPage />,
            icon: <IconBulb />,
        },
        contact: {
            name: 'Contact',
            path: '/contact',
            element: <ContactPage />,
            icon: <IconMail />,
        },
    },
    homeLinks: [],
    experienceData: [
        {
            title: 'Conseiller en IA',
            description: '',
            link: 'https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique',
            image: mcnLogo,
            date: 'Depuis mai 2024',
            place: 'Stage - CEI3A, Ministère de la Cybersécurité et du Numérique, Montréal, Canada',
            backgroundImage: mcnBg,
        },
        {
            title: 'Développeur en vision par ordinateur',
            description: '',
            link: 'https://fit.cvut.cz/en/science-and-research/facilities/laboratories/8357-image-processing-laboratory-improlab',
            image: fitLogo,
            date: 'De mai à juillet 2023',
            place: 'Stage - ImproLab - FIT CTU, Prague, Tchéquie',
            backgroundImage: fitBg,
        },
    ],
    formationData: [
        {
            title: 'Maitrise en génie logiciel',
            description: '',
            link: 'https://www.etsmtl.ca/etude/deuxieme-cycle/maitrise-genie-logiciel',
            image: etsLogo,
            date: 'Depuis 2023',
            place: 'ETS Montréal, Canada',
            backgroundImage: etsBg,
        },
        {
            title: 'Ingénieur en Informatique',
            description: '',
            link: 'https://polytech.grenoble-inp.fr/fr/formations/informatique-1',
            image: polytechLogo,
            date: 'Depuis 2021',
            place: 'Polytech Grenoble - INP UGA, France',
            backgroundImage:
            polytechBg,
        },
    ],
    projectData: [
        {
            description: 'Application web de secret santa pour des pizzas',
            link: 'https://github.com/matteodcr/santa-pizza',
            name: '🍕 Pizza Party',
            // image: pizzaProject,
            backgroundColor: '#c7817c',
            technologies: [technologies.nestjs, technologies.typescript, technologies.postgresql],
            font: 'Titan One',
            fontColor: '#be1931',
        },
        {
            description: 'Application mobile de géolocalisation GNSS RTK',
            link: 'https://github.com/matteodcr/TurtleRTK',
            name: '🐢 Turtle RTK',
            //image: turtleProject,
            backgroundColor: '#a08cbf',
            technologies: [technologies.reactNative, technologies.typescript],
            font: 'Fjalla One',
            fontColor: '#6a3de8',
        },
        {
            description: 'Jeu coopératif basé sur des automates',
            link: 'https://github.com/matteodcr/Patatruck',
            name: '🥔 Patatruck',
            //image: patatruckProject,
            backgroundColor: '#ac905f',
            technologies: [technologies.java],
            font: 'Fugaz One',
            fontColor: '#ffc000',
        },
    ],
    socialLinksData: [
        {
            icon: <IconBrandGithub />,
            href: 'https://github.com/matteodcr',
            label: 'Github',
        },
        {
            icon: <IconBrandLinkedin />,
            href: 'https://www.linkedin.com/in/matteodecorsaire/en?originalSubdomain=ca',
            label: 'Linkedin',
        },
    ],
};

export default content;
