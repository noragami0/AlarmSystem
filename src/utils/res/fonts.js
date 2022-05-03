import {Platform} from 'react-native';

export function AppFont(size, weight, textcolor, isItalic = false) {
    return {
        fontSize: size,
        ...Platform.select({
            ios: {
                fontWeight: weight.toString(),
                fontStyle: isItalic ? 'italic' : 'normal',
                fontFamily: 'Montserrat Alternates',
            },
            android: {
                fontFamily: androidFontFamilyToWeight(weight, isItalic),
            },
        }),
        color: textcolor,
    };
}

function androidFontFamilyToWeight(weight, isItalic) {
    let fontFamily;

    switch (weight) {
        case 100:
            fontFamily = 'MontserratAlternates-Thin';
            break;
        case 200:
            fontFamily = 'MontserratAlternates-ExtraLight';
            break;
        case 300:
            fontFamily = 'MontserratAlternates-Light';
            break;
        case 400:
            fontFamily = 'MontserratAlternates-Regular';
            break;
        case 500:
            fontFamily = 'MontserratAlternates-Medium';
            break;
        case 600:
            fontFamily = 'MontserratAlternates-SemiBold';
            break;
        case 700:
            fontFamily = 'MontserratAlternates-Bold';
            break;
        case 800:
            fontFamily = 'MontserratAlternates-ExtraBold';
            break;
        case 900:
            fontFamily = 'MontserratAlternates-Black';
            break;
        default:
            break;
    }

    return `${fontFamily}${isItalic ? 'Italic' : ''}`;
}
