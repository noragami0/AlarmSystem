import React, {useState, useEffect} from 'react';
import {
    View, StyleSheet, Text,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import ModalSelector from 'react-native-modal-selector';
import AppButton from '../../../components/AppButton/AppButton';
import {localize} from '../../../utils/localize/localize';
import AttentionIcon from '../../../components/AttentionIcon/AttentionIcon';
import {DANGER_LEVEL} from '../../../utils/constants';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import AppLink from '../../../components/AppLink/AppLink';
import AirRaidAlert from '../../../components/AirRaidAlert/AirRaidAlert';
import HomeScreenLayout from './HomeScreenLayout';
import {AlertLocationHttp} from '../../../utils/http/alertLocationHttp';
import Storage, {STORAGE_KEYS} from '../../../utils/storage/storage';

function HomeScreen() {
    const [isSettingsShown, setIsSettingShown] = useState(true);
    const [dangerLevel, setDangerLevel] = useState(null);
    const [regionName, setRegionName] = useState('');
    const [modalRegions, setModalRegions] = useState([]);
    const [isChooserVisible, setIsChooserVisible] = useState(false);

    useEffect(() => {
        fetchPosition();
        fetchRegions();
    }, []);

    const fetchPosition = async () => {
        const regionTrigger = await Storage.get(STORAGE_KEYS.REGION);

        if (!regionTrigger) {
            return;
        }

        if (regionTrigger) {
            setIsSettingShown(false);
        }

        const region = await AlertLocationHttp.getRegionInfoByTrigger(regionTrigger);
        setRegionName(region.properties.name);

        const regionAlertStatus = await AlertLocationHttp
            .getRegionAlertStatus(region.properties.fid);
        console.log(regionAlertStatus);
        if (regionAlertStatus.air || regionAlertStatus.chemical) {
            setDangerLevel(DANGER_LEVEL.HIGH);
        } else {
            setDangerLevel(DANGER_LEVEL.NO_DANGER);
        }
    };

    const fetchRegions = async () => {
        const regions = await AlertLocationHttp.getRegionsList();
        setModalRegions(regions);
    };

    const onChooseCustomRegion = async (region) => {
        const {trigger} = region;
        await Storage.store(STORAGE_KEYS.REGION, trigger);
        await AlertLocationHttp.updateRegion(trigger);

        setIsSettingShown(false);

        await fetchPosition();
    };

    const getGeolocation = () => {
        Geolocation.getCurrentPosition(async (position) => {
            const location = await AlertLocationHttp
                .getUserRegion(position.coords.latitude, position.coords.longitude);

            if (!location) {
                return;
            }

            const {trigger} = location.properties;

            await Storage.store(STORAGE_KEYS.REGION, trigger);
            await AlertLocationHttp.updateRegion(trigger);

            setIsSettingShown(false);

            await fetchPosition();
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
                                onClick={() => setIsChooserVisible(true)}
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
                        <Text style={styles.location}>{regionName}</Text>

                        <AppLink
                            onClick={() => setIsChooserVisible(true)}
                            text={localize.homeScreen.change}
                        />
                    </>
                )}

                <ModalSelector
                    keyExtractor={(el) => el.trigger}
                    labelExtractor={(el) => el.name}
                    data={modalRegions}
                    visible={isChooserVisible}
                    onModalClose={() => setIsChooserVisible(false)}
                    closeOnChange={true}
                    onChange={onChooseCustomRegion}
                    accessible={false}
                    childrenContainerStyle={styles.modalContainer}
                />
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
    modalContainer: {
        display: 'none',
    },
});
export default HomeScreen;
