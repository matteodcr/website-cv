import { em, Group } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import logo from '@/assets/logo.png';
import CustomFloatingIndicator from '@/components/HeaderMenu';

export default function Header() {
    const isMobile = useMediaQuery(`(max-width: ${em(1000)})`);

    return (
    <Group justify="space-between">
      <Group justify="flex-start">
        <img src={logo} width="50px" alt="LOGO" />
      </Group>
        {!isMobile &&
      <CustomFloatingIndicator />}
    </Group>
  );
}
