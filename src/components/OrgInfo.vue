<template>
    <v-content class="ma-4">
        
        <h1> Organisation Name </h1>
        <p>{{org.name}}</p>
    
        <p>{{org.description}}</p>
        <p>{{org.country}}</p>
        <p>{{org.erasmus}}</p>    
    </v-content>
</template>

<script>

    import axios from 'axios';
    export default {
        props: ['id'],
        name: 'OrgInfo',
    
        data(){
            return {
                    org: {},
                    error: false                
            }
        },

        created(){
          this.fetchOrgInfo();  
        },

        methods:{
            fetchOrgInfo(){
                let id = this.$route.params.id;
                let url  = `http://127.0.0.1:8000/api/orgs/${id}`;
                axios.get(url).then( response => {
                    this.org = response.data;
                }).catch( error => {
                    console.log(error);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>