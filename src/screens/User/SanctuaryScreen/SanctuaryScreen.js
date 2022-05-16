import React from 'react';
import {
    View, Text, StyleSheet, FlatList,
} from 'react-native';
import {localize} from '../../../utils/localize/localize';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import SanctuaryAddress from '../../../components/SanctuaryAddress/SanctuaryAddress';

const DATA = [
    {
        title: localize.SanctuaryScreen.sanctuary,
        Destination: 100,
        Number: 50,
        Address: localize.SanctuaryScreen.address,
    },
    {
        title: localize.SanctuaryScreen.sanctuary,
        Destination: 100,
        Number: 55,
        Address: localize.SanctuaryScreen.address,
    },
    {
        title: localize.SanctuaryScreen.sanctuary,
        Destination: 110,
        Number: 60,
        Address: localize.SanctuaryScreen.address,
    },
];
function SanctuaryScreen() {
    const renderItem = ({item}) => (
        <View style={styles.list}>
            <SanctuaryAddress
                sanctuaryTitle={item.title}
                sanctuaryDestination={item.Destination}
                sanctuaryNumber={item.Number}
                sanctuaryAddress={item.Address}
            />
        </View>
    );
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{localize.SanctuaryScreen.title}</Text>

            <FlatList data={DATA} renderItem={renderItem} />
            <View style={styles.arrowButton}>
                <ButtonWithArrow text={localize.SanctuaryScreen.goToMap} onClick={() => null} />
            </View>

        </View>
    );
}

export default SanctuaryScreen;

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
