import axios from 'axios';
import {HTTP_ROUTING} from './routing';
import Storage from '../storage/storage';

export class AlertLocationHttp {
    static loadAlertLocation() {
        const loadLocations = async () => {
            try { 
                // trying to get alertLocations with access token
                const headers = {
                    'Authorization': `Bearer ${await Storage.get('accessToken')}`
                }    
                const res = await axios.get(HTTP_ROUTING.alertLocation.alertLocationLoad, { headers: headers });
                return res.data;
            }
            catch (e) {
                if ( e.response.status >= 400 && e.response.status < 500)  {
                    // getting new tokens with refresh token
                    const refreshHeaders = {
                        'Authorization': `Bearer ${await Storage.get('refreshToken')}`
                    }
                    const res = await axios.get(HTTP_ROUTING.client.refresh, { headers: refreshHeaders });
                    await Storage.store('accessToken', res.data.accessToken);
                    await Storage.store('refreshToken', res.data.refreshToken);

                    // getting alertLocations with new access token
                    const accessHeaders = {
                        'Authorization': `Bearer ${res.data.accessToken}`
                    }
                    const resp = await axios.get(HTTP_ROUTING.alertLocation.alertLocationLoad, { headers: accessHeaders });
                    return resp.data;
                }
            }               
        }
        return loadLocations().then();
    }

    static updateRegion(region) {
        const changeRegion = async (region) => {
            const data = { region };
            try {
                // trying to update region with access token
                const headers = { 
                    'Authorization': `Bearer ${await Storage.get('accessToken')}`
                }
                const res = await axios.post(HTTP_ROUTING.client.updateRegion, data, { headers });
                return res.data;
            } catch (e) {
                if ( e.response.status >= 400 && e.response.status < 500)  {
                    // getting new tokens with refresh token
                    const refreshHeaders = {
                        'Authorization': `Bearer ${await Storage.get('refreshToken')}`
                    }
                    const res = await axios.get(HTTP_ROUTING.client.refresh, { headers: refreshHeaders });
                    await Storage.store('accessToken', res.data.accessToken);
                    await Storage.store('refreshToken', res.data.refreshToken);
                    
                    // updating region with new access token
                    const accessHeaders = { 
                        'Authorization': `Bearer ${await Storage.get('accessToken')}`
                    }
                    const resp = await axios.post(HTTP_ROUTING.client.updateRegion, data, { headers: accessHeaders })
                    return resp.data;
                }
            }
        }
        return changeRegion(region).then();
    }

    static login(token) {
        const data = { fcmToken: token };
        return axios.post(HTTP_ROUTING.client.login, data).then((res) => res.data);
    }
}
