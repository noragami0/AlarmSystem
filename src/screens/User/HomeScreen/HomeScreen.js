import React from 'react';
import {View, Button} from 'react-native';
import DateTime from '../../../components/DateTime/DateTime';
import {NavigationUtils, RouteNames} from '../../../navigation/navigationUtils';
// TODO: remove this screen from every where, if no need, after design
function HomeScreen() {
    return (
        <View>
            <DateTime />
            <Button
                title="back"
                onPress={() => NavigationUtils.navigate(RouteNames.PROFILE)}
            />
        </View>
    );
}

export default HomeScreen;
