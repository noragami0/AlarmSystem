import React from 'react';
import {
    Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import Icon from '../Icon/Icon';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';
import {IconsR} from '../../utils/res/icons';

export default function SupportEmailButton({text, onClick}) {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={onClick} style={styles.button}>
                <Text style={styles.text}>{text}</Text>
                <Icon icon={IconsR.EMAIL_ICON} color={ColorR.GREY} />
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
    text: {
        ...AppFont(15, 600),
        color: ColorR.BLACK,
    },

});
