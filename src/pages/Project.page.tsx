import React from 'react';
import { em, SimpleGrid, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { observer } from 'mobx-react-lite';
import ProjectCard from '@/components/ProjectCard';
import AnimatedPage from '@/components/AnimatedPage';
import { useNavigationStore } from '@/store/Navigation.store';
import { getWebsiteContent } from '@/config/structure';

export const ProjectPage = observer(() => {
  const isMobile = useMediaQuery(`(max-width: ${em(1500)})`);
  const store = useNavigationStore();

  const { projectData } = getWebsiteContent();

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
