import { Burger, Button, Group } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/Router';
import logo from '@/assets/logo.png';
import { useNavigationStore } from '@/store/Navigation.store';

export default function Header() {
  const navigate = useNavigate();
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(-1);
  const store = useNavigationStore();

  // Utilise useEffect pour mettre à jour activeButtonIndex
  useEffect(() => {
    // Fonction pour mettre à jour activeButtonIndex basée sur l'URL actuelle
    const updateActiveButtonIndex = () => {
      const currentPath = window.location.pathname;
      const foundIndex = Object.keys(routes).findIndex((key) => routes[key].path === currentPath);
      setActiveButtonIndex(foundIndex);
    };

    // Appelle la fonction initiale pour mettre à jour activeButtonIndex lors du rendu initial
    updateActiveButtonIndex();

    // Ajoute un écouteur d'événement pour mettre à jour activeButtonIndex lorsque l'URL change
    const handleLocationChange = () => {
      updateActiveButtonIndex();
    };
    window.addEventListener('popstate', handleLocationChange);

    // Nettoie l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []); // Le tableau vide en tant que deuxième argument signifie que useEffect s'exécute uniquement une fois

  const onClick = (destRoute: string) => {
    store.navigate(navigate, window.location.pathname, destRoute);
  };

  return (
    <Group justify="space-between">
      <Group justify="flex-start">
        <img src={logo} width="50px" alt="LOGO" />
      </Group>
      <Group justify="flex-end" mx="1em" my="1em" visibleFrom="sm">
        {Object.keys(routes).map((key, index) => (
          <Button
            key={index}
            onClick={() => {
              onClick(routes[key].path);
              setActiveButtonIndex(index);
            }}
            variant="subtle"
            style={{
              borderBottom: activeButtonIndex === index ? '2px solid black' : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {routes[key].name}
          </Button>
        ))}
      </Group>
      <Group justify="flex-end" mx="1em" my="1em" hiddenFrom="sm">
        <Burger aria-label="Open navigation" />
      </Group>
    </Group>
  );
}
