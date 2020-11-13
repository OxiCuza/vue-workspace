import qs from "qs";
import imgurAPI from '../../api/imgur';

const state = {
    // is initialize value from token login API
    token: null
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
    },
    logout: ({
        commit /*commit reference to mutations module*/
    }) => {
        commit('setToken', null);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}