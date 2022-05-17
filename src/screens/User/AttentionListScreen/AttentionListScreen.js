import React, {useEffect, useState} from 'react';
import {
    View, FlatList, StyleSheet, Text,
} from 'react-native';
import moment from 'moment';
import CurrentAttention from '../../../components/CurrentAttention/CurrentAttention';
import {DANGER_LEVEL} from '../../../utils/constants';
import {MockData} from '../../../utils/mockData';
import {localize} from '../../../utils/localize/localize';
import {AppFont} from '../../../utils/res/fonts';
import {ColorR} from '../../../utils/res/theme';
import {ExampleHttp} from '../../../utils/http/exampleHttp';
import AppView from '../../../components/AppView/AppView';

const DATA = [
    {
        dangerLevel: DANGER_LEVEL.HIGH,
        title: MockData.TITLE,
        date: new Date(),
        dateFrom: moment(new Date()).subtract(2, 'day').subtract(153, 'minutes'),
        dateTo: new Date(),
    },
    {
        dangerLevel: DANGER_LEVEL.MEDIUM,
        title: MockData.TITLE,
        date: new Date(),
        dateFrom: moment(new Date()).subtract(1, 'day'),
        dateTo: new Date(),
    },
    {
        dangerLevel: DANGER_LEVEL.HIGH,
        title: MockData.TITLE,
        date: new Date(),
        dateFrom: moment(new Date()).subtract(1, 'day'),
        dateTo: new Date(),
    },
    {
        dangerLevel: DANGER_LEVEL.MEDIUM,
        title: MockData.TITLE,
        date: new Date(),
        dateFrom: moment(new Date()).subtract(1, 'day'),
        dateTo: new Date(),
    },
    {
        dangerLevel: DANGER_LEVEL.HIGH,
        title: MockData.TITLE,
        date: new Date(),
        dateFrom: new Date(),
        dateTo: new Date(),
    },
];

function AttentionListScreen() {
    const [alertLocations, setAlertLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const renderItem = ({item}) => (
        <View style={styles.attention}>
            <CurrentAttention
                date={item.date}
                dangerLevel={item.dangerLevel}
                dateTo={item.dateTo}
                dateFrom={item.dateFrom}
                title={item.title}
            />
        </View>
    );

    const loadExamples = async () => {
        setIsLoading(true);
        try {
            const response = await ExampleHttp.loadExample();

            setAlertLocations(response.alertLocations);
            setIsLoading(false);
        } catch (e) {
            console.log('ERROR', e);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadExamples();
    }, []);

    return (
        <AppView style={styles.container}>
            <Text style={styles.title}>{localize.listScreen.title}</Text>
            <View style={styles.subTitleView}>
                <Text style={styles.subTitle}>{localize.listScreen.subTitle}</Text>
                <Text style={styles.subTitleTime}>{moment.utc().format('DD MMMM, HH:mm')}</Text>
            </View>
            <FlatList data={DATA} renderItem={renderItem} />

            <Text>{isLoading ? 'Loading...' : JSON.stringify(alertLocations)}</Text>
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
