import React from 'react';
import {
    View, Text, StyleSheet,
} from 'react-native';
import {localize} from '../../../utils/localize/localize';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';

function SanctuaryScreen() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{localize.SanctuaryScreen.title}</Text>
            <ButtonWithArrow />
        </View>
    );
}

export default SanctuaryScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 17,
    },
    title: {
        ...AppFont(16, 700, ColorR.BLACK),
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 14,
    },
});
