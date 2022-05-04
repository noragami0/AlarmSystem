import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';

export default function VolumeSlider({text}) {
    const [, setData] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={AppFont(15, 600, ColorR.BLACK)}>{text}</Text>
            <Slider
                style={styles.Volume}
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor={ColorR.BLUE}
                maximumTrackTintColor={ColorR.GREY}
                onValueChange={(value) => setData(value)}
                thumbTintColor={ColorR.GREY}
            />
        </View>
    );
}
const styles = StyleSheet.create({
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
    Volume: {
        padding: 20,
        width: 350,
        height: 20,
    },
});
