import { useEffect, useState } from 'react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from '@/components/HeaderMenu.module.css';
import { routes } from '@/Router';
import { useNavigationStore } from '@/store/Navigation.store';

export default function HeaderMenu() {
    const navigate = useNavigate();
    const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
    const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
    const [active, setActive] = useState(0);
    const store = useNavigationStore();

    const setControlRef = (index: number) => (node: HTMLButtonElement) => {
        controlsRefs[index] = node;
        setControlsRefs(controlsRefs);
    };

    useEffect(() => {
        const updateActiveButtonIndex = () => {
            const currentPath = window.location.pathname;
            const foundIndex = Object.keys(routes).findIndex((key) => routes[key].path === currentPath);
            setActive(foundIndex);
        };

        updateActiveButtonIndex();
    }, []);

    const onClick = (destRoute: string) => {
        store.navigate(navigate, window.location.pathname, destRoute);
    };

    const routeKeys = Object.keys(routes);

    const controls = routeKeys.map((key, index) => (
        <UnstyledButton
          key={index}
          className={classes.control}
          ref={setControlRef(index)}
          onClick={() => {
              onClick(routes[key].path);
              setActive(index);
          }}
          mod={{ active: active === index }}
        >
            <span className={classes.controlLabel}>{routes[key].name}</span>
        </UnstyledButton>
    ));

    return (
        <div className={classes.root} ref={setRootRef}>
            {controls}

            <FloatingIndicator
              target={controlsRefs[active]}
              parent={rootRef}
              className={classes.indicator}
            />
        </div>
    );
}
