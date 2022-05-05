import React from 'react';
import {
    Text, TouchableOpacity,
} from 'react-native';
import Icon from '../Icon/Icon';
import {IconsR} from '../../utils/res/icons';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';
import GlobalStyles from '../../utils/res/globalStyles';

export default function ButtonWithArrow({onClick, text}) {
    return (
        <TouchableOpacity onPress={onClick} style={GlobalStyles.buttonComponent}>
            <Text style={AppFont(15, 600, ColorR.BLACK)}>{text}</Text>
            <Icon icon={IconsR.ARROW_ICON} color={ColorR.BLACK} />
        </TouchableOpacity>
    );
}
