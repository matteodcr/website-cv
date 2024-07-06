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
    <Stack p="md" mx={isMobile ? 0 : '20%'} pb={isMobile ? 80 : 5}>
      <Header />
      {children}
      {/*<Flex mih={50} justify="center" align="center" direction="column" wrap="wrap">*/}
      {
        //TODO: Footer with legal conditions
      }
      {/*  Test*/}
      {/*</Flex>*/}
      {isMobile && <Footer />}
    </Stack>
  );
}
