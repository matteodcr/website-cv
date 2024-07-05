import '@mantine/core/styles.css';
import React, { useEffect, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import { Pages } from '@/Router';
import CustomLoader from '@/components/CustomLoader';

import '@/App.module.css';
import { getWebsiteContent } from '@/config/structure';
import getCurrentRoute from '@/utils/getCurrentRoute';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { pageTitle, routes } = getWebsiteContent();
    document.title = `${pageTitle} · ${getCurrentRoute(routes, window.location.pathname)?.name}`;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MantineProvider
      theme={{
        primaryColor: 'dark',
      }}
      forceColorScheme="light"
    >
      <BrowserRouter>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <Layout>
            <Pages />
          </Layout>
        )}
      </BrowserRouter>
    </MantineProvider>
  );
}
