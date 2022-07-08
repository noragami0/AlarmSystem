import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation/AppNavigation';
import Storage, {STORAGE_KEYS} from './utils/storage/storage';
import Firebase from './utils/firebase/firebase';
import {UserHttp} from './utils/http/userHttp';

function App() {
    useEffect(() => {
        SplashScreen.hide();

        const manageTokens = async () => {
            console.log(await Firebase.getToken());
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

        manageTokens();
    }, []);

    return (
        <AppNavigation />
    );
}

export default App;
