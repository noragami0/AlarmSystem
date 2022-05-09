import React from 'react';
import {Text, View} from 'react-native';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import ButtonWithIcon from '../../../components/ButtonWithIcon/ButtonWithIcon';
import {IconsR} from '../../../utils/res/icons';
import {ColorR} from '../../../utils/res/theme';
import {MockData} from '../../../utils/mockData';
import {localize} from '../../../utils/localize/localize';
// import {AppFont} from '../../../utils/res/fonts';

function InfoScreen() {
    return (
        <View>
            <View>
                <Text>
                    {localize.general.moreInfo}
                </Text>
            </View>
            <ButtonWithArrow text={localize.general.share} onClick={() => null} />
            <Text>
                {localize.general.techSupport}
            </Text>
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
