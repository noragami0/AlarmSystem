import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppButton from '../../../components/AppButton/AppButton';
import {localize} from '../../../utils/localize/localize';
import AttentionIcon from '../../../components/AttentionIcon/AttentionIcon';
import {DANGER_LEVEL} from '../../../utils/constants';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import AppLink from '../../../components/AppLink/AppLink';
import AirRaidAlert from '../../../components/AirRaidAlert/AirRaidAlert';

function HomeScreen() {
    const [isSettingsShown, setIsSettingShown] = useState(true);
    return (
        <View style={styles.wrapper}>
            {isSettingsShown ? (
                <>
                    <View style={styles.regButton}>
                        <AppButton
                            text={localize.homeScreen.region}
                            onClick={() => setIsSettingShown(false)}
                        />
                    </View>
                    <View style={styles.geoButton}>
                        <AppButton
                            text={localize.homeScreen.geolocation}
                            onClick={() => setIsSettingShown(false)}
                        />
                    </View>

                </>
            ) : (
                <>
                    <View style={styles.icon}>
                        <AttentionIcon dangerLevel={DANGER_LEVEL.HIGH} />
                    </View>
                    <View style={styles.attention}>
                        <AirRaidAlert text={localize.homeScreen.danger} />
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
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 180,
        marginLeft: 40,
        marginRight: 40,
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
    attention: {
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
