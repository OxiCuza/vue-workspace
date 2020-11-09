<template>
	<div>
		<h1>Hello World</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae eum, tenetur alias, minus iste id, veritatis placeat quidem nam odio. Voluptate pariatur mollitia tempora, molestiae veniam quam repellat quasi?</p>
		<SearchBar @termChange="onTermChange"></SearchBar>
		<VideoList :videos="videos"></VideoList>
	</div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyDB5LHNUC7It_8qK-l5cno38NdWAPEzjQE';

export default {
	name: 'App',
	components: {
		SearchBar,
		VideoList
	},
	data() {
		return {
			videos: []
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
		}
	}
}
</script>
