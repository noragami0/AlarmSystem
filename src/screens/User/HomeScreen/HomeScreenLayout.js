import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ColorR} from '../../../utils/res/theme';
import AirDot from '../../../components/AirDot/AirDot';
import {DANGER_LEVEL} from '../../../utils/constants';
import AppView from '../../../components/AppView/AppView';

const DOT_RADIUS = 150;
const NAVIGATION_BAR_HEIGHT = 35;

const DOTS_NO_DANGER = [
    {color: ColorR.GREEN, top: 0, left: DOT_RADIUS},
    {color: ColorR.GREEN, bottom: DOT_RADIUS, left: 0},
    {color: ColorR.GREEN, bottom: Dimensions.get('window').height / 2 - NAVIGATION_BAR_HEIGHT, right: 0},
];
const DOTS_MEDIUM = [
    {color: ColorR.YELLOW, top: 0, left: 0},
    {color: ColorR.YELLOW, bottom: DOT_RADIUS, left: 0},
    {color: ColorR.YELLOW, bottom: Dimensions.get('window').height / 2 - NAVIGATION_BAR_HEIGHT, right: 0},
];
const DOTS_HIGH = [
    {color: ColorR.LIGHT_RED, top: 0, left: 0},
    {color: ColorR.LIGHT_RED, bottom: DOT_RADIUS, left: 0},
    {color: ColorR.LIGHT_RED, bottom: Dimensions.get('window').height / 2 - NAVIGATION_BAR_HEIGHT, right: 0},
];
export default function HomeScreenLayout({children, dangerLevel}) {
    const getDotOffset = (offset) => (offset === undefined ? undefined : offset - DOT_RADIUS);

    const renderDots = (dots) => dots.map((item, index) => (
        <View
            key={index}
            style={[styles.dot, {
                top: getDotOffset(item.top),
                right: getDotOffset(item.right),
                left: getDotOffset(item.left),
                bottom: getDotOffset(item.bottom),
            }]}
        >
            <AirDot color={item.color} radius={DOT_RADIUS} />
        </View>
    ));

    const getDots = () => {
        switch (dangerLevel) {
            case DANGER_LEVEL.NO_DANGER:
                return DOTS_NO_DANGER;
            case DANGER_LEVEL.MEDIUM:
                return DOTS_MEDIUM;
            case DANGER_LEVEL.HIGH:
                return DOTS_HIGH;
            default:
                return [];
        }
    };

    return (
        <AppView style={styles.container}>
            <LinearGradient
                colors={!dangerLevel ? ['#f6f69e', '#b5d8ee', '#dfeaf0'] : [ColorR.PAGE_BG, ColorR.PAGE_BG]}
                style={styles.backSvg}
                start={{x: 1.3, y: 0.5}}
            >
                {renderDots(getDots())}
                {children}
            </LinearGradient>
        </AppView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorR.PAGE_BG,
    },
    dot: {
        position: 'absolute',
    },
    backSvg: {
        height: '100%',
        width: '100%',
    },
});
