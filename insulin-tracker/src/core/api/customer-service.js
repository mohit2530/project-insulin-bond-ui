import axios from 'axios';
import {from} from "rxjs";


const apiClient = axios.create({
    baseURL: 'http://localhost:8099/project/ib',
    timeout: 10000,
    withCredentials: false,
});

export class CustomerService {
    static signIn = (signInModel) =>
        from(apiClient.post('/login', signInModel));

    static signUp = (signUpModel) =>
        from(apiClient.post(`/register`, signUpModel));

    static logout = () =>
        from(apiClient.get(`/logout`));
}
