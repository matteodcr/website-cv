import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBulb,
  IconHome,
  IconMail,
  IconRoute,
} from '@tabler/icons-react';
import React from 'react';
import WebsiteContent from '@/config/structure'; // Assuming this defines the structure of your website content
import { HomePage } from '@/pages/Home.page';
import { CurriculumPage } from '@/pages/Curriculum.page';
import { ProjectPage } from '@/pages/Project.page';
import { ContactPage } from '@/pages/Contact.page';

import notFoundPicture from '@/assets/404.png';
import logo from '@/assets/logo.png';

import mcnLogo from '@/assets/experience/mcn-logo.jpg';
import mcnBg from '@/assets/experience/mcn-bg.jpg';
import fitLogo from '@/assets/experience/fit-logo.jpg';
import fitBg from '@/assets/experience/fit-bg.jpg';
import etsLogo from '@/assets/experience/ets-logo.png';
import etsBg from '@/assets/experience/ets-bg.png';
import polytechLogo from '@/assets/experience/polytech-logo.png';
import polytechBg from '@/assets/experience/polytech-bg.jpg';
import bdeLogo from '@/assets/experience/bde_logo.jpg';

import technologies from '@/config/technologies';

// Define the content structure for your website
const content: WebsiteContent = {
  fullName: 'Mattéo Decorsaire',
  introSentence: 'Hello 👋, I am',
  position: 'Student in Software Engineering',
  pageTitle: 'Mattéo D',
  URL_CV:
    'https://docs.google.com/document/d/1D-tLcVnSyjpBRY2gj7bouo9WOf_YJR1eCTuDnF-UDBg/edit?usp=sharing',
  logo,
  notFoundPicture,

  // Define navigation routes
  routes: {
    home: {
      name: 'Hello',
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
      name: 'Projects',
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

  homeLinks: [], // Assuming this would contain any additional links on the home page

  // Define experience data
  curriculumData: [
    {
      title: 'Work Experience',
      data: [
        {
          title: 'AI Developer',
          description: '',
          link: 'https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique',
          image: mcnLogo,
          date: 'Since May 2024',
          place: 'CEI3A, Québec Ministry of Cybersecurity and Digital Affairs, Montreal, Canada',
          contract: 'Internship',
          backgroundImage: mcnBg,
        },
        {
          title: 'Computer Vision Developer',
          description:
            'Developing an AI-assisted autonomous camera system for pedestrian path detection.',
          descriptionList: [
            { icon: '🔎', description: 'Detect major flaws in an existing system' },
            { icon: '📊', description: 'Present and contextualize proposed solutions' },
            { icon: '🧑‍💻', description: 'Program an autonomous system interacting with SSH' },
            { icon: '📖', description: 'Learn new computer vision techniques' },
            {
              icon: '🧪',
              description: 'Participate in experiments to deliver results to a client',
            },
          ],
          link: 'https://fit.cvut.cz/en/science-and-research/facilities/laboratories/8357-image-processing-laboratory-improlab',
          image: fitLogo,
          date: 'May to July 2023',
          place: 'ImproLab - FIT CTU, Prague, Czech Republic',
          contract: 'Internship',
          backgroundImage: fitBg,
        },
      ],
    },

    {
      title: 'Education',
      data: [
        {
          title: 'Master in Software Engineering',
          description: '',
          descriptionList: [
            { icon: '🏗️', description: 'Software Architecture' },
            { icon: '📋', description: 'Software System Requirements and Specifications' },
            { icon: '🧪', description: 'Software Verification and Quality Assurance' },
            { icon: '🤖', description: 'Software Engineering for Artificial Intelligence' },
            { icon: '📊', description: 'Project Management in Software Engineering' },
          ],
          link: 'https://www.etsmtl.ca/en/study/deuxieme-cycle/maitrise-genie-logiciel',
          image: etsLogo,
          date: 'Since 2023',
          place: 'ETS Montreal, Canada',
          backgroundImage: etsBg,
        },
        {
          title: "Engineer's Degree - Computer Networks and Multimedia Communication",
          description: '',
          descriptionList: [
            {
              icon: '👨‍💻',
              description:
                'Software (Fundamental Computer Science, Algorithmics and Programming, Software Engineering, Databases)',
            },
            {
              icon: '🖥️',
              description:
                'Hardware (Hardware Architecture, Signal Processing, Communications, Mobile Computing)',
            },
            {
              icon: '🌐',
              description:
                'Systems and Networks (Networks, Protocols, Middleware, Distributed Systems)',
            },
            {
              icon: '🎥',
              description:
                'Multimedia (Human-Computer Interaction, Language Communication, Information Retrieval, Image Synthesis)',
            },
          ],
          link: 'https://polytech.grenoble-inp.fr/medias/fichier/info-anglais-2-_1688983286603-pdf?ID_FICHE=16072&INLINE=FALSE',
          image: polytechLogo,
          date: 'Since 2021',
          place: 'Polytech Grenoble - INP UGA, France',
          backgroundImage: polytechBg,
        },
      ],
    },
    {
      title: 'Associative',
      data: [
        {
          title: 'Active Member - Partnership Manager',
          description: '',
          descriptionList: [],
          link: 'https://polytech.grenoble-inp.fr/fr/vie-etudiante/bde-polytech-grenoble',
          image: bdeLogo,
          date: 'From 2022 to 2023',
          place: 'ETS Montréal, Canada',
          backgroundImage: polytechBg,
        },
      ],
    },
  ],

  // Define project data
  projectData: [
    {
      description: 'Web application for secret santa pizza parties',
      link: 'https://github.com/matteodcr/santa-pizza',
      name: '🍕 Pizza Party',
      backgroundColor: '#c7817c',
      technologies: [
        technologies.nestjs,
        technologies.postgresql,
        technologies.react,
        technologies.typescript,
      ],
      fontColor: '#be1931',
    },
    {
      description: 'Mobile application for GNSS RTK geolocation',
      link: 'https://github.com/matteodcr/TurtleRTK',
      name: '🐢 Turtle RTK',
      backgroundColor: '#a08cbf',
      technologies: [technologies.reactNative, technologies.typescript],
      fontColor: '#6a3de8',
    },
    {
      description: 'Cooperative game based on automatons',
      link: 'https://github.com/matteodcr/Patatruck',
      name: '🥔 Patatruck',
      backgroundColor: '#ac905f',
      technologies: [technologies.java],
      fontColor: '#ffc000',
    },
  ],

  // Define social links data
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
} as WebsiteContent;

export default content;
