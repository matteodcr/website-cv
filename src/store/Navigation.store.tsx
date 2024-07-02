import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { NavigateFunction } from 'react-router-dom';
import { getWebsiteContent } from '@/config/structure';

const { routes } = getWebsiteContent();

class NavigationStore {
  routePosition: 'left' | 'right' = 'left';

  constructor() {
    makeAutoObservable(this);
  }

  navigate(navigate: NavigateFunction, sourcePath: string, destinationPath: string) {
    const sourceRoute = Object.entries(routes).find(([, route]) => route.path === sourcePath);
    const destinationRoute = Object.entries(routes).find(
      ([, route]) => route.path === destinationPath
    );

    if (!sourceRoute || !destinationRoute) {
      throw new Error('Invalid route path');
    }

    const sourceIndex = this.getRoutePosition(sourceRoute[0]);
    const destinationIndex = this.getRoutePosition(destinationRoute[0]);

    if (sourceIndex < destinationIndex) {
      this.routePosition = 'right';
    } else {
      this.routePosition = 'left';
    }
    navigate(destinationPath);
  }

  private getRoutePosition(routeName: string): number {
    const routeKeys = Object.keys(routes);
    const sourceIndex = routeKeys.indexOf(routeName);
    if (sourceIndex === -1) {
      throw new Error('Route not found');
    }
    return sourceIndex;
  }
}

const NavigationContext = createContext(new NavigationStore());
export const useNavigationStore = () => useContext(NavigationContext);
