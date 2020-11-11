<template>
    <div class="video-detail">
        <iframe :src="videoURL" ></iframe>
        <h1>{{video.snippet.title}}</h1>
        <p>{{video.snippet.description}}</p>
    </div>
</template>

<script>
export default {
    name: 'VideoDetail',
    props: ['video'],
    computed: {
        videoURL() {
            const ID = this.video.id.videoId;
            return `https://www.youtube.com/embed/${ID}`;
        }
    }

}
</script>

<style>

</style>