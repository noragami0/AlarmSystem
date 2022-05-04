import React from 'react';
import {
    Text, View, StyleSheet,
} from 'react-native';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';

export default function ItalicLabel({text}) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'flex-start',
        backgroundColor: ColorR.WHITE,
        padding: 17,
        borderRadius: 10,
        shadowColor: ColorR.BLACK,
        shadowOpacity: 0.10,
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowRadius: 5,
        elevation: 5,
    },
    text: {
        ...AppFont(15, 300, ColorR.BLACK, true),
        textDecorationLine: 'underline',
    },
});
