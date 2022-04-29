import React from 'react';
import {View, Button} from 'react-native';
import {NavigationUtils, RouteNames} from '../../navigation/navigationUtils';
import DateTime from '../../components/DateTime';
import Icon from '../../utils/res/icons';

function HomeScreen() {
    return (
        <View>
            <DateTime />
            <Button
                title="back"
                onPress={() => NavigationUtils.navigate(RouteNames.PROFILE)}
            />
           <Icon />
        </View>
        
    );
}

export default HomeScreen;
