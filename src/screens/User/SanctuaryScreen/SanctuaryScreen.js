import React, {useEffect, useState} from 'react';
import {
    View, Text, StyleSheet, FlatList, RefreshControl,
} from 'react-native';
import {localize} from '../../../utils/localize/localize';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import ButtonWithArrow from '../../../components/ButtonWithArrow/ButtonWithArrow';
import SanctuaryAddress from '../../../components/SanctuaryAddress/SanctuaryAddress';
import {SanctuaryLocationHttp} from '../../../utils/http/sanctuaryLocationHttp';
import AppView from '../../../components/AppView/AppView';

function SanctuaryScreen() {
    const [sanctuaryLocations, setSanctuaryLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const renderItem = ({item}) => (
        <View style={styles.list}>
            <SanctuaryAddress
                sanctuaryDestination={item.destination}
                sanctuaryNumber={item.number}
                sanctuaryAddress={item.address}
            />
        </View>
    );

    const loadLocation = async () => {
        setIsLoading(true);
        try {
            const response = await SanctuaryLocationHttp.loadSanctuaryLocation();
            setSanctuaryLocations(response.sanctuaries);
            setIsLoading(false);
        } catch (e) {
            console.log('ERROR', e);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadLocation();
    }, []);
    return (
        <AppView style={styles.wrapper}>
            <Text style={styles.title}>{localize.sanctuaryScreen.title}</Text>
            <FlatList
                data={sanctuaryLocations}
                renderItem={renderItem}
                refreshControl={(
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={() => loadLocation()}
                    />
                )}
            />
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
