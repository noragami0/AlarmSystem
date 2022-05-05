import React from 'react';
import {
    Switch, Text, View,
} from 'react-native';
import {ColorR} from '../../utils/res/theme';
import {AppFont} from '../../utils/res/fonts';
import GlobalStyles from '../../utils/res/globalStyles';

export default function ToggleButton({isEnabled, onChange, text}) {
    return (
        <View style={GlobalStyles.buttonComponent}>
            <Text style={AppFont(15, 600, ColorR.BLACK)}>{text}</Text>
            <Switch
                trackColor={{false: ColorR.GREY, true: ColorR.BLUE}}
                thumbColor={ColorR.WHITE}
                onValueChange={onChange}
                value={isEnabled}
            />
        </View>
    );
}
