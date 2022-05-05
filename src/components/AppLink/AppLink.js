import React from 'react';
import {
    Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';

export default function AppLink({onClick, text}) {
    return (
        <TouchableOpacity onPress={onClick} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
    },
    text: {
        ...AppFont(12, 600, ColorR.RED),
        textDecorationLine: 'underline',
    },
});
