import {AppRegistry} from 'react-native';
import moment from 'moment/min/moment-with-locales';
import './src/utils/interceptors/authInterceptor';
import './src/utils/interceptors/refreshInterceptor';
import App from './src/App';
import {name as appName} from './app.json';

moment.locale('uk');
AppRegistry.registerComponent(appName, () => App);
