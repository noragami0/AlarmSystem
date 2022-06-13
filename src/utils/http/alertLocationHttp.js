import axios from 'axios';
import {HTTP_ROUTING} from './routing';

const pointInPolygon = require('point-in-polygon');

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

    static async getUserRegion(latitude, logtitude) {
        const response = await axios.get('https://alarmmap.online/assets/json/_geo/regiony.json');
        let region;
        response.data.forEach((el) => {
            el.geometry.coordinates.forEach((item) => {
                item.forEach((polygon) => {
                    if (pointInPolygon([logtitude, latitude], polygon)) {
                        region = el;
                    }
                });
            });
        });
        return region;
    }
}
