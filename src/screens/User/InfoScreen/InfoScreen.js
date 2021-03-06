import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import ButtonWithIcon from '../../../components/ButtonWithIcon/ButtonWithIcon';
import {IconsR} from '../../../utils/res/icons';
import {ColorR} from '../../../utils/res/theme';
import {MockData} from '../../../utils/mockData';
import {localize} from '../../../utils/localize/localize';
import {AppFont} from '../../../utils/res/fonts';
import ScreensLayout from '../ScreensLayout/ScreensLayout';

function InfoScreen() {
    return (
        <ScreensLayout>
            <View style={styles.wrapper}>
                <Text style={styles.infoTitle}>
                    {localize.infoScreen.moreInfo}
                </Text>
                <View style={styles.buttons}>
                    <ButtonWithArrow text={localize.infoScreen.share} onClick={() => null} />
                </View>
                <Text style={styles.techSupport}>
                    {localize.infoScreen.techSupport}
                </Text>
                <View style={styles.buttons}>
                    <ButtonWithIcon
                        selectedIcon={IconsR.EMAIL_ICON}
                        iconColor={ColorR.GREY}
                        text={MockData.EMAIL}
                        onClick={() => null}
                    />
                    <View style={styles.faqButton}>
                        <ButtonWithArrow
                            text={localize.infoScreen.questions}
                            onClick={() => null}
                        />
                    </View>
                </View>
            </View>

        </ScreensLayout>
    );
}

export default InfoScreen;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 25,
        marginRight: 17,
        marginLeft: 17,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoTitle: {
        ...AppFont(14, 700, ColorR.DARK_GRAY),
        marginBottom: 20,
    },
    buttons: {
        width: '100%',
        maxWidth: 335,
        marginBottom: 24,
    },
    techSupport: {
        ...AppFont(15, 600, ColorR.BLACK),
        marginBottom: 14,
    },
    faqButton: {
        marginTop: 20,
    },
});
