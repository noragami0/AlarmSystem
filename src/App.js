import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation/AppNavigation';
import Storage from './utils/storage/storage';
import Firebase from './utils/firebase/firebase';
import {AlertLocationHttp} from './utils/http/alertLocationHttp';

function App() {
    useEffect(() => {
        const manageTokens = async () => {
            const stToken = await Storage.get('fcmToken');
            if (stToken !== null) return;
            const token = await Firebase.getToken();
            const responce = await AlertLocationHttp.login(token);
            const {accessToken, refreshToken} = responce.tokens;

            await Storage.store('refreshToken', refreshToken);
            await Storage.store('fcmToken', token);

            const data = {accessToken, refreshToken, token};
            console.log(`new fcm token and access/refresh tokens are stored : ${JSON.stringify(data)}`);
        };
        manageTokens();

        const manageRegion = async () => {
            const region = await Storage.get('region');
            if (region !== null) return;
            const currRegion = 'Луганська_область';
            const responce = await AlertLocationHttp.updateRegion(currRegion);
            await Storage.store('region', responce.region);
        };
        manageRegion();

        SplashScreen.hide();
    }, []);

    return (
        <AppNavigation />
    );
}

export default App;
