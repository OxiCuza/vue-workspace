<template>
    <div>
        <ul v-for="video in videos" :key="video.etag">
            <VideoItem :video="video" @videoSelect="onVideoSelect"></VideoItem>
        </ul>
    </div>
</template>

<script>
import VideoItem from './VideoItem';

export default {
    name: 'VideoList',
    props: ['videos'],
    components: {
        VideoItem
    },
    methods: {
        onVideoSelect(video) {
            this.$emit('videoSelect', video)
        }
    }
}
</script>

<style>

</style>