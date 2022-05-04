import React, {useState} from 'react';
import {
    ScrollView,
} from 'react-native';
import moment from 'moment';
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
import CurrentAttention from '../../../components/CurrentAttention/CurrentAttention';


function ComponentPaletteScreen() {
    const [selectedIcon, setSelectedIcon] = useState(undefined);
    const navPanel = NavPanelButtonsModel.create(
        [{icon: IconsR.PIN_ICON, tag: 'LOCATION'},
            {icon: IconsR.LIST_ICON, tag: 'LIST'},
            {icon: IconsR.HOME_ICON, tag: 'HOME'},
            {icon: IconsR.SETTING_ICON, tag: 'SETTINGS'},
            {icon: IconsR.INFO_ICON, tag: 'INFO'}],
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
                    text={MockData.TITLE}
                />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="ButtonWithArrow Component">
                <ButtonWithArrow text={MockData.TITLE} onClick={() => null} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="ButtonWithIcon Component">
                <ButtonWithIcon
                    selectedIcon={IconsR.EMAIL_ICON}
                    iconColor={ColorR.GREY}
                    text={MockData.EMAIL}
                    onClick={() => null}
                />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="AppLink Component">
                <AppLink text={MockData.TITLE} onClick={() => null} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="AttentionIcon Component">
                <AttentionIcon dangerLevel={DANGER_LEVEL.HIGH} isSmall={true} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="CurrentAttention Component">
                <CurrentAttention
                    dangerLevel={DANGER_LEVEL.HIGH}
                    title={MockData.TITLE}
                    dateFrom={moment(new Date()).subtract(1, 'day')}
                    dateTo={moment(new Date())}
                />
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
