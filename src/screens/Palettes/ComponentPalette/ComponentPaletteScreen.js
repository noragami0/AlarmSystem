import React from 'react';
import {ScrollView} from 'react-native';
import ComponentPaletteItem from './ComponentPaletteItem';
import DateTime from '../../../components/DateTime';

function ComponentPaletteScreen() {
    return (
        <ScrollView>
            <ComponentPaletteItem name="DateTime Component">
                <DateTime />
            </ComponentPaletteItem>
        </ScrollView>
    );
}

export default ComponentPaletteScreen;
