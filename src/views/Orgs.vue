<template>
    <div>
        <h1> Organizations </h1>
        
    </div>
</template>

<script>
    import { OrgsInfo } from "@/components/OrgsInfo";
    import axios from 'axios';

    export default {
        name: 'orgs',
        components: {
            OrgsInfo
        },

        data() {
            return {
                orgs: [],
                error: false                
            }
        },
        
        created(){
            this.fetchOrgs();
        },

        methods: {
            fetchOrgs() {
                axios.get('http://127.0.0.1:8000/api/orgs/').then(response => {
                    this.data.orgs = response.data;
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>