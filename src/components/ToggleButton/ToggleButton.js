import React from 'react';
import {
    Switch, Text, View, StyleSheet,
} from 'react-native';
import {ColorR} from '../../utils/res/theme';
import {AppFont} from '../../utils/res/fonts';

export default function ToggleButton({isEnabled, onChange, text}) {
    return (
        <View style={styles.wrapper}>
            <Text style={AppFont(15, 600)}>{text}</Text>
            <Switch
                trackColor={{false: ColorR.GREY, true: ColorR.BLUE}}
                thumbColor={ColorR.WHITE}
                onValueChange={onChange}
                value={isEnabled}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: ColorR.WHITE,
        padding: 17,
        borderRadius: 10,
        shadowColor: ColorR.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 5,
        elevation: 5,
    },
});
