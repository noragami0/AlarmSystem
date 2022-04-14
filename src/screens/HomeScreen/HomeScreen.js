import React from 'react';
import {Button} from 'react-native';
import {NavigationUtils, RouteNames} from '../../navigation/navigationUtils';

function HomeScreen() {
    return (
        <Button
            title="back"
            onPress={() => NavigationUtils.navigate(RouteNames.PROFILE)}
        />
    );
}

export default HomeScreen;
