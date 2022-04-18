import React from 'react';
import {Button} from 'react-native';
import {NavigationUtils, RouteNames} from '../../../navigation/navigationUtils';
// TODO: remove this screen from every where, if no need, after design
function ProfileScreen() {
    return (
        <Button
            title="back"
            onPress={() => NavigationUtils.navigate(RouteNames.HOME)}
        />
    );
}

export default ProfileScreen;
