<template>
    <div class="ui secondary pointing menu">
        <a href="#" class="item active">Image Storage</a>
        <div class="right menu">
            {{isLoggedIn}}
            <div v-if="isLoggedIn">
                <a href="#" class="ui item">Gallery</a>
                <a href="#" class="ui item">Worskpace</a>
                <a href="#" class="ui item">Log Out</a>
            </div>
            <div v-else>
                <a href="#" @click="login" class="ui item">Login</a>
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
        ...mapActions(['login'])
    }
}
</script>