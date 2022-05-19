import {environments} from '../../environments/environments';

export const HTTP_ROUTING = {
    alertLocation: {
        alertLocationLoad: `${environments.apiBase}/alertLocations`,
    },
    sanctuaries: {
        sanctuariesLoad: `${environments.apiBase}/sanctuaries`,
    },
};
