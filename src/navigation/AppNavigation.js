import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Profile from '../screens/Profile/Profile';
import {RouteNames, navigationRef} from './navigationUtils';

const Stack = createNativeStackNavigator();

const screens = [
    {
        name: RouteNames.HOME,
        component: HomeScreen,
        options: {title: 'Home'},
    },
    {
        name: RouteNames.PROFILE,
        component: Profile,
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
            <Stack.Navigator>
                {screens.map((screen) => renderScreen(screen))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
