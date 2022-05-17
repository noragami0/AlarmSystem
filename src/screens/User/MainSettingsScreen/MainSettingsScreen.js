import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import {NavigationUtils, RouteNames} from '../../../navigation/navigationUtils';
import {localize} from '../../../utils/localize/localize';
import ToggleButton from '../../../components/ToggleButton/ToggleButton';
import AppSlider from '../../../components/AppSlider/AppSlider';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import AppView from '../../../components/AppView/AppView';

function MainSettingsScreen() {
    const [isEnabledToggleButton, setIsEnabledToggleButton] = useState(false);
    const onChangeToggleButton = () => setIsEnabledToggleButton((prev) => !prev);

    return (
        <AppView style={styles.wrapper}>
            <Text style={styles.settingsTitle}>
                {localize.mainSettingsScreen.settings}
            </Text>
            <View style={styles.settingsButton}>
                <AppSlider
                    text={localize.mainSettingsScreen.volume}
                    onChange={() => null}
                />
            </View>
            <View style={styles.settingsButton}>
                <ToggleButton
                    text={localize.mainSettingsScreen.vibrationSignal}
                    isEnabled={isEnabledToggleButton}
                    onChange={onChangeToggleButton}
                />
            </View>
            <View style={styles.settingsButton}>
                <ButtonWithArrow
                    text={localize.mainSettingsScreen.adjustSound}
                    onClick={() => NavigationUtils.navigate(RouteNames.ADD_SETTINGS)}
                />
            </View>
        </AppView>
    );
}

export default MainSettingsScreen;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 25,
        marginRight: 17,
        marginLeft: 17,
        alignItems: 'center',
    },
    settingsTitle: {
        ...AppFont(14, 700, ColorR.DARK_GRAY),
    },
    settingsButton: {
        marginTop: 20,
        width: '100%',
        maxWidth: 335,
    },
});
