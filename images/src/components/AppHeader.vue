<template>
    <div class="ui secondary pointing menu">
        <a href="#" class="item active">Image Storage</a>
        <div class="right menu">
            <div class="ui item">
                <a href="#" @click="login">Logout</a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'AppHeader',
    methods: {
        ...mapActions(['login'])
    }
}
</script>