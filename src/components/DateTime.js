import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
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
            <Text style={styles.clock}>
                {moment(currentDate).format('DD MM YYYY HH:mm:ss ')}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    clock: {
        color: 'red',
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default DateTime;
