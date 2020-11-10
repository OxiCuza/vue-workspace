<template>
    <div>
        <ul v-for="video in videos" :key="video.etag">
            <VideoItem :video="video"></VideoItem>
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
    }
}
</script>

<style>

</style>