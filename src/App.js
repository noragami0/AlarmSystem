import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation/AppNavigation';
import Storage, {STORAGE_KEYS} from './utils/storage/storage';
import Firebase from './utils/firebase/firebase';
import {AlertLocationHttp} from './utils/http/alertLocationHttp';
import {UserHttp} from './utils/http/userHttp';

function App() {
    useEffect(() => {
        const manageTokens = async () => {
            const region = await AlertLocationHttp.getUserRegion(45.247056, 34.203245);
            console.log(region);
            // const token = await Firebase.getToken();
            const token = 'temperorayFcmTOKEN11rrrrrr1239081231234`1klaKSDJFLAKSJDFLKAJSDFladfalksdjflkasjdfasdf23`123`123';
            const response = await UserHttp.login(token);
            console.log(response);
            const {accessToken, refreshToken} = response.tokens;

            await Storage.store(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
            await Storage.store(STORAGE_KEYS.FCM_TOKEN, token);
            await Storage.store(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
        };

        manageTokens();

        const manageRegion = async () => {
            const region = await Storage.get(STORAGE_KEYS.REGION);
            if (region !== null) return;
            const currRegion = 'Луганська_область';
            const response = await AlertLocationHttp.updateRegion(currRegion);
            await Storage.store('region', response.region);
        };
        manageRegion();

        SplashScreen.hide();
    }, []);

    return (
        <AppNavigation />
    );
}

export default App;
