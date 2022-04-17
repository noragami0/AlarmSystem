import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

function DateTime() {
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
            <Text>
                {currentDate.getHours()}
                :
                {currentDate.getMinutes()}
                :
                {currentDate.getSeconds()}
            </Text>
        </View>
    );
}

export default DateTime;
