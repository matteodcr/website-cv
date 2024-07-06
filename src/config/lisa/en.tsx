import { IconBrandLinkedin, IconHome, IconMail, IconRoute } from '@tabler/icons-react';
import React from 'react';

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
import notFoundPicture from '@/assets/404.png';
import logo from '@/assets/logo_lisa.png';

const content = {
  pageTitle: 'Lisa D',
  URL_CV: '',
  logo,
  notFoundPicture,
  introSentence: 'Hello 👋, I am',
  fullName: 'Lisa Decorsaire',
  position: 'Business Analyst',

  routes: {
    home: {
      name: 'Home',
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
  curriculumData: [
    {
      title: 'Work Experience',
      data: [
        {
          title: 'Business Analyst / Functional Expert (MOE)',
          description: '',
          link: 'https://www.soprasteria.com/industries/insurance-social',
          image: sopraLogo,
          date: 'Since April 2019',
          place: 'Sopra Steria, Grenoble, France',
          backgroundImage: sopraBg,
        },
        {
          title: 'Development of a Mobile Application',
          description: '',
          link: 'https://www.hug.ch/en',
          image: hugLogo,
          date: 'May to August 2018',
          place: 'Hôpitaux Universitaires Genève, Switzerland',
          backgroundImage: hugBg,
          contract: 'Internship',
        },
        {
          title: 'Observation of the Medical Team',
          description: '',
          link: 'https://www.chu-grenoble.fr/english',
          image: chuLogo,
          date: '2017',
          place: 'Centre Hospitalier Universitaire de Grenoble, France',
          backgroundImage: chuBg,
          contract: 'Internship',
        },
      ],
    },
    {
      title: 'Education',
      data: [
        {
          title: 'Master in Corporate management and administration',
          description: '',
          link: 'https://formations.univ-grenoble-alpes.fr/en/catalog-2021/master-XB/master-management-et-administration-des-entreprises-IDIV4XI5.html',
          image: iaeLogo,
          date: '2018 to 2020',
          place: 'IAE Grenoble INP-UGA, France',
          backgroundImage: iaeBg,
        },
        {
          title: 'Engineer in Information Technology for Health',
          description: '',
          link: 'https://polytech.grenoble-inp.fr/medias/fichier/tis-anglais_1688986752958-pdf?ID_FICHE=16078&INLINE=FALSE',
          image: polytechLogo,
          date: '2016 to 2019',
          place: 'Polytech Grenoble - INP UGA, France',
          backgroundImage: polytechBg,
        },
      ],
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
