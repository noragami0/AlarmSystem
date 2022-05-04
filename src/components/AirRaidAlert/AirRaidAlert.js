import React from 'react';
import {Text, View} from 'react-native';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';
import GlobalStyles from '../../utils/res/globalStyles';

export default function AirRaidAlert({text}) {
    return (
        <View style={GlobalStyles.centerComponent}>
            <Text style={AppFont(24, 700, ColorR.BLACK)}>{text}</Text>
        </View>
    );
}
