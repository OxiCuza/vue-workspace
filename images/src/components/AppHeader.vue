<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="item active">Image Storage</router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" style="display: flex">
                <router-link to="/" class="ui item">Gallery</router-link>
                <router-link to="/upload" class="ui item">Upload</router-link>
                <a @click="logout" href="#" class="ui item">Log Out</a>
            </div>
            <div v-else>
                <a href="#" @click="login" class="ui item">Login</a>
                <!-- <div @click="login" class="ui item">Login</div> -->
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'AppHeader',
    computed: {
        ...mapGetters(['isLoggedIn']),
    },
    methods: {
        ...mapActions(['login', 'logout'])
    }
}
</script>