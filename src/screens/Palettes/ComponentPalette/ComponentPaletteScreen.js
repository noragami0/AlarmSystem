import React, {useState} from 'react';
import {
    ScrollView, Alert,
} from 'react-native';
import ComponentPaletteItem from './ComponentPaletteItem';
import DateTime from '../../../components/DateTime/DateTime';
import Icon from '../../../components/Icon/Icon';
import {IconsR} from '../../../utils/res/icons';
import NavPanelButtons from '../../../components/NavPanel/NavPanelButtons';
import {NavPanelButtonsModel} from '../../../components/NavPanel/NavPanelButtonsModel';
import ToggleButton from '../../../components/ToggleButton/ToggleButton';
import {MockData} from '../../../utils/mockData';
import ButtonWithIcon from '../../../components/ButtonWithIcon/ButtonWithIcon';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import {ColorR} from '../../../utils/res/theme';
import AppLink from '../../../components/AppLink/AppLink';
import AttentionIcon from '../../../components/AttentionIcon/AttentionIcon';
import {DANGER_LEVEL} from '../../../utils/constants';
import ItalicLabel from '../../../components/ItalicLabel/ItalicLabel';
import AppButton from '../../../components/AppButton/AppButton';

function ComponentPaletteScreen() {
    const [selectedIcon, setSelectedIcon] = useState(undefined);
    const navPanel = NavPanelButtonsModel.create(
        [{icon: IconsR.PIN_ICON, tag: 'LOCATION'}, {icon: IconsR.LIST_ICON, tag: 'LIST'}],
        {selectedIcon, onClick: (tag) => setSelectedIcon(tag)},
    );

    const [isEnabledToggleButton, setIsEnabledToggleButton] = useState(false);
    const onChangeToggleButton = () => setIsEnabledToggleButton((prev) => !prev);

    return (
        <ScrollView>
            <ComponentPaletteItem name="DateTime Component">
                <DateTime />
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

            <ComponentPaletteItem name="ButtonWithArrow Component">
                <ButtonWithArrow text={MockData.SHARE} onClick={() => Alert.alert('Click on button with arrow')} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="ButtonWithIcon Component">
                <ButtonWithIcon selectedIcon={IconsR.EMAIL_ICON} iconColor={ColorR.GREY} text={MockData.EMAIL} onClick={() => Alert.alert('Click on email')} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="AppLink Component">
                <AppLink text={MockData.TITLE} onClick={() => Alert.alert('Click on Link')} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="AttentionIcon Component">
                <AttentionIcon dangerLevel={DANGER_LEVEL.HIGH} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="ItalicLabel Component">
                <ItalicLabel text={MockData.AUDIO} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="AppButton Component">
                <AppButton text={MockData.TITLE} onClick={() => null} />
            </ComponentPaletteItem>
        </ScrollView>
    );
}
export default ComponentPaletteScreen;
