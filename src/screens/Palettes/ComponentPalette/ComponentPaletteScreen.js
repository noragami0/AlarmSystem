import React from 'react';
import {ScrollView} from 'react-native';
import ComponentPaletteItem from './ComponentPaletteItem';
import DateTime from '../../../components/DateTime';
import AppButton from '../../../components/AppButton/AppButton';

function ComponentPaletteScreen() {
    return (
        <ScrollView>
            <ComponentPaletteItem name="DateTime Component">
                <DateTime />
            </ComponentPaletteItem>
            <ComponentPaletteItem name="AppButton Component">
                <AppButton />
            </ComponentPaletteItem>
        </ScrollView>
    );
}

export default ComponentPaletteScreen;
