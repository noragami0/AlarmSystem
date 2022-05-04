import React from 'react';
import {
    Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import GlobalStyles from '../../utils/res/globalStyles';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';

export default function ChooseSoundButton({
    text, text2, onClick1, onClick2,
}) {
    return (
        <View style={GlobalStyles.centerComponent}>
            <TouchableOpacity onPress={onClick1}>
                <Text style={AppFont(15, 600, ColorR.BLACK)}>{text}</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} />
            <TouchableOpacity onPress={onClick2}>
                <Text style={AppFont(15, 600, ColorR.BLACK)}>{text2}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.5,
        width: 350,
        borderColor: ColorR.GREY,
        margin: 10,
    },
});
