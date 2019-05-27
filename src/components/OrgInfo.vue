<template>
    <div>
        <h1> Test </h1>
        <div>{{org.name}}</div>
        <div>{{org.country}}</div>
        <div>{{org.erasmus}}</div>    
    </div>
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