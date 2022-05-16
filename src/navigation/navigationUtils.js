import {createNavigationContainerRef} from '@react-navigation/native';

export const RouteNames = {
    COMPONENT_PALETTE: 'COMPONENT_PALETTE',
    HOME: 'HOME',
    LIST: 'LIST',
    SETTINGS: 'SETTINGS',
    SANCTUARY: 'SANCTUARY',
};

export const navigationRef = createNavigationContainerRef();

export class NavigationUtils {
    static navigate(route) {
        navigationRef.navigate(route);
    }
}
