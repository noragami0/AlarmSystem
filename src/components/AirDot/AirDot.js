import React from 'react';
import {
    Circle, Defs, RadialGradient, Stop, Svg,
} from 'react-native-svg';
import {ColorR} from '../../utils/res/theme';

function AirDot({color, radius}) {
    if (!radius) {
        radius = 100;
    }

    if (!color) {
        color = ColorR.BLACK;
    }

    return (
        <Svg height={radius * 2} width={radius * 2}>
            <Defs>
                <RadialGradient id="dotGrad">
                    <Stop offset="0%" stopColor={color} stopOpacity="1" />
                    <Stop offset="20%" stopColor={color} stopOpacity="1" />
                    <Stop offset="100%" stopColor={ColorR.PAGE_BG} stopOpacity="1" />
                </RadialGradient>
            </Defs>
            <Circle cx={radius} cy={radius} r={radius} fill="url(#dotGrad)" />
        </Svg>
    );
}

export default AirDot;
