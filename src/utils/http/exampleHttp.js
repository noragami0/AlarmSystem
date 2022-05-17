import axios from 'axios';
import {HTTP_ROUTING} from './routing';

export class ExampleHttp {
    static loadExample() {
        return axios.get(HTTP_ROUTING.example.exampleLoad).then((res) => res.data);
    }
}
