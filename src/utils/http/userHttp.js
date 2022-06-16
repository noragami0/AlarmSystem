import axios from 'axios';
import {HTTP_ROUTING} from './routing';
import Storage, {STORAGE_KEYS} from '../storage/storage';

export class UserHttp {
    static login(token) {
        const data = {fcmToken: token};
        return axios.post(HTTP_ROUTING.client.login, data).then((res) => res.data);
    }

    static async refreshToken() {
        const headers = {
            Authorization: `Bearer ${await Storage.get(STORAGE_KEYS.REFRESH_TOKEN)}`,
        };
        const res = await axios.get(HTTP_ROUTING.client.refresh, {headers});

        return {
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
        };
    }
}
