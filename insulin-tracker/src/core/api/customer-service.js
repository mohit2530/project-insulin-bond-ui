import axios from 'axios';
import {from} from "rxjs";
import {getUserContext, getUserToken} from "../../components/sign-in/sign-in.reducer";


const apiClient = axios.create({
    baseURL: 'http://localhost:8099/project/insulin/v1/tracker',
    timeout: 10000,
    headers: {
            Authorization: getUserToken()
        }
    });


export class CustomerService {
    static signIn = (signInModel) =>
        from(apiClient.post('/login', signInModel));

    static signUp = (signUpModel) =>
        from(apiClient.post(`/register`, signUpModel));

    static logout = () =>
        from(apiClient.get(`${getUserContext()}/logout`));
}
