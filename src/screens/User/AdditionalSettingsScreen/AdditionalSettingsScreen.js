import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import ButtonGroup from '../../../components/ButtonGroup/ButtonGroup';
import {localize} from '../../../utils/localize/localize';
import ItalicLabel from '../../../components/ItalicLabel/ItalicLabel';
import {MockData} from '../../../utils/mockData';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import ScreensLayout from '../ScreensLayout/ScreensLayout';
import {NotificationChannelAndroid, SOUNDS} from '../../../utils/notificationChannelAndroid';

const SOUNDS_BUTTONS_TAGS = {
    START: 'START',
    END: 'END',
};

const CUSTOM_SOUNDS = [{text: 'морська', value: SOUNDS.MORSKA}, {text: 'sound1', value: SOUNDS.SOUND1}];

export default function AdditionalSettingsScreen() {
    const [isChooserVisible, setIsChooserVisible] = useState(false);
    const [selectedButton, setSelectedButton] = useState(SOUNDS_BUTTONS_TAGS.START);

    const onChangeSound = (tag) => {
        setSelectedButton(tag);
        setIsChooserVisible(true);
    };

    const onChooseSound = (item) => {
        if (selectedButton === SOUNDS_BUTTONS_TAGS.START) {
            console.log(item);
            NotificationChannelAndroid.changeSoundStart(item.value);
            return;
        }

        if (selectedButton === SOUNDS_BUTTONS_TAGS.END) {
            NotificationChannelAndroid.changeSoundEnd(item.value);
        }
    };

    return (
        <ScreensLayout>
            <View style={styles.wrapper}>
                <Text style={styles.settingsTitle}>{localize.settingsScreen.volumeSettings}</Text>
                <View style={styles.buttonGroup}>
                    <ButtonGroup
                        buttons={[
                            {
                                text: localize.settingsScreen.selectStartAlarm,
                                tag: SOUNDS_BUTTONS_TAGS.START,
                            },
                            {
                                text: localize.settingsScreen.selectEndAlarm,
                                tag: SOUNDS_BUTTONS_TAGS.END,
                            },
                        ]}
                        onClick={onChangeSound}
                    />
                </View>
                <View style={styles.sound}>
                    <Text style={styles.startEndAlarm}>{localize.settingsScreen.startAlarm}</Text>
                    <ItalicLabel text={MockData.AUDIO} />
                    <View style={styles.buttonWithArrow}>
                        <ButtonWithArrow
                            text={localize.settingsScreen.download}
                            onClick={() => null}
                        />
                    </View>
                </View>
                <View style={styles.sound}>
                    <Text style={styles.startEndAlarm}>{localize.settingsScreen.endAlarm}</Text>
                    <ItalicLabel text={MockData.AUDIO} />
                    <View style={styles.buttonWithArrow}>
                        <ButtonWithArrow
                            text={localize.settingsScreen.download}
                            onClick={() => null}
                        />
                    </View>

                </View>
            </View>

            <ModalSelector
                keyExtractor={(el) => el.value}
                labelExtractor={(el) => el.text}
                data={CUSTOM_SOUNDS}
                visible={isChooserVisible}
                onModalClose={() => setIsChooserVisible(false)}
                closeOnChange={true}
                onChange={onChooseSound}
                accessible={false}
                childrenContainerStyle={styles.modalContainer}
            />
        </ScreensLayout>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 25,
        marginRight: 17,
        marginLeft: 17,
        alignItems: 'center',
    },
    settingsTitle: {
        ...AppFont(14, 600, ColorR.DARK_GRAY),
        marginBottom: 13,
    },
    buttonGroup: {
        width: '100%',
        maxWidth: 335,
        marginBottom: 31,

    },
    startEndAlarm: {
        ...AppFont(15, 600, ColorR.BLACK),
        marginTop: 17,
        marginBottom: 7,
        marginLeft: 18,
    },
    sound: {
        width: '100%',
        maxWidth: 335,
    },
    buttonWithArrow: {
        marginTop: 8,
    },

});
