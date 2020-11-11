<template>
	<div class="app">
		<div class="left-content">
			<SearchBar @termChange="onTermChange"></SearchBar>
			<VideoDetail v-if="videoSelected != null" :video="videoSelected"></VideoDetail>
		</div>
		<div class="right-content">
			<div v-if="videos.length != 0">
				<VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>	
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyDB5LHNUC7It_8qK-l5cno38NdWAPEzjQE';

export default {
	name: 'App',
	components: {
		SearchBar,
		VideoList,
		VideoDetail
	},
	data() {
		return {
			videos: [],
			videoSelected: null
		}
	},
	methods: {
		onTermChange(searchTerm) {
			axios.get('https://www.googleapis.com/youtube/v3/search', {
				params: {
				key: API_KEY,
				type: 'video',
				part: 'snippet',
				q: searchTerm
				}
			}).then(response => {
				this.videos = response.data.items;
			}).catch(err => console.log(err));
		},
		onVideoSelect(video) {
			this.videoSelected = video;
		}
	}
}
</script>
