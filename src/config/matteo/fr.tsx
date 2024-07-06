import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBulb,
  IconHome,
  IconMail,
  IconRoute,
} from '@tabler/icons-react';
import React from 'react';
import WebsiteContent from '@/config/structure';
import technologies from '@/config/technologies';

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
import { HomePage } from '@/pages/Home.page';
import { CurriculumPage } from '@/pages/Curriculum.page';
import { ProjectPage } from '@/pages/Project.page';
import { ContactPage } from '@/pages/Contact.page';

const content: WebsiteContent = {
  fullName: 'Mattéo Decorsaire',
  introSentence: 'Bonjour 👋, je suis',
  position: 'Etudiant en informatique et en génie logiciel',
  pageTitle: 'Mattéo D',
  URL_CV:
    'https://docs.google.com/document/d/1D-tLcVnSyjpBRY2gj7bouo9WOf_YJR1eCTuDnF-UDBg/edit?usp=sharing',
  logo,
  notFoundPicture,

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
  curriculumData: [
    {
      title: 'Expérience',
      data: [
        {
          title: 'Conseiller en IA',
          description: '',
          link: 'https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique',
          image: mcnLogo,
          date: 'Depuis mai 2024',
          place: 'CEI3A, Ministère de la Cybersécurité et du Numérique du Québec, Montréal, Canada',
          contract: 'Stage',
          backgroundImage: mcnBg,
        },
        {
          title: 'Développeur en vision par ordinateur',
          description:
            "Développement d'un système de caméra autonome assisté par IA pour la détection du chemin des piétons.",
          descriptionList: [
            { icon: '🔎', description: 'Détecter les principales failles d’un système existant' },
            {
              icon: '📊',
              description: 'Présenter et mettre en perspective les solutions envisagées',
            },
            { icon: '🧑‍💻', description: 'Programmer un système autonome interagissant avec SSH' },
            {
              icon: '📖',
              description: 'Apprendre de nouvelles techniques de vision par ordinateur',
            },
            {
              icon: '🧪',
              description:
                'Prendre part à des expériences afin de délivrer des résultats à un client',
            },
          ],
          link: 'https://fit.cvut.cz/en/science-and-research/facilities/laboratories/8357-image-processing-laboratory-improlab',
          image: fitLogo,
          date: 'De mai à juillet 2023',
          place: 'ImproLab - FIT CTU, Prague, Tchéquie',
          contract: 'Stage',

          backgroundImage: fitBg,
        },
      ],
    },
    {
      title: 'Formation',
      data: [
        {
          title: 'Maitrise en génie logiciel',
          description: '',
          descriptionList: [
            { icon: '🏗️', description: 'Architecture logicielle' },
            { icon: '📋', description: 'Exigences et spécifications de systèmes logiciels' },
            { icon: '🧪', description: 'Vérification et assurance qualité de logiciels' },
            { icon: '🤖', description: "Génie logiciel pour l'Intelligence Artificielle" },
            { icon: '📊', description: 'Gestion de projet en génie logiciel' },
          ],
          link: 'https://www.etsmtl.ca/etude/deuxieme-cycle/maitrise-genie-logiciel',
          image: etsLogo,
          date: 'Depuis 2023',
          place: 'ETS Montréal, Canada',
          backgroundImage: etsBg,
        },
        {
          title: 'Ingénieur en Informatique',
          description: '',
          descriptionList: [
            {
              icon: '👨‍💻',
              description:
                'Logiciel (Informatique fondamentale, Algorithmique et programmation, Génie logiciel, Bases de données)',
            },
            {
              icon: '🖥️',
              description:
                'Matériel (Architecture matérielle, Traitement du signal, Communications, Informatique mobile)',
            },
            {
              icon: '🌐',
              description:
                'Systèmes et réseaux (Réseaux, Protocoles, Intergiciels, Systèmes répartis)',
            },
            {
              icon: '🎥',
              description:
                'Multimédia (Interactions homme-machine, Communication langagière, Recherche d’informations, Synthèse d’images)',
            },
          ],
          link: 'https://polytech.grenoble-inp.fr/fr/formations/informatique-1',
          image: polytechLogo,
          date: 'Depuis 2021',
          place: 'Polytech Grenoble - INP UGA, France',
          backgroundImage: polytechBg,
        },
      ],
    },
    {
      title: 'Associatif',
      data: [
        {
          title: 'Membre Actif - Responsable des Partenariats',
          description: '',
          descriptionList: [],
          link: 'https://polytech.grenoble-inp.fr/fr/vie-etudiante/bde-polytech-grenoble',
          image: bdeLogo,
          date: 'De  2022 à  2023',
          place: 'ETS Montréal, Canada',
          backgroundImage: polytechBg,
        },
      ],
    },
  ],
  projectData: [
    {
      description: 'Application web de secret santa pour des pizzas',
      link: 'https://github.com/matteodcr/santa-pizza',
      name: '🍕 Pizza Party',
      // image: pizzaProject,
      backgroundColor: '#c7817c',
      technologies: [
        technologies.nestjs,
        technologies.postgresql,
        technologies.react,
        technologies.typescript,
      ],
      //font: 'Titan One',
      fontColor: '#be1931',
    },
    {
      description: 'Application mobile de géolocalisation GNSS RTK',
      link: 'https://github.com/matteodcr/TurtleRTK',
      name: '🐢 Turtle RTK',
      //image: turtleProject,
      backgroundColor: '#a08cbf',
      technologies: [technologies.reactNative, technologies.typescript],
      //font: 'Fjalla One',
      fontColor: '#6a3de8',
    },
    {
      description: 'Jeu coopératif basé sur des automates',
      link: 'https://github.com/matteodcr/Patatruck',
      name: '🥔 Patatruck',
      //image: patatruckProject,
      backgroundColor: '#ac905f',
      technologies: [technologies.java],
      //font: 'Fugaz One',
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
} as WebsiteContent;

export default content;
