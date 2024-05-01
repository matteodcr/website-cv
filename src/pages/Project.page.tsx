import React from 'react';
import { em, SimpleGrid, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { FaJava } from 'react-icons/fa';
import { SiNestjs, SiTypescript } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { TbBrandReactNative } from 'react-icons/tb';
import { observer } from 'mobx-react-lite';
import ProjectCard, { ProjectProps, Technologies } from '@/components/ProjectCard';
import AnimatedPage from '@/components/AnimatedPage';
import pizzaProject from '@/assets/pizza-party.png';
import { useNavigationStore } from '@/store/Navigation.store';

const technologies: { [key: string]: Technologies } = {
  java: {
    name: 'Java',
    icon: <FaJava size={20} />,
    backgroundColor: 'blue',
    textColor: '',
  },
  nestjs: {
    name: 'NestJS',
    icon: <SiNestjs color="#e12a54" />,
    backgroundColor: 'black',
    textColor: '#e12a54',
  },
  typescript: {
    name: 'TypeScript',
    icon: <SiTypescript color="#2f74c0" />,
    backgroundColor: 'white',
    textColor: '#007acc',
  },
  postgresql: {
    name: 'PostGreSQL',
    icon: <DiPostgresql color="#376695" size={30} />,
    backgroundColor: 'white',
    textColor: '#376695',
  },
  reactNative: {
    name: 'React Native',
    icon: <TbBrandReactNative color="#2ddafd" size={20} />,
    backgroundColor: '#292929',
    textColor: '#2ddafd',
  },
};

const projectData: ProjectProps[] = [
  {
    description: 'Application web de secret santa pour des pizzas',
    link: 'https://github.com/matteodcr/santa-pizza',
    name: '🍕 Pizza Party',
    image: pizzaProject,
    technologies: [technologies.nestjs, technologies.typescript, technologies.postgresql],
    font: 'Titan One',
    fontColor: '#be1931',
  },
  {
    description: 'Application mobile de géolocalisation GNSS RTK',
    link: 'https://github.com/matteodcr/TurtleRTK',
    name: '🐢 Turtle RTK',
    image:
      'https://images.unsplash.com/photo-1517504734587-2890819debab?q=80&w=1639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: [technologies.reactNative, technologies.typescript],
    font: 'Fjalla One',
    fontColor: '#6a3de8',
  },
  {
    description: 'Jeu coopératif basé sur des automates',
    link: 'https://github.com/matteodcr/Patatruck',
    name: '🥔 Patatruck',
    image: 'https://matteo.decorsaire.me/assets/Patatruck-1ecbc2af.png',
    technologies: [technologies.java],
    font: 'Fugaz One',
    fontColor: 'yellow',
  },
];

export const ProjectPage = observer(() => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const store = useNavigationStore();

  return (
    <AnimatedPage direction={store.routePosition}>
      <Title>Projets</Title>

      <SimpleGrid cols={isMobile ? 1 : 2} py="sm">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
    </AnimatedPage>
  );
});
