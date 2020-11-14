import qs from "qs";
import {
    router
} from '../../main';
import imgurAPI from '../../api/imgur';

const state = {
    // is initialize value from token login API
    token: window.localStorage.getItem('imgur_token') //get value of token from localstorage
};

const getters = {
    // this method will return boolean true or false from state modules
    isLoggedIn: state => !!state.token
};

const mutations = {
    // this method will overwrite value from state.token with new value from token API
    setToken: (state, token) => {
        state.token = token;
    }
};

const actions = {
    login: () => {
        imgurAPI.login();
    },
    finalizeLogin: ({
        commit
    }, hash) => {
        const resultQuery = qs.parse(hash.replace('#', ''));
        commit('setToken', resultQuery.access_token);
        // Persisting token to localstorage
        window.localStorage.setItem('imgur_token', resultQuery.access_token);
        router.push('/');
    },
    logout: ({
        commit /*commit reference to mutations module*/
    }) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}