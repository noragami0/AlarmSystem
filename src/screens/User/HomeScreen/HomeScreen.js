import React, {useState} from 'react';
import {
    View, StyleSheet, Text, Alert,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import AppButton from '../../../components/AppButton/AppButton';
import {localize} from '../../../utils/localize/localize';
import AttentionIcon from '../../../components/AttentionIcon/AttentionIcon';
import {DANGER_LEVEL} from '../../../utils/constants';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import AppLink from '../../../components/AppLink/AppLink';
import AirRaidAlert from '../../../components/AirRaidAlert/AirRaidAlert';
import HomeScreenLayout from './HomeScreenLayout';

function HomeScreen() {
    const [isSettingsShown, setIsSettingShown] = useState(true);
    const [dangerLevel, setDangerLevel] = useState(null);

    const getGeolocation = () => {
        Geolocation.getCurrentPosition((position) => {
            Alert.alert(`Latitude ${position.coords.latitude}\nLongitude ${position.coords.longitude}`);
        });
    };
    return (
        <HomeScreenLayout dangerLevel={dangerLevel}>
            <View style={styles.wrapper}>
                {isSettingsShown ? (
                    <>
                        <View style={styles.regButton}>
                            <AppButton
                                text={localize.homeScreen.region}
                                onClick={() => {
                                    setIsSettingShown(false);
                                    setDangerLevel(DANGER_LEVEL.HIGH);
                                }}
                            />
                        </View>
                        <View style={styles.geoButton}>
                            <AppButton
                                text={localize.homeScreen.geolocation}
                                onClick={() => getGeolocation()}
                            />
                        </View>

                    </>
                ) : (
                    <>
                        <View style={styles.icon}>
                            <AttentionIcon dangerLevel={dangerLevel} />
                        </View>
                        <View style={styles.dangerCaption}>
                            <AirRaidAlert text={
                                dangerLevel === DANGER_LEVEL.NO_DANGER
                                    ? localize.homeScreen.noDanger
                                    : localize.homeScreen.danger
                            }
                            />
                        </View>
                        <Text style={styles.location}>
                            Миколаївська область
                            {'\n\n'}
                            м. Вознесенськ та Вознесенська територіальна громадам
                        </Text>
                        <AppLink text={localize.homeScreen.change} />
                    </>
                )}
            </View>
        </HomeScreenLayout>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginHorizontal: 17,
        alignItems: 'center',
        justifyContent: 'center',
    },
    regButton: {
        width: '100%',
        maxWidth: 276,
    },
    geoButton: {
        marginTop: 40,
        width: '100%',
        maxWidth: 276,
    },
    dangerCaption: {
        marginTop: 45,
    },
    location: {
        ...AppFont(16, 600, ColorR.BLACK),
        marginTop: 20,
        width: '100%',
        textAlign: 'center',
        marginBottom: 20,
    },
});
export default HomeScreen;
