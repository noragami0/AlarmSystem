import React from 'react';
import {Text} from 'react-native';
import {AppButtonModel} from './AppButtonModel';

function AppButton({model}) {
    if (!model) {
        model = AppButtonModel.mock();
    }

    return (
        <Text>{model.text}</Text>
    );
}

export default AppButton;
