import axios from 'axios';
import {HTTP_ROUTING} from './routing';

export class AlertLocationHttp {
    static loadAlertLocation() {
        return axios.get(HTTP_ROUTING.alertLocation.alertLocationLoad).then((res) => res.data);
    }
}
