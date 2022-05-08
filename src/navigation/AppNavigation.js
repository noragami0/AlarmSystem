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
const NAV_ICONS_TAGS = {
    LOCATION: 'LOCATION',
    LIST: 'LIST',
    HOME: 'HOME',
    SETTINGS: 'SETTINGS',
    INFO: 'INFO',
};
const navPanelIcons = [{icon: IconsR.PIN_ICON, tag: NAV_ICONS_TAGS.LOCATION},
    {icon: IconsR.LIST_ICON, tag: NAV_ICONS_TAGS.LIST},
    {icon: IconsR.HOME_ICON, tag: NAV_ICONS_TAGS.HOME},
    {icon: IconsR.SETTING_ICON, tag: NAV_ICONS_TAGS.SETTINGS},
    {icon: IconsR.INFO_ICON, tag: NAV_ICONS_TAGS.INFO}];

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

    const onNavPanelIconClick = (tag) => {
        setSelectedIcon(tag);
        switch (tag) {
            case NAV_ICONS_TAGS.HOME:
                NavigationUtils.navigate(RouteNames.HOME);
                break;
            case NAV_ICONS_TAGS.LIST:
                NavigationUtils.navigate(RouteNames.COMPONENT_PALETTE);
                break;
            case NAV_ICONS_TAGS.LOCATION:
                NavigationUtils.navigate(RouteNames.COMPONENT_PALETTE);
                break;
            case NAV_ICONS_TAGS.SETTINGS:
                NavigationUtils.navigate(RouteNames.COMPONENT_PALETTE);
                break;
            case NAV_ICONS_TAGS.INFO:
                NavigationUtils.navigate(RouteNames.COMPONENT_PALETTE);
                break;
            default:
                break;
        }
    };

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={DEFAULT_SCREEN}>
                {screens.map((screen) => renderScreen(screen))}
            </Stack.Navigator>
            <NavPanelButtons
                icons={navPanelIcons}
                onClick={onNavPanelIconClick}
                selectedIcon={selectedIcon}
            />
        </NavigationContainer>
    );
}

export default AppNavigation;
