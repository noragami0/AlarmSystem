import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import ButtonWithIcon from '../../../components/ButtonWithIcon/ButtonWithIcon';
import {IconsR} from '../../../utils/res/icons';
import {ColorR} from '../../../utils/res/theme';
import {MockData} from '../../../utils/mockData';
import {localize} from '../../../utils/localize/localize';
import {AppFont} from '../../../utils/res/fonts';
// import {AppFont} from '../../../utils/res/fonts';

function InfoScreen() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.infoTitle}>
                {localize.infoScreen.moreInfo}
            </Text>
            <View style={styles.buttons}>
                <ButtonWithArrow text={localize.infoScreen.share} onClick={() => null} />
            </View>
            <Text style={styles.support}>
                {localize.infoScreen.techSupport}
            </Text>
            <View style={styles.buttons}>
                <ButtonWithIcon
                    selectedIcon={IconsR.EMAIL_ICON}
                    iconColor={ColorR.GREY}
                    text={MockData.EMAIL}
                    onClick={() => null}
                />
                <View style={styles.buttons2}>
                    <ButtonWithArrow text={localize.infoScreen.questions} onClick={() => null} />
                </View>
            </View>
        </View>
    );
}

export default InfoScreen;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 25,
        marginRight: 17,
        marginLeft: 17,
        alignItems: 'center',
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
    buttons2: {
        marginTop: 20,
    },
    support: {
        ...AppFont(15, 600, ColorR.BLACK),

        marginBottom: 14,
    },
});
