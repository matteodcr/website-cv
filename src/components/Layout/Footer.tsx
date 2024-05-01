import React, { useEffect, useState } from 'react';
import { Button, Center, Flex, Group, Text } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { Route, routes } from '@/Router';

interface FooterButtonProps extends Route {
  isActive: boolean;
  onClick: () => void;
}

function FooterButton({ icon, path, name, isActive, onClick }: FooterButtonProps) {
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

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

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
          onClick={() => setActiveRoute(routes[key].path)}
          {...routes[key]}
        />
      ))}
    </Group>
  );
}
