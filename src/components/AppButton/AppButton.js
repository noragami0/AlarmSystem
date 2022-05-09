import React from 'react';
import {
    StyleSheet,
    Text, TouchableOpacity,
} from 'react-native';

import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';
import GlobalStyles from '../../utils/res/globalStyles';

export default function AppButton({text, onClick}) {
    return (
        <TouchableOpacity onPress={onClick} style={[GlobalStyles.buttonComponent, styles.button]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        ...AppFont(16, 700, ColorR.BLACK),
        textTransform: 'uppercase',
    },
});
