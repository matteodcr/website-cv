import { IconBrandLinkedin, IconHome, IconMail, IconRoute } from '@tabler/icons-react';
import React from 'react';
import WebsiteContent from '@/config/structure';

import polytechLogo from '@/assets/experience/polytech-logo.png';
import iaeLogo from '@/assets/experience/iae-logo.png';
import chuLogo from '@/assets/experience/chu-logo.jpg';
import hugLogo from '@/assets/experience/hug-logo.png';
import sopraLogo from '@/assets/experience/sopra-logo.png';

import polytechBg from '@/assets/experience/polytech-bg.jpg';
import iaeBg from '@/assets/experience/iae-bg.jpg';
import chuBg from '@/assets/experience/chu-bg.jpg';
import hugBg from '@/assets/experience/hug-bg.jpg';
import sopraBg from '@/assets/experience/sopra-bg.jpg';

import { HomePage } from '@/pages/Home.page';
import { CurriculumPage } from '@/pages/Curriculum.page';
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
        contact: {
            name: 'Contact',
            path: '/contact',
            element: <ContactPage />,
            icon: <IconMail />,
        },
    },
    homeLinks: [
        {
            icon: <IconBrandLinkedin />,
            title: 'Linkedin',
            description: '',
            link: 'https://www.linkedin.com/in/lisa-d%C3%A9corsaire-782638157/',
        },
    ],
    experienceData: [
        {
            title: 'Business Analyst / Experte fonctionnelle (MOE)',
            description: '',
            link: 'https://www.soprasteria.com/fr/secteurs-activite/assurance-protection-sociale',
            image: sopraLogo,
            date: 'Depuis avril 2019',
            place: 'Sopra Steria, Grenoble, France',
            backgroundImage: sopraBg,
        },
        {
            title: 'Développement d\'une application mobile',
            description: '',
            link: 'https://www.hug.ch/',
            image: hugLogo,
            date: 'De mai à août 2018',
            place: 'Hôpitaux Universitaires Genève, Suisse',
            backgroundImage: hugBg,
        },
        {
            title: 'Observation de l\'équipe médicale',
            description: '',
            link: 'https://www.chu-grenoble.fr/',
            image: chuLogo,
            date: '2017',
            place: 'Centre Hospitalier Universitaire de Grenoble, France',
            backgroundImage: chuBg,
        },
    ],
    formationData: [
        {
            title: 'Management et Administration des Entreprises (MAE)',
            description: '',
            link: 'https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-management-et-administration-des-entreprises-IDIV4XI5.html',
            image: iaeLogo,
            date: 'De 2018 à 2020',
            place: 'IAE Grenoble INP-UGA, France',
            backgroundImage: iaeBg,
        },
        {
            title: 'Ingénieure en Technologies de l\'Information pour la Santé',
            description: '',
            link: 'https://polytech.grenoble-inp.fr/fr/formations/technologies-de-linformation-pour-la-sante-1#page-presentation',
            image: polytechLogo,
            date: 'De 2016 à 2019',
            place: 'Polytech Grenoble - INP UGA, France',
            backgroundImage: polytechBg,
        },
    ],
    projectData: [],
    socialLinksData: [
        {
            icon: <IconBrandLinkedin />,
            href: 'https://www.linkedin.com/in/lisa-d%C3%A9corsaire-782638157/',
            label: 'Linkedin',
        },
    ],
};

export default content;
