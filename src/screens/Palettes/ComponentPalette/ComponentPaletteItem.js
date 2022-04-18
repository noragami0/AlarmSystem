import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ComponentPaletteItem({
    name, paddingHorizontal, paddingVertical, children,
}) {
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
