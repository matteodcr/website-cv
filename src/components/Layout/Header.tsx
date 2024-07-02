import { Burger, Group } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/Router';
import logo from '@/assets/logo.png';
import { useNavigationStore } from '@/store/Navigation.store';
import CustomFloatingIndicator from '@/components/HeaderMenu';

export default function Header() {
  const navigate = useNavigate();
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(-1);
  const store = useNavigationStore();

  useEffect(() => {
    const updateActiveButtonIndex = () => {
      const currentPath = window.location.pathname;
      const foundIndex = Object.keys(routes).findIndex((key) => routes[key].path === currentPath);
      setActiveButtonIndex(foundIndex);
    };

    updateActiveButtonIndex();

    const handleLocationChange = () => {
      updateActiveButtonIndex();
    };
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const onClick = (destRoute: string) => {
    store.navigate(navigate, window.location.pathname, destRoute);
  };

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
