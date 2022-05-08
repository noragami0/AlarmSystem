import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/User/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/User/ProfileScreen/ProfileScreen';
import {RouteNames, navigationRef, NavigationUtils} from './navigationUtils';
import {DEFAULT_SCREEN} from '../utils/constants';
import ComponentPaletteScreen from '../screens/Palettes/ComponentPalette/ComponentPaletteScreen';
import NavPanelButtons from '../components/NavPanel/NavPanelButtons';
import {IconsR} from '../utils/res/icons';

const Stack = createNativeStackNavigator();

const screens = [
    {
        name: RouteNames.HOME,
        component: HomeScreen,
        options: {title: 'Home'},
    },
    {
        name: RouteNames.PROFILE,
        component: ProfileScreen,
        options: {title: 'Profile'},
    },
    {
        name: RouteNames.COMPONENT_PALETTE,
        component: ComponentPaletteScreen,
        options: {title: 'Component Palette'},
    },
];

function AppNavigation() {
    const renderScreen = (screen) => (
        <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
        />
    );
    const [selectedIcon, setSelectedIcon] = useState(undefined);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={DEFAULT_SCREEN}>
                {screens.map((screen) => renderScreen(screen))}
            </Stack.Navigator>
            <NavPanelButtons
                icons={[{icon: IconsR.PIN_ICON, tag: 'LOCATION'},
                    {icon: IconsR.LIST_ICON, tag: 'LIST'},
                    {icon: IconsR.HOME_ICON, tag: 'HOME'},
                    {icon: IconsR.SETTING_ICON, tag: 'SETTINGS'},
                    {icon: IconsR.INFO_ICON, tag: 'INFO'}]}
                onClick={(tag) => {
                    setSelectedIcon(tag);
                    switch (tag) {
                        case 'HOME':
                            NavigationUtils.navigate(RouteNames.HOME);
                            break;
                        case 'LIST':
                            NavigationUtils.navigate(RouteNames.COMPONENT_PALETTE);
                            break;
                        case 'LOCATION':
                            NavigationUtils.navigate(RouteNames.COMPONENT_PALETTE);
                            break;
                        case 'SETTINGS':
                            NavigationUtils.navigate(RouteNames.COMPONENT_PALETTE);
                            break;
                        case 'INFO':
                            NavigationUtils.navigate(RouteNames.COMPONENT_PALETTE);
                            break;
                        default:
                            break;
                    }
                }}
                selectedIcon={selectedIcon}
            />
        </NavigationContainer>
    );
}

export default AppNavigation;
