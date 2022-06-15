import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppView from '../../../components/AppView/AppView';

export default function ScreensLayout({children}) {
    return (
        <AppView style={styles.background}>
            <LinearGradient
                colors={['#f6f69e', '#b5d8ee', '#dfeaf0']}
                style={styles.backSvg}
                start={{x: 1.3, y: 0.5}}
            >
                {children}
            </LinearGradient>

        </AppView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    backSvg: {
        height: '100%',
        width: '100%',
    },
});
