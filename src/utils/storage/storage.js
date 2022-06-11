import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {

    static store = async (key, value) => {
        try { await AsyncStorage.setItem(key, value) }
        catch (e) { console.log(e) }
    }

    static get = async (key) => {
        try { return await AsyncStorage.getItem(key) }
        catch(e) { console.log(e) }
    }

}