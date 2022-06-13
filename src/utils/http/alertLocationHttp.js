import axios from 'axios';
import {HTTP_ROUTING} from './routing';

export class AlertLocationHttp {
    static async loadAlertLocation() {
        try {
            const res = await axios.get(HTTP_ROUTING.alertLocation.alertLocationLoad);
            return res.data;
        } catch (e) {
            return Promise.reject(e);
        }
    }

    static async updateRegion(region) {
        const data = {region};
        try {
            const res = await axios.post(HTTP_ROUTING.client.updateRegion, data);
            return res.data;
        } catch (e) {
            return Promise.reject(e);
        }
    }
}
