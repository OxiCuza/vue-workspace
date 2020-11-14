import imgurApi from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const mutations = {
    setImages: (state, images) => {
        state.images = images
    }
};

const actions = {
    async fetchImages({
        // rootState object is the whole state modules in vuex
        rootState
    }) {
        // get value token from auth modules this is sintax es2015
        const {
            token
        } = rootState.auth;

        /* 
        instead using promise sintax this time using async await 
        for fetching data from url in imgur.js, because the case is not possible
        using promises sintax
        */
        const response = await imgurApi.fetchImages(token);
        console.log(response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}