import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavPanelButtonsModel} from './NavPanelButtonsModel';
import Icon from '../Icon/Icon';
import {IconsR} from '../../utils/res/icons';

function NavPanelButtons({model}) {
    if (!model) {
        model = NavPanelButtonsModel.mock();
    }

    const onClick = () => {
        if (model.optional.onClick) {
            model.optional.onClick();
        }
    };

    return (
        <TouchableOpacity onPress={onClick}>
            <Icon icon={IconsR.PIN_ICON} color="red" />
        </TouchableOpacity>
    );
}

export default NavPanelButtons;
