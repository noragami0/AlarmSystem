import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationUtils, RouteNames} from '../../navigation/navigationUtils';

function HomeScreen() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <View>
            <Text>{currentDate.getSeconds()}</Text>
            <Button
                title="back"
                onPress={() => NavigationUtils.navigate(RouteNames.PROFILE)}
            />
        </View>
    );
}

export default HomeScreen;
