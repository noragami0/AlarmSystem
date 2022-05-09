import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Titles({text}) {
    return (
        <View styles={styles.title}>
            <Text>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
