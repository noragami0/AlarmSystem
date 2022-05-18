import React, {useEffect, useState} from 'react';
import {
    View, FlatList, StyleSheet, Text, RefreshControl,
} from 'react-native';
import moment from 'moment/min/moment-with-locales';
import CurrentAttention from '../../../components/CurrentAttention/CurrentAttention';
import {localize} from '../../../utils/localize/localize';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import {AlertLocationHttp} from '../../../utils/http/alertLocationHttp';
import AppView from '../../../components/AppView/AppView';

function AttentionListScreen() {
    const [alertLocations, setAlertLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const renderItem = ({item}) => (
        <View style={styles.attention}>
            <CurrentAttention
                date={moment(item.date)}
                dangerLevel={item.dangerLevel}
                dateTo={moment(item.dateTo)}
                dateFrom={moment(item.dateFrom)}
                title={item.title}
            />
        </View>
    );

    const loadLocation = async () => {
        setIsLoading(true);
        try {
            const response = await AlertLocationHttp.loadAlertLocation();

            setAlertLocations(response.alertLocations);

            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        } catch (e) {
            console.log('ERROR', e);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadLocation();
    }, []);

    return (
        <AppView style={styles.container}>
            <Text style={styles.title}>{localize.listScreen.title}</Text>
            <View style={styles.subTitleView}>
                <Text style={styles.subTitle}>{localize.listScreen.subTitle}</Text>
                <Text style={styles.subTitleTime}>{moment.utc().format('DD MMMM, HH:mm')}</Text>
            </View>
            <FlatList
                data={alertLocations}
                renderItem={renderItem}
                refreshControl={(
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={() => loadLocation()}
                    />
                )}
            />
        </AppView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 17,
    },
    attention: {
        marginBottom: 12,
    },
    title: {
        ...AppFont(16, 700, ColorR.BLACK),
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 8,
    },
    subTitle: {
        ...AppFont(14, 600, ColorR.DARK_GRAY),
        textTransform: 'uppercase',
        marginBottom: 25,
    },
    subTitleView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    subTitleTime: {
        ...AppFont(14, 600, ColorR.DARK_GRAY),
        marginLeft: 5,
    },
});

export default AttentionListScreen;
