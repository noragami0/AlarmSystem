import {createNavigationContainerRef} from '@react-navigation/native';

export const RouteNames = {
    COMPONENT_PALETTE: 'COMPONENT_PALETTE',
    HOME: 'HOME',
    PROFILE: 'PROFILE',
    SETTINGS: 'SETTINGS',

};

export const navigationRef = createNavigationContainerRef();

export class NavigationUtils {
    static navigate(route) {
        navigationRef.navigate(route);
    }
}
