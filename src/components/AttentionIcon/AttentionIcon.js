import React from 'react';
import {Image, View} from 'react-native';
import {DANGER_LEVEL} from '../../utils/constants';

const images = {
    BIG_RED: require('../../assets/images/red-attention.png'),
    BIG_YELLOW: require('../../assets/images/yellow-attention.png'),
    SMALL_RED: require('../../assets/images/red-attention-small.png'),
    SMALL_YELLOW: require('../../assets/images/yellow-attention-small.png'),
};

function AttentionIcon({dangerLevel, isSmall}) {
    const getImageSrc = () => {
        switch (dangerLevel) {
            case DANGER_LEVEL.HIGH:
                return isSmall ? images.SMALL_RED : images.BIG_RED;
            case DANGER_LEVEL.MEDIUM:
                return isSmall ? images.SMALL_YELLOW : images.BIG_YELLOW;
            default:
                return null;
        }
    };
    return (
        <View>
            {dangerLevel === DANGER_LEVEL.NO_DANGER
                ? null
                : <Image source={getImageSrc()} />}
        </View>
    );
}
export default AttentionIcon;
