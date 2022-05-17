import React from 'react';
import {
    View, Text, StyleSheet, FlatList,
} from 'react-native';
import {localize} from '../../../utils/localize/localize';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import SanctuaryAddress from '../../../components/SanctuaryAddress/SanctuaryAddress';
import AppView from '../../../components/AppView/AppView';

const DATA = [
    {
        destination: 100,
        number: 50,
        address: 'просп. Маршала Жукова, 2',
    },
    {
        destination: 100,
        number: 55,
        address: 'просп. Маршала Жукова, 2',
    },
    {
        destination: 110,
        number: 60,
        address: 'просп. Маршала Жукова, 2',
    },
];
function SanctuaryScreen() {
    const renderItem = ({item}) => (
        <View style={styles.list}>
            <SanctuaryAddress
                sanctuaryDestination={item.destination}
                sanctuaryNumber={item.number}
                sanctuaryAddress={item.address}
            />
        </View>
    );
    return (
        <AppView style={styles.wrapper}>
            <Text style={styles.title}>{localize.sanctuaryScreen.title}</Text>

            <FlatList data={DATA} renderItem={renderItem} />
            <View style={styles.arrowButton}>
                <ButtonWithArrow text={localize.sanctuaryScreen.goToMap} onClick={() => null} />
            </View>
        </AppView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 17,
    },
    title: {
        ...AppFont(16, 700, ColorR.BLACK),
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 14,
    },
    list: {
        marginBottom: 12,
    },
    arrowButton: {
        marginBottom: 26,
    },
});

export default SanctuaryScreen;
