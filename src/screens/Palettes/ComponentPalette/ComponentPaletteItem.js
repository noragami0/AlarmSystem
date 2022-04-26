import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckerUtils} from '../../../utils/checker';

function ComponentPaletteItem({
    name, paddingHorizontal, paddingVertical, children,
}) {
    if (CheckerUtils.isNullOrUndefined(paddingHorizontal)) {
        paddingHorizontal = 15;
    }

    if (CheckerUtils.isNullOrUndefined(paddingVertical)) {
        paddingVertical = 15;
    }

    return (
        <View>
            <View style={styles.textContainer}>
                <Text>{name}</Text>
            </View>
            <View style={{paddingHorizontal, paddingVertical}}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
});

export default ComponentPaletteItem;
