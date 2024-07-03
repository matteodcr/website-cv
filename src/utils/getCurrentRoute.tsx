import { Route } from '@/Router';

function getCurrentRoute(routes: { [key: string]: Route }, path: string): Route | null {
    for (const key in routes) {
        if (routes[key].path === path) {
            return routes[key];
        }
    }
    return null;
}

export default getCurrentRoute;
