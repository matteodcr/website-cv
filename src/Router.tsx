import React, { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { IconBulb, IconHome, IconMail, IconRoute } from '@tabler/icons-react';
import NotFoundPage from '@/pages/NotFound.page';
import AnimatedPage from '@/components/AnimatedPage';
import { HomePage } from '@/pages/Home.page';
import { CurriculumPage } from '@/pages/Curriculum.page';
import { ProjectPage } from '@/pages/Project.page';
import { ContactPage } from '@/pages/Contact.page';

export interface Route {
  name: string;
  path: string;
  element: React.ReactNode;
  icon: ReactNode;
}
export const routes: { [key: string]: Route } = {
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
};

export const Pages = () => (
  <AnimatePresence mode="wait">
    <Routes>
      {Object.keys(routes).map((key, index) => (
        <Route
          key={index}
          path={routes[key].path}
          element={<AnimatedPage direction="left">{routes[key].element}</AnimatedPage>}
        />
      ))}
      <Route path="*" element={<NotFoundPage />} /> {/* Route pour la page 404 */}
    </Routes>
  </AnimatePresence>
);
