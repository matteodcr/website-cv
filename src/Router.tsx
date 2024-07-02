import React, { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotFoundPage from '@/pages/NotFound.page';
import AnimatedPage from '@/components/AnimatedPage';
import { getWebsiteContent } from '@/config/structure';

export interface Route {
  name: string;
  path: string;
  element: React.ReactNode;
  icon: ReactNode;
}

export const Pages = () => {
  const { routes } = getWebsiteContent();
  return (
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
      </AnimatePresence>);
};
