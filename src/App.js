import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation/AppNavigation';
import Storage, {STORAGE_KEYS} from './utils/storage/storage';
import Firebase from './utils/firebase/firebase';
import {AlertLocationHttp} from './utils/http/alertLocationHttp';
import {UserHttp} from './utils/http/userHttp';

function App() {
    useEffect(() => {
        SplashScreen.hide();

        const manageTokens = async () => {
            if (await Storage.get(STORAGE_KEYS.REFRESH_TOKEN)) {
                return;
            }
            const token = await Firebase.getToken();
            const response = await UserHttp.login(token);
            const {accessToken, refreshToken} = response.tokens;

            await Storage.store(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
            await Storage.store(STORAGE_KEYS.FCM_TOKEN, token);
            await Storage.store(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
        };

        const manageRegion = async () => {
            const region = await Storage.get(STORAGE_KEYS.REGION);
            if (region !== null) return;
            const currRegion = 'Луганська_область';
            const response = await AlertLocationHttp.updateRegion(currRegion);
            await Storage.store('region', response.region);
        };

        const startApp = async () => {
            await manageTokens();
            await manageRegion();
        };

        startApp();
    }, []);

    return (
        <AppNavigation />
    );
}

export default App;
