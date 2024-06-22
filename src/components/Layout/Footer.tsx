import React, { useEffect, useState } from 'react';
import { Button, Center, Flex, Group, Text } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { Route, routes } from '@/Router';
import { useNavigationStore } from '@/store/Navigation.store';

interface FooterButtonProps extends Route {
  isActive: boolean;
  onClick: () => void;
}

function FooterButton({ icon, path, name, isActive }: FooterButtonProps) {
  const navigate = useNavigate();
  return (
    <Center>
      <Button
        variant="subtle"
        m={0}
        px={5}
        h={60}
        w={100}
        onClick={() => navigate(path)}
        radius={200}
      >
        <Flex justify="center" direction="column" align="center">
          {icon}
          <Text fz={12} fw={isActive ? 800 : undefined}>
            {name}
          </Text>
        </Flex>
      </Button>
    </Center>
  );
}

export default function Footer() {
  const [activeRoute, setActiveRoute] = useState<string>('');
  const location = useLocation();
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
    <Group
      grow
      justify="center"
      align="stretch"
      h={80}
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderTop: '1px solid #f0f0f0' }}
      bg="white"
    >
      {Object.keys(routes).map((key, index) => (
        <FooterButton
          key={index}
          isActive={routes[key].path === activeRoute}
          onClick={() => {
            onClick(routes[key].path);
            setActiveButtonIndex(index);
          }}
          {...routes[key]}
        />
      ))}
    </Group>
  );
}
