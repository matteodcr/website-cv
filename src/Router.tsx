import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import NotFoundPage from '@/pages/NotFound.page';
import { getWebsiteContent } from '@/config/structure';
import PageWrapper from '@/components/Layout/PageWrapper';

export interface Route {
  name: string;
  path: string;
  element: React.ReactNode;
  icon: ReactNode;
}

export const Pages = () => {
  const { routes } = getWebsiteContent();

  const routeElements = Object.keys(routes).map((key, index) => (
    <Route
      key={index}
      path={routes[key].path}
      // to avoid cutting the content because of the overflow:hidden of the SlideRoutes component
      element={<PageWrapper>{routes[key].element} </PageWrapper>}
    />
  ));

  routeElements.push(<Route path="*" element={<NotFoundPage />} key="not-found" />);

  return <SlideRoutes>{routeElements}</SlideRoutes>;
};
