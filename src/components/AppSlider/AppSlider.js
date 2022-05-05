import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';

export default function AppSlider({
    text, max, min, value, onChange,
}) {
    const thumbComponent = () => <View style={styles.thumb} />;
    return (
        <View style={styles.container}>
            <Text style={AppFont(15, 600, ColorR.BLACK)}>{text}</Text>
            <Slider
                trackStyle={styles.track}
                style={styles.slider}
                maximumValue={max}
                minimumValue={min}
                value={value}
                minimumTrackTintColor={ColorR.BLUE}
                maximumTrackTintColor={ColorR.GREY}
                onValueChange={(val) => onChange(val)}
                renderThumbComponent={thumbComponent}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    track: {
        height: 8,
    },
    thumb: {
        width: 18,
        height: 18,
        backgroundColor: ColorR.WHITE,
        borderWidth: 2,
        borderRadius: 9,
        borderColor: ColorR.BLUE,
        borderStyle: 'solid',
    },
    container: {
        backgroundColor: ColorR.WHITE,
        padding: 17,
        borderRadius: 10,
        shadowColor: ColorR.BLACK,
        shadowOpacity: 0.10,
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowRadius: 5,
        elevation: 5,
    },
    slider: {
        padding: 20,
        width: 350,
        height: 20,
    },
});
