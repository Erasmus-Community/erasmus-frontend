<template>
	<div>
		<h1>Available Projects</h1>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'projects',
		
		data() {
			return {
				projects: [],
				error: false
			}
		},

		created() {
			this.fetchProjects()
		},

		methods: {
			fetchProjects () {
				axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
					this.projects = response.data;
				}).catch(error => {
					console.log(error)
				})
			}
		}
	}
</script>

<style scoped>

</style>
