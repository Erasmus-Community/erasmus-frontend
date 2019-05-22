<template>
    <div>
        <h1>All Projects</h1>
        <ProjectInfo v-for="proj in projects" :key="proj.key" :proj="proj"></ProjectInfo>
    </div>
</template>

<script>
    import ProjectInfo from '@/components/ProjectInfo.vue'
    import axios from 'axios'

    export default {
        name: 'projects',
        components: {
            ProjectInfo
        },

        data() {
            return {
                projects: [],
                error: false
            }
        },

        created() {
            this.fetchProjects()
        },

        watch: {
            // call again the method if the route changes
            '$route': 'fetchProjects'
        },

        methods: {
            fetchProjects () {
                axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
                    this.data.projects = response.data;
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>
