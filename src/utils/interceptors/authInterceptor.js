import axios from 'axios';
import Storage, {STORAGE_KEYS} from '../storage/storage';

axios.interceptors.request.use(async (config) => {
    const token = await Storage.get(STORAGE_KEYS.ACCESS_TOKEN);
    if (!token) {
        return config;
    }

    if (config.headers['Content-Type']) {
        return {
            ...config,
            headers: {Authorization: `Bearer ${token}`, 'Content-Type': config.headers['Content-Type']},
        };
    }

    return {...config, headers: {Authorization: `Bearer ${token}`}};
});
