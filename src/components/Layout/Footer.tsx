import React, { useEffect, useState } from 'react';
import { Button, Center, Flex, Group, Text } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { Route } from '@/Router';
import { getWebsiteContent } from '@/config/structure';

interface FooterButtonProps extends Route {
  keyRoute: string;
  indexRoute: number;
  setActiveRoute: (route: string) => void;
  activeRoute: string;
}

function FooterButton({ icon, name, keyRoute, setActiveRoute, activeRoute }: FooterButtonProps) {
  const navigate = useNavigate();

  const { routes } = getWebsiteContent();

  const onClick = (destRoute: string) => {
    navigate(destRoute);
    setActiveRoute(destRoute);
  };

  return (
    <Center>
      <Button
        variant="subtle"
        m={0}
        px={5}
        h={60}
        w={100}
        onClick={() => onClick(routes[keyRoute].path)}
        radius={200}
      >
        <Flex justify="center" direction="column" align="center">
          {icon}
          <Text fz={12} fw={routes[keyRoute].path === activeRoute ? 800 : undefined}>
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

  const { routes } = getWebsiteContent();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  return (
    <Group
      grow
      justify="center"
      align="stretch"
      h={80}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        border: '1px solid gray',
        borderRadius: '15px',
        zIndex: 1000,
      }}
      bg="white"
      mb={10}
      mx={10}
    >
      {Object.keys(routes).map((key, index) => (
        <FooterButton
          setActiveRoute={setActiveRoute}
          activeRoute={activeRoute}
          keyRoute={key}
          indexRoute={index}
          key={index}
          {...routes[key]}
        />
      ))}
    </Group>
  );
}
