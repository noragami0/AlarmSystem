import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ButtonGroup from '../../../components/ButtonGroup/ButtonGroup';
import {localize} from '../../../utils/localize/localize';
import ItalicLabel from '../../../components/ItalicLabel/ItalicLabel';
import {MockData} from '../../../utils/mockData';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import ScreensLayout from '../ScreensLayout/ScreensLayout';

export default function AdditionalSettingsScreen() {
    return (
        <ScreensLayout>
            <View style={styles.wrapper}>
                <Text style={styles.settingsTitle}>{localize.settingsScreen.volumeSettings}</Text>
                <View style={styles.buttonGroup}>
                    <ButtonGroup
                        buttons={[{text: localize.settingsScreen.selectStartAlarm, tag: 'BUTTON1'},
                            {text: localize.settingsScreen.selectEndAlarm, tag: 'BUTTON2'}]}
                        onClick={() => null}
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
