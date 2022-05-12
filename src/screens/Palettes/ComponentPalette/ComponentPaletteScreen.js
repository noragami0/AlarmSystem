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
import ToggleButton from '../../../components/ToggleButton/ToggleButton';
import {MockData} from '../../../utils/mockData';
import ButtonWithIcon from '../../../components/ButtonWithIcon/ButtonWithIcon';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import {ColorR} from '../../../utils/res/theme';
import AppLink from '../../../components/AppLink/AppLink';
import AirRaidAlert from '../../../components/AirRaidAlert/AirRaidAlert';
import AppSlider from '../../../components/AppSlider/AppSlider';
import AttentionIcon from '../../../components/AttentionIcon/AttentionIcon';
import {DANGER_LEVEL} from '../../../utils/constants';
import ItalicLabel from '../../../components/ItalicLabel/ItalicLabel';
import AppButton from '../../../components/AppButton/AppButton';
import CurrentAttention from '../../../components/CurrentAttention/CurrentAttention';
import ButtonGroup from '../../../components/ButtonGroup/ButtonGroup';
import SanctuaryAddress from '../../../components/SanctuaryAddress/SanctuaryAddress';
import AirDot from '../../../components/AirDot/AirDot';

function ComponentPaletteScreen() {
    const [selectedIcon, setSelectedIcon] = useState(undefined);

    const [isEnabledToggleButton, setIsEnabledToggleButton] = useState(false);
    const onChangeToggleButton = () => setIsEnabledToggleButton((prev) => !prev);

    return (
        <ScrollView>
            <ComponentPaletteItem name="AirDot Component">
                <AirDot color={ColorR.BLACK} radius={100} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="DateTime Component">
                <DateTime />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="Icon Component">
                <Icon icon={IconsR.HOME_ICON} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="NavPanelButtons Component">
                <NavPanelButtons
                    icons={[{icon: IconsR.PIN_ICON, tag: 'LOCATION'},
                        {icon: IconsR.LIST_ICON, tag: 'LIST'},
                        {icon: IconsR.HOME_ICON, tag: 'HOME'},
                        {icon: IconsR.SETTING_ICON, tag: 'SETTINGS'},
                        {icon: IconsR.INFO_ICON, tag: 'INFO'}]}
                    onClick={(tag) => setSelectedIcon(tag)}
                    selectedIcon={selectedIcon}
                />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="ToggleButton Component">
                <ToggleButton
                    isEnabled={isEnabledToggleButton}
                    onChange={onChangeToggleButton}
                    text={MockData.TITLE}
                    isDisabled={false}
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

            <ComponentPaletteItem name="AirRaidAlert Component">
                <AirRaidAlert text={MockData.TITLE} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="AttentionIcon Component">
                <AttentionIcon dangerLevel={DANGER_LEVEL.HIGH} isSmall={true} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="CurrentAttention Component">
                <CurrentAttention
                    dangerLevel={DANGER_LEVEL.HIGH}
                    title={MockData.TITLE}
                    date={moment(new Date())}
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

            <ComponentPaletteItem name="AppSlider Component">
                <AppSlider text={MockData.TITLE} onChange={() => null} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="ButtonGroup Component">
                <ButtonGroup buttons={[{text: 'Button 1', tag: 'BUTTON1'}, {text: 'Button 2', tag: 'BUTTON2'}]} onClick={() => null} />
            </ComponentPaletteItem>

            <ComponentPaletteItem name="SanctuaryAddress Component">
                <SanctuaryAddress
                    sanctuaryDestination={100}
                    sanctuaryNumber={456}
                    sanctuaryAddress={MockData.ADDRESS}
                />
            </ComponentPaletteItem>
        </ScrollView>
    );
}

export default ComponentPaletteScreen;
