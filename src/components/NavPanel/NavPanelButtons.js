import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {NavPanelButtonsModel} from './NavPanelButtonsModel';
import Icon from '../Icon/Icon';
import {ColorR} from '../../utils/res/theme';

function NavPanelButtons({model}) {
    if (!model) {
        model = NavPanelButtonsModel.mock();
    }

    const onClick = (tag) => {
        if (model.optional.onClick) {
            model.optional.onClick(tag);
        }
    };

    const renderItem = (iconItem, index) => (
        <TouchableOpacity onPress={() => onClick(iconItem.tag)} key={index}>
            <Icon
                icon={iconItem.icon}
                color={iconItem.tag === model.optional.selectedIcon ? ColorR.BLUE : ColorR.GREY}
            />
        </TouchableOpacity>
    );
    return (
        <View style={styles.wrapper}>
            {model.icons.map((item, index) => renderItem(item, index))}
        </View>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: ColorR.WHITE,
        borderRadius: 10,
    },
});

export default NavPanelButtons;
