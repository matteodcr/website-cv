import React, {useEffect, useState} from 'react';
import {Button, Center, Flex, Group, Text} from '@mantine/core';
import {useLocation, useNavigate} from 'react-router-dom';
import {Route, routes} from '@/Router';
import {useNavigationStore} from "@/store/Navigation.store";

interface FooterButtonProps extends Route {
    onClick: () => void;
    keyRoute: string;
    indexRoute: number;
    setActiveRoute: (route: string) => void;
    activeRoute: string;
}

function FooterButton({
                          icon,
                          path,
                          name,
                          keyRoute,
                          setActiveRoute,
                          activeRoute,
                      }: FooterButtonProps) {
    const navigate = useNavigate();
    const store = useNavigationStore();

    const onClick = (destRoute: string) => {
        store.navigate(navigate, window.location.pathname, destRoute);
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
                borderTop: '0.05em solid #d1cfcf'
            }}
            bg="white"
        >
            {Object.keys(routes).map((key, index) => (
                <FooterButton
                    onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }}
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
