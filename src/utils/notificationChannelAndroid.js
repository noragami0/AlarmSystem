import {NativeModules} from 'react-native';

const {AlertNotificationChannelCreatorModule} = NativeModules;

export const SOUNDS = {
    MORSKA: 'morska',
    SOUND1: 'sound1',
};

export class NotificationChannelAndroid {
    static changeSoundStart(sound) {
        AlertNotificationChannelCreatorModule.createChannelStart(sound);
    }

    static changeSoundEnd(sound) {
        AlertNotificationChannelCreatorModule.createChannelEnd(sound);
    }
}
