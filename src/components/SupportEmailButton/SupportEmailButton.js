import React from 'react';
import {
    Text, TouchableOpacity,
} from 'react-native';
import Icon from '../Icon/Icon';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';
import GlobalStyles from '../../utils/res/globalStyles';

export default function SupportEmailButton({
    text, onClick, selectedIcon, iconColor,
}) {
    return (
        <TouchableOpacity onPress={onClick} style={GlobalStyles.buttonComponent}>
            <Text style={AppFont(15, 600, ColorR.BLACK)}>{text}</Text>
            <Icon icon={selectedIcon} color={iconColor} />
        </TouchableOpacity>
    );
}
