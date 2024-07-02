import '@mantine/core/styles.css';
import React, { useEffect, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import { Pages } from '@/Router';
import CustomLoader from '@/components/CustomLoader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
