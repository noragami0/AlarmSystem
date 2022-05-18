import axios from 'axios';
import {HTTP_ROUTING} from './routing';

export class SanctuaryLocationHttp {
    static loadSanctuaryLocation() {
        // eslint-disable-next-line max-len
        return axios.get(HTTP_ROUTING.sanctuaries.sanctuariesLoad).then((res) => res.data);
    }
}
