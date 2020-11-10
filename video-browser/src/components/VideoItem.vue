<template>
    <li>
        <div class="video-img">
            <img :src="imgURL" alt="Gambar 1">
        </div>
        <div class="video-desc">
            <a href=""><h3>{{ titleVideo }}</h3></a>
        </div>
    </li>
</template>

<script>
export default {
    name: 'VideoItem',
    props: ['video'],
    computed: {
        imgURL() {
            return this.video.snippet.thumbnails.default.url;
        },
        titleVideo() {
            return this.video.snippet.title;
        }
    }

}
</script>

<style>

</style>