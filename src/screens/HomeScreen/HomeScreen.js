import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();
    return (
        <Button
            title="back"
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
        />
    );
}

export default HomeScreen;
