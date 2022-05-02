import React, {useState} from 'react';
import {
    ScrollView, Alert, StyleSheet, View, Share,
} from 'react-native';
import ComponentPaletteItem from './ComponentPaletteItem';
import DateTime from '../../../components/DateTime/DateTime';
import AppButton from '../../../components/AppButton/AppButton';
import {AppButtonModel} from '../../../components/AppButton/AppButtonModel';
import Icon from '../../../components/Icon/Icon';
import {IconsR} from '../../../utils/res/icons';
import NavPanelButtons from '../../../components/NavPanel/NavPanelButtons';
import {NavPanelButtonsModel} from '../../../components/NavPanel/NavPanelButtonsModel';
import ToggleButton from '../../../components/ToggleButton/ToggleButton';
import {MockData} from '../../../utils/mockData';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';

function ComponentPaletteScreen() {
    const buttonModels = [
        AppButtonModel.createStroked('STROKED BUTTON', {
            onClick: () => Alert.alert('Click Stroked'),
        }),
        AppButtonModel.createRaised('RAISED BUTTON', {
            onClick: () => Alert.alert('Click Raised'),
        }),

    ];

    const [selectedIcon, setSelectedIcon] = useState(undefined);
    const navPanel = NavPanelButtonsModel.create(
        [{icon: IconsR.PIN_ICON, tag: 'LOCATION'}, {icon: IconsR.LIST_ICON, tag: 'LIST'}],
        {selectedIcon, onClick: (tag) => setSelectedIcon(tag)},
    );

    const [isEnabledToggleButton, setIsEnabledToggleButton] = useState(false);
    const onChangeToggleButton = () => setIsEnabledToggleButton((prev) => !prev);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    return (
        <ScrollView>
            <ComponentPaletteItem name="DateTime Component">
                <DateTime />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="AppButton Component">
                {buttonModels.map((model, index) => (
                    <View key={index} style={styles.marginBlock}>
                        <AppButton model={model} />
                    </View>
                ))}
            </ComponentPaletteItem>

            <ComponentPaletteItem name="Icon Component">
                <Icon icon={IconsR.HOME_ICON} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="NavPanelButtons Component">
                <NavPanelButtons model={navPanel} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="ToggleButton Component">
                <ToggleButton
                    isEnabled={isEnabledToggleButton}
                    onChange={onChangeToggleButton}
                    text={MockData.VIBRATE}
                />
            </ComponentPaletteItem>

            <ComponentPaletteItem>
                <ButtonWithArrow text={MockData.SHARE} onClick={onShare} />
            </ComponentPaletteItem>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    marginBlock: {
        marginVertical: 10,
    },
});

export default ComponentPaletteScreen;
