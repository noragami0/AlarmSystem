import React from 'react';
import Example from '../../assets/icons/camera.svg';
import {View} from 'react-native';

export default function Icon() {
    const IconsR = {
        EMAIL_ICON: 'EMAIL_ICON',
        ARROW_ICON: 'ARROW_ICON',
        HOME_ICON: 'HOME_ICON',
        INFO_ICON: 'INFO_ICON',
        LIST_ICON: 'LIST_ICON',
        PIN_ICON: 'PIN_ICON',
        SETTINGS_ICON: 'SETTINGS_ICON',
        RATTENTION_ICON: 'RATTENTION_ICON',
        YATTENTION_ICON: 'YATTENTION_ICON',
        EXAMPLE_ICON: 'EXAMPLE_ICON'
    };

    const IconsComponents = {
        [IconsR.EXAMPLE_ICON]: Example,
    };
    
    return(
        <View>
            {IconsComponents['EXAMPLE_ICON']()}
        </View>
    )

}







