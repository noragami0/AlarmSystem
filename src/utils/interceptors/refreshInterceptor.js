import axios from 'axios';
import {UserHttp} from '../http/userHttp';
import {STORAGE_KEYS} from '../storage/storage';

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 403 && !originalRequest.isRetrying) {
            try {
                originalRequest.isRetrying = true;
                const {accessToken, refreshToken} = await UserHttp.refreshToken();
                await Storage.store(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
                await Storage.store(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
                originalRequest.headers.Authorization = accessToken;
                return axios(originalRequest);
            } catch (e) {
                return Promise.reject(e);
            }
        }
        return Promise.reject(error);
    },
);
