import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Svg, Defs, RadialGradient, Stop, Circle,
} from 'react-native-svg';
import {ColorR} from '../../../utils/res/theme';

export default function HomeScreenLayout({children}) {
    const dot = (color) => (
        <Svg height="300" width="300">
            <Defs>
                <RadialGradient id="dotGrad">
                    <Stop offset="0%" stopColor={color} stopOpacity="1" />
                    <Stop offset="30%" stopColor={color} stopOpacity="1" />
                    <Stop offset="100%" stopColor={ColorR.PAGE_BG} stopOpacity="1" />
                </RadialGradient>
            </Defs>
            <Circle r="300" fill="url(#dotGrad)" />
        </Svg>
    );

    return (
        <View style={styles.container}>
            <View style={styles.dot}>
                {dot(ColorR.BLACK)}
            </View>
            {children}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorR.PAGE_BG,
    },
    dot: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});
