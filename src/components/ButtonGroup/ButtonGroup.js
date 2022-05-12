import React from 'react';
import {
    Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';

export default function ButtonGroup({buttons, onClick}) {
    const renderData = (buttonItem, index, count) => (
        <React.Fragment key={index}>
            <TouchableOpacity onPress={() => onClick(buttonItem.tag)}>
                <Text style={AppFont(15, 600, ColorR.BLACK)}>{buttonItem.text}</Text>
            </TouchableOpacity>
            {index === count - 1
                ? null
                : <View style={styles.line} />}
        </React.Fragment>
    );
    return (

        <View style={styles.button}>
            {buttons.map((item, index, arr) => renderData(item, index, arr.length))}
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
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
        alignItems: 'center',
    },
    line: {
        borderWidth: 0.5,
        width: 286,
        borderColor: ColorR.GREY,
        margin: 10,
    },
});
