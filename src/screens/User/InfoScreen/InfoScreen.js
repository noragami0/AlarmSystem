import React from 'react';
import {View} from 'react-native';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import ButtonWithIcon from '../../../components/ButtonWithIcon/ButtonWithIcon';
import {IconsR} from '../../../utils/res/icons';
import {ColorR} from '../../../utils/res/theme';
import {MockData} from '../../../utils/mockData';
import {localize} from '../../../utils/localize/localize';
import Titles from '../../../components/Titles/Titles';

function InfoScreen() {
    return (
        <View>
            <Titles text={localize.general.moreInfo} />
            <ButtonWithArrow text={localize.general.share} onClick={() => null} />
            <Titles text={localize.general.techSupport} />
            <ButtonWithIcon
                selectedIcon={IconsR.EMAIL_ICON}
                iconColor={ColorR.GREY}
                text={MockData.EMAIL}
                onClick={() => null}
            />
            <ButtonWithArrow text={localize.general.questions} onClick={() => null} />
        </View>
    );
}

export default InfoScreen;

// const styles = StyleSheet.create({});
