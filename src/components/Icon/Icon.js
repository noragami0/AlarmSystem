import React from 'react';
import {View} from 'react-native';
import {IconsComponents} from '../../utils/res/icons';

export default function Icon({color, icon}) {
    return (
        <View>
            {IconsComponents[icon]({color: color ?? 'black'}, null)}
        </View>
    );
}
