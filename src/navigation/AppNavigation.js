import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/User/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/User/ProfileScreen/ProfileScreen';
import {RouteNames, navigationRef} from './navigationUtils';
import {DEFAULT_SCREEN} from '../utils/constants';

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

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={DEFAULT_SCREEN}>
                {screens.map((screen) => renderScreen(screen))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
