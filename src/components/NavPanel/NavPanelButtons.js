import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from '../Icon/Icon';
import {ColorR} from '../../utils/res/theme';

function NavPanelButtons({icons, onClick, selectedIcon}) {
    const onClickIcon = (tag) => {
        if (onClick) {
            onClick(tag);
        }
    };

    const renderItem = (iconItem, index) => (
        <TouchableOpacity
            style={iconItem.tag === selectedIcon ? styles.selectedIcon : null}
            onPress={() => onClickIcon(iconItem.tag)}
            key={index}
        >
            <Icon
                icon={iconItem.icon}
                color={iconItem.tag === selectedIcon ? ColorR.BLUE : ColorR.GREY}
            />
        </TouchableOpacity>
    );
    return (
        <View style={styles.wrapper}>
            {icons.map((item, index) => renderItem(item, index))}
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: ColorR.BLACK,
        shadowOpacity: 0.10,
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowRadius: 5,
        elevation: 5,
    },
    selectedIcon: {
        transform: [{scale: 1.2}],
    },
});

export default NavPanelButtons;
