import React from 'react';
import {
    StyleSheet,
    Text, View,
} from 'react-native';

import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';

export default function SanctuaryAddress({text}) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.leftBlock}>
                <Text style={AppFont(16, 600, ColorR.BLACK)}>{text}</Text>
            </View>
            <View style={styles.rightBlock}>
                <Text style={AppFont(15, 600, ColorR.BLACK)}>{text}</Text>
                <Text style={AppFont(15, 500, ColorR.BLACK)}>{text}</Text>
            </View>
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
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    rightBlock: {
        width: '100%',
        alignItems: 'center',
    },
    leftBlock: {
        backgroundColor: ColorR.GREY,
        width: 55,
        height: 47,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
