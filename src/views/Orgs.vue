<template>
    <v-content class="ma-3">
        <h1 class="text-xs-center"> Organizations </h1>
        <!-- ADD FILTER HERE FOR THE TABLE LATER -->
        
        <div v-for="org in orgs" v-bind:key="org.id">
            <OrgInfo v-bind:org="org"/>
        </div>
    </v-content>
</template>

<script>
    import axios from 'axios';
    import OrgInfo from '../components/OrgInfo.vue';

    export default {
        name: 'orgs',
        components: {
            OrgInfo,
        },

        data() {
            return {
                orgs: [],
                headers: [
                    { text: 'Organization Name', value: 'name' },
                    { text: 'Country', value: 'country' },
                    { text: 'Description', value: 'description'}
                ],
                error: false             
            }
        },
        
        created(){
            this.fetchOrgs();
        },

        methods: {
            fetchOrgs() {
                axios.get('http://localhost:8000/api/orgs').then(response => {
                    this.orgs = response.data;
                    console.log(this.orgs)
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
