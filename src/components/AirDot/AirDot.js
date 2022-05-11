import React from 'react';
import {
    Circle, Defs, RadialGradient, Stop, Svg,
} from 'react-native-svg';
import {ColorR} from '../../utils/res/theme';

function AirDot({color}) {
    return (
        <Svg height="200" width="200">
            <Defs>
                <RadialGradient id="dotGrad">
                    <Stop offset="0%" stopColor={color} stopOpacity="1" />
                    <Stop offset="20%" stopColor={color} stopOpacity="1" />
                    <Stop offset="100%" stopColor={ColorR.PAGE_BG} stopOpacity="1" />
                </RadialGradient>
            </Defs>
            <Circle cx="100" cy="100" r="100" fill="url(#dotGrad)" />
        </Svg>
    );
}

export default AirDot;
