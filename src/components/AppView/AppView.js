import React from 'react';
import {View, Platform} from 'react-native';

function AppView({children, style}) {
    return (
        <View style={[style, Platform.OS === 'ios' ? {paddingTop: 30} : null]}>
            {children}
        </View>
    );
}

export default AppView;
