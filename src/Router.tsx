import React from 'react';
import { Route } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import PageWrapper from '@/components/Layout/PageWrapper';
import NotFoundPage from '@/pages/NotFound.page';
import { getWebsiteContent } from '@/config/structure';

export const Pages = () => {
  const { routes } = getWebsiteContent();

  const routeElements = Object.keys(routes).map((key, index) => (
    <Route
      key={index}
      path={`${routes[key].path}`}
      element={<PageWrapper>{routes[key].element}</PageWrapper>}
    />
  ));

  routeElements.push(<Route path="*" element={<NotFoundPage />} key="not-found" />);

  return <SlideRoutes>{routeElements}</SlideRoutes>;
};
