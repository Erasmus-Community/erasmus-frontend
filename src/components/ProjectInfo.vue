<template>
</template>

<script>
    import axios from 'axios';

    export default {  
        props: ['proj'],
        name: 'projectInfo',

        data(){
            return {
                project: {},
                error: false
            }
        }, 

        created(){
            this.fetchProjectInfo();
        },

        methods: {
            fetchProjectInfo(){
                let id = this.$route.params.id;
                let url  = `http://127.0.0.1:8000/api/projects/${id}`;
                axios.get(url).then( response => {
                    this.project = response.data;
                }).catch( error => {
                    console.log(error);
                })
            }
        }
    
    }
</script>

<style scoped>

</style>
