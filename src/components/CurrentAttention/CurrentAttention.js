import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment/min/moment-with-locales';
import AttentionIcon from '../AttentionIcon/AttentionIcon';
import {ImageStyles} from '../../utils/res/stylesForImages';
import {ColorR} from '../../utils/res/theme';
import {AppFont} from '../../utils/res/fonts';
import {localize} from '../../utils/localize/localize';

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const MILLISECONDS_IN_HOUR = 60 * 60 * 1000;
const MILLISECONDS_IN_MINUTE = 60 * 1000;

function CurrentAttention({
    dangerLevel, title, date, dateFrom,
}) {
    const duration = moment(date).diff(dateFrom);

    const getDuration = () => {
        const days = Math.floor(duration / MILLISECONDS_IN_DAY);
        const hours = Math.floor((duration - (days * MILLISECONDS_IN_DAY)) / MILLISECONDS_IN_HOUR);
        const minutes = Math.floor(
            (
                duration
                - (days * MILLISECONDS_IN_DAY)
                - (hours * MILLISECONDS_IN_HOUR)
            ) / MILLISECONDS_IN_MINUTE,
        );
        const daysStr = days ? `${days}${localize.general.daysAbbr} ` : '';
        const hoursStr = `${hours}${localize.general.hourAbbr} `;
        const minutesStr = `${minutes}${localize.general.minutesAbbr}`;

        return `${daysStr}${hoursStr}${minutesStr}`;
    };

    return (
        <View style={styles.wrapper}>

            <AttentionIcon isSmall={true} dangerLevel={dangerLevel} style={ImageStyles(75, 75)} />

            <View style={styles.texts}>

                <Text style={AppFont(16, 600, ColorR.BLACK)}>{title}</Text>

                <View style={styles.dateElements}>
                    <Text style={styles.date}>
                        {moment(dateFrom).format('DD MMMM, HH:mm')}
                    </Text>

                    <Text style={styles.duration}>
                        {getDuration()}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: ColorR.WHITE,
        paddingTop: 7,
        paddingRight: 18,
        paddingBottom: 17,
        paddingLeft: 17,
        shadowColor: ColorR.BLACK,
        shadowOpacity: 0.10,
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
    },
    dateElements: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        width: '100%',
    },
    texts: {
        marginLeft: 35,
        alignItems: 'center',
        flex: 1,
    },
    date: {
        ...AppFont(14, 600, ColorR.BLACK),
        marginRight: 5,
        textTransform: 'lowercase',
    },
    duration: {
        ...AppFont(14, 600, ColorR.LIGHT_GRAY),
    },
});

export default CurrentAttention;
