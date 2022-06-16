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

    static async getUserRegion(latitude, longtitude) {
        const response = await axios.get('https://alarmmap.online/assets/json/_geo/regiony.json');

        return response.data.find(
            (el) => !!el.geometry.coordinates.find(
                (item) => item.find(
                    (polygon) => pointInPolygon([longtitude, latitude], polygon),
                ),
            ),
        );
    }

    static async getRegionInfoByTrigger(regionTrigger) {
        const response = await axios.get('https://alarmmap.online/assets/json/_geo/regiony.json');
        return response.data.find((el) => el.properties.trigger === regionTrigger);
    }

    static async getRegionAlertStatus(fid) {
        return axios.post('https://alarmmap.online/api/distinct', {distinct: fid}).then((res) => res.data);
    }

    static async getRegionsList() {
        const response = await axios.get('https://alarmmap.online/assets/json/_geo/regiony.json');

        return response.data.map((el) => ({
            name: el.properties.name,
            trigger: el.properties.trigger,
        }));
    }
}
