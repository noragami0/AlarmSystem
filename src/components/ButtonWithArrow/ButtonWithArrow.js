import React from 'react';
import {
    Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import Icon from '../Icon/Icon';
import {IconsR} from '../../utils/res/icons';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';

export default function ButtonWithArrow({onClick, text}) {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={onClick} style={styles.button}>
                <Text style={AppFont(15, 600)}>{text}</Text>
                <Icon icon={IconsR.ARROW_ICON} color={ColorR.BLACK} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
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
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
