import { useMediaQuery } from '@mantine/hooks';
import { em, Stack } from '@mantine/core';
import React, { ReactNode } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isMobile = useMediaQuery(`(max-width: ${em(1000)})`);
  return (
    <Stack p="md" mx={isMobile ? 0 : '20%'} pb={80}>
      <Header />
      {children}
      {isMobile && <Footer />}
    </Stack>
  );
}
