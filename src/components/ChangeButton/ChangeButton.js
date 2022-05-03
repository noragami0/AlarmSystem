import React from 'react';
import {
    Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';

export default function ChangeButton({onClick, text}) {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={onClick} style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        padding: 17,

    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        ...AppFont(12, 600),
        color: ColorR.RED,
        textDecorationLine: 'underline',
    },
});
