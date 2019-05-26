<template>
    <div>
        <h1> Organizations </h1>
        <!-- <OrgInfo v-for="org in orgs" :key="org.key" :org="org"></OrgInfo> -->
    </div>
</template>

<script>
    //import OrgInfo from "@/components/OrgInfo.vue";
    import axios from 'axios';

    export default {
        name: 'orgs',

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
                    this.orgs = response.data;
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container-orgs{
        display: grid;
        grid-template-columns: auto 10% 20%;
    }
</style>
