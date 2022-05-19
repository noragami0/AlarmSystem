import axios from 'axios';
import {HTTP_ROUTING} from './routing';

export class SanctuaryLocationHttp {
    static loadSanctuaryLocation() {
        return axios.get(HTTP_ROUTING.sanctuaries.sanctuariesLoad).then((res) => res.data);
    }
}
