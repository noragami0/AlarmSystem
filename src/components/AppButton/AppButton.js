import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AppButtonModel, ButtonMode} from './AppButtonModel';
import {AppFont} from '../../utils/res/fonts';

function AppButton({model}) {
    if (!model) {
        model = AppButtonModel.mock();
    }

    const onClick = () => {
        if (model.optional.onClick) {
            model.optional.onClick();
        }
    };

    return (
        <TouchableOpacity onPress={onClick} style={[styles.button, styles[model.mode]]}>
            <Text style={[styles.text, styles[`text${model.mode}`]]}>{model.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    [ButtonMode.RAISED]: {
        backgroundColor: '#2699FB',
    },
    [ButtonMode.STROKED]: {
        backgroundColor: '#F1F9FF',
        borderColor: '#007FEB',
        borderWidth: 2,
    },
    text: {
        textTransform: 'uppercase',
        ...AppFont(12, 600, true),
    },
    [`text${ButtonMode.STROKED}`]: {
        color: '#007FEB',
    },
    [`text${ButtonMode.RAISED}`]: {
        color: '#FFFFFF',
    },
});

export default AppButton;
