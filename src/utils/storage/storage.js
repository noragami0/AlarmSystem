import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    FCM_TOKEN: 'FCM_TOKEN',
    REGION: 'REGION',
};

export default class Storage {
    static store = async (key, value) => {
        await AsyncStorage.setItem(key, value);
    }

    static get = async (key) => await AsyncStorage.getItem(key)
}
