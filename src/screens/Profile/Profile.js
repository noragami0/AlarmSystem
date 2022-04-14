import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Profile() {
    const navigation = useNavigation();
    return (
        <Button
            title="back"
            onPress={() => navigation.navigate('Home', {name: 'Jane'})}
        />
    );
}

export default Profile;
