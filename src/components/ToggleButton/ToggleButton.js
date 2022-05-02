import React, {useState} from 'react';
import {
    Switch, Text, View, StyleSheet,
} from 'react-native';
import {ColorR} from '../../utils/res/theme';
import {AppFont} from '../../utils/res/fonts';
import {MockData} from '../../utils/mockData';

export default function ToggleButton() {
    const [isEnabled, setIsEnabled] = useState(false);

    const onValueChange = () => {
        setIsEnabled((previousState) => !previousState);
    };
    return (
        <View style={styles.wrapper}>
            <Text style={AppFont(15, 600)}>{MockData.VIBRATE}</Text>
            <Switch
                trackColor={{false: ColorR.GREY, true: ColorR.BLUE}}
                thumbColor={ColorR.WHITE}
                onChange={onValueChange}
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
        shadowOpacity: 0.25,
        shadowRadius: 3.85,
        elevation: 5,
    },
});
