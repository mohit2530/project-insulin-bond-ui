import {SignInModel} from "./sign-in.model";
import * as actions from "./sign-in.actions"
import axios from 'axios';
import {createSelector} from 'reselect'
import {LOG_OUT_SUCCEED} from "../../navigation/navigation.action";


const initialState = {
    user: getUserToken(),
    signIn: SignInModel,
    signInFailed: false,
    loading: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.SIGN_IN_SUCCEED:
            localStorage.setItem('user', JSON.stringify(action.payload));
            axios.defaults.headers.Authorization = `Bearer ${action.payload.token}`;
            return {...state, user: action.payload, signInFailed: false, loading: false};

        case actions.SIGN_IN:
            return {...state, signIn: action.payload, loading: true};

        case actions.SIGN_IN_FAILED:
            return {...state, signInFailed: true};

        case LOG_OUT_SUCCEED:
            return {...state, user: ''};

        default:
            return state;
    }
}

export const SignIn = reducer;

const getState = state => state.SignIn;

export const getStateUsername = createSelector(
    [getState],
    state => !!state.user && state.user
);

export const isSignInFailed = createSelector(
    [getState],
    state => state.signInFailed
);

export function getUserToken() {
    const username = JSON.parse(localStorage.getItem('user'));
    return !!username && username.jwt;
}


export function getUserContext() {
    const username = JSON.parse(localStorage.getItem('user'));
    return !!username && username.context;
}
