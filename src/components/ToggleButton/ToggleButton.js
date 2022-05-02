import React, {useState} from 'react';
import {
    Switch, Text, View, StyleSheet,
} from 'react-native';
import {ColorR} from '../../utils/res/theme';
import {AppFont} from '../../utils/res/fonts';

export default function ToggleButton() {
    const [vibration, setVibration] = useState(false);

    const toggleVibration = () => {
        setVibration((previousState) => !previousState);
    };
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Вібросигнал</Text>
            <Switch
                trackColor={{false: ColorR.GREY, true: ColorR.BLUE}}
                thumbColor={ColorR.WHITE}
                onValueChange={toggleVibration}
                value={vibration}
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
    },
    text: {
        ...AppFont(15, 600),
        lineHeight: 20,
    },
});
