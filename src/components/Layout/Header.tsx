import { Burger, Group } from '@mantine/core';
import React from 'react';
import logo from '@/assets/logo.png';
import CustomFloatingIndicator from '@/components/HeaderMenu';

export default function Header() {
  return (
    <Group justify="space-between">
      <Group justify="flex-start">
        <img src={logo} width="50px" alt="LOGO" />
      </Group>
      <CustomFloatingIndicator />
      <Group justify="flex-end" mx="1em" my="1em" hiddenFrom="sm">
        <Burger aria-label="Open navigation" />
      </Group>
    </Group>
  );
}
