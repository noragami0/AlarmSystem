import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';

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
                {moment(currentDate).format('DD MM YYYY HH:mm:ss ')}
            </Text>
        </View>
    );
}

export default DateTime;
