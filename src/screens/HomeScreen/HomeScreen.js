import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RouteNames} from '../../navigation/navigationRoutes';

function HomeScreen() {
    const navigation = useNavigation();
    return (
        <Button
            title="back"
            onPress={() => navigation.navigate(RouteNames.PROFILE, {name: 'Jane'})}
        />
    );
}

export default HomeScreen;
