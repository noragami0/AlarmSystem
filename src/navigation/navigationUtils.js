import {createNavigationContainerRef} from '@react-navigation/native';

export const RouteNames = {
    HOME: 'HOME',
    PROFILE: 'PROFILE',
};

export const navigationRef = createNavigationContainerRef();

export class NavigationUtils {
    static navigate(route) {
        navigationRef.navigate(route);
    }
}
