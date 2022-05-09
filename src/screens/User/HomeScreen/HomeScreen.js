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
                    <AppButton
                        text={localize.general.region}
                        onClick={() => setIsSettingShown(false)}
                        style={styles.firstButton}
                    />
                    <View style={styles.geoButton}>
                        <AppButton
                            text={localize.general.geolocation}
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
                        <AirRaidAlert text={localize.general.danger} />
                    </View>
                    <Text style={styles.location}>
                        Миколаївська область
                        {'\n\n'}
                        м. Вознесенськ та Вознесенська територіальна громадам
                    </Text>
                    <AppLink text={localize.general.change} />
                </>

            )}

        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginRight: '10%',
        marginLeft: '10%',
        justifyContent: 'center',
    },
    geoButton: {
        marginTop: '10%',
    },
    icon: {
        resizeMode: 'center',
        alignSelf: 'center',
    },
    attention: {
        marginTop: '20%',
    },
    location: {
        ...AppFont(16, 600, ColorR.BLACK),
        marginTop: '10%',
        width: '100%',
        textAlign: 'center',
        marginBottom: '10%',

    },
});
export default HomeScreen;
