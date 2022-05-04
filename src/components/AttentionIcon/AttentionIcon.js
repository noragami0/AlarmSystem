import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ImageStyles} from '../../utils/res/stylesForImages';

function AttentionIcon({selectedImage}) {
    return (
        <View style={styles.images}>
            <Image source={selectedImage} style={ImageStyles(315, 315)} />
        </View>
    );
}

const styles = StyleSheet.create({
    images: {
        alignItems: 'center',
    },
});

export default AttentionIcon;
