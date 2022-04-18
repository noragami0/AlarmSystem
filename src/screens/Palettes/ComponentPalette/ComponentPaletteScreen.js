import React from 'react';
import {
    ScrollView, Alert, StyleSheet, View,
} from 'react-native';
import ComponentPaletteItem from './ComponentPaletteItem';
import DateTime from '../../../components/DateTime/DateTime';
import AppButton from '../../../components/AppButton/AppButton';
import {AppButtonModel} from '../../../components/AppButton/AppButtonModel';

function ComponentPaletteScreen() {
    const buttonModels = [
        AppButtonModel.createStroked('STROKED BUTTON', {
            onClick: () => Alert.alert('Click Stroked'),
        }),
        AppButtonModel.createRaised('RAISED BUTTON', {
            onClick: () => Alert.alert('Click Raised'),
        }),
    ];

    return (
        <ScrollView>
            <ComponentPaletteItem name="DateTime Component">
                <DateTime />
            </ComponentPaletteItem>
            <ComponentPaletteItem name="AppButton Component">
                {buttonModels.map((model, index) => (
                    <View key={index} style={styles.marginBlock}>
                        <AppButton model={model} />
                    </View>
                ))}
            </ComponentPaletteItem>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    marginBlock: {
        marginVertical: 10,
    },
});

export default ComponentPaletteScreen;
