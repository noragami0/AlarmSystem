import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen() {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    };

    const decrement = () => {
        setNumber(number - 1);
    };

    return (
        <View>
            <Text>{number}</Text>
            <Button onPress={increment} title="Increment" />
            <Button onPress={decrement} title="Decrement" />
        </View>
    );
}

export default HomeScreen;
