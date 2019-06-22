<template>
	<v-content>
		<h1 class="text-xs-center">Available Projects</h1>
		<!-- ADD FILTER HERE FOR THE TABLE LATER -->
        <v-data-table
            :headers="headers"
            :items="projects"
            class="elevation-1"
        >
            <template v-slot:items="props">
                <td>{{props.item.name}}</td>
                <td>
                    <router-link :to="{name: 'projectInfo', params: { id: props.item.id}}">
                        <button>
                                More Info
                        </button>
                    </router-link>
                  </td>
            </template>
        </v-data-table>
    </v-content>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'projects',
		
		data() {
			return {
				projects: [],
				headers: [
                    { text: 'Project Name', value: 'name' },
                    { text: 'More Info', value: ''}
				],
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
