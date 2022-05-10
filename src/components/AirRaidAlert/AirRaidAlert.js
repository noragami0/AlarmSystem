import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';
import GlobalStyles from '../../utils/res/globalStyles';

export default function AirRaidAlert({text}) {
    return (
        <View style={[GlobalStyles.buttonComponent, styles.button]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: 276,
        padding: 11,
    },
    text: {
        ...AppFont(21, 700, ColorR.BLACK),
        textTransform: 'uppercase',
    },
});
