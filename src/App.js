import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation/AppNavigation';

function App() {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <AppNavigation />
    );
}

export default App;
