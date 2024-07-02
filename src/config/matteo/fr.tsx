import { IconBulb, IconHome, IconMail, IconRoute } from '@tabler/icons-react';
import React from 'react';
import WebsiteContent from '@/config/structure';
import { HomePage } from '@/pages/Home.page';
import { CurriculumPage } from '@/pages/Curriculum.page';
import { ProjectPage } from '@/pages/Project.page';
import { ContactPage } from '@/pages/Contact.page';

const content: WebsiteContent = {

    URL_CV: '',
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
    experienceData: [],
    formationData: [],
    socialLinksData: [],
    projectData: [],
};

export default content;
