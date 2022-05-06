import React from 'react';
import {
    Text, View, StyleSheet,
} from 'react-native';
import {Switch} from 'react-native-switch';
import {ColorR} from '../../utils/res/theme';
import {AppFont} from '../../utils/res/fonts';
import GlobalStyles from '../../utils/res/globalStyles';

export default function ToggleButton({
    isEnabled, isDisabled, onChange, text,
}) {
    return (
        <View style={GlobalStyles.buttonComponent}>
            <Text style={AppFont(15, 600, ColorR.BLACK)}>{text}</Text>
            <Switch
                circleSize={24}
                barHeight={26}
                barWidth={60}
                backgroundActive={ColorR.BLUE}
                backgroundInactive={ColorR.GREY}
                changeValueImmediately={true}
                innerCircleStyle={styles.circleStyle}
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={2}
                switchRightPx={2}
                switchWidthMultiplier={2.3}
                switchBorderRadius={24}
                onValueChange={(val) => onChange(val)}
                value={isEnabled}
                disabled={isDisabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    circleStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: ColorR.WHITE,
    },
});
