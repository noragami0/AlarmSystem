import React from 'react';
import {Image, View} from 'react-native';

function AttentionIcon() {
    return (
        <View>
            <Image source={require('../../assets/images/red-attention.png')} />
        </View>
    );
}

export default AttentionIcon;
