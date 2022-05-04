import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import AttentionIcon from '../AttentionIcon/AttentionIcon';
import {ImageStyles} from '../../utils/res/stylesForImages';
import {ColorR} from '../../utils/res/theme';
import {AppFont} from '../../utils/res/fonts';
import {localize} from '../../utils/localize/localize';

function CurrentAttention({
    dangerLevel, title, date, dateFrom, dateTo,
}) {
    const duration = moment(dateFrom).diff(dateTo);
    return (
        <View style={styles.wrapper}>

            <AttentionIcon isSmall={true} dangerLevel={dangerLevel} style={ImageStyles(75, 75)} />

            <View style={styles.texts}>

                <Text style={AppFont(16, 600, ColorR.BLACK)}>{title}</Text>

                <View style={styles.dateElements}>
                    <Text style={styles.date}>
                        {moment.utc(date).format('DD MMMM, HH:mm')}
                    </Text>

                    <Text style={ColorR.LIGHT_GRAY}>
                        {moment.utc(duration).format(`H${localize.general.hourAbbr}mm${localize.general.minutesAbbr}`)}
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
        ...AppFont(14, 600),

    },
    texts: {
        marginLeft: 50,
        alignItems: 'center',
    },
    date: {
        marginRight: 5,
        color: ColorR.BLACK,
    },
});

export default CurrentAttention;
